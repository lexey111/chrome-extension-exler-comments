"use strict";
(() => {
  // src/consts/storage-keys.consts.ts
  var onOffStorageKey = "activeState";
  var statStorageKey = "stat";
  var allTimeStatStorageKey = "all_stat";
  var hideModeStorageKey = "hide_mode";
  var rulesStorageKey = "rules";

  // src/content-stat.ts
  var storeStat = async (applied, totalCommentsProcessed) => {
    await chrome.storage.sync.set({ [statStorageKey]: { processed: applied, total: totalCommentsProcessed } });
    const currentTotalStat = await chrome.storage.sync.get([allTimeStatStorageKey]);
    const newProcessed = (currentTotalStat?.[allTimeStatStorageKey]?.processed ?? 0) + applied;
    const newTotal = (currentTotalStat?.[allTimeStatStorageKey]?.total ?? 0) + totalCommentsProcessed;
    await chrome.storage.sync.set({ [allTimeStatStorageKey]: { processed: newProcessed, total: newTotal } });
  };

  // src/content-reset.ts
  var resetPage = async (comments) => {
    if (!comments || comments.length === 0) {
      return;
    }
    comments.forEach((comment) => {
      comment.classList.remove("hide-comment");
      comment.classList.remove("hide-comment-blur");
      comment.classList.remove("hide-comment-overlay");
      comment.classList.remove("hide-comment-collapse");
      const target = comment.querySelector(".hide-comment-content");
      if (target) {
        target.remove();
      }
    });
  };

  // src/content-fragments.ts
  var traverseToClass = (el, className) => {
    let traversedEl = el;
    while (traversedEl && !traversedEl.classList.contains(className)) {
      traversedEl = traversedEl.parentElement;
    }
    return traversedEl;
  };
  var handleDismiss = (e) => {
    e.preventDefault();
    if (!e?.target) {
      return false;
    }
    const target = e.target;
    const commentExtensionContent = traverseToClass(target, "hide-comment-content");
    const commentBody = traverseToClass(target, "hide-comment");
    if (!commentBody || !commentExtensionContent) {
      return false;
    }
    const classNames = Array.from(commentBody.classList).filter((name) => name.startsWith("hide-comment"));
    classNames.forEach((name) => {
      commentBody.classList.remove(name);
    });
    commentExtensionContent.remove();
  };
  var getFragmentForBlur = () => {
    const div = document.createElement("div");
    div.classList.add("hide-comment-content");
    div.classList.add("hide-comment-content-default");
    const handler = document.createElement("span");
    handler.classList.add("hide-comment-content-handler");
    handler.innerHTML = '<i class="gg-eye"></i>';
    handler.onclick = (e) => handleDismiss(e);
    div.append(handler);
    return div;
  };
  var getFragmentForOverlay = (params) => {
    const div = document.createElement("div");
    div.classList.add("hide-comment-content");
    div.classList.add("hide-comment-content-overlay");
    const handler = document.createElement("span");
    handler.classList.add("hide-comment-content-handler");
    handler.innerHTML = '<i class="gg-eye"></i>';
    handler.onclick = (e) => handleDismiss(e);
    div.append(handler);
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("hide-comment-overlay-content");
    contentDiv.innerHTML = `<div class="hide-comment-content-brief">
            <span class="hide-comment-content-user">${params.user}${params.toUser ? " \u2192 " + params.toUser : ""}</span>
            ${params.dateStr ? '<span class="hide-comment-content-date">' + params.dateStr + "</span>" : ""}
            <span class="hide-comment-content-minus">-${params.minus}</span>|
            <span class="hide-comment-content-plus">+${params.plus}</span>
        </div>`;
    div.append(contentDiv);
    return div;
  };
  var getFragmentForCollapse = (params) => {
    const div = document.createElement("div");
    div.classList.add("hide-comment-content");
    div.classList.add("hide-comment-content-collapse");
    const briefDiv = document.createElement("div");
    briefDiv.classList.add("hide-comment-content-brief");
    briefDiv.innerHTML = `<span class="hide-comment-content-user">${params.user}${params.toUser ? " \u2192 " + params.toUser : ""}</span>
            ${params.dateStr ? '<span class="hide-comment-content-date">' + params.dateStr + "</span>" : ""}
            <span class="hide-comment-content-minus">-${params.minus}</span>|
            <span class="hide-comment-content-plus">+${params.plus}</span>`;
    const handler = document.createElement("span");
    handler.classList.add("hide-comment-content-handler");
    handler.innerHTML = '<i class="gg-eye"></i>';
    handler.onclick = (e) => handleDismiss(e);
    briefDiv.prepend(handler);
    div.append(briefDiv);
    return div;
  };
  var getHideFragment = (mode, modeParams) => {
    if (mode === "overlay") {
      return getFragmentForOverlay(modeParams);
    }
    if (mode === "collapse") {
      return getFragmentForCollapse(modeParams);
    }
    return getFragmentForBlur();
  };

  // src/content-process.ts
  var processPage = async (settings2) => {
    const container = document.querySelector(".comments-list");
    if (!container) {
      return;
    }
    const comments = container.querySelectorAll(".comments-item");
    if (!comments || comments.length === 0) {
      return;
    }
    await resetPage(comments);
    if (!settings2.on) {
      return;
    }
    if (settings2.rules.length === 0) {
      return;
    }
    const globalHideNegative = settings2.rules.some((r) => r.user === "*");
    let counter = 0;
    const classHideName = settings2.hideMode === "default" ? "hide-comment-blur" : settings2.hideMode === "overlay" ? "hide-comment-overlay" : settings2.hideMode === "collapse" ? "hide-comment-collapse" : "";
    comments.forEach((comment) => {
      const from = (comment.querySelector("a.profile-link:not(.reply-to)")?.textContent || "").trim();
      const to = (comment.querySelector("a.reply-to")?.textContent || "").trim();
      const plusStr = (comment.querySelector("span.plus-value")?.textContent || "").trim();
      const minusStr = (comment.querySelector("span.minus-value")?.textContent || "").trim();
      const dateStr = (comment.querySelector(".blog-item-date")?.textContent || "").trim();
      const plus = parseInt(plusStr, 10);
      const minus = parseInt(minusStr, 10);
      const isNegativeBalance = plus - minus < 0;
      let shouldProcess = globalHideNegative && isNegativeBalance;
      if (!shouldProcess) {
        const userInRules = settings2.rules.find((r) => r.user === from || r.user === to);
        if (userInRules) {
          if (from === userInRules.user && userInRules.hideFrom || to === userInRules.user && userInRules.hideTo) {
            shouldProcess = !userInRules.onlyNegativeBalance || userInRules.onlyNegativeBalance && isNegativeBalance;
          }
        }
      }
      if (shouldProcess) {
        comment.classList.add("hide-comment");
        comment.classList.add(classHideName);
        comment.appendChild(getHideFragment(settings2.hideMode, {
          user: from,
          toUser: to,
          plus,
          minus,
          dateStr
        }));
        counter++;
      }
    });
    await storeStat(counter, comments.length);
  };

  // src/content-script.ts
  var settings = {
    on: false,
    hideMode: "default",
    rules: []
  };
  async function init() {
    const getOnOffState = async () => {
      const storedState = await chrome.storage.sync.get([onOffStorageKey]);
      settings.on = storedState[onOffStorageKey] !== "off";
    };
    const getRuleState = async () => {
      const storedState = await chrome.storage.sync.get([rulesStorageKey]);
      let actual = [];
      try {
        actual = JSON.parse(storedState[rulesStorageKey]);
      } catch (e) {
      }
      if (actual) {
        settings.rules = actual;
      }
    };
    const getHideModeState = async () => {
      const storedState = await chrome.storage.sync.get([hideModeStorageKey]);
      let actual = "default";
      if (storedState[hideModeStorageKey] === "collapse") {
        actual = "collapse";
      }
      if (storedState[hideModeStorageKey] === "overlay") {
        actual = "overlay";
      }
      settings.hideMode = actual;
    };
    const updateState = async () => {
      await getOnOffState();
      await getRuleState();
      await getHideModeState();
      await processPage(settings);
    };
    const handleStateChanges = (changes, areaName) => {
      let needProcess = false;
      if (areaName === "sync" && (changes?.[onOffStorageKey]?.newValue || changes?.[hideModeStorageKey]?.newValue || changes?.[rulesStorageKey]?.newValue)) {
        needProcess = true;
      }
      if (needProcess) {
        void updateState();
      }
    };
    chrome.storage.onChanged.addListener(handleStateChanges);
    void updateState();
  }
  void init();
})();

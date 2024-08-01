"use strict";
(() => {
  // src/consts/storage-keys.consts.ts
  var onOffStorageKey = "activeState";
  var statStorageKey = "stat";
  var allTimeStatStorageKey = "all_stat";
  var hideModeStorageKey = "hide_mode";
  var rulesStorageKey = "rules";

  // src/content-stat.ts
  console.log("> Stat Loaded!");
  var storeStat = async (hided, total) => {
    await chrome.storage.sync.set({ [statStorageKey]: { processed: hided, total } });
    const totalStat = await chrome.storage.sync.get([allTimeStatStorageKey]);
    console.log("totalStat", totalStat);
    const newProcessed = (totalStat?.[allTimeStatStorageKey]?.processed ?? 0) + hided;
    const newTotal = (totalStat?.[allTimeStatStorageKey]?.total ?? 0) + total;
    await chrome.storage.sync.set({ [allTimeStatStorageKey]: { processed: newProcessed, total: newTotal } });
    console.log("new totalStat", { [allTimeStatStorageKey]: { processed: newProcessed, total: newTotal } });
  };

  // src/content-reset.ts
  console.log("> Rest Loaded!");
  var resetPage = async (comments) => {
    console.log("Reset page...");
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
        console.log("remove handler");
        target.remove();
      }
    });
  };

  // src/content-process.ts
  console.log("> Processing Loaded!");
  function prepareBlurFragment() {
    const div = document.createElement("div");
    div.classList.add("hide-comment-content");
    div.classList.add("hide-comment-content-default");
    div.innerHTML = `<span class="hide-comment-content-handler" onClick={handleDismiss}>
                <i class="gg-eye"></i>
            </span>`;
    return div;
  }
  var processPage = async (settings2) => {
    console.log("Processing page...");
    const container = document.querySelector(".comments-list");
    if (!container) {
      return;
    }
    const comments = container.querySelectorAll(".comments-item");
    if (!comments || comments.length === 0) {
      return;
    }
    resetPage(comments);
    let counter = 0;
    const classHideName = settings2.hideMode === "default" ? "hide-comment-blur" : settings2.hideMode === "overlay" ? "hide-comment-overlay" : settings2.hideMode === "collapse" ? "hide-comment-collapse" : "";
    comments.forEach((comment) => {
      const from = (comment.querySelector("a.profile-link:not(.reply-to)")?.textContent || "").trim();
      const to = (comment.querySelector("a.reply-to")?.textContent || "").trim();
      const plusStr = (comment.querySelector("span.plus-value")?.textContent || "").trim();
      const minusStr = (comment.querySelector("span.minus-value")?.textContent || "").trim();
      const plus = parseInt(plusStr, 10);
      const minus = parseInt(minusStr, 10);
      if (from === "Alex Exler" || to === "Alex Exler") {
        console.log("APPLY 1", classHideName);
        console.log("APPLY 2", comment);
        console.log(`  ${from} -> ${to}`);
        console.log(` -${minus} | +${plus}`);
        comment.classList.add("hide-comment");
        comment.classList.add(classHideName);
        comment.appendChild(prepareBlurFragment());
        console.log("append!");
        counter++;
      }
    });
    await storeStat(counter, comments.length);
  };

  // src/content-script.ts
  console.log("> Loaded!");
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
      console.log("Update state...");
      await getOnOffState();
      await getRuleState();
      await getHideModeState();
      await processPage(settings);
    };
    const handleStateChanges = (changes, areaName) => {
      let needProcess = false;
      if (areaName === "sync" && changes?.[onOffStorageKey]?.newValue) {
        needProcess = true;
      }
      if (areaName === "sync" && changes?.[rulesStorageKey]?.newValue) {
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

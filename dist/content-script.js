"use strict";
(() => {
  // src/consts/storage-keys.consts.ts
  var onOffStorageKey = "activeState";
  var statStorageKey = "stat";
  var allTimeStatStorageKey = "all_stat";
  var hideModeStorageKey = "hide_mode";
  var rulesStorageKey = "rules";

  // src/content-script.ts
  console.log("> Loaded!");
  var state = {
    on: false,
    hideMode: "default",
    rules: []
  };
  async function init() {
    const getOnOffState = async () => {
      const storedState = await chrome.storage.sync.get([onOffStorageKey]);
      state.on = storedState[onOffStorageKey] !== "off";
    };
    const getRuleState = async () => {
      const storedState = await chrome.storage.sync.get([rulesStorageKey]);
      let actual = [];
      try {
        actual = JSON.parse(storedState[rulesStorageKey]);
      } catch (e) {
        console.error(e);
      }
      if (actual) {
        state.rules = actual;
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
      state.hideMode = actual;
    };
    const updateState = async () => {
      console.log("Update state...");
      await getOnOffState();
      await getRuleState();
      await getHideModeState();
      await processPage();
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
  async function processPage() {
    console.log("Processing page...");
    const container = document.querySelector(".comments-list");
    if (!container) {
      return;
    }
    const comments = container.querySelectorAll(".comments-item");
    if (!comments || comments.length === 0) {
      return;
    }
    let counter = 0;
    comments.forEach((comment) => {
      const from = (comment.querySelector("a.profile-link:not(.reply-to)")?.textContent || "").trim();
      const to = (comment.querySelector("a.reply-to")?.textContent || "").trim();
      console.log(`  ${from} -> ${to}`);
      if (from === "BorNeo" || to === "BorNeo") {
        comment.classList.add("hide-comment");
        counter++;
      }
    });
    console.log("counter", counter);
    await chrome.storage.sync.set({ [statStorageKey]: { processed: counter, total: comments.length } });
    const totalStat = await chrome.storage.sync.get([allTimeStatStorageKey]);
    console.log("totalStat", totalStat);
    const newProcessed = (totalStat?.[allTimeStatStorageKey]?.processed ?? 0) + counter;
    const newTotal = (totalStat?.[allTimeStatStorageKey]?.total ?? 0) + comments.length;
    await chrome.storage.sync.set({ [allTimeStatStorageKey]: { processed: newProcessed, total: newTotal } });
    console.log("new totalStat", { [allTimeStatStorageKey]: { processed: newProcessed, total: newTotal } });
  }
  void init();
})();

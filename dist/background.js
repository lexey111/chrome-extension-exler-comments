"use strict";
(() => {
  // src/consts/storage-keys.consts.ts
  var onOffStorageKey = "activeState";
  var statStorageKey = "stat";

  // src/background.ts
  var isOn = false;
  var processed = 0;
  async function init() {
    const getOnOffState = async () => {
      const storedState = await chrome.storage.sync.get([onOffStorageKey]);
      isOn = storedState[onOffStorageKey] !== "off";
    };
    const getStat = async () => {
      const storedStat = await chrome.storage.sync.get([statStorageKey]);
      processed = storedStat?.[statStorageKey]?.processed ?? 0;
    };
    const updateState = async () => {
      await getOnOffState();
      await getStat();
      if (!isOn) {
        await chrome.action.setBadgeText({
          text: ""
        });
      } else {
        await chrome.action.setBadgeText({
          text: processed.toString()
        });
      }
    };
    const handleStateChanges = (changes, areaName) => {
      let needProcess = false;
      if (areaName === "sync" && (changes?.[onOffStorageKey]?.newValue || changes?.[statStorageKey]?.newValue)) {
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

// src/stores/UtilStore.js
import { defineStore } from "pinia";

export const useUtilStore = defineStore("util", {
  state: () => ({
    actionString: "Initial Value",
  }),
  actions: {
    setActionString(newString) {
      this.actionString = newString;
    },
  },
});

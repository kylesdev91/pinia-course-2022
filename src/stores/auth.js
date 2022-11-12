import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: "Kyle",
      email: "kh2kt@yahoo.com",
    },
  }),
});

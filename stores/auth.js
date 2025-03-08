import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: localStorage.getItem("AUTH_TOKEN") ? true : false,
    token: localStorage.getItem("AUTH_TOKEN") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
  }),

  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem("AUTH_TOKEN", token);
    },

    setRefreshToken(refreshToken) {
      this.refreshToken = refreshToken;
      localStorage.setItem("refreshToken", refreshToken);
    },

    async logout() {
      try {
        const url = useRuntimeConfig().public.apiBaseUrl + "auth/logout";
        const method = "POST";

        const response = await $fetch(url, {
          method,
        });

        if (response === true) {
          this.isAuthenticated = false;
          this.user = null;
          this.token = null;
          this.refreshToken = null;

          localStorage.removeItem("AUTH_STATUS");
          localStorage.removeItem("AUTH_TOKEN");
          localStorage.removeItem("refreshToken");

          return navigateTo("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
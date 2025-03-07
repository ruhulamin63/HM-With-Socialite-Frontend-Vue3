import { ofetch } from "ofetch";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();

  async function refreshToken() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        throw new Error("No refresh token found.");
      }

      const url = useRuntimeConfig().public.apiBaseUrl + "auth/refresh-token";

      const response = await $fetch(url, {
        method: "POST",
        body: { refresh_token: refreshToken },
      });

      authStore.setToken(response.token);
      localStorage.setItem("AUTH_TOKEN", response.token);

      if (response.refresh_token) {
        authStore.setRefreshToken(response.refresh_token);
        localStorage.setItem("refreshToken", response.refresh_token);
      }

      return response.token;
    } catch (error) {
      console.error("Failed to refresh token:", error);

      authStore.isAuthenticated = false;
      authStore.user = null;
      authStore.token = null;
      authStore.refreshToken = null;

      localStorage.removeItem("AUTH_STATUS");
      localStorage.removeItem("AUTH_TOKEN");
      localStorage.removeItem("refreshToken");

      return navigateTo("/login");
    }
  }

  globalThis.$fetch = ofetch.create({
    async onRequest({ options }) {
      if (authStore.isAuthenticated && authStore.token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${authStore.token}`,
          Accept: "application/json",
        };
      }
    },

    async onResponseError({ response, options }) {
      if (response.status === 401) {
        if (!options._retry) {
          options._retry = true;

          const newToken = await refreshToken();

          if (newToken) {
            options.headers = {
              ...options.headers,
              Authorization: `Bearer ${newToken}`,
              Accept: "application/json",
            };

            return globalThis.$fetch(response.url, options);
          }
        }
      }

      if (response.status === 422 && response._data?.message) {
        useNuxtApp().$showAlert({
          title: "Warning",
          text: response._data.message,
          icon: "warning",
        });
      }

      if (response.status === 400) {
        useNuxtApp().$showAlert({
          title: "Warning",
          text: response._data?.message || "Invalid request. Please check your input.",
          icon: "warning",
        });
      }

      if (response.status >= 500) {
        useNuxtApp().$showAlert({
          title: "Error",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    },
  });
});
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(localStorage.getItem('access_token') || null);
  const refreshToken = ref(localStorage.getItem('refresh_token') || null);

  const setTokens = (newAccessToken, newRefreshToken) => {
    accessToken.value = newAccessToken;
    refreshToken.value = newRefreshToken;

    localStorage.setItem('access_token', newAccessToken);
    localStorage.setItem('refresh_token', newRefreshToken);
  };

  const clearTokens = () => {
    accessToken.value = null;
    refreshToken.value = null;

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  const isAuthenticated = () => {
    return !!accessToken.value;
  };

  return {
    accessToken,
    refreshToken,
    setTokens,
    clearTokens,
    isAuthenticated,
  };
});
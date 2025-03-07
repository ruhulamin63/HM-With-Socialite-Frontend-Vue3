<template>
  <div>
    <p>Redirecting...</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();

const handleAuthRedirect = () => {
    const token = route.query.token;
    const refreshToken = route.query.refresh_token;

    if (token && refreshToken) {
        localStorage.setItem("AUTH_TOKEN", token);
        localStorage.setItem("refreshToken", refreshToken);

        authStore.setToken(token);
        authStore.setRefreshToken(refreshToken);
        authStore.isAuthenticated = true;

        router.push("/hotels");
    }
};

onMounted(() => {
  handleAuthRedirect();
});
</script>

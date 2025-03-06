<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
    <AuthModal
      v-if="showAuthModal"
      @close="closeAuthModal"
      :isLogin="isLoginModal"
    />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import AuthModal from './components/AuthModal.vue';

export default {
  components: { AuthModal },
  setup() {
    const router = useRouter();
    const showAuthModal = ref(false);
    const isLoginModal = ref(true);

    watch(
      () => router.currentRoute.value.path,
      (path) => {
        if (path === '/login' || path === '/register') {
          showAuthModal.value = true;
          isLoginModal.value = path === '/login';
        } else {
          showAuthModal.value = false;
        }
      },
      { immediate: true }
    );

    const closeAuthModal = () => {
      showAuthModal.value = false;
      router.push('/');
    };

    return {
      showAuthModal,
      isLoginModal,
      closeAuthModal,
    };
  },
};
</script>
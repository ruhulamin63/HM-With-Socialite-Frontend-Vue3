<template>
  <div>Loading...</div>
</template>

<script>
import { useAuthStore } from '../stores/auth';

export default {
  mounted() {
    const token = this.$route.query.token;
    if (token) {
      const auth = useAuthStore();
      auth.setToken(token);
      this.$router.push('/manage-hotels');
    } else {
      this.$router.push('/login');
    }
  },
};
</script>
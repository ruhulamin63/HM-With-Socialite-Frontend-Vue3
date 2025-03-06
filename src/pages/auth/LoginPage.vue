<template>
    <div>
      <h1>Login Page</h1>
      <AuthModal :isLogin="true" @close="redirectToHome" />
    </div>
  </template>
  
  <script>
  import AuthModal from '../../components/AuthModal.vue';
  
  export default {
    components: { AuthModal },
    methods: {
      redirectToHome() {
        this.$router.push('/');
      },
    },
  };
  </script>
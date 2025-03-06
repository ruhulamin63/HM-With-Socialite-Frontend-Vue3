<template>
    <div>
      <h1>Register Page</h1>
      <AuthModal :isLogin="false" @close="redirectToHome" />
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
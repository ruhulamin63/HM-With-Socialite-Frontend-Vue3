<template>
    <div class="home">
      <h1>Welcome to the Hotel Management System</h1>
      <p>Manage your properties with ease.</p>
  
      <div class="navigation-buttons">
        <button @click="navigateToManageHotels">Manage Hotels</button>
        <button @click="openAuthModal('login')">Login</button>
        <button @click="openAuthModal('register')">Register</button>
      </div>
  
      <AuthModal
        v-if="showAuthModal"
        :isLogin="isLoginModal"
        @close="closeAuthModal"
      />
    </div>
  </template>
  
  <script>
  import AuthModal from '@/components/AuthModal.vue';
  
  export default {
    components: {
      AuthModal,
    },
    data() {
      return {
        showAuthModal: false,
        isLoginModal: true,
      };
    },
    methods: {
      navigateToManageHotels() {
        this.$router.push('/manage-hotels');
      },
  
      openAuthModal(mode) {
        this.isLoginModal = mode === 'login';
        this.showAuthModal = true;
      },
  
      closeAuthModal() {
        this.showAuthModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
  }
  
  .navigation-buttons {
    margin-top: 30px;
  }
  
  button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #42b983;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #369f6e;
  }
  </style>
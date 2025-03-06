<template>
    <div class="auth-modal">
      <div class="modal-content">
        <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
        <form @submit.prevent="submitForm">
          <div v-if="!isLogin">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="form.password" required />
          </div>
          <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
        </form>
        <button @click="toggleMode">
          {{ isLogin ? 'Need an account? Register' : 'Already have an account? Login' }}
        </button>

        <button @click="loginWithGoogle">
            <img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png">
        </button>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth';
  import api from '@/utils/axios';
  
  export default {
    setup(props, { emit }) {
      const isLogin = ref(true);
      const form = ref({
        name: '',
        email: '',
        password: '',
      });
      
      const router = useRouter();
      const baseUrl = 'http://localhost:8000/api/v1'
      
      const loginWithGoogle = () => {
        window.location.href = 'http://localhost:8000/auth/google';
      };
      
      const submitForm = async () => {
        try {
          const url = isLogin.value ? `${baseUrl}/auth/login` : `${baseUrl}/auth/register`;          
          const response = await api.post(url, form.value);

          console.log('Response:', response);
  
          const authStore = useAuthStore();
          authStore.setTokens(response.data.access_token, response.data.refresh_token);
  
          emit('close');
          router.push('/');
        } catch (error) {
          console.error('Error:', error.response.data);
        }
      };
  
      const toggleMode = () => {
        isLogin.value = !isLogin.value;
      };
  
      const closeModal = () => {
        emit('close');
      };
  
      return {
        isLogin,
        form,
        submitForm,
        toggleMode,
        closeModal,
        loginWithGoogle,
      };
    },
  };
  </script>
  
  <style scoped>
  .auth-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
  }
  
  button {
    margin: 5px;
  }
  </style>
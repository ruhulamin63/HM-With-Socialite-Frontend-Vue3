<template>
    <div>
      <h1>Edit Hotel</h1>
      <form @submit.prevent="submitForm">
        <input v-model="form.name" placeholder="Name" required />
        <input v-model="form.address" placeholder="Address" required />
        <input v-model="form.cost_per_night" placeholder="Cost per night" required />
        <input v-model="form.available_rooms" placeholder="Available rooms" required />
        <input v-model="form.image_url" placeholder="Image URL" required />
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios, params }) {
      const response = await $axios.get(`/api/hotels/${params.id}`);
      return {
        form: response.data,
      };
    },
    methods: {
      async submitForm() {
        await this.$axios.put(`/api/hotels/${this.$route.params.id}`, this.form);
        this.$router.push('/manage-hotels');
      },
    },
  };
  </script>
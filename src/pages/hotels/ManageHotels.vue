<template>
    <div>
      <h1>Manage Hotels</h1>
      <button @click="createHotel">Create Hotel</button>
      <div v-for="hotel in hotels" :key="hotel.id" @click="navigateToHotel(hotel.id)">
        <h2>{{ hotel.name }}</h2>
        <p>{{ hotel.address }}</p>
        <p>Cost per night: ${{ hotel.cost_per_night }}</p>
        <p>Available rooms: {{ hotel.available_rooms }}</p>
        <img :src="hotel.image_url" alt="Hotel Image" />
        <p>Rating: {{ hotel.average_rating }}</p>
        <button @click.stop="editHotel(hotel.id)">Edit</button>
        <button @click.stop="deleteHotel(hotel.id)">Delete</button>
      </div>
      <div>
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios }) {
      const response = await $axios.get('/api/hotels');
      return {
        hotels: response.data.data,
        currentPage: response.data.current_page,
        totalPages: response.data.last_page,
      };
    },
    methods: {
      createHotel() {
        this.$router.push('/create-hotel');
      },
      navigateToHotel(id) {
        this.$router.push(`/property/${id}`);
      },
      editHotel(id) {
        this.$router.push(`/edit-hotel/${id}`);
      },
      async deleteHotel(id) {
        if (confirm('Are you sure you want to delete this hotel?')) {
          await this.$axios.delete(`/api/hotels/${id}`);
          this.$nuxt.refresh(); // Refresh the page to update the list
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.$router.push(`/manage-hotels?page=${this.currentPage - 1}`);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.$router.push(`/manage-hotels?page=${this.currentPage + 1}`);
        }
      },
    },
  };
  </script>
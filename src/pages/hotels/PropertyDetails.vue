<template>
    <div>
      <h1>{{ hotel.name }}</h1>
      <p>{{ hotel.address }}</p>
      <p>Cost per night: ${{ hotel.cost_per_night }}</p>
      <p>Available rooms: {{ hotel.available_rooms }}</p>
      <img :src="hotel.image_url" alt="Hotel Image" />
      <p>Rating: {{ hotel.average_rating }}</p>
      <ShareNetwork
        network="facebook"
        :url="currentUrl"
        title="Check out this hotel!"
      >
        Share on Facebook
      </ShareNetwork>
      <ShareNetwork
        network="twitter"
        :url="currentUrl"
        title="Check out this hotel!"
      >
        Share on Twitter
      </ShareNetwork>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios, params }) {
      const response = await $axios.get(`/api/hotels/${params.id}`);
      return {
        hotel: response.data,
        currentUrl: window.location.href,
      };
    },
  };
  </script>
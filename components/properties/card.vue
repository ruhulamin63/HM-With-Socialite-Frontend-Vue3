<template>
    <div class="property-card">
      <img :src="property.image_url" :alt="property.name" class="property-image" />
      <div class="property-details">
        <h3>{{ property.name }}</h3>
        <p>{{ property.address }}</p>
        <p>Cost per night: {{ property.cost_per_night }} tk</p>
        <p>Available rooms: {{ property.available_rooms }}</p>
        <p>Rating: {{ property.rating }}/5</p>
        <button class="share-button" @click="shareProperty(property.id)">Share</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    property: {
      type: Object,
      required: true,
    },
  });
  
  const shareProperty = (propertyId) => {
    const propertyUrl = `http://localhost:3000/properties/details-${propertyId}`;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`;
    window.open(url, '_blank');
  };
  </script>
  
  <style scoped>
  .property-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    width: 300px;
    margin: 10px;
  }
  
  .property-card:hover {
    transform: scale(1.05);
  }
  
  .property-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .property-details {
    padding: 15px;
  }
  
  .property-details h3 {
    margin: 0 0 10px;
    font-size: 1.5rem;
  }
  
  .property-details p {
    margin: 5px 0;
    font-size: 1rem;
    color: #555;
  }
  
  .share-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .share-button:hover {
    background-color: #0056b3;
  }
  </style>
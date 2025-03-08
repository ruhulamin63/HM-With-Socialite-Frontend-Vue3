<template>
    <div class="home-page">
      <Header />

      <div class="property-grid">
        <PropertyCard v-for="property in paginatedProperties" :key="property.id" :property="property" />
      </div>
      <div class="pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
        layout: "auth",
    });

  import { ref, computed } from "vue";
  import PropertyCard from "~/components/properties/card.vue";
  import Header from "~/components/global/Header.vue";
  
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiBaseUrl;

  const properties = ref([]);
  const getData = async () => {
    try {
        const url = apiUrl + "all-hotels";
        const res = await $fetch(url);
        properties.value = res?.data;
    } catch (e) {
        console.log(e);
    }
  };

  getData();
  
  const itemsPerPage = 8;
  const currentPage = ref(1);
  
  const totalPages = computed(() => Math.ceil(properties.value.length / itemsPerPage));
  
  const paginatedProperties = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return properties.value.slice(start, end);
  });
  </script>
  
  <style scoped>
  .home-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .property-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
  }
  
  .pagination button {
    padding: 10px 15px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .pagination button.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
  
  .pagination button:hover {
    background-color: #ddd;
  }
  </style>
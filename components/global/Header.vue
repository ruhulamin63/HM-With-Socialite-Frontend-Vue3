<template>
    <header class="header">
      <div class="container">
        <NuxtLink to="/" class="logo">Property Finder</NuxtLink>
        <nav class="nav">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/login" class="nav-link">Login</NuxtLink>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  // No script logic needed for now
  </script>
  
  <style scoped>
  .header {
    background-color: #007bff;
    color: white;
    padding: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  
  .nav {
    display: flex;
    gap: 20px;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  </style>
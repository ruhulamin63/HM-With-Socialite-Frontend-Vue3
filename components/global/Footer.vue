<template>
  <!-- sa-app__footer -->
  <div class="sa-app__footer d-flex justify-content-between align-items-center flex-wrap p-3 fixed-bottom">
    <div class="m-auto text-center footer-text-color">
      <!-- copyright -->
      Copyright © {{ new Date().getFullYear() }}
    </div>
    <div class="footer-text-color">
      Design by
      <a href="http://139.59.2.247:9000" target="_blank" rel="noopener noreferrer">NSL</a>
    </div>
  </div>
  <!-- sa-app__footer / end -->
</template>

<script setup lang="js"></script>
<style scoped>
.sa-app__footer {
  background-color: #f8f9fa; /* Light background for better visibility */
  border-top: 1px solid #ddd; /* Subtle border at the top */
  z-index: 10; /* Ensure it stays above other content */
}
.footer-text-color {
  color: #6c757d; /* Muted text color */
}
</style>
<template>
  <!-- sa-app__sidebar -->
  <div class="sa-app__sidebar">
    <div class="sa-sidebar">
      <div class="sa-sidebar__header">

      </div>
      <div class="sa-sidebar__body" data-simplebar="">
        <ul class="sa-nav sa-nav--sidebar" data-sa-collapse="">
          <li class="sa-nav__section">
            <div class="sa-nav__section-title"><span>Application</span></div>
            <ul class="sa-nav__menu sa-nav__menu--root">

              <!-- Hotel Item -->
              <li class="sa-nav__menu-item sa-nav__menu-item--has-icon" :class="{ 'active': isActive('/hotels') }">
                <NuxtLink to="/hotels" class="sa-nav__link">
                  <span class="sa-nav__icon"><i class="fas fa-home"></i></span>
                  <span class="sa-nav__title">Hotel</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="sa-app__sidebar-shadow"></div>
    <div class="sa-app__sidebar-backdrop" data-sa-close-sidebar=""></div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isSubMenuActive = computed(() => {
  const currentPathSegments = route.path.split('/').filter(segment => segment);
  return currentPathSegments.length > 1;
});

const isActive = (path) => {
  return route.path.startsWith(path);
};
</script>
<style>

</style>
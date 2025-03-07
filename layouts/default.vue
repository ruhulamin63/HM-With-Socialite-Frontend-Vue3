<template>
    <div class="sa-app sa-app--desktop-sidebar-shown sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed">
            <Sidebar />

        <div class="sa-app__content" >
                <Navbar />

                <main>
                    <slot />
                </main>

            <Footer />
        </div>

        <div class="sa-app__toasts toast-container bottom-0 end-0"></div>
    </div>
</template>

<script setup lang="js">
import Sidebar from '~/components/global/Sidebar.vue';
import Navbar from '~/components/global/Navbar.vue';
import Footer from '~/components/global/Footer.vue';
</script>
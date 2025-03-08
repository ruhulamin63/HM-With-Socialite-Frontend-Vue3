<template>
    <Header />
    
    <div class="min-h-100 p-0 p-sm-6 d-flex align-items-stretch">
        <div class="card w-25x flex-grow-1 flex-sm-grow-0 m-sm-auto">
            <!-- Card Body -->
            <div class="card-body p-sm-5 m-sm-3 flex-grow-0">
                <h1 class="mb-0 fs-3 text-center">
                    <span class="text-primary fw-bold text-color-teal">Hotel Management</span>
                </h1>
            </div>

            <!-- Social Login Buttons -->
            <div class="card-body p-sm-5 m-sm-3 d-flex justify-content-center align-items-center">
                <div class="w-100 text-center">
                    <button @click="loginWithGoogle" class="btn btn-light border-0 p-0">
                        <img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
                            alt="Sign in with Google" class="img-fluid">
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="js">
  import Header from "~/components/global/Header.vue";

useHead({
    title: "Login",
    meta: [
        {
            name: "description",
            content: "Login page",
        },
    ],
});

definePageMeta({
    layout: "auth",
});

const loginWithGoogle = async () => {
    window.location.href = 'http://localhost:8000/auth/google';
};
</script>
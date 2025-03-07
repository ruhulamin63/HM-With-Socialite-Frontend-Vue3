<template>
    <div>
        <!-- sa-app__body -->
        <div id="top" class="sa-app__body">
            <div class="sa-error">
                <div class="sa-error__background-text">Oops! Error {{error.statusCode}}</div>
                <div class="sa-error__content">
                    <h1 class="sa-error__title">Oops! {{error.message}}</h1>
                    <p class="sa-error__text">
                        We can&#x27;t seem to find the page you&#x27;re looking for.
                        <br />
                        Try to use the search.
                    </p>
                    <form class="sa-error__controls">
                        <input type="text" placeholder="Search..." class="form-control form-control--search-filled sa-error__input" />
                        <button type="submit" class="btn btn-primary">Search</button>
                    </form>
                    <p class="sa-error__text">Or go to the home page to start over.</p>
                    <button class="btn btn-secondary btn-sm" @click="handleError">Go Home...</button>
                </div>
            </div>
        </div>
        <!-- sa-app__body / end -->
    </div>
</template>

<script setup lang="js">
defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
    .error-page{
        margin: 20% auto 0 !important;
    }
</style>
<template>
    <div class="property-details">
        <img :src="property.image_url" :alt="property.name" class="property-image" />
        <div class="property-info">
            <h1>{{ property.name }}</h1>
            <p><strong>Address:</strong> {{ property.address }}</p>
            <p><strong>Cost per night:</strong> {{ property.cost_per_night }} tk</p>
            <p><strong>Available rooms:</strong> {{ property.available_rooms }}</p>
            <p><strong>Rating:</strong> {{ property.rating }}/5</p>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();
const { id } = useRoute().params;
const previousUrl = router.options.history.state.back;

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;

const property = ref(null);
const getProperty = async () => {
    const url = `${apiUrl}/hotels/${id}`;
    const res = await $fetch(url);
    const property = res.data;
};

onMounted(() => {
    getProperty();
});

</script>

<style scoped>
.property-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.property-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
}

.property-info {
    margin-top: 20px;
    text-align: center;
}

.property-info h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.property-info p {
    font-size: 1.1rem;
    margin: 10px 0;
    color: #555;
}

.share-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.share-button,
.facebook-button,
.twitter-button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
}

.share-button {
    background-color: #007bff;
    color: white;
}

.share-button:hover {
    background-color: #0056b3;
}

.facebook-button {
    background-color: #3b5998;
    color: white;
}

.facebook-button:hover {
    background-color: #2d4373;
}

.twitter-button {
    background-color: #1da1f2;
    color: white;
}

.twitter-button:hover {
    background-color: #1991db;
}
</style>
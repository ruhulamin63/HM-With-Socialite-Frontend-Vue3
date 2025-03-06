<template>
    <div>
        <h1>Create Hotel</h1>
        <form @submit.prevent="submitForm">
            <input v-model="form.name" placeholder="Name" required />
            <input v-model="form.address" placeholder="Address" required />
            <input v-model="form.cost_per_night" placeholder="Cost per night" required />
            <input v-model="form.available_rooms" placeholder="Available rooms" required />
            <input v-model="form.image_url" placeholder="Image URL" required />
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                address: '',
                cost_per_night: '',
                available_rooms: '',
                image_url: '',
            },
        };
    },
    methods: {
        async submitForm() {
            await this.$axios.post('/api/hotels', this.form);
            this.$router.push('/manage-hotels');
        },
    },
};
</script>
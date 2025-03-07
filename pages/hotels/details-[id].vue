<template>
    <div>
        <button @click="shareOnFacebook">Share on Facebook</button>
        <button @click="shareOnTwitter">Share on Twitter</button>
    </div>
</template>

<script setup lang="js">
const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(url, '_blank');
};

const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${window.location.href}`;
    window.open(url, '_blank');
}
</script>
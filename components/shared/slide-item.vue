<template>
    <div class="slide-item">
        <NuxtImg
            :src="image"
            :alt="props.title"
            loading="lazy"
            decoding="async"
        />
        <div class="slide-item-content">
            <div class="wrapper">
                <div class="title">{{ props.title }}</div>
                <div class="description">{{ props.description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
    description: String,
});

const image = useAsset(props.image);
</script>

<style lang="scss" scoped>
.slide-item {
    position: relative;
    // background gradient

    .slide-item-content {
        @apply absolute bottom-0 top-50% left-0 right-0 p-10;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0) 100%
        );

        .wrapper {
            @apply relative flex flex-col justify-end h-full;

            .title {
                @apply text-7 sm:text-8 md:text-10  text-white;
            }
            .description {
                @apply text-3 md:text-4 text-white;
            }
        }
    }
}
</style>

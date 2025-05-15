<template>
    <section class="main-bg text-white about-us">
        <div class="container mx-auto pt-40 pb-40">
            <!-- <div class="flex about-us"> -->
                <div class="flex flex-col items-start gap-1 section-about-us">
                    <h1 class="mt-0 text-white">
                        {{props.title}}
                    </h1>
                    <h3 class="paragraf-32-semibold w-33% font-body">
                        {{props.description}}
                    </h3>
                    <p class="paragraf-20-reguler">Our notable achievements include:</p>
                    <ul>
                        <li v-for="(achievement, index) in props.achievements" :key="index" class="paragraf-20-reguler w-45% mb-4">
                            {{ achievement }}
                        </li>
                    </ul>
                </div>
            <!-- </div> -->
        </div>
        <img
        :src="image"
        class="w-50% h-105% img-about pt-40"
            />
    </section>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String,
    achievements: {
        type: Array,
        required: true,
    }
});
const image = useAsset(props.image);
</script>

<style scoped lang="scss">
.main-bg {
        @apply bg-cover bg-center bg-no-repeat;
        background-image: url("~/assets/img/main-bg.png");
        position: relative;
    }
.img-about {
    position: absolute;
    right: 0;
    // bottom: -20rem;
    top: 0;
}
.section-about-us h1 {
    @apply text-15.5 fw-medium;
}
.section-about-us h3 {
    @apply text-7.75 fw-medium;
}
.section-about-us p {
    @apply text-5 fw-normal;
}
.section-about-us ul li {
    @apply text-5 fw-normal;
}
</style>
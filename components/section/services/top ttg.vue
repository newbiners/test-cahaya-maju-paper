<template>
    <section class="main-bg text-white">
        <div class="container mx-auto pt-56 pb-56 flex flex-col align-start">
            <h1 class="mt-0 mb-0 text-white header-reguler w-90%">
                {{props.title}}
            </h1>
            <p class="paragraf-20-reguler w-32%">
                {{props.description}}
            </p>
            <div class="flex items-end mt-40">
                <button class="w-15% btn">Contact Us</button>
            </div>
        </div>
        <img
        :src="image"
        class="img-services"
        alt="main-bg" />
    </section>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
    description: String,
});

const image = useAsset(props.image);
</script>

<style scoped lang="scss">
.main-bg {
    @apply bg-cover bg-center bg-no-repeat;
    background-image: url("~/assets/img/main-bg.png");
    position: relative;
}
.img-services{
    @apply w-50% h-100% pt-46 ;
    position: absolute;
    right: 2rem;
    // bottom: -5rem;
    top: 0;
}

.btn{
    @apply border-color-secondary text-secondary px-4 py-4;
    background-color: transparent;
    cursor: pointer;
}
</style>
<template>
    <div class="service-box" ref="itemRef">
        <div class="px-12 py-12">
            <div class="service-icon">
                <img
                    class="h-18 w-auto"
                    :src="props.icon"
                    alt="Custom Software Development"
                />
            </div>
            <div class="service-content">
                <h3>{{ props.title }}</h3>
                <p>{{ props.description }}</p>
            </div>
            <!-- <div class="btn btn-outline">Learn More</div> -->
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    icon: String,
    parentRef: Object,
    index: Number,
});
const { $gsap } = useNuxtApp();

const itemRef = ref(null);

onMounted(() => {
    $gsap.from(itemRef.value, {
        scrollTrigger: {
            trigger: ".services-list",
            start: "top 75%",
            end: "bottom bottom",
            scrub: true,
            markers: true,
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power1.inOut",
        delay: 0.5 * props.index,
    });
});
</script>

<style scoped lang="scss">
.service-box {
    transition: all 0.3s ease;
    background-color: #ebebeb;

    img {
        transition: all 0.3s ease;
    }
    &:hover {
        @apply bg-primary30;
        color: white;
        img {
            filter: brightness(0) invert(1);
        }
    }
    cursor: pointer;
    border-radius: 0.625rem;
}
h3 {
    @apply lg:text-7 md:text-6 xl:text-9 fw-normal mt-6 mb-4;
}

.service-content p {
    @apply text-4 fw-normal;
}

.service-content {
    @apply mb-8;
}
</style>

<template>
    <div class="service-box flex justify-center">
        <div class="px-12 py-16 flex flex-col items-center box-border gap-4">
            <div class="service-icon">
                <img :src="props.icon" alt="Why Choose Us" class="w-15 h-15"/>
            </div>
            <h3 class="text-center text-[#14110B] w-75% mt-4">{{ props.title }}</h3>
            <p class="text-center text-[#555555] w-3/4">{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    icon: String,
});
</script>

<style scoped lang="scss">
.service-box {
    @apply bg-[#F6F6F6] rounded-3;
    transition: all 0.3s ease;
    // background-color: #ebebeb;
    &:hover {
        background-color: white;
        box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.11);
    }
    cursor: pointer;
}
h3 {
    @apply fw-500;
}
.service-content {
    @apply mb-8 min-h-40;
}
</style>

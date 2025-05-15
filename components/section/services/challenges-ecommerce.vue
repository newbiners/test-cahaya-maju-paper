<template>
    <section id="challenges" class="py-20 challenges">
        <div class="container mx-auto">
            <div class="section-title text-center">
                <h1 class="mb-12 w-3/4 mx-auto">Common E-commerce Challenges & How We Solve Them</h1>
            </div>

            <div class="section-content " :ref="section">
                <div
                    class="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-16"
                >
                    <div class="flex gap-4 section-left w-auto lg:w-40%">
                        <img src="/img/img-challenges-ecommerce-new.png" alt="challenges-ecommerce" class="w-full h-full" />
                    </div>
                    <div class="flex flex-col gap-8 section-right w-full lg:w-1/2 mt-4">
                        <div v-for="(item, index) in items_right" :key="index" :class="item.class"
                            class="items-ecommerce flex flex-col gap-4 items-start p-6 bg-[#ECECEC] rounded-3">
                            <div class="flex items-start gap-4 text-[#FF0000]">
                                <img :src="item.icon_1" class="w-7 h-7 icon"/>
                                <p>{{ item.description_1 }}</p>
                            </div>
                            <div class="flex items-start gap-4 pl-0.5 lg:pl-1">
                                <img :src="item.icon_2" class="w-7 h-7 icon"/>
                                <p class="pl-0.5 lg:pl-1">{{ item.description_2 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// const props = defineProps({
//     title: {
//         type: String,
//         required: true,
//     },
//     items_left: {
//         type: Array,
//         required: true,
//     },
//     img_top: {
//         type: String,
//         required: true,
//     },
// });
const items_right = [
    {
        description_1: "Struggling with Slow Load Times?",
        description_2: "We optimize site speed with CDN integration, caching, and lightweight code, ensuring fast-loading pages that keep customers engaged.",
        icon_1: "/svg/x-circle-red.svg",
        icon_2: "/svg/lamp-blue.svg",
    },
    {
        description_1: "Your Store Lacks Custom Features?",
        description_2: "We develop custom themes, plugins, and functionalities that enhance the shopping experience and match your brand’s needs.",
        icon_1: "/svg/x-circle-red.svg",
        icon_2: "/svg/lamp-blue.svg",
    },
    {
        description_1: "Managing Orders & Inventory Feels Overwhelming?",
        description_2: "We automate workflows by integrating your store with inventory, shipping, and CRM tools, reducing manual work.",
        icon_1: "/svg/x-circle-red.svg",
        icon_2: "/svg/lamp-blue.svg",
    },
    {
        description_1: "Migrating from Another Platform Seems Risky?",
        description_2: "We handle full migrations from any platform to Shopify or WooCommerce, ensuring no data loss and zero downtime.",
        icon_1: "/svg/x-circle-red.svg",
        icon_2: "/svg/lamp-blue.svg",
    },
];

items_right.forEach((item, index) => {
    item.class = `challenges-item--right-${index + 1}`;
});

const section = ref(null);
const { $gsap } = useNuxtApp();
onMounted(() => {
    // items_left.forEach((item, index) => {
    //     $gsap.from("." + item.class, {
    //         scrollTrigger: {
    //             trigger: "." + item.class,
    //             start: "top 75%",
    //             end: "bottom bottom",
    //         },
    //         opacity: 0,
    //         y: 20,
    //         scale: 0.95,
    //     });
    // });
    items_right.forEach((item) => {
        $gsap.from("." + item.class, {
            scrollTrigger: {
                trigger: "." + item.class,
                start: "top 75%",
                end: "bottom bottom",
            },
            opacity: 0,
            y: 20,
            scale: 0.95,
        });
    });
});
</script>

<style scss scoped>
.challenges {
    .container {
        @apply bg-white text-black;
    }
}

.section-title h1,p{
    font-family: 'Inter', sans-serif;
}

/* .section-content h3,p{
    font-family: 'Poppins', sans-serif;
} */

.section-content .items-ecommerce:hover{
    @apply bg-primary;
    div{
        @apply text-white;
    }
    .icon {
        filter: brightness(0) invert(1);
    }
}

/* .section-left{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */

/* .section-right{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */
</style>

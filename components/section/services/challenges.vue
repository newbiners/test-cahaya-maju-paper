<template>
    <section id="challenges" class="py-20 challenges">
        <div class="container mx-auto">
            <div class="section-title text-center">
                <h1 class="mb-12 w-3/4 mx-auto">{{ title }}</h1>
            </div>

            <div class="section-content " :ref="section">
                <div
                    class="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-16"
                >
                    <div class="flex flex-col gap-4 section-left w-auto lg:w-42%">
                        <img :src="img_challenges" alt="challenges" class="w-full h-full" />
                    </div>
                    <div class="flex flex-col gap-8 section-right w-full lg:w-1/2 mt-4">
                        <div
                            class="items-challenges flex flex-col gap-4 items-start p-6"
                            :class="item.class"
                            v-for="item in items_right"
                            :key="item.title"
                        >
                            <div class="flex items-center gap-4">
                                <img :src="item.icon" class="w-6 h-auto"/>
                                <h3 class="fw-500">{{ item.title }}</h3>
                                <!-- <div class="flex flex-col gap-4">
                                    
                                </div> -->
                            </div>
                            <p class="pl-10 w-full lg:w-90% text-[#555555]">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    items_right: {
        type: Array,
        required: true,
    },
    img_challenges: {
        type: String,
        required: true,
    },
});

// items_left.forEach((item, index) => {
//     item.class = `why-us-item--left-${index + 1}`;
// });

props.items_right.forEach((item, index) => {
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
    props.items_right.forEach((item) => {
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

.section-content .items-challenges:hover{
    @apply bg-[#F6F6F6] rounded-4.5;
}

/* .section-left{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */

/* .section-right{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */
</style>

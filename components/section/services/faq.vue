<template>
    <section id="faq" class="py-20 faq bg-[#F6F6F6]">
        <div class="container mx-auto">
            <div class="section-title text-center">
                <h1 class="mb-12 w-3/4 mx-auto">Frequently Asked Questions (FAQ)</h1>
            </div>

            <div class="section-content " :ref="section">
                <div class="flex flex-col justify-center items-center gap-4">
                    <div v-for="(item,index) in faqItems" :key="index" class="bg-white p-6 w-full rounded-lg">
                        <div class="flex justify-between items-center cursor-pointer" @click="toggleFAQ(index)">
                            <p class="text-start fw-bold">{{ item.question }}</p>
                            <img src="/svg/chevron-down-primary.svg" :class="item.isOpen ? 'rotate-0' : '-rotate-90'" class="transition-transform duration-300" alt="arrow-down" />
                        </div>
                        <p v-show="item.isOpen" class="mt-4 text-start text-[#3C3C43D9] opacity-85% w-95%" v-if="item.isHtml" v-html="item.answer"></p>
                        <p v-show="item.isOpen" class="mt-4 text-start text-[#3C3C43D9] opacity-85% w-95%" v-else>{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['faqItems']);

const toggleFAQ = (index) => {
    props.faqItems[index].isOpen = !props.faqItems[index].isOpen;
};

// items_left.forEach((item, index) => {
//     item.class = `why-us-item--left-${index + 1}`;
// });


const section = ref(null);
const { $gsap } = useNuxtApp();
// onMounted(() => {
//     items_left.forEach((item, index) => {
//         $gsap.from("." + item.class, {
//             scrollTrigger: {
//                 trigger: "." + item.class,
//                 start: "top 75%",
//                 end: "bottom bottom",
//             },
//             opacity: 0,
//             y: 20,
//             scale: 0.95,
//         });
//     });
// });
</script>

<style scss scoped>


/* .section-left{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */

/* .section-right{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */
</style>

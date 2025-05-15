<template>
    <section id="it-works" class="py-32 it-works bg-white">
        <div class="container mx-auto">
            <div class="section-title text-center">
                <h1 class="mb-12 w-3/4 mx-auto">How It Works – A Simple, Stress-Free Process</h1>
            </div>

            <div class="section-content relative" :ref="section">
                <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-28">

                    <hr class="absolute top-20% xl:top-1/4 left-31.75% xl:left-32.25% transform -translate-x-1/2 -translate-y-1/2 w-17% xl:w-20% h-0.75 rounded-0.5 bg-[#98A2B3] hidden lg:block"></hr>
                    <hr class="absolute top-20% xl:top-1/4 left-68.75% xl:left-68.25% transform -translate-x-1/2 -translate-y-1/2 w-17% xl:w-20% h-0.75 rounded-0.5 bg-[#98A2B3] hidden lg:block"></hr>

                    <div class="flex flex-col gap-8 items-center w-full">
                        <div class="rounded-full bg-primary text-white w-42 h-42 flex items-center justify-center">
                            <h1>1</h1>
                        </div>
                        <h3 class="text-primary text-center">Choose Your Design</h3>
                        <p class="text-center">Pick a template that suits your brand, and we’ll customize it to match your business needs.</p>
                    </div>
                    <!-- <hr class="bg-[#98A2B3] rounded-0.5 w-full h-0.75 mt-21 hidden lg:display-inherit"/> -->
                    <div class="flex flex-col gap-8 items-center w-full">
                        <div class="rounded-full bg-primary text-white w-42 h-42 flex items-center justify-center">
                            <h1>2</h1>
                        </div>
                        <h3 class="text-primary text-center">We Build Your Website</h3>
                        <p class="text-center">Our team sets up your website with the content, features, and SEO settings within just 7 days.</p>
                    </div>
                    <!-- <hr class="bg-[#98A2B3] rounded-0.5 w-full h-0.75 mt-21 hidden lg:display-inherit"/> -->
                    <div class="flex flex-col gap-8 items-center w-full">
                        <div class="rounded-full bg-primary text-white w-42 h-42 flex items-center justify-center">
                            <h1>3</h1>
                        </div>
                        <h3 class="text-primary text-center">Launch & Manage Easily</h3>
                        <p class="text-center">Your website goes live! You’ll receive training to update content anytime, so you’re always in control.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// const items_left = [
//     {
//         title: "A Ready-to-Use Website – No Hassle!",
//         description:
//             "We provide professionally designed templates customized for your business, so you get a polished, modern website that fits your brand from day one.",
//             icon: "/svg/rocket-icon.svg",
//     },
//     {
//         title: "Super-Fast Turnaround – Go Live in Just 7 Days",
//         description:
//             "Unlike traditional web development that takes months, our process ensures your website is fully designed, optimized, and launched within a week!",
//             icon : "/svg/hourglass.svg",
//     },
//     {
//         title: "User-Friendly CMS – Take Full Control",
//         description: "Your website comes with a world-class CMS, allowing you to manage content effortlessly—without hiring a developer.",
//         icon : "/svg/paper&pena.svg",
//     },
//     {
//         title: "SEO-Optimized for Maximum Visibility",
//         description:
//             "We build websites that Google loves! From fast loading speeds to mobile optimization and built-in SEO features, your site will be search-engine ready from day one.",
//         icon : "/svg/statistik.svg",
//     },
//     {
//         title: "No Hidden Fees – 100% Transparent Pricing",
//         description: "What you see is what you pay. No surprise costs, no unnecessary upsells—just a professional website at a fair price.",
//         icon : "/svg/magnifier.svg",
//     },
// ];

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

<template>
    <section id="top" class="py-20 top-about-us block bg-[#072AC8]">
        <!-- <img src="/svg/bg-ellipse.svg" class="absolute z-0 bottom-10% -right-15%" />
        <img src="/svg/bg-ellipse.svg" class="absolute z-0 top-0 -left-25%" /> -->
        <div class="container mx-auto text-white mt-28">
            <div class="flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 justify-between items-start">
                <div class="flex flex-col justify-center items-center lg:items-start gap-10" ref="contentRef">
                    <h1 class="text-center lg:text-start w-full lg:w-90%">
                        9+ Years of Experience Helping to Achieve Success
                    </h1>

                    <p class="text-center lg:text-start w-80%">We come with more than 9+ years of experience in helping businesses transform in the digital world.
                        With a deep understanding of each client's needs and challenges.
                    </p>

                    <div class="flex justify-center mt-16 lg:mt-24 gap-12 items-center">
                        <div class="btn btn-outline">View Portofolio</div>
                        <div class="btn btn-white">Chat Us</div>
                    </div>
                </div>

                <!-- <img src="/img/top-img-about.png" alt="hero-image" class="w-full h-auto" ref="imageRef" /> -->
            </div>
        </div>
    </section>
</template>

<script setup>
const containerRef = ref(null);
import { gsap } from 'gsap';

// const { $gsap } = useNuxtApp();
const title = ref(null);
const description = ref(null);
const buttons = ref(null);
const contentRef = ref(null);
const imageRef = ref(null);
onMounted(() => {

    gsap.fromTo(imageRef.value, 
        { opacity: 0, scale: 0 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power1.inOut' }
    );

    
    gsap.from(contentRef.value, {
        scrollTrigger: {
            trigger: contentRef.value,
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });
    // [image.value, title.value, description.value, buttons.value].forEach(
    //     (item) => {
    //         $gsap.from(item, {
    //             scrollTrigger: {
    //                 scrub: true,
    //                 trigger: item,
    //                 start: "top 75%",
    //                 end: "bottom bottom",
    //                 // markers: true,
    //             },
    //             opacity: 0,
    //             y: 20,
    //             duration: 2,
    //             ease: "power1.inOut",
    //         });
    //     }
    // );
    // var tl = $gsap.timeline();
    // tl.from(
    //     ".hero-title",
    //     {
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         ease: "power1.inOut",
    //     },
    //     "<25%"
    // );
    // tl.from(
    //     ".hero-description",
    //     {
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         ease: "power1.inOut",
    //     },
    //     "<25%"
    // );
    // tl.from(
    //     ".hero-buttons",
    //     {
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         ease: "power1.inOut",
    //     },
    //     "<25%"
    // );
    // tl.from(
    //     ".hero-image",
    //     {
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         ease: "power1.inOut",
    //     },
    //     "<25%"
    // );
});
</script>

<style lang="scss" scoped>
.top-about-us {
    background: url("/svg/background-top.svg");
    background-size: cover;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: no-repeat;
    aspect-ratio: 16/9;
}

@screen lt-lg {
    .top-about-us {
        background-image: none;
        background-color: #072AC8;
        aspect-ratio: inherit;
    }
}
</style>

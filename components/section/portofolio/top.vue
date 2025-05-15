<template>
    <section id="top" class="pt-40 pb-0 lg:py-40 top block bg-[#072AC8] relative z-11 overflow-hidden">
        <!-- <img src="/svg/bg-ellipse.svg" class="absolute z-0 bottom-10% -right-15%" />
        <img src="/svg/bg-ellipse.svg" class="absolute z-0 top-0 -left-25%" /> -->
        <!-- <div class="gradient"></div> -->
        <div class="container mx-auto text-white -mb-60 lg:mb-0 mt-16 relative">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-center lg:items-start">
                <div class="flex flex-col justify-center items-center lg:items-start gap-10 relative z-4 w-auto">
                    <h1 class="text-center lg:text-start w-full mb-0 lg:w-1/2">
                        Explore more than 200+ Projects that we have done well
                    </h1>

                    <p class="text-center lg:text-start w-full lg:w-1/2">We are committed to delivering high-quality results that match our clients' vision, needs,
                        and business character. With the best standards at every stage of the process, we ensure that every detail is carefully considered to provide
                        optimal and professional digital solutions.
                    </p>

                    <div class="flex justify-center mt-24 gap-12 items-center">
                        <NuxtLink href="#our-works" class="btn btn-outline">View Portofolio</NuxtLink>
                        <NuxtLink href="https://wa.me/6281234011145" target="_blank" class="btn btn-white">Chat Us</NuxtLink>
                    </div>
                </div>

                <!-- <div class="relative z-2"> -->
                    <div class="gradient-1"></div>
                    <div class="hidden lg:block !absolute top-0 left-0 w-full h-full">
                        <div class="relative lg:absolute lg:-bottom-25% 2xl:bottom-0 -right-15% z-1 h-full" ref="image2Ref">
                            <img src="/svg/img-porto-top.svg" alt="custom website" class="w-full h-fit" />
                        </div>
                    </div>
                    <div class="block lg:hidden !relative top-20 w-full h-full">
                        <div class="relative lg:absolute bottom-0 2xl:bottom-0 -right-15% z-1 h-full" ref="image2Ref">
                            <img src="/svg/img-porto-top.svg" alt="custom website" class="w-full h-fit" />
                        </div>
                    </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// const containerRef = ref(null);
import { gsap } from 'gsap';

// const { $gsap } = useNuxtApp();
const containerRef = ref(null);
const imageRef = ref(null);
const title = ref(null);
const description = ref(null);
const buttons = ref(null);
const image = ref(null);
// const image1Ref = ref(null);
// const image2Ref = ref(null);
onMounted(() => {
    // const image1 = image1Ref.value;
    // const image2 = image2Ref.value;

    // // Animasi untuk img-custom-top-1.svg
    // gsap.fromTo(image1, 
    //     { opacity: 0, scale:0 }, 
    //     { opacity: 1, scale:1, duration: 1.5, ease: 'power1.inOut' }
    // );

    // // Mengatur animasi responsif untuk img-custom-top-2.svg
    // const mm = gsap.matchMedia();

    // mm.add("(min-width: 1536px)", () => {
    //     gsap.fromTo(image2, 
    //         { y: '120%' }, 
    //         { y: '0', duration: 2, ease: 'power1.inOut' }
    //     );
    // });

    // mm.add("(min-width: 1080px) and (max-width: 1535px)", () => {
    //     gsap.fromTo(image2, 
    //         { y: '120%' }, 
    //         { y: '0', duration: 2, ease: 'power1.inOut' }
    //     );
    // });

    // mm.add("(max-width: 1079.9px)", () => {
    //     gsap.fromTo(image2, 
    //         { y: '120%' }, 
    //         { y: '0', duration: 2, ease: 'power1.inOut' }
    //     );
    // });

    // // mm.add("(max-width: 767.9px)", () => {
    // //     gsap.fromTo(image2, 
    // //         { x: '150%' }, 
    // //         { x: '45%', duration: 2, ease: 'power1.inOut' }
    // //     );
    // // });

    // // Event listener untuk animasi saat mouse menyentuh gambar
    // image1.addEventListener('mouseenter', (event) => {
    //     const direction = event.clientX < image1.getBoundingClientRect().left + image1.clientWidth / 2 ? 1 : -1;
    //     gsap.to(image1, {
    //         x: direction * 20, // Menggerakkan gambar sejauh 20px ke arah sebaliknya
    //         duration: 0.5,
    //         ease: 'power1.inOut'
    //     });
    // });

    // image1.addEventListener('mouseleave', () => {
    //     gsap.to(image1, {
    //         x: 0, // Mengembalikan gambar ke posisi semula
    //         duration: 0.5,
    //         ease: 'power1.inOut'
    //     });
    // });
});
</script>

<style lang="scss" scoped>
.top {
    background: url("/svg/background-top.svg");
    background-size: cover;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: no-repeat;
    // aspect-ratio: 16/9;
    background-color: #072AC8;
}

.bg-test{
    background: url("/svg/top-custom/img-custom-top-2.svg");
    background-size: cover;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: no-repeat;
}

// .gradient {
//     @apply rounded-full;
//     position: absolute;
//     bottom: 0%;
//     // right: -50%;
//     width: 60%;
//     height: 90%;
//     // background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(9, 44, 201));
//     background: linear-gradient(to right, rgba(255, 255, 255, 0) 10%, rgb(9, 44, 201) 45%);
//     // background: linear-gradient(to left, rgba(255, 255, 255, 0) 20%, rgb(201, 9, 9) 80%);
//     z-index: 1;
// }

.gradient-1 {
    @apply rounded-full absolute;
    bottom: -100%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(9, 44, 201, 0.9) 30%, rgba(9, 44, 201, 0.6) 50%, rgba(9, 44, 201, 0.3) 70%, rgba(9, 44, 201, 0) 100%);
    filter: blur(100px);
    z-index: 2;
}
// .instant-img{
//     object-fit: cover;
//     object-position: center;
//     width: 100%;
//     aspect-ratio: 4/1;
// }

// .instant-img {
//     transition: all 0.5s ease;
// }

@screen lt-lg {
    .top {
        background-image: none;
        background-color: #072AC8;
        aspect-ratio: inherit;
    }
    .gradient {
        display: none;
    }
    .gradient-1{
        // position: relative;
        left: 25%;
        bottom:-60%
    }
}
</style>
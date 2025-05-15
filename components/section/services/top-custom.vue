<template>
    <section id="top" class="py-40 top block bg-[#072AC8] relative z-11">
        <!-- <img src="/svg/bg-ellipse.svg" class="absolute z-0 bottom-10% -right-15%" />
        <img src="/svg/bg-ellipse.svg" class="absolute z-0 top-0 -left-25%" /> -->
        <!-- <div class="gradient"></div> -->
        <div class="container mx-auto text-white mt-12 lg:mt-16 relative">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-center lg:items-start">
                <div class="flex flex-col justify-center items-center lg:items-start gap-10 relative z-4">
                    <h1 class="text-center lg:text-start w-full mb-0 lg:w-65%">
                        Build a Website That Drives Your Business Forward – Fast, Scalable, and Fully Customizable
                    </h1>

                    <p class="text-center lg:text-start w-full lg:w-55%">Is your website outdated, slow, or failing to convert visitors into customers?
                        Are you struggling with a generic template that doesn’t reflect your brand or a site that lacks essential integrations?
                        A poorly designed website can cost you leads, credibility, and revenue.
                    </p>

                    <p class="text-center lg:text-start w-full lg:w-55%">At Bitzania, we build custom, high-performance websites that convert visitors and
                        scale with your business—fast, secure, and SEO-optimized.
                    </p>

                    <div class="flex items-center gap-4 flex-wrap justify-center lg:justify-start lg:w-3/4">
                        <div class="flex items-center justify-center rounded-full bg-[#0526B7] px-4 py-2">
                            🚀 Custom Development
                        </div>
                        <div class="flex items-center justify-center rounded-full bg-[#0526B7] px-4 py-2">
                            🎨 Modern UI/UX 
                        </div>
                        <div class="flex items-center justify-center rounded-full bg-[#0526B7] px-4 py-2">
                            🔗 Seamless Integrations
                        </div>
                        <div class="flex items-center justify-center rounded-full bg-[#0526B7] px-4 py-2">
                            ⚡ Optimized Performance
                        </div>
                    </div>

                    <div class="flex justify-center mt-4 gap-12 items-center">
                        <NuxtLink href="#our-works" class="btn btn-outline">View Portofolio</NuxtLink>
                        <NuxtLink href="https://wa.me/6281234011145" target="_blank" class="btn btn-white">Chat Us</NuxtLink>
                    </div>
                </div>

                <!-- <div class="relative z-2"> -->
                    <div class="gradient-1"></div>
                    <div class="hidden lg:block !absolute top-0 left-0 w-full h-full">
                        <div class="absolute -top-5% md:-top-10% lg:top-0 xl:-top-10% right-35% md:right-25% lg:right-20% z-5 h-auto" ref="image1RefLg">
                            <!-- <div class="bg-green absolute top-0">tess</div> -->
                            <img src="/svg/top-custom/img-custom-top-1.svg" class="w-auto h-12rem md:h-16rem xl:h-20rem" />
                        </div>
                        <div class="relative lg:absolute top-0 left-0 z-1 h-full translate-x-45% md:translate-x-60% 2xl:translate-x-92%" ref="image2RefLg">
                            <img src="/svg/top-custom/img-custom-top-2.svg" alt="custom website" class="w-auto h-full" />
                        </div>
                    </div>
                    <div class="block lg:hidden !relative top-20 w-full h-full">
                        <div class="absolute -top-5% md:-top-10% lg:top-0 xl:-top-10% right-35% md:right-25% lg:right-20% z-5 h-auto" ref="image1RefSm">
                            <!-- <div class="bg-green absolute top-0">tess</div> -->
                            <img src="/svg/top-custom/img-custom-top-1.svg" class="w-auto h-12rem md:h-16rem xl:h-20rem" />
                        </div>
                        <div class="relative lg:absolute top-0 left-0 z-1 h-full translate-x-45% md:translate-x-60% 2xl:translate-x-92%" ref="image2RefSm">
                            <img src="/svg/top-custom/img-custom-top-2.svg" alt="custom website" class="w-auto h-full" />
                        </div>
                    </div>
                    <!-- <img src="/img/services/top-img-instant.png" alt="hero-image" class="instant-img absolute z-1 top-0 -right-12%" /> -->
                    <!-- <img src="/img/services/img-custom-top.png" alt="hero-image" class="instant-img relative lg:absolute -z-1 top-0 w-auto h-full -right-12%" />
                    <div class="gradient lg:-right-40% xl:-right-45% 2xl:-right-1/2"></div> -->
                <!-- </div> -->
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
const image1RefLg = ref(null);
const image2RefLg = ref(null);
const image1RefSm = ref(null);
const image2RefSm = ref(null);
onMounted(() => {
    const image1Lg = image1RefLg.value;
    const image2Lg = image2RefLg.value;
    const image1Sm = image1RefSm.value;
    const image2Sm = image2RefSm.value;

    // Animasi untuk img-custom-top-1.svg
    gsap.fromTo(image1Lg, 
        { opacity: 0, scale: 0 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power1.inOut' }
    );

    gsap.fromTo(image1Sm, 
        { opacity: 0, scale: 0 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power1.inOut' }
    );

    // Mengatur animasi responsif untuk img-custom-top-2.svg
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1536px)", () => {
        gsap.fromTo(image2Lg, 
            { x: '150%' }, 
            { x: '92%', duration: 2, ease: 'power1.inOut' }
        );
    });

    mm.add("(min-width: 1080px) and (max-width: 1535px)", () => {
        gsap.fromTo(image2Lg, 
            { x: '150%' }, 
            { x: '60%', duration: 2, ease: 'power1.inOut' }
        );
    });
    
    mm.add("(min-width: 768px) and (max-width: 1079.9px)", () => {
        gsap.fromTo(image2Sm, 
            { x: '150%' }, 
            { x: '60%', duration: 2, ease: 'power1.inOut' }
        );
    });

    mm.add("(max-width: 767.9px)", () => {
        gsap.fromTo(image2Sm, 
            { x: '150%' }, 
            { x: '45%', duration: 2, ease: 'power1.inOut' }
        );
    });

    // Event listener untuk animasi saat mouse menyentuh gambar
    image1Lg.addEventListener('mouseenter', (event) => {
        const direction = event.clientX < image1Lg.getBoundingClientRect().left + image1Lg.clientWidth / 2 ? 1 : -1;
        gsap.to(image1Lg, {
            x: direction * 20, // Menggerakkan gambar sejauh 20px ke arah sebaliknya
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });

    image1Lg.addEventListener('mouseleave', () => {
        gsap.to(image1Lg, {
            x: 0, // Mengembalikan gambar ke posisi semula
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });

    image1Sm.addEventListener('mouseenter', (event) => {
        const direction = event.clientX < image1Sm.getBoundingClientRect().left + image1Sm.clientWidth / 2 ? 1 : -1;
        gsap.to(image1Sm, {
            x: direction * 20, // Menggerakkan gambar sejauh 20px ke arah sebaliknya
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });

    image1Sm.addEventListener('mouseleave', () => {
        gsap.to(image1Sm, {
            x: 0, // Mengembalikan gambar ke posisi semula
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });
});
</script>

<style lang="scss" scoped>
.top {
    background: url("/svg/background-top.svg");
    background-size: cover;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: no-repeat;
    aspect-ratio: 16/9;
    background-color: #072AC8;
}

.bg-test{
    background: url("/svg/top-custom/img-custom-top-2.svg");
    background-size: cover;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: no-repeat;
}

.gradient {
    @apply rounded-full;
    position: absolute;
    bottom: 0%;
    // right: -50%;
    width: 60%;
    height: 90%;
    // background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(9, 44, 201));
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 10%, rgb(9, 44, 201) 45%);
    // background: linear-gradient(to left, rgba(255, 255, 255, 0) 20%, rgb(201, 9, 9) 80%);
    z-index: 1;
}

.gradient-1 {
    @apply rounded-full absolute;
    bottom: 0;
    left: 75%;
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
    .gradient,.gradient-1 {
        display: none;
    }
}
</style>
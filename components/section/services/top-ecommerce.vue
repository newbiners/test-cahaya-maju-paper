<template>
    <section id="top" class="py-40 top block bg-[#072AC8] relative z-11">
        <!-- <img src="/svg/bg-ellipse.svg" class="absolute z-0 bottom-10% -right-15%" />
        <img src="/svg/bg-ellipse.svg" class="absolute z-0 top-0 -left-25%" /> -->
        <!-- <div class="gradient"></div> -->
        <div class="container mx-auto text-white mt-12 lg:mt-16 relative">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-center lg:items-start">
                <div class="flex flex-col justify-center items-center lg:items-start gap-10 relative z-4">
                    <h1 class="text-center lg:text-start w-full mb-0 lg:w-70%">
                        Build a High-Performance Online Store – Fast, Scalable, and Hassle-Free!
                    </h1>

                    <span class="text-[#6DA1FF] fw-semibold text-7.5 text-center lg:text-start w-auto lg:w-60% 2xl:w-full">
                        Expert Shopify & WooCommerce Development for Your Business
                    </span>

                    <p class="text-center lg:text-start w-full lg:w-55%">Are you looking for a reliable, secure,
                        and feature-packed e-commerce website that grows with your business? We’ve got you covered!
                    </p>

                    <p class="text-center lg:text-start w-full lg:w-55%">At Bitzania, we specialize in Shopify and WooCommerce development,
                        delivering fast, scalable, and fully integrated online stores that make selling online effortless.
                    </p>

                    <div class="flex items-center gap-4 flex-wrap justify-center lg:justify-start w-auto lg:w-3/4 xl:w-auto">
                        <div class="flex items-center justify-center rounded-full bg-[#0526B7] px-4 py-2">
                            🚀 Custom Development
                        </div>
                        <div class="flex items-center justify-center rounded-full bg-[#0526B7] px-4 py-2">
                            🔗 Seamless Integrations
                        </div>
                        <div class="flex items-center justify-center rounded-full bg-[#0526B7] px-4 py-2">
                            ⚡ Optimized Performance
                        </div>
                    </div>

                    <div class="flex justify-center mt-4 lg:mt-12 gap-12 items-center">
                        <NuxtLink href="#our-works" class="btn btn-outline">View Portofolio</NuxtLink>
                        <NuxtLink href="https://wa.me/6281234011145" target="_blank" class="btn btn-white">Chat Us</NuxtLink>
                    </div>
                </div>

                <!-- <div class="relative z-2"> -->
                    <div class="gradient-1"></div>
                    <div class="hidden lg:block !absolute top-0 left-0 w-full h-full">
                        <div class="absolute top-5% md:top-8% lg:top-1/4 right-35% md:right-27% lg:right-20% z-5 h-1/2 lg:h-auto" ref="image1RefLg">
                            <img src="/svg/top-ecommerce/img-ecommerce-1.svg" class="w-auto h-18% sm:h-30% lg:h-13rem xl:h-20rem" />
                        </div>
                        <div class="absolute top-15% md:top-20% lg:top-auto lg:bottom-10% xl:-bottom-10% right-5% lg:right-0% z-5 h-1/2 lg:h-auto" ref="image2RefLg">
                            <img src="/svg/top-ecommerce/img-ecommerce-2.svg" class="w-auto h-18% sm:h-30% lg:h-13rem xl:h-20rem" />
                        </div>
                        <div class="relative lg:absolute top-0 left-0 z-1 h-full translate-x-45% md:translate-x-60% 2xl:translate-x-92%" ref="imageLaptopRefLg">
                            <img src="/svg/top-ecommerce/laptop.svg" alt="custom website" class="w-auto h-full" />
                        </div>
                    </div>
                    <div class="block lg:hidden !relative top-20 w-full h-full">
                        <div class="absolute top-8% lg:top-1/4 right-35% md:right-27% lg:right-20% z-5 h-auto" ref="image1RefSm">
                            <img src="/svg/top-ecommerce/img-ecommerce-1.svg" class="w-auto h-9rem sm:h-12rem lg:h-13rem xl:h-20rem" />
                        </div>
                        <div class="absolute -bottom-15% lg:bottom-10% xl:-bottom-10% right-5% lg:right-0% z-5 h-1/2 lg:h-auto" ref="image2RefSm">
                            <img src="/svg/top-ecommerce/img-ecommerce-2.svg" class="w-auto h-9rem sm:h-12rem lg:h-13rem xl:h-20rem" />
                        </div>
                        <div class="relative lg:absolute top-0 left-0 z-1 h-full translate-x-45% md:translate-x-60% 2xl:translate-x-92%" ref="imageLaptopRefSm">
                            <img src="/svg/top-ecommerce/laptop.svg" alt="custom website" class="w-auto h-full" />
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
const image1RefLg = ref(null);
const image2RefLg = ref(null);
const imageLaptopRefLg = ref(null);
const image1RefSm = ref(null);
const image2RefSm = ref(null);
const imageLaptopRefSm = ref(null);
onMounted(() => {
    const image1Lg = image1RefLg.value;
    const image2Lg = image2RefLg.value;
    const imageLaptopLg = imageLaptopRefLg.value;
    const image1Sm = image1RefSm.value;
    const image2Sm = image2RefSm.value;
    const imageLaptopSm = imageLaptopRefSm.value;

    // Animasi untuk img-custom-top-1.svg
    gsap.fromTo(image1Lg, 
        { opacity: 0, scale:0 }, 
        { opacity: 1, scale:1, duration: 1.5, ease: 'power1.inOut' }
    );

    gsap.fromTo(image2Lg, 
        { opacity: 0, scale:0 }, 
        { opacity: 1, scale:1, duration: 1.5, ease: 'power1.inOut' }
    );

    gsap.fromTo(image1Sm, 
        { opacity: 0, scale:0 }, 
        { opacity: 1, scale:1, duration: 1.5, ease: 'power1.inOut' }
    );

    gsap.fromTo(image2Sm, 
        { opacity: 0, scale:0 }, 
        { opacity: 1, scale:1, duration: 1.5, ease: 'power1.inOut' }
    );

    // Mengatur animasi responsif untuk img-custom-top-2.svg
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1536px)", () => {
        gsap.fromTo(imageLaptopLg, 
            { x: '150%' }, 
            { x: '92%', duration: 2, ease: 'power1.inOut' }
        );
    });

    mm.add("(min-width: 1080px) and (max-width: 1535px)", () => {
        gsap.fromTo(imageLaptopLg, 
            { x: '150%' }, 
            { x: '60%', duration: 2, ease: 'power1.inOut' }
        );
    });

    mm.add("(min-width: 768px) and (max-width: 1079.9px)", () => {
        gsap.fromTo(imageLaptopSm, 
            { x: '150%' }, 
            { x: '60%', duration: 2, ease: 'power1.inOut' }
        );
    });

    mm.add("(max-width: 767.9px)", () => {
        gsap.fromTo(imageLaptopSm, 
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


    //even listener untuk animasi saat mouse menyentuh gambar ke 2 
    image2Lg.addEventListener('mouseenter', (event) => {
        const direction = event.clientX < image2Lg.getBoundingClientRect().left + image2Lg.clientWidth / 2 ? 1 : -1;
        gsap.to(image2Lg, {
            x: direction * 20, // Menggerakkan gambar sejauh 20px ke arah sebaliknya
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });

    image2Lg.addEventListener('mouseleave', () => {
        gsap.to(image2Lg, {
            x: 0, // Mengembalikan gambar ke posisi semula
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });

    image2Sm.addEventListener('mouseenter', (event) => {
        const direction = event.clientX < image2Sm.getBoundingClientRect().left + image2Sm.clientWidth / 2 ? 1 : -1;
        gsap.to(image2Sm, {
            x: direction * 20, // Menggerakkan gambar sejauh 20px ke arah sebaliknya
            duration: 0.5,
            ease: 'power1.inOut'
        });
    });

    image2Sm.addEventListener('mouseleave', () => {
        gsap.to(image2Sm, {
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
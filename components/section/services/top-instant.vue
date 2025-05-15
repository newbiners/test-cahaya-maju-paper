<template>
    <section id="top" class="py-40 top block bg-[#072AC8] relative z-11">
        <!-- <img src="/svg/bg-ellipse.svg" class="absolute z-0 bottom-10% -right-15%" />
        <img src="/svg/bg-ellipse.svg" class="absolute z-0 top-0 -left-25%" /> -->
        <div class="gradient"></div>
        <div class="container mx-auto text-white mt-12 lg:mt-16 relative" ref="containerRef">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-center lg:items-start">
                <div class="flex flex-col justify-center items-center lg:items-start gap-10 relative z-4">
                    <h1 class="text-center lg:text-start w-full lg:w-65%">
                        Get a Professional Website – Fast, Affordable, and Hassle-Free!
                    </h1>

                    <span class="text-[#6DA1FF] fw-semibold text-7.5 text-center lg:text-start">
                        Launch Your Website in Just 7 Days – No Developers Needed!
                    </span>

                    <p class="text-center lg:text-start w-full lg:w-55%">Are you struggling to establish your online presence?
                        Do you want a professional website without the high costs and long wait times? We’ve got you covered!
                    </p>

                    <p class="text-center lg:text-start w-full lg:w-55%">With our instant website development service,
                        you can have a stunning, fully functional website that’s ready to go—without the stress of complicated development.
                    </p>

                    <div class="flex justify-center mt-28 gap-12 items-center">
                        <NuxtLink href="#our-works" class="btn btn-outline">View Portofolio</NuxtLink>
                    <NuxtLink href="https://wa.me/6281234011145" target="_blank" class="btn btn-white">Chat Us</NuxtLink>
                    </div>
                </div>

                <!-- <div class="relative z-2"> -->
                    <!-- <div class="gradient-1"></div> -->
                    <div ref="imagesContainer" class="flex items-center gap-4 relative lg:absolute z-0 top-0 translate-x-100% lg:w-1/2 h-full">
                        <img src="/svg/top-instant/img-top-instant-1.svg" class="w-auto h-full " />
                        <img src="/svg/top-instant/img-top-instant-2.svg" class="w-auto h-full" />
                        <img src="/svg/top-instant/img-top-instant-3.svg" class="w-auto h-full" />
                        <img src="/svg/top-instant/img-top-instant-4.svg" class="w-auto h-full" />
                        <img src="/svg/top-instant/img-top-instant-5.svg" class="w-auto h-full" />
                    </div>
                    
                    <!-- <img src="/img/services/top-img-instant.png" alt="hero-image" class="instant-img absolute z-1 top-0 -right-12%" /> -->
                    <!-- <img ref="imageRef" src="/img/services/top-img-instant-long.png" alt="hero-image" class="instant-img relative lg:absolute -z-1 top-0 w-auto h-full translate-x-60%" /> -->
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
const imagesContainer = ref(null);
const title = ref(null);
const description = ref(null);
const buttons = ref(null);
const image = ref(null);
onMounted(() => {
    // const container = containerRef.value;
    const image = imagesContainer.value;

    gsap.set(image, { x: '100%' });

    let animation;

    containerRef.value.addEventListener('mouseenter', () => {
        animation = gsap.to(image, {
            x: '-65%',
            duration: 8,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
        });
    });

    containerRef.value.addEventListener('mouseleave', () => {
        if (animation) {
            animation.kill();
        }
        gsap.to(image, {
            x: '100%',
            duration: 2,
            ease: 'power1.inOut',
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

.gradient {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(9, 44, 201));
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 15%, rgb(9, 44, 201) 50%);
    // background: linear-gradient(to left, rgba(255, 255, 255, 0) 20%, rgb(201, 9, 9) 80%);
    z-index: 1;
}

.gradient-1 {
    position: absolute;
    top: 0;
    left: 30%;
    width: 50%;
    height: 100%;
    // background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(9, 44, 201));
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 15%, rgb(9, 44, 201) 50%);
    // background: linear-gradient(to left, rgba(255, 255, 255, 0) 20%, rgb(201, 9, 9) 80%);
    z-index: 1;
}
// .instant-img{
//     object-fit: cover;
//     object-position: center;
//     width: 100%;
//     aspect-ratio: 4/1;
// }

.instant-img {
    transition: all 0.5s ease;
}

@screen lt-lg {
    .top {
        background-image: none;
        background-color: #072AC8;
        aspect-ratio: inherit;
    }
    .gradient {
        display: none;
    }
}
</style>
<template>
    <section id="hero" class="hero block">
        <div class=" text-white">
            <div class="flex h-auto bg-primary">
                <div class="transform-translate-z-10 container mx-auto pt-[140px] lg:pt-[276px] pb-[100px] lg:pb-[213px] flex lg:flex-row flex-col justify-between items-center">
                    <section class=" w-full lg:text-start text-center lg:w-60% 2xl:w-40%">
                        <h2 class="text-white mb-[30px] uppercase h2-semibold">Tingkatkan Efesiensi Dengan Pembelian Mesin Terbaik</h2>
                        <p class="text-secondary10 paragraph-17-reguler ">Optimalkan proses kerja Anda dengan pilihan mesin berkualitas tinggi yang andal dan tahan lama untuk berbagai kebutuhan industri.</p>
                        <div class="flex lg:justify-start justify-center gap-[26px] mt-[91px]">
                            <NuxtLink class="btn-paper bg-primary30 text-white shadow">Lihat Produk  ➔</NuxtLink>
                            <NuxtLink class="btn-paper btn-outline border-white shadow">Lihat Layanan  ➔</NuxtLink>
                        </div>
                    </section>
                     <img src="/img/banner/img-hero-1.png" alt="logo" class="w-auto lg:w-50% 2xl:w-60%" />
                </div>
            </div>
            <div class="bg-primary30 relative">
                <img src="/svg/Subtract-secondary10.svg" alt="logo" class="h-50 sm:h-70 w-auto absolute top-[-10rem]" />
                <div class="container mx-auto text-center transform-translate-z-10 justify-between py-[74px] items-center grid  grid-cols-2 sm:grid-cols-4 w-full">
                   <div class="flex justify-center">
                        <div>
                            <h2 class="h2-semibold">39 +</h2>
                            <p class="paragraph-17-reguler">Years Experience</p>
                        </div>
                    </div>
                   <div class="flex justify-center">
                        <div>
                            <h2 class="h2-semibold">200+</h2>
                            <p class="paragraph-17-reguler">Completed Projects</p>
                        </div>
                    </div>
                   <div class="flex justify-center">
                        <div>
                            <h2 class="h2-semibold">100+</h2>
                            <p class="paragraph-17-reguler">Professional Team</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div>
                            <h2 class="h2-semibold">99 %</h2>
                            <p class="paragraph-17-reguler">Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
// .bg-hero {
//     background: url('/public/svg/backgroud-hero.svg') no-repeat center center;
//     background-size: cover;
// }

@screen lt-lg {
    .hero {
        background-image: none;
        aspect-ratio: inherit;
    }
}
</style>

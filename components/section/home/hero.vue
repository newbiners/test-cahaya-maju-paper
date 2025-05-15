<template>
    <section id="hero" class="hero block">
        <div class=" text-white">
            <div class="flex h-auto bg-hero relative lg:h-70%">
                <div class="absolute bg-primary w-full h-full opacity-70%"></div>
                <div class="transform-translate-z-10">
                    <section class=" w-full lg:text-start text-center lg:w-55% section-content">
                        <h1 class="h1-bold text-white">Solusi Terpercaya Kebutuhan Percetakan Anda</h1>
                        <p class="text-secondary10">Cahaya Maju Paper siap memenuhi kebutuhan cetak, kemasan, dan produksi Anda dengan beragam layanan unggulan. Kami berkomitmen menghadirkan pelayanan ramah, dan kualitas terbaik untuk setiap pelanggan.</p>
                        <div class="flex lg:justify-start justify-center gap4 mt-23 mb-53">
                            <button-paper-button :title="'Pesan Sekarang  ➔'" :customClass="'btn-paper bg-primary30'" />
                            <button-paper-button :title="'Lihat Layanan  ➔'" :customClass="'btn-paper btn-outline border-white'" />
                        </div>
                    </section>
                </div>
                <!-- <div class="pt-24 w-55% hidden lg:block">
                    <div class="relative h-100%">
                        <img src="/svg/mesing-img.svg" alt="img-hero" class="h-auto w-178 absolute right-[-1rem] bottom-15" />
                    </div>
                </div> -->
            </div>
            <div class="bg-primary30 relative">
                <img src="/svg/Subtract-secondary10.svg" alt="logo" class="h-50 sm:h-70 w-auto absolute top-[-10rem]" />
                <div class="mx-auto max-w-150 lg:max-w-200 transform-translate-z-10 justify-between py-19 items-center flex w-full">
                    <div>
                        <h3>39 +</h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3>200+</h3>
                        <p>Completed Projects</p>
                    </div>
                    <div>
                        <h3>100+</h3>
                        <p>Professional Team</p>
                    </div>
                    <div>
                        <h3>99 %</h3>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bg-hero {
    background: url('/public/svg/backgroud-hero.svg') no-repeat center center;
    background-size: cover;
}

@screen lt-lg {
    .hero {
        background-image: none;
        aspect-ratio: inherit;
    }
}
</style>

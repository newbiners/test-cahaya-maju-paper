<template>
    <section id="expertise" class="expertise mt-[273px]">
        <div class="container mx-auto">
            <div class="" :ref="section">
                <div
                    class="flex flex-col lg:flex-row gap-30"
                >
                <div class="flex-1">
                    <!-- <div class="flex-1 section-image"> -->
                        <img
                        src="/img/expertise/img-our-working.png"
                        class="z-1 w-full h-auto"
                        loading="lazy"
                        decoding="async"
                        />
                    <!-- </div>          -->
            </div>
                    <div class="flex flex-col lg:w-45% lg:text-start text-center">
                        <div class=" transform-translate-z-100">
                            <h3 class="text-secondary uppercase h3-semibold">39 Tahun Perjalanan Kami</h3>
                            <h2 class="text-center lg:text-start text-primary h2-bold uppercase mb-[42px]">Membuktikan Komitmen dalam Memberikan Layanan Terbaik</h2>
                        </div>
                        <div class="contents flex flex-col">
                            <p class="mb-[38px] paragraph-17-reguler">
                                CV. Cahaya Maju adalah perusahaan penyedia produk kertas terpercaya yang telah berdiri sejak tahun 1986. Selama lebih dari 39 tahun, kami berkomitmen untuk memberikan produk kertas berkualitas tinggi dengan pelayanan terbaik kepada pelanggan di berbagai sektor industri.
                            </p>
                            <div class="flex items-center lg:justify-start justify-center lg:items-start gap-4 mb-7">
                                <img src="/svg/mark-check-orange.svg" class="w-6 h-6"/>
                                <p class="paragraph-17-reguler">
                                    Kami menyediakan berbagai jenis kertas pilihan kebutuhan industri
                                </p>
                            </div>
                            <div class="flex items-center lg:justify-start justify-center lg:items-start gap-4 mb-7">
                                <img src="/svg/mark-check-orange.svg" class="w-6 h-6"/>
                                <p class="paragraph-17-reguler">Pelayanan kami cepat, ramah, dan profesional untuk kepuasan pelanggan</p>
                            </div>
                            <div class="flex items-center lg:justify-start justify-center lg:items-start gap-4">
                                <img src="/svg/mark-check-orange.svg" class="w-6 h-6"/>
                                <p class="paragraph-17-reguler">Harga yang kami tawarkan kompetitif dengan kualitas produk yang terjaga</p>
                            </div>
                        </div>
                        <div class="bottom flex justify-center lg:justify-start items-center text-white mt-[67px]">
                            <NuxtLink class="btn-paper bg-primary30 text-white shadow">Tentang Kami  ➔</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const section = ref(null);
onMounted(() => {
});
</script>

<style scss scoped>
/* .section-content h1,p{
    font-family: 'Inter', sans-serif;
} */
</style>

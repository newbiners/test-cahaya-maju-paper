<template>
    <section id="expertise" class="py-20 expertise">
        <div class="container mx-auto">
            <div class="" :ref="section">
                <div
                    class="flex flex-col lg:flex-row gap-16"
                >
                <div class="lg:w-50% flex justify-center flex-col items-center">
                <div class="flex w-70% lg:w-full justify-center items-end">
                    <div class="flex-1 section-image justify-items-end">
                        <img
                        src="/img/expertise/expertise-img-1.png"
                        class="z-1 w-90% h-auto"
                        loading="lazy"
                        decoding="async"
                        />
                    </div>
                    <div class="flex-1 section-image">
                        <img
                        src="/img/expertise/expertise-img-2.png"
                        class="z-1 w-full h-auto"
                        loading="lazy"
                        decoding="async"
                        />
                    </div>
                </div>
                <div class="flex lg:w-full w-70% justify-center items-start">
                    <div class="flex-1 section-image justify-items-end">
                        <img
                        src="/img/expertise/expertise-img-3.png"
                        class="z-1 w-70% h-auto"
                        loading="lazy"
                        decoding="async"
                        />
                    </div>
                    <div class="flex-1 section-image justify-items-start">
                        <img
                        src="/img/expertise/expertise-img-4.png"
                        class="z-1 w-80% h-auto"
                        loading="lazy"
                        decoding="async"
                        />
                    </div>
                </div>                  
            </div>
                    <div class="flex-1 flex flex-col gap-12 lg:w-50% lg:text-start text-center">
                        <div class="content-title ">
                            <h3 class="text-secondary">39 Tahun Perjalanan Kami</h3>
                            <h2 class="mt-0 text-center lg:text-start text-primary h2-bold">Membuktikan Komitmen dalam Memberikan Layanan Terbaik</h2>
                        </div>
                        <div class="contents flex flex-col gap-12">
                            <p>
                                CV. Cahaya Maju adalah perusahaan penyedia produk kertas terpercaya yang telah berdiri sejak tahun 1986. Selama lebih dari 39 tahun, kami berkomitmen untuk memberikan produk kertas berkualitas tinggi dengan pelayanan terbaik kepada pelanggan di berbagai sektor industri.
                            </p>
                            <div class="flex items-center lg:justify-start justify-center lg:items-start gap-4">
                                <img src="/svg/mark-check-black.svg" class="w-6 h-6"/>
                                <p>
                                    Kami menyediakan berbagai jenis kertas pilihan kebutuhan industri
                                </p>
                            </div>
                            <div class="flex items-center lg:justify-start justify-center lg:items-start gap-4">
                                <img src="/svg/mark-check-black.svg" class="w-6 h-6"/>
                                <p>Pelayanan kami cepat, ramah, dan profesional untuk kepuasan pelanggan</p>
                            </div>
                            <div class="flex items-center lg:justify-start justify-center lg:items-start gap-4">
                                <img src="/svg/mark-check-black.svg" class="w-6 h-6"/>
                                <p>Harga yang kami tawarkan kompetitif dengan kualitas produk yang terjaga</p>
                            </div>
                        </div>
                        <div class="bottom flex justify-center lg:justify-start items-center text-white">
                            <button-paper-button :title="'Tentang Kami  ➔'" :customClass="'btn-paper bg-primary30'" :isIcon="false"/>
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

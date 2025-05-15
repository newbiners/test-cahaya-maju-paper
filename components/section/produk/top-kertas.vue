<template>
    <div class="section relative">
        <img src="/svg/Subtract-secondary10.svg" alt="logo" class="h-70 w-auto absolute -bottom-20%" />
        <div class="container mx-auto pt-35 pb-20 relative">
            <div class="flex lg:flex-row flex-col items-center">
                <div class="flex flex-col items-center lg:items-start lg:text-start text-center gap-4">
                    <h1 class=" text-white lg:text-start">PRODUK KERTAS</h1>
                    <p class="text-secondary10 mt-4 lg:w-3/4">
                        Cahaya Maju Paper menyediakan berbagai jenis kertas berkualitas tinggi yang cocok untuk kebutuhan percetakan,
                        industri, hingga perkantoran. Dengan pilihan produk yang lengkap dan layanan profesional.
                    </p>
                    <div class="flex gap-4 mt-12">
                        <button-paper-button :title="'Pesan Sekarang  ➔'" :customClass="'btn-paper bg-primary20 text-white'"/>
                        <button-paper-button :title="'Hubungi Kami  ➔'" :customClass="'btn-paper btn-outline text-white'"/>
                    </div>
                </div>
                <!-- <div class="hidden lg:block"> -->
                    <!-- </div> -->
                    <img src="/img/kertas-top.png" class="w-1/2 transform-translate-y-20"/>
            </div>
            <!-- <div class="gradient text-white"></div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section{
    background:url('/img/bg-top-kertas.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
<template>
    <section id="our-clients" class="our-clients mb-150 relative">
        <img src="/svg/Subtract-secondary10.svg" alt="logo" class="h-50 md:h-70 w-auto absolute top-[1rem]" />
        <div class="container mx-auto">
            <div class="section-content">
                <div class="md:w-50% transform-translate-z-10">
                    <h3 class="mb-7">Kami Berusaha Memberikan Keunggulan Terbaik untuk Anda.</h3>
                </div>
                <div class="flex justify-between">
                    <p class="text-[#B3B3B3] w-50% transform-translate-z-10">Kami memahami kepercayaan Anda kepada Kami. Itulah mengapa kami menghadirkan keunggulan di setiap layanan dan produk yang kami tawarkan.</p>
                    <div class="bottom flex justify-center md:justify-start items-center text-white">
                        <button-paper-button :title="'Lihat Semua  ➔'" :customClass="'btn-paper bg-primary30'" :isIcon="false"/>
                    </div>
                </div>
                <div class="testioni-box">
                    <div v-for="(item, index) in items" :key="index" class="flex-1 xl:mt-0 mt-7 justify-items-center">
                        <card-testimoni-card :img="item.image" :name="item.name" :company="item.company" :testimoni="item.testimoni"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>

<script setup>
const items = [
    {
        name: "Jakub S.",
        image: "/img/client/client-1.png",
        company: "PT Sejahtera Jaya",
        testimoni: "Produk Cahaya Maju Paper selalu berkualitas dan memuaskan! Barang berkualitas serta pelayanan yang cepat & tepat."
    },
    {
        name: "Denny",
        image: "/img/client/client-2.png",
        company: "PT Surya Printing",
        testimoni: "Produk Cahaya Maju Paper selalu berkualitas dan memuaskan! Barang berkualitas serta pelayanan yang cepat & tepat."
    },
    {
        name: "Monica",
        image: "/img/client/client-3.png",
        company: "PT Sukses Bersama",
        testimoni: "Produk Cahaya Maju Paper selalu berkualitas dan memuaskan! Barang berkualitas serta pelayanan yang cepat & tepat."
    },
    {
        name: "Deviana",
        image: "/img/client/client-4.png",
        company: "PT International Logistic",
        testimoni: "Produk Cahaya Maju Paper selalu berkualitas dan memuaskan! Barang berkualitas serta pelayanan yang cepat & tepat."
    },
];

</script>
<style scoped>
.testioni-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 75px;
}

@screen lt-xl {
.testioni-box {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);  
  }
}

@screen lt-md {
    .testioni-box {
    grid-template-columns: repeat(1, 1fr);
  }
}

@screen lt-md{
    .section-content {
        @apply px-3 transform-translate-z-10;
    }
}
</style>
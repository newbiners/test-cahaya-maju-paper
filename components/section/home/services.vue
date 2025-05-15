<template>
    <section id="services" class="">
        <div class="container mx-auto text-white service-container py-15 md:py-20 px-15 md:px-20 2xl:px-10">
            <div>
                <div ref="title" class="section-title">
                    <h2 class="text-secondary md:text-start text-center">pelanggan kami</h2>
                    <p class="w-full md:text-start text-center">
                        Selama lebih dari 39 tahun, kami telah dipercaya oleh berbagai sektor industri dan pelanggan dari berbagai latar belakang. Komitmen kami terhadap kualitas dan pelayanan menjadikan kami mitra utama bagi banyak bisnis. 
                    </p>
                </div>
                <div class="px-5" ref="section">
                    <div class="box">
                        <div
                        v-for="(item , index) in servicesItems"
                        :key="index"
                        class="item"
                        >
                        <div class="bg-white p-3 rounded-full shadow-2xl h-[90px] w-[90px]">
                            <img :src="item.icon" class="w-full h-full"/>
                        </div>
                        <div class="w-70%">
                            <p class="title-item">
                                {{item.title}}
                            </p>
                            <p class="md:text-start text-center">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from "vue-router";
// import { provide } from 'vue';
const servicesItems = [
    {
        title: "Industri Kemasan",
        description:
            "Menyediakan kertas berkualitas tinggi untuk kebutuhan kemasan makanan, minuman, dan produk konsumen lainnya.",
        icon: "/svg/service/industri-kemasan.svg",
    },
    {
        title: "Manufaktur & Industri Umum",
        description:
            "Melayani sektor industri yang membutuhkan kertas untuk proses produksi, labeling, dan dokumentasi.",
        icon: "/svg/service/manufaktur.svg",
    },
    {
        title: "Percetakan dan Publikasi",
        description:
            "Mendukung perusahaan percetakan dengan berbagai jenis kertas seperti HVS, art paper, dan ivory yang sesuai untuk buku, brosur, hingga majalah.",
        icon: "/svg/service/percetakan-produksi.svg",
    },
    {
        title: "Perusahaan & Kantor",
        description:
            "Menyediakan kertas kebutuhan administrasi, dokumen resmi, dan operasional kantor.",
        icon: "/svg/service/perusahaan-kantor.svg",
    },
];
onMounted(() => {
});
</script>

<style scoped lang="scss">
.service-container {
  background-image: url('/public/img/background-service-2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: auto;
  border-radius: 0px 100px 0px 100px;

  .box{
    display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);  
  gap: 30px;
  margin: 0 auto;

  .item {
    display: flex;
    gap: 10px;
    align-items: center;

    .title-item {
        font-size: 25px;
        font-weight: 600;
        padding-bottom: 7px;
    }
  }

}
@screen lt-md {
  .box{
      @apply flex flex-col;
      .item { 
        @apply flex-col;
          .title-item {
              padding-bottom: 3px;
               @apply text-center;
            }
        }
  }
}

}


</style>

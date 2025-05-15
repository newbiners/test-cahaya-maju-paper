<template>
    <section id="services" class="mt-[136px]">
        <div class="container bg-primary30 mx-auto text-white service-container px-[110px] pt-[91px] pb-[167px] rounded-tr-[100px] rounded-bl-[100px]">
            <div>
                <div ref="title" class="section-title">
                    <h2 class="md:text-start text-center uppercase h2-bold">pelanggan kami</h2>
                    <p class="w-full md:text-start text-center">
                        Selama lebih dari 39 tahun, kami telah dipercaya oleh berbagai sektor industri dan pelanggan dari berbagai latar belakang. Komitmen kami terhadap kualitas dan pelayanan menjadikan kami mitra utama bagi banyak bisnis. 
                    </p>
                </div>
                <div ref="section">
                    <div class="box">
                        <div
                        v-for="(item , index) in servicesItems"
                        :key="index"
                        class="item"
                        >
                        <div class="bg-white rounded-full h-[108px] w-[108px] mr-[34px] shadow-icon flex items-center justify-center">
                            <img :src="item.icon" class="w-[60px] h-[60px]"/>
                        </div>
                        <div class="w-70%">
                            <p class="pi-bold paragraph-32-reguler mb-[9px]">
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
//   background-image: url('/public/img/background-service-2.png');
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100vw;
//   height: auto;
//   border-radius: 0px 100px 0px 100px;

  .box{
    display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);  
  gap: 60px;
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
@screen lt-lg {
  .box{
      @apply flex flex-col;
    //   .item { 
    //     @apply flex-col;
    //       .title-item {
    //           padding-bottom: 3px;
    //            @apply text-center;
    //         }
    //     }
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

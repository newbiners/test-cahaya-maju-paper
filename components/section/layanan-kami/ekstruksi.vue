<template>
    <div class="container mx-auto py-20">
    <div class="section bg-[#EEF2FF] rounded-tr-[100px] rounded-bl-[100px] p-16">
        <div class="">
            <div class="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-10 lg:gap-20">
                <div class="flex flex-col items-start gap-4 mt-8">
                    <div class="h3-bold text-primary20 uppercase lg:text-start text-center flex flex-col items-start gap-2">
                        <span>Ekstruksi LDPE</span>
                        <p class="capitalize bg-secondary10 rounded-bl-[20px] rounded-tr-[20px] text-white py-2 px-8">Melelehkan Biji Plastik</p>
                    </div>
                    <div class="mb-8 mt-4">
                        <p class="text-netral">
                            Ekstrusi adalah proses melelehkan biji plastik menjadi sebuah layer plastik yang ditempelkan ke kertas dengan fungsi melindungi kertas dari eksposur air ataupun panas.
                            Dengan adanya plastik tertempel dikertas, maka kertas akan tahan air, minyak dan uap. Mesin ini digunakan untuk kebutuhan food packaging dan paperbag
                        </p>
                    </div>
                    <div class="flex gap-4 lg:justify-start justify-center w-full">
                        <NuxtLink @click="click" class="btn-paper bg-primary20 text-white">Detail Mesin  ➔</NuxtLink>
                    </div>
                </div>
               <img src="/public/img/layanan/img-ekstruksi.png" class="w-45% lg:w-50% h-auto lg:h-120 order-first lg:order-last"/>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>
//   defineProps({
//         img: {
//             type: String
//         },
//         title: {
//           type: String,
//           required: true,
//         },
//         subTitle: {
//             type: String
//         },
//         desc: {
//           type: String,
//           default: '',
//         },
//         link: {
//           type: String
//         },
//         type: {
//             type: String
//         },
//         click: {
//     type: Function,
//     default: () => {},
//   }
//       });
</script>
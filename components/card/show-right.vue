<template>
    <div class="section bg-[#EEF2FF] flex items-center rounded-tr-[100px] rounded-bl-[100px] mb-40 p-10">
        <div class="">
            <div class="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-10 lg:gap-20">
                <div class="flex flex-col items-start gap-12 mt-12">
                    <div class="h3-bold text-primary20 uppercase w-full lg:text-start text-center flex lg:justify-start justify-center items-center gap-5"><span>{{ title }}</span><p class="capitalize bg-secondary10 rounded-bl-[20px] rounded-tr-[20px] text-white py-2 px-4" v-if="subTitle">{{ subTitle }}</p></div>
                    <div>
                        <p class="text-netral lg:text-start text-center">
                            {{ desc }}
                        </p>
                        <p class="mt-8 lg:text-start text-center">
                            Aplikasi: {{ type }}
                        </p>
                    </div>
                    <div class="flex gap-4 lg:justify-start justify-center w-full">
                        <NuxtLink @click="click" class="btn-paper bg-primary20 text-white">Variasi Kertas  ➔</NuxtLink>
                    </div>
                </div>
               <img :src="img" class="w-45% lg:w-50% h-auto lg:h-120 order-first lg:order-last"/>
            </div>
        </div>
    </div>
</template>
<script setup>
  defineProps({
        img: {
            type: String
        },
        title: {
          type: String,
          required: true,
        },
        subTitle: {
            type: String
        },
        desc: {
          type: String,
          default: '',
        },
        link: {
          type: String
        },
        type: {
            type: String
        },
        click: {
    type: Function,
    default: () => {},
  }
      });
</script>
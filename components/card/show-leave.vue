<template>
    <div class="section bg-white mb-40">
        <div class="">
            <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-start lg:items-start gap-10 lg:gap-20">
                <img :src="img" class="w-45% h-auto" />
                <div class="flex flex-col items-start gap-12 mt-12">
                    <div class="h3-bold text-primary20 uppercase lg:text-start text-center md:flex-row flex-col lg:justify-start justify-center w-full flex items-center gap-5"><span>{{ title }}</span><p class="capitalize bg-secondary10 rounded-bl-[20px] rounded-tr-[20px] text-white py-2 px-4" v-if="subTitle">{{ subTitle }}</p></div>
                    <div>
                        <p class="text-netral">
                           {{ desc }}
                        </p>
                        <p class="mt-8">
                            Aplikasi: {{ type }}
                        </p>
                    </div>
                    <div class="flex gap-4 w-full lg:justify-start justify-center">
                        <NuxtLink @click="click" class="btn-paper bg-primary20 text-white">Variasi Kertas  ➔</NuxtLink>
                    </div>
                </div>
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
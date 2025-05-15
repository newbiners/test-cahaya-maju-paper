<template>
    <div class="section bg-netral20 flex items-center rounded-tr-[100px] rounded-bl-[100px] mb-40 p-10">
        <div class="">
            <div class="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-10 lg:gap-20">
                <div class="flex flex-col w-65% items-start gap-12 mt-12">
                    <div class="h3-bold text-primary20 uppercase lg:text-start text-center"><span>{{ title }}</span><p class="capitalize bg-secondary10 rounded-bl-[20px] rounded-tr-[20px] text-white py-2 px-4" v-if="subTitle">{{ subTitle }}</p></div>
                    <div>
                        <p class="text-netral" v-if="desc">
                            {{ desc }}
                        </p>
                        <ul class="pl-2 py-5">
                            <li v-for="(item ,index) in point_desc">{{index + 1}} .  <span>{{ item }} </span></li>
                        </ul>
                        <img :src="img_desc" v-if="img_desc" class="w-90% h-auto" />
                        <p class="text-netral" v-if="desc2">
                            {{ desc2 }}
                        </p>
                    </div>
                    <div class="flex gap-4 lg:justify-start justify-center w-full">
                        <NuxtLink @click="click" class="btn-paper bg-primary20 text-white">Detail Mesin  ➔</NuxtLink>
                    </div>
                </div>
                <div v-if="img2" class="w-55% order-first lg:order-last">
                    <img :src="img" class="w-full h-45 lg:h-45 order-first lg:order-last"/>
                    <img :src="img2" v-if="img2" class="lg:block hidden w-full h-50 lg:h-80 order-first transform-translate-x-10 lg:order-last"/>
                </div>
                <div class="flex justify-center items-center w-65% lg:min-h-130 order-first lg:order-last" v-else>
                    <img :src="img" class="w-full h-auto" />
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
        img_desc: {
            type: String
        },
        img2: {
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
        desc2: {
          type: String,
          default: '',
        },
        point_desc: {
          type: [],
          default: [],
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
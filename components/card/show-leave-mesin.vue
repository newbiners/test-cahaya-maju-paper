<template>
    <div class="section bg-white mb-40">
        <div class="">
            <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-start lg:items-start gap-10 lg:gap-20">
                <div class="w-65% lg:min-h-120 flex justify-center items-center">
                    <img :src="img" class="w-full h-auto" />
                </div>
                
                <div class="flex flex-col w-65% items-start gap-12 mt-12">
                    <div class="h3-bold text-primary20 uppercase lg:text-start text-center"><span>{{ title }}</span><p class="capitalize bg-secondary10 rounded-bl-[20px] rounded-tr-[20px] text-white py-2 px-4" v-if="subTitle">{{ subTitle }}</p></div>
                    <div>
                        <p v-if="desc" class="text-netral">
                           {{ desc }}
                        </p>
                        <ul>
                            <li v-for="(item ,index) in point_desc">{{index + 1}} .  <span>{{ item }} </span></li>
                        </ul>
                         <p v-if="desc2" class="text-netral">
                           {{ desc2 }}
                        </p>
                        <img :src="img_desc" v-if="img_desc" class="w-90% h-auto" />
                    </div>
                    <div class="flex gap-4 w-full lg:justify-start justify-center">
                        <NuxtLink @click="click" class="btn-paper bg-primary20 text-white">Detail Mesin  ➔</NuxtLink>
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
        img_desc: {
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
<template>
    <div class="paper-card-container group transition-all duration-500 ease-in-out relative">
      <div class="img-box">
        <img :src="img" alt="logo" class="h-full w-full" />
      </div>
      <div class="px-[48px] min-h-[500px] flex flex-col justify-between gap-0">
        <div>
          <p class="title-paper p1-bold paragraph-32-bold">{{ title }}</p>
          <p class=" text-justify">
            {{ desc }}
          </p>
        </div>
          <div class="box-button-paper flex justify-end pb-[51px]">
          <button-paper-button
          :link="link"
            :title="'Lihat Selengkapnya ➔'"
            :isIcon="false"
            :customClass="'btn-paper btn-outline border-primary30 group-hover:border-white transition-all duration-300'"
          />
        </div>
      </div>
      <!-- <div class="px-[48px] pt-[80px] pb-[51px] flex flex-col justify-end">
        <div class="box-button-paper flex justify-end">
          <button-paper-button
          :link="link"
            :title="'Lihat Selengkapnya ➔'"
            :isIcon="false"
            :customClass="'btn-paper btn-outline border-primary30 group-hover:border-white transition-all duration-300'"
          />
        </div>
      </div> -->
    </div>
  </template>
    <style scoped>
    .paper-card-container {
      box-shadow: 0px 5.08px 10.16px 3.81px #1E1E1E0D;
      @apply w-full h-full text-primary30 rounded-tr-[100px] rounded-bl-[100px] bg-netral20 flex flex-col;
      &:hover {
      @apply bg-primary30 text-white;
    }
    }
    .img-box {
      @apply overflow-hidden rounded-tr-[100px] h-[337px];
    }
    .title-paper {
      @apply text-secondary group-hover:text-white mt-[43px] mb-[18px];
    }
    .button-paper {
      @apply transition-all duration-300;
    }
    </style>
      <script setup>
      defineProps({
        img: {
            type: String
        },
        title: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          default: '',
        },
        link: {
          type: String
        }
      });
      </script>
      
    
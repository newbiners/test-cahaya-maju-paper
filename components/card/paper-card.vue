<template>
    <div class="paper-card-container group transition-all duration-500 ease-in-out relative">
      <div class="img-box">
        <img :src="img" alt="logo" class="h-full w-full" />
      </div>
      <div class="px-10 pt-5 pb-10 flex flex-col justify-start h-40%">
          <p class="title-paper text-2xl mb-4">{{ title }}</p>
          <p class="text-base text-justify">
              {{ desc }}
          </p>
      </div>
      <div class="px-10 pb-10 pt-6 flex flex-col justify-end">
        <div class="box-button-paper flex justify-end">
          <button-paper-button
          :link="link"
            :title="'Lihat Selengkapnya ➔'"
            :isIcon="false"
            :customClass="'btn-paper btn-outline border-primary30 group-hover:border-white transition-all duration-300'"
          />
        </div>
      </div>
    </div>
  </template>
    <style scoped>
    .paper-card-container {
      @apply w-full h-full shadow-2xl text-primary30 rounded-tr-[100px] rounded-bl-[100px] bg-white flex flex-col justify-between;
      &:hover {
      @apply bg-primary30 text-white;
    }
    }
    .img-box {
      @apply overflow-hidden rounded-tr-[100px] h-[250px] ;
    }
    .title-paper {
      font-size: 32px;
      @apply text-secondary group-hover:text-white;
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
      
    
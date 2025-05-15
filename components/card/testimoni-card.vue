<template>
    <div class="w-full sm:w-[250px]">
        <div class="relative h-20 w-full">
  <div class="h-[126px] w-[126px] absolute left-1/2 transform -translate-x-1/2">
    <img :src="img" alt="logo" class="h-full w-full"/>
  </div>
</div>
        <div class="shadow-2xl px-[30px] py-[60px] bg-white text-center rounded-tr-[40px] rounded-bl-[40px]">
            <p class="font-600">{{ name }}</p>
            <p class="mb-10">{{ company }}</p>
            <p>{{ testimoni }}</p>
        </div>
    </div>
</template>
<script setup>
defineProps({
  img: {
      type: String
  },
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  testimoni: {
    type: String
  }
});
</script>
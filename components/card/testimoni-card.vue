<template>
    <div class="w-full">
        <div class="relative h-20 w-full">
  <div class="h-[176px] w-[176px] absolute left-1/2 transform -translate-x-1/2">
    <img :src="img" alt="logo" class="h-full w-full"/>
  </div>
</div>
        <div class="shadow-icon px-[48px] pb-[68px] pt-[136px] bg-netral20 text-center rounded-tr-[30px] rounded-bl-[30px]">
            <p class="paragraph17-semibold">{{ name }}</p>
            <p class="mb-[51px]">{{ company }}</p>
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
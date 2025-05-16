<template>
    <div class="w-full">
        <div class="relative h-20 w-full">
  <div class="h-auto w-[200px] 2xl:w-[250px] absolute left-1/2 transform -translate-x-1/2">
    <img :src="img" alt="logo" class="h-full w-full"/>
  </div>
</div>
        <div class="shadow-icon px-[48px] pb-[68px] pt-[150px] 2xl:pt-[200px] bg-netral20 text-center rounded-tr-[30px] rounded-bl-[30px]">
            <p class="paragraph-17-semibold">{{ name }}</p>
            <p class="mb-[51px] paragraph-17-reguler">{{ company }}</p>
            <p class="paragraph-17-reguler">{{ testimoni }}</p>
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
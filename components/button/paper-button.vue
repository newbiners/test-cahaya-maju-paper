<template>
    <NuxtLink :to="link">
      <span :class="customClass">
        <p>{{ title }}</p>
      </span>
    </NuxtLink>
  </template>
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
    isIcon: {
        type: Boolean,
        default: true
    },
    link: {
      type: String
    }
  });
  </script>
  
<script lang="ts" setup>
useSeoMeta(
    {
        title: "Delivering Smart & Effective Digital Solutions",
        description:
            "Bitzania delivers high-quality e-commerce websites, custom web solutions, mobile apps, and graphic design to help businesses grow online. With 9+ years of expertise, we provide tailored digital solutions for startups, enterprises, and agencies. Get started today!",
    },
    {
        tagPriority: "high", // overrides route rules
    }
);
</script>

<template>
    <div class="page page-index bg-[#EEF2FF]">
        <section-home-hero />
        <!-- <section-home-bussines-solution />
        <section-home-customized-solution />
        <section-home-why-us /> -->
        <section-home-our-works />
        <section-home-expertise />
        <section-home-services />
        <section-home-our-clients />
        <div class="temukan-penawaran-home">
            <section-home-temukan-penawaran-terbaik/>
        </div>
        <section-home-contact-us />
    </div>
</template>

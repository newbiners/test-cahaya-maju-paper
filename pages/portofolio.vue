<template>
    <div class="page page-index">
        <section-portofolio-top />
        <section-portofolio-our-works :item_our_works="item_our_works" :class_bg="'bg-white'"/>
        <section-portofolio-our-client />
        <section-portofolio-contact-us />
    </div>
</template>

<script setup>

const item_our_works = [
    {
        image: "/img/portfolio/oggi-furniture.png",
        title: "Oggi Furniture",
        description: "",
        tags: ["E-Commerce"],
        backgroundColor: "#F6F6F6",
        color: "#fff",
    },
    {
        image: "/img/portfolio/iLuvRun.png",
        title: "iLuvRun",
        description: "",
        tags: ["Mobile Apps"],
        backgroundColor: "#FF0000",
        color: "#fff",
    },
    {
        image: "/img/portfolio/verist.png",
        title: "Verist",
        description: "",
        tags: ["E-Commerce"],
        backgroundColor: "#F5F3EB",
        color: "#fff",
    },
    {
        image: "/img/portfolio/mobile-apps.png",
        title: "Pasar Atom",
        description:
            "",
        tags: ["Mobile Apps"],
        backgroundColor: "#B7242C",
        color: "#000",
    },
    {
        image: "/img/portfolio/nextgen.png",
        title: "Nextgen Indonesia",
        description: "",
        tags: ["Website"],
        backgroundColor: "#000",
        color: "#fff"
    },
    {
        image: "/img/portfolio/golden-sunkist.png",
        title: "PT Golden Sunkist Plastindo",
        description: "",
        tags: ["Cloud Application"],
        backgroundColor: "#D9D9D9",
        color: "#fff",
    },
    {
        image: "/img/portfolio/global-sukses.png",
        title: "Global Mas Sukses",
        description: "",
        tags: ["Graphic Design"],
        backgroundColor: "#ffff",
        color: "#fff",
    },
    {
        image: "/img/portfolio/depot-kamera.png",
        title: "Depot Kamera",
        description: "",
        tags: ["E-Commerce"],
        backgroundColor: "#F0EFF5",
        color: "#000",
    },
    {
        image: "/img/portfolio/ohmypet.png",

        title: "Oh My Pet!",
        description: "",
        tags: ["Graphic Design"],
        backgroundColor: "#F5F3EB",
        color: "#fff",
    },
    {
        image: "/img/portfolio/united-farmatic.png",
        title: "PT United Farmatic Indonesia",
        description: "",
        tags: ["Mobile Apps"],
        backgroundColor: "#084391",
        color: "#000",
    },
    {
        image: "/img/portfolio/iLuvRun.png",
        title: "iLuvRun",
        description: "",
        tags: ["Mobile Apps"],
        backgroundColor: "#FF0000",
        color: "#fff",
    },
    {
        image: "/img/portfolio/mitra-sejati.png",
        title: "CV Mitra Sejati Distribusi",
        description: "",
        tags: ["Mobile Apps"],
        backgroundColor: "#49A7D6",
        color: "#fff",
    },
    {
        image: "/img/portfolio/derrimut-dental.png",
        title: "Derrimut Dental",
        description: "",
        tags: ["Website"],
        backgroundColor: "#37A4FB",
        color: "#fff",
    },
    {
        image: "/img/portfolio/moire.png",
        title: "Moire",
        description: "",
        tags: ["Website"],
        backgroundColor: "#B0BED5",
        color: "#fff",
    },
    {
        image: "/img/portfolio/global-sukses.png",
        title: "Global Mas Sukses",
        description: "",
        tags: ["Graphic Design"],
        backgroundColor: "#ffff",
        color: "#fff",
    },
    {
        image: "/svg/cloud-see-our-work-1.svg",
        title: "Grand Gion",
        description: "",
        tags: ["Cloud Application"],
        color: "#000",
    },
    {
        image: "/svg/cloud-see-our-work-2.svg",
        title: "PT Golden Sunkist Plastindo",
        description: "",
        tags: ["Cloud Application"],
        color: "#fff",
    },
    {
        image: "/svg/cloud-see-our-work-3.svg",
        title: "PT Samudera Kencana Sejahtera",
        description: "",
        tags: ["Cloud Application"],
        color: "#fff",
    },
    {
        image: "/svg/real-fit-catering.svg",
        title: "Real Fit Catering",
        description: "",
        tags: ["Graphic Design"],
        color: "#fff",
    },
];


</script>
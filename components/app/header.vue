<template>
    <header class="fixed top-0 left-0 w-full z-50 text-white" :class="classes">
        <Navbar />
    </header>
</template>

<style scoped>
header {
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    @apply py-4;
}
.nav-down {
    top: -100px;
}
.nav-up {
    top: 0px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    @apply bg-primary30;
}
</style>

<script setup>
// only show header on scroll up but not on top
const isScrolled = ref(false);
let lastScrollY = ref(0);
let delta = ref(0);
const navbar_height = ref(40);

const classes = ref("");

const checkScroll = () => {
    const currentScrollY = window.scrollY;
    isScrolled.value = currentScrollY > navbar_height.value;
    delta.value = currentScrollY - lastScrollY.value;
    if (currentScrollY > navbar_height.value && delta.value > 0) {
        classes.value = "nav-down";
        console.log("nav-down");
    } else if (currentScrollY > navbar_height.value && delta.value < 0) {
        classes.value = "nav-up";
        console.log("nav-up");
    } else {
        classes.value = "";
    }
    lastScrollY.value = currentScrollY;
};

onMounted(() => {
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
</script>

<template>
    <section id="company" class="py-20 company bg-[#F6F6F6]">
        <div class="container mx-auto">
            <div class="section-content" ref="section">
                <div
                    class="flex flex-1 flex-col lg:flex-row gap-16"
                >
                
                    <div class="flex-1 section-image">
                        <img
                            src="/img/expertise-photo.png"
                            class="z-1 w-full h-auto"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div class="flex-1 flex flex-col gap-12">
                        <div class="content-title">
                            <h2 class="text-wrap mt-0 text-center md:text-start w-full lg:w-90%">We are Committed to provide optimal
                                Services for the Future of Your Business
                            </h2>
                        </div>
                        <div class="contents flex flex-col gap-12">
                            <p class="w-full lg:w-80%">
                                We are a creative and innovative team that focuses on digital transformation,
                                brand activation strategies, and strengthening online presence. 
                            </p>
                            <div class="flex items-start gap-4">
                                <img src="/svg/mark-check-blue.svg" class="w-6 h-6"/>
                                <p class="w-full lg:w-80%"> We provide cutting-edge strategies that drive your business forward in the digital age.
                                </p>
                            </div>
                            <div class="flex items-start gap-4">
                                <img src="/svg/mark-check-blue.svg" class="w-6 h-6"/>
                                <p class="w-full lg:w-80%"> Our focus is on strengthening your brand and creating meaningful engagement with your target audience.
                                </p>
                            </div>
                        </div>
                        <div class="bottom text-center md:text-start">
                            <button class="btn btn-primary">View Company Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const section = ref(null);
const { $gsap } = useNuxtApp();
onMounted(() => {
    $gsap.from(".company .content-title", {
        scrollTrigger: {
            trigger: ".company .content-title",
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });

    $gsap.from(".company .contents", {
        scrollTrigger: {
            trigger: ".company .contents",
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });

    $gsap.from(".company .bottom", {
        scrollTrigger: {
            trigger: ".company .bottom",
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });
});
</script>

<style scss scoped>
.section-content h1,p{
    font-family: 'Inter', sans-serif;
}
</style>
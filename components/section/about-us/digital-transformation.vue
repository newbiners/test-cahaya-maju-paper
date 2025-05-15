<template>
    <section id="digital-transformation" class="py-20 digital-transformation">
        <div class="container mx-auto">
            <div ref="section">
                <div
                    class="flex flex-1 flex-col lg:flex-row gap-16"
                >
                    <div class="flex-1 flex flex-col gap-16">
                        <div class="content-title">
                            <h3 class="text-wrap mt-0 text-center md:text-start w-full lg:w-3/4">We’ve completed numerous projects driving
                                digital transformation.
                            </h3>
                        </div>
                        <div class="contents flex flex-col gap-16">
                            <p class="w-full lg:w-80%">
                                From intuitive user experience design to sophisticated digital technology implementation,
                                every project we work on has a real impact on our clients' business growth and efficiency.
                            </p>
                            <p class="w-full lg:w-80%">
                                We have helped many companies design strong brand identities, improve online presence,
                                and create more engaging and functional user experiences. 
                            </p>

                        </div>
                        <div class="bottom text-center md:text-start">
                            <button class="btn btn-primary">View Portofolio</button>
                        </div>
                    </div>

                    <div class="flex-1 section-image">
                        <img
                            src="/img/digital-img.png"
                            class="z-1 w-full h-auto"
                            loading="lazy"
                            decoding="async"
                        />
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
    $gsap.from(".digital-transformation .content-title", {
        scrollTrigger: {
            trigger: ".digital-transformation .content-title",
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });

    $gsap.from(".digital-transformation .contents", {
        scrollTrigger: {
            trigger: ".digital-transformation .contents",
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });

    $gsap.from(".digital-transformation .bottom", {
        scrollTrigger: {
            trigger: ".digital-transformation .bottom",
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
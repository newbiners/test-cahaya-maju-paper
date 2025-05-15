<template>
    <section id="our-clients" class="our-clients">
        <div class="flex items-center justify-between gap-12">
            <hr class="w-1/4 border-1.5 color-[#98A2B3]" />
            <h1 class="text-center">Relied on and Trusted by Them</h1>
            <hr class="w-1/4 border-1.5 color-[#98A2B3]" />
        </div>
        <div class="section-content">
            <div class="marquee mt-24">
                <div class="marquee__group">
                    <div
                        class="marquee__item image-wrapper"
                        v-for="item in items1"
                        :key="item.name"
                    >
                        <img
                            class="my-auto"
                            :src="item.image"
                            :alt="item.name"
                            :title="item.name"
                        />
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group">
                    <div
                        class="marquee__item image-wrapper"
                        v-for="item in items1"
                        :key="item.name"
                    >
                        <img
                            class="my-auto"
                            :src="item.image"
                            :alt="item.name"
                            :title="item.name"
                        />
                    </div>
                </div>
            </div>
            <div class="marquee marquee--reverse mt-24">
                <div class="marquee__group">
                    <div
                        class="marquee__item image-wrapper"
                        v-for="item in items2"
                        :key="item.name"
                    >
                        <img
                            class="my-auto"
                            :src="item.image"
                            :alt="item.name"
                            :title="item.name"
                        />
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group">
                    <div
                        class="marquee__item image-wrapper"
                        v-for="item in items2"
                        :key="item.name"
                    >
                        <img
                            class="my-auto"
                            :src="item.image"
                            :alt="item.name"
                            :title="item.name"
                        />
                    </div>
                </div>
            </div>
            <div class="marquee mt-24">
                <div class="marquee__group">
                    <div
                        class="marquee__item image-wrapper"
                        v-for="item in items3"
                        :key="item.name"
                    >
                        <img
                            class="my-auto"
                            :src="item.image"
                            :alt="item.name"
                            :title="item.name"
                        />
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group">
                    <div
                        class="marquee__item image-wrapper"
                        v-for="item in items3"
                        :key="item.name"
                    >
                        <img
                            class="my-auto"
                            :src="item.image"
                            :alt="item.name"
                            :title="item.name"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="section-bottom container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 justify-center items-center mt-32">
            <div class="item col-span-1 bg-[#F6F6F6] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.11)] rounded-1.5 flex flex-col items-center justify-between gap-8 p-12 box-border">
                <p class="text-center text-5 line-height-loose">“I've been using this web hosting service for a few months
                    and it's been nothing but problems.
                    My website has gone down multiple times and the customer service has been unresponsive.
                    I would not recommend this company."
                </p>
                <div class="flex items-center gap-4">
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                </div>
                <div class="flex flex-col gap-0 items-center">
                    <img src="/svg/client-1.svg" />
                    <div class="font-size-6.75 fw-semibold">Michael Brown</div>
                    <div class="font-size-5.25 color-[#00000]  opacity-60">Online Entrepreneur</div>
                </div>
            </div>
            <div class="item col-span-1 bg-[#F6F6F6] shadow-[0px_6px_12.3px_0px_rgba(0,0,0,0.11)] rounded-1.5 flex flex-col items-center justify-between gap-8 p-12 box-border">
                <p class="text-center text-5 line-height-loose">“I've been using this web hosting service for a few months now and overall it's been fine.
                    The uptime has been good and I haven't had any major issues.
                    The pricing is also reasonable.
                    Nothing particularly stands out as exceptional”
                </p>
                <div class="flex items-center gap-4">
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                </div>
                <div class="flex flex-col gap-0 items-center">
                    <img src="/svg/client-2.svg" />
                    <div class="font-size-6.75 fw-semibold">Tom Williams</div>
                    <div class="font-size-5.25 color-[#00000]  opacity-60">Software Developer</div>
                </div>
            </div>
            <div class="item col-span-1 bg-[#F6F6F6] shadow-[0px_6px_12.3px_0px_rgba(0,0,0,0.11)] rounded-1.5 flex flex-col items-center justify-between gap-8 p-12 box-border">
                <p class="text-center text-5 line-height-loose">“I've been using this web hosting service for a few months and it's been nothing but problems.
                    My website has gone down multiple times and the customer service has been unresponsive.
                    I would not recommend this company."
                </p>
                <div class="flex items-center gap-4">
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                    <img src="/svg/icon-star.svg" />
                </div>
                <div class="flex flex-col gap-0 items-center">
                    <img src="/svg/client-1.svg" />
                    <div class="font-size-6.75 fw-semibold">Michael Brown</div>
                    <div class="font-size-5.25 color-[#00000]  opacity-60">Online Entrepreneur</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.marquee__item img {
    filter: grayscale(100%);
    width: 100%;
    max-height: 60px;
}
.marquee {
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 14);
    --duration: 50s;
    --scroll-start: 0;
    --scroll-end: calc(-100% - var(--gap));
}

.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    mask-image: linear-gradient(
        var(--mask-direction, to right),
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 20%,
        hsl(0 0% 0% / 1) 80%,
        hsl(0 0% 0% / 0)
    );
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
}

.section-bottom div,p{
    font-family: 'Source Sans Pro', sans-serif;
}

@media (prefers-reduced-motion: reduce) {
    .marquee__group {
        animation-play-state: paused;
    }
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(var(--scroll-start));
    }
    to {
        transform: translateX(var(--scroll-end));
    }
}

@keyframes scroll-y {
    from {
        transform: translateY(var(--scroll-start));
    }
    to {
        transform: translateY(var(--scroll-end));
    }
}

/* Element styles */
/* Parent wrapper */
.wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto;
    max-width: 100vw;
}

.wrapper--vertical {
    flex-direction: row;
    height: 100vh;
}

@keyframes fade {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
@keyframes go {
    to {
        inset-inline-start: calc(var(--marquee-item-width) * -1);
    }
}
@media (prefers-reduced-motion) {
    .marquee {
        justify-content: space-evenly;
        mask-image: unset;
    }

    .marquee__item {
        position: unset;
        inset-inline-start: unset;
        transform: unset;
    }

    @keyframes go {
        to {
            inset-inline-start: unset;
        }
    }
}
</style>

<script setup>
const items1 = [
    {
        name: "Baby Jogger",
        image: "/img/brands/baby-jogger.svg",
    },
    {
        name: "Coleman",
        image: "/img/brands/coleman.svg",
    },
    {
        name: "DC Shoes",
        image: "/img/brands/dcshoes.png",
    },
    {
        name: "Elmer's",
        image: "/img/brands/elmers.svg",
    },
    {
        name: "Graco",
        image: "/img/brands/graco.svg",
    },
    {
        name: "Marmot",
        image: "/img/brands/marmot.png",
    },
    {
        name: "Oster",
        image: "/img/brands/oster.svg",
    },
    {
        name: "Quiksilver",
        image: "/img/brands/quiksilver.png",
    },
    {
        name: "World Gym",
        image: "/img/brands/client-logo-worldgym.png",
    },
];

const items2 = [
    {
        name: "Roxy",
        image: "/img/brands/roxy.png",
    },
    {
        name: "Sharpie",
        image: "/img/brands/sharpie.svg",
    },
    {
        name: "Simon",
        image: "/img/brands/simon.png",
    },
    {
        name: "Zenni",
        image: "/img/brands/zenni.png",
    },
    {
        name: "North Pole Engineering",
        image: "/img/brands/npe.svg",
    },
    {
        name: "Expo",
        image: "/img/brands/expo.svg",
    },
    {
        name: "Parker",
        image: "/img/brands/parker.svg",
    },
    {
        name: "Rubbermaid",
        image: "/img/brands/rubbermaid.svg",
    },
];
const items3 = [
    {
        name: "Oggi Furniture",
        image: "/img/brands/client-logo-oggi.png",
    },
    {
        name: "Golden Sunkist",
        image: "/img/brands/client-logo-goldensunkist.png",
    },
    {
        name: "Daalderop",
        image: "/img/brands/daalderop.png",
    },
    // {
    //     name: "Depot Kamera",
    //     image: "/img/brands/client-logo-depotkamera.png",
    // },
    // {
    //     name: "Grand Gion",
    //     image: "/img/brands/client-logo-grand-gion.png",
    // },
    {
        name: "Great Pumpkin Seeds",
        image: "/img/brands/client-logo-great-pumpkin.png",
    },
    {
        name: "Industria Remodeling",
        image: "/img/brands/client-logo-industria.png",
    },
    {
        name: "Moire Photo",
        image: "/img/brands/client-logo-moire.png",
    },
    {
        name: "Tricopla",
        image: "/img/brands/client-logo-tricopla.png",
    },
    {
        name: "Verist",
        image: "/img/brands/client-logo-verist.png",
    },
];

const { $gsap } = useNuxtApp();
onMounted(() => {
    $gsap.from(".our-clients .item", {
        scrollTrigger: {
            trigger: ".our-clients .item",
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });
});
</script>

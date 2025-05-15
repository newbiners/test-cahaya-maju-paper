<template>
    <section id="hero" class="bg-[#F6F6F6] bussines-solution">
        <div class="container mx-auto py-16">
            <h1 class="text-center mx-auto w-2/3">Our Strengths in Providing the Right Business Solutions</h1>
            <p class="text-center mx-auto mt-8">We bring customized solutions to every business, helping them thrive
                and succeed in an ever-changing market.
            </p>
            <div class="flex justify-center mt-28 gap-12 lg:gap-12 items-start flex-wrap">
                <div class="item flex flex-col gap-4 items-center justify-center w-64 py-6 px-4 rounded-4.5">
                    <img src="/svg/mark-check-white.svg" alt="check icon" class="default-icon" />
                    <img src="/svg/mark-check-white-hover.svg" alt="check icon" class="icon hover-icon hidden" />
                    <p class="text-center fw-600">Solution-Focused</p>
                    <p class="text-wrap text-center">
                        We don’t just build software—we solve business problems with strategic,
                        user-friendly, and scalable solutions.
                    </p>
                </div>
                <div class="item flex flex-col gap-4 items-center justify-center w-64 py-6 px-4 rounded-4.5">
                    <img src="/svg/mark-check-white.svg" alt="check icon" class="default-icon" />
                    <img src="/svg/mark-check-white-hover.svg" alt="check icon" class="icon hover-icon hidden" />
                    <div class="text-center fw-600">Business-Centric Approach</div>
                    <p class="text-wrap text-center">
                        Every project is designed to align with your growth goals,
                        ensuring a direct impact on your success.
                    </p>
                </div>
                <div class="item flex flex-col gap-4 items-center justify-center w-64 py-6 px-4 rounded-4.5">
                    <img src="/svg/mark-check-white.svg" alt="check icon" class="default-icon" />
                    <img src="/svg/mark-check-white-hover.svg" alt="check icon" class="icon hover-icon hidden" />
                    <div class="text-center fw-600">Transparent Communication</div>
                    <p class="text-wrap text-center">
                        Regular updates, clear expectations, and no surprises—we keep you
                        informed every step of the way.
                    </p>
                </div>
                <div class="item flex flex-col gap-4 items-center justify-center w-64 py-6 px-4 rounded-4.5">
                    <img src="/svg/mark-check-white.svg" alt="check icon" class="default-icon" />
                    <img src="/svg/mark-check-white-hover.svg" alt="check icon" class="icon hover-icon hidden" />
                    <div class="text-center fw-600">Reliable & On-Time Delivery</div>
                    <p class="text-wrap text-center">
                        We value your time, ensuring timely and high-quality project
                        completion without compromise.
                    </p>
                </div>
                <div class="item flex flex-col gap-4 items-center justify-center w-64 py-6 px-4 rounded-4.5">
                    <img src="/svg/mark-check-white.svg" alt="check icon" class="default-icon" />
                    <img src="/svg/mark-check-white-hover.svg" alt="check icon" class="icon hover-icon hidden" />
                    <div class="text-center fw-600">Proven Expertise & Experience</div>
                    <p class="text-wrap text-center">
                        With a track record of successfully delivering digital solutions across industries,
                        we leverage best practices to bring your vision to life.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { gsap } from 'gsap';
const containerRef = ref(null);

const title = ref(null);
const description = ref(null);
const changingText = ref(null);

const { $gsap } = useNuxtApp();
onMounted(() => {
    $gsap.from(".bussines-solution .item", {
        scrollTrigger: {
            trigger: ".bussines-solution .item",
            start: "top 75%",
            end: "bottom bottom",
        },
        opacity: 0,
        y: 20,
        scale: 0.95,
    });
});
</script>

<style lang="scss" scoped>
.bussines-solution .item {
    transition: all 0.3s ease;
    &:hover {
        @apply bg-white text-black;
        box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.11);
        // img{
        //     filter: brightness(0) invert(1);
        // }
    }
    &:hover .default-icon {
        display: none;
    }

    &:hover .hover-icon {
        display: block;
    }
}
</style>

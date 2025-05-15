<template>
    <section id="our-works" :class="class_bg" class="py-0 pt-13 pb-35 our-works" ref="section">
        <div class="text-center container mx-auto my-0">
            <h1 class="">See Our Work</h1>
            <p class="w-full md:w-80% lg:w-40% mx-auto opacity-80% mt-4">
                We’ve helped businesses, freelancers, and agencies create stunning websites that deliver results.
            </p>
        </div>

        <div class="section-content mt-16">
            <div class="container mx-auto relative">

                <TransitionGroup
                    name="grid"
                    tag="div"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                >
                    <div
                        v-for="(item, index) in item_our_works"
                        :key="item.id"
                        class="our-works--item"
                    >
                        <div
                            class="our-works--item-image rounded-2xl border border-current border-1 overflow-hidden"
                            :class="['animate', item.animationDirection]"
                            :style="{
                                '--animation-duration':
                                    item.animationDuration || '60s',
                                '--animation-end':
                                    item.animationEnd || '-66.67%',
                            }"
                        >
                            <nuxt-img
                                v-if="item.hoverImage"
                                :src="item.hoverImage"
                                alt="Project Image"
                                lazy
                            />

                            <nuxt-img
                                v-else
                                :src="item.image"
                                :style="{backgroundColor: item.backgroundColor}"
                                class="w-full"
                                alt="Project Image"
                                lazy
                            />
                        </div>
                        <div class="our-works--item-content mt-4">
                            <div
                                class="our-works--item-tags flex flex-row flex-wrap gap-2 justify-center items-start md:justify-start"
                            >
                                <template
                                    v-for="(tag, index) in item.tags"
                                    :key="tag"
                                >
                                    <span class="text-5 py-2 text-nowrap">{{
                                        tag
                                    }}</span>

                                    <span
                                        v-if="index < item.tags.length - 1"
                                        class="text-4 py-2 text-nowrap"
                                        >|</span
                                    >
                                </template>
                            </div>
                            <div class="text-center md:text-left mb-4 text-6 fw-semibold">
                                {{ item.title }}
                            </div>
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        </div>
        <div class="section-bottom mt-20 text-center flex justify-center">
            <NuxtLink to="/portofolio" class="btn btn-primary">See More Portofolio</NuxtLink>
            <!-- <button class="btn btn-primary">See More Portofolio</button> -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
.grid .our-works--item {
    transition: all 0.5s ease;
    filter: saturate(1) brightness(1);
    opacity: 1;
}

.grid:hover .our-works--item {
    filter: saturate(0) brightness(0.9);
    opacity: 0.7;
}

.grid:hover .our-works--item:hover {
    filter: saturate(1) brightness(1);
    opacity: 1;
}

.our-works--item-image {
    --animation-duration: 60s;

    --animation-end: -100%;

    cursor: pointer;
    color: #ddd;
    aspect-ratio: 9/10;
    object-fit: contain;
    pointer-events: auto;
    position: relative;
    transition: all 0.5s ease;
    box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0.1);

    img {
        transition: all 1s ease-out;
        transform: translateY(0%);
    }

    &.left-right img {
        height: 100%;
        width: auto;
        max-width: max-content;
    }
    &.up-down img {
        width: 100%;
    }

    &:hover {
        opacity: 1;
        box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);
        img {
            transform: scale(1.05);
        }
    }
}

.grid-move,
.grid-enter-active {
    transition: all 0.3s ease;
}

.grid-leave-active {
    display: none;
    opacity: 0;
    transform: translateY(0);
}

.grid-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.grid-enter-from {
    opacity: 0;
    transform: scale(0.9);
}

.animate img {
    // animation-duration: var(--animation-duration);
    // animation-timing-function: linear;
    // animation-fill-mode: forwards;
    // animation-iteration-count: infinite;
}
// animation slide up
.animate.up-down:hover img {
    transition: all var(--animation-duration) linear;
    transform: translateY(var(--animation-end));
}

// animation slide up
.animate.left-right:hover img {
    transition: all var(--animation-duration) linear;
    transform: translateX(var(--animation-end));
}

</style>

<script setup>
const props = defineProps(['item_our_works', 'class_bg']);

const tags = ["All"];
props.item_our_works.forEach((item, index) => {
    item.id = `item-${index}`;
    item.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    });
});

// const selectedTag = ref("All");
// const visibleItems = computed(() => {
//     return items.filter((item) => {
//         if (selectedTag.value === "All") {
//             return true;
//         }
//         return item.tags.includes(selectedTag.value);
//     });
// });

// const selectTag = (tag) => {
//     if (tag === selectedTag.value) {
//         selectedTag.value = "All";
//     } else {
//         selectedTag.value = tag;
//     }
// };

const section = ref(null);
const itemRefs = ref([]);

const { $gsap } = useNuxtApp();
onMounted(() => {
    // var tl = $gsap.timeline({
    //     scrollTrigger: {
    //         trigger: section.value,
    //         scrub: true,
    //         start: "top 90%",
    //         end: "bottom bottom",
    //         // markers: true,
    //     },
    // });
    // itemRefs.value.forEach((item) => {
    //     tl.addLabel(item.title);
    //     tl.from(item, {
    //         opacity: 0,
    //         y: 50,
    //         duration: 2,
    //         ease: "power1.inOut",
    //         scale: 0.8,
    //     });
    // });
});
</script>

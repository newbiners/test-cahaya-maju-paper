<template>
    <section id="our-works" class="pt-[136px] our-works" ref="section">
        <div class="container mx-auto my-0">
            <h3 class="text-secondary md:text-start text-center uppercase">Kami Hadir dengan Berbagai</h3>
            <div class="flex md:flex-row flex-col justify-between items-end">
                <h1 class="h1-bold mb-0 md:w-40% w-100%  md:text-start text-center lg:w-auto uppercase">Produk Kertas Unggulan</h1>
                <div
                    class=" md:w-60% w-100% lg:w-auto flex md:mt-0 mt-10 flex-row gap-4 justify-center items-center"
                >
                <NuxtLink v-for="tag in tags" :key="tag" @click="selectTag(tag)" :class="selectedTag === tag ? 'btn-paper-rounded-top bg-primary30 text-white' : 'btn-paper-rounded-top btn-outline text-primary30 border-primary30'">{{ tag }}</NuxtLink>
                </div>
            </div>
        </div>

        <div class="mt-[83px]">
            <div class="container mx-auto relative absolute z-1">
                <TransitionGroup
                    name="grid"
                    tag="div"
                    class="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-[46.07px] md:gap-col-8 md:gap-row-12 mt-12 z-9"
                >
                <div
                    v-for="(item, index) in visibleItems[indexAct]"
                        :key="item.id"
                        class="flex-1 w-full justify-center items-center lg:pb-0 pb-20"
                >
                    <card-paper-card :title="item.title" :desc="item.description" :img="item.image"/>
                </div>
                </TransitionGroup>
                <img src="/svg/Subtract-rounded.svg" alt="img-hero" class="h-80  w-80 absolute -right-15 -bottom-25 -z-1 " />
            </div>
            <!-- <div class="container mx-auto mt-[90px] flex items-center justify-center">
                <div class="flex gap-3 ">
                    <div v-for="index in countLength" :class="index == indexAct ? 'bg-s h-[10px] w-[10px] rounded-full bg-primary20' : 'bg-secondary10 h-[10px] w-[10px] rounded-full'" @click="idxAct(index)"></div>
                </div>
            </div> -->
        </div>
       
        <!-- <card-paper-card/> -->
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

// @keyframes slideUpDown {
//     0% {
//         transform: translateY(0%);
//     }

//     100% {
//         transform: translateY(var(--animation-end));
//     }
// }

// @keyframes slideLeftRight {
//     0% {
//         transform: translateX(0%);
//     }

//     100% {
//         transform: translateX(var(--animation-end));
//     }
// }
</style>

<script setup>
const items = [
    {
        image: "/img/product/img-product.png",
        title: "duplex board",
        description: "Duplex memiliki 2 warna yang berbeda di kedua sisinya (1 sisi berwarna abu-abu dan 1 sisi berwarna putih). 1 sisi luar sudah tercoating putih sehingga finishing setelah cetak bisa diaplikasikan menjadi berbagai macam. Dengan harga yang relatif cukup murah, sebagian besar digunakan untuk kemasan industri seperti snack, obat-obatan, makanan, dan barang-barang finished good lainnya",
        tags: ["Product"],
        backgroundColor: "#F6F6F6",
        color: "#fff",
    },
    {
        image: "/img/product/ivory-board.png",
        title: "Ivory Board",
        description: "Kertas packaging yang memiliki 1 sisi coating dan 1 sisi tidak dicoating. Sangat cocok untuk kebutuhan packaging sehari-hari Anda. Kertas yang memiliki kandungan virgin pulp 100% ini cocok untuk dicetak offset secara high speed di mesin offset Anda. Aplikasi finishing juga bisa di-apply-kan banyak di jenis kertas ini, mulai dari laminating, UV spot, lem lipat, dan sebagainya sehingga hasil packaging bisa terlihat premium.",
        tags: ["Product"],
        backgroundColor: "#FF0000",
        color: "#fff",
    },
    {
        image: "/img/product/triplex-board.png",
        title: "Triplex Board",
        description: "Salah satu jenis kertas karton, yang dibuat dari kertas daur ulang. Yang dilapisi dengan white liner. Lapisan putih yang membuat triplex memiliki warna berbeda di kedua sisinya. Sisi putih sering digunakan untuk media cetak atau sebagai tampilan depan",
        tags: ["Product"],
        backgroundColor: "#F5F3EB",
        color: "#fff",
    },
    {
        image: "/img/product/triplex-board.png",
        title: "Triplex Board",
        description: "Salah satu jenis kertas karton, yang dibuat dari kertas daur ulang. Yang dilapisi dengan white liner. Lapisan putih yang membuat triplex memiliki warna berbeda di kedua sisinya. Sisi putih sering digunakan untuk media cetak atau sebagai tampilan depan",
        tags: ["Layanan"],
        backgroundColor: "#F5F3EB",
        color: "#fff",
    },
    {
        image: "/img/product/triplex-board.png",
        title: "Triplex Board",
        description: "Salah satu jenis kertas karton, yang dibuat dari kertas daur ulang. Yang dilapisi dengan white liner. Lapisan putih yang membuat triplex memiliki warna berbeda di kedua sisinya. Sisi putih sering digunakan untuk media cetak atau sebagai tampilan depan",
        tags: ["Layanan"],
        backgroundColor: "#F5F3EB",
        color: "#fff",
    },
    {
        image: "/img/product/triplex-board.png",
        title: "Triplex Board",
        description: "Salah satu jenis kertas karton, yang dibuat dari kertas daur ulang. Yang dilapisi dengan white liner. Lapisan putih yang membuat triplex memiliki warna berbeda di kedua sisinya. Sisi putih sering digunakan untuk media cetak atau sebagai tampilan depan",
        tags: ["Layanan"],
        backgroundColor: "#F5F3EB",
        color: "#fff",
    },
];

const tags = ["All"];
items.forEach((item, index) => {
    item.id = `item-${index}`;
    item.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    });
});

const selectedTag = ref("All");
const visibleItems = computed(() => {
    indexAct.value = 1;
    var itemsArr = items.filter((item) => {
        if (selectedTag.value === "All") {
            return true;
        }
        return item.tags.includes(selectedTag.value);
    });
    const groupSize = 3;
    const grouped = {};

    itemsArr.forEach((item, index) => {
    const groupKey = Math.floor(index / groupSize) + 1;
    if (!grouped[groupKey]) {
       grouped[groupKey] = [];
    }
    grouped[groupKey].push(item);
    });
    return grouped;
});

const countLength = computed(() => {
    return Object.keys(visibleItems['value']).length
})

const indexAct = ref(1);
const idxAct = (idx) => {
    indexAct.value = idx;
}

const selectTag = (tag) => {
    if (tag === selectedTag.value) {
        selectedTag.value = "All";
    } else {
        selectedTag.value = tag;
    }
};

const section = ref(null);
const itemRefs = ref([]);

onMounted(() => {
});
</script>

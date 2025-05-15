<template>
    <div class="container mx-auto py-0 navbar-container">
        <div class="hidden lg:flex justify-between items-center py-4">
            <!-- <NuxtLink to="/#hero" class="logo-black">
                <img src="/svg/logo-black.svg" alt="logo" class="w-20 h-20" />
            </NuxtLink> -->
            <NuxtLink to="/#hero" class="logo">
                <img src="/svg/logo-cahaya-maju.svg" alt="logo" class="w-auto h-15" />
            </NuxtLink>
            <div class="mainmenu flex items-center gap-0">
                <nav class="menu">
                    <ul class="flex sm:gap-7 text-white xl:gap-9 2xl:gap-10 list-none justify-center text-4 items-center">
                        <li v-for="(item, index) in menu" :key="item.title"
                            class="item flex items-center justify-center relative" :style="{ width: item.width }"
                            @click="toggleSubmenu(index)">
                            <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
                            <img src="/svg/chevron-down.svg" class="icon pl-2 w-6 h-6" v-if="item.submenu" />
                            <ul class="absolute top-12 left-0% px-8 py-4 bg-white rounded-tl-[20px] rounded-br-[20px] text-primary"
                                v-if="isSubmenuOpen(index) && item.submenu">
                                <li v-for="subitem in item.submenu" :key="subitem.title"
                                    class="py-2 text-nowrap fw-normal w-52">
                                    <NuxtLink :to="subitem.link">{{ subitem.title }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                             <NuxtLink class="btn-paper bg-secondary text-white ml-[65.49px]">Masuk ➔</NuxtLink>
                        </li>    
                    </ul>
                </nav>
            </div>
        </div>

        <div class="navbar-mobile block items-center lg:hidden">
            <div class="navbar-mobile-menu flex justify-between items-center">
                <NuxtLink to="/#hero" class="logo">
                    <img src="/svg/logo-cahaya-maju.svg" alt="logo" class="w-auto h-15" />
                </NuxtLink>
                <!-- <NuxtLink to="/#hero" class="logo-black">
                    <img src="/svg/logo-black.svg" alt="logo" class="w-20 h-20" />
                </NuxtLink> -->
                <div class="navbar-mobile-menu-icon" @click="toggleMenu">
                    <svg-icon-hamburger />
                </div>
            </div>
            <div class="navbar-drawer" :class="{ open: isMenuOpen }">
                <div class="navbar-drawer-menu">
                    <div class="navbar-container">
                        <span class="close-menu" @click="toggleMenu">
                            <svg-icon-close class="text-white" />
                        </span>
                        <ul>
                            <li v-for="(item, index) in menu" :key="item.title">
                                <NuxtLink @click="handleMenuClick(index, item)" :to="item.link" class="text-white">{{
                                    item.title }}</NuxtLink>
                                <ul v-if="item.submenu && isSubmenuOpen(index)" class="pl-4 mt-4 submenu-item">
                                    <li v-for="subitem in item.submenu" :key="subitem.title"
                                        class="text-nowrap fw-normal">
                                        <NuxtLink :to="subitem.link" class="text-white">{{ subitem.title }}</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                               <NuxtLink class="btn-paper bg-secondary text-white shadow">Masuk ➔</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const openSubmenu = ref(null);
const toggleSubmenu = (index) => {
    openSubmenu.value = openSubmenu.value === index ? null : index;
};
const isSubmenuOpen = (index) => {
    return openSubmenu.value === index;
};

const handleMenuClick = (index, item) => {
    if (item.submenu) {
        toggleSubmenu(index);
    } else {
        toggleMenu();
    }
};

const menu = [
    // {
    //     title: "Home",
    //     link: "/#hero",
    // },
    // {
    //     title: "Our Services",
    //     link: "/#services",
    // },
    {
        title: "Beranda",
        link: "/",
        width: "4rem",
    },
    {
        title: "Produk",
        link: "",
        width: "5rem",
        submenu: [
            {
                title: "Produk Kertas",
                link: "/produk/kertas",
            },
            {
                title: "Produk Mesin",
                link: "/produk/mesin",
            },
        ],
    },
    {
        title: "Layanan",
        link: "/layanan-kami",
        width: "4rem",
    },
    {
        title: "Tentang Kami",
        link: "/tentang-kami",
        width: "7rem",
    },
    {
        title: "Kontak",
        link: "",
        width: "3rem",
    },
];
</script>

<style>

.mainmenu {
    .menu {
        display: flex;
        justify-content: space-between;
    }
}

.menu {
    @apply px-0 py-3 text-white;


    .menu-item {
        @apply text-white;
    }
    ul li {
        transition: all 0.3s ease-in-out;
        &:hover {
            @apply cursor-pointer fw-bold no-underline;
        }
    }
}

.navbar-container {
    .logo {
        display: inherit;
    }

    .logo-black {
        display: none;
    }

    .navbar-mobile-menu-icon {
        color: white;
        display: flex;
    }
}

.navbar-drawer {
    display: none;

    &.open {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 1000;

        .navbar-container {
            @apply flex flex-col items-center justify-center text-center text-6 h-full w-full;
            min-height: 100vh;

            ul {
                @apply flex flex-col gap-10;
            }
        }

        .close-menu {
            @apply absolute top-8 right-8;
        }
    }
}
</style>

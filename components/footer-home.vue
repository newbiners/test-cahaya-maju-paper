<template>
    <div class="bg-primary text-white font-size-4 relative">
        <img src="/svg/footer-decoration.svg" alt="img-hero" class="h-auto w-100 absolute right-0 bottom-0" />
        <div class="container mx-auto py-24">
            <div
                class="flex flex-col gap-8 md:flex-row justify-between items-start"
            >
                <div class="flex flex-col gap-10 justify-between items-start md:items-start w-full md:w-auto">
                        <img src="/svg/logo-cahaya-maju.svg" alt="logo" class="w-200 h-auto" />
                </div>
                <div class="flex flex-row justify-start sm:justify-center items-start gap-20 flex-wrap md:flex-nowrap">
                    <div class="flex flex-col justify-center items-start gap-8 w-full sm:w-1/4 md:w-auto">
                      <p>Cahaya Maju Paper siap menjadi solusi andal untuk kebutuhan cetak, kemasan, dan produksi Anda. Dengan pilihan kertas unggulan, pelayanan yang ramah, dan kualitas yang konsisten, kami hadir untuk memberikan kemudahan dan kepuasan di setiap transaksi.</p>
                    </div>
                    <div class="flex flex-col justify-center items-start sm:gap-8 w-1/4 md:w-1/2">
                        <p class="sub-title">Perusahaan</p>
                        <ul class="flex flex-col items-start gap-4">
                            <li class="text-4"><NuxtLink to="/services/instant-web">Layanan</NuxtLink></li>
                            <li class="text-4"><NuxtLink to="/services/custom-web">Tentang Kami</NuxtLink></li>
                            <li class="text-4"><NuxtLink to="/services/e-commerce">Hubungi Kami</NuxtLink></li>
                            <li class="text-4"><NuxtLink to="/services/cloud-app">Blog</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="flex flex-col justify-center items-start gap-8 w-1/4">
                        <p class="sub-title">Produk</p>
                        <ul class="flex flex-col items-start gap-4">
                            <li class="text-4"><NuxtLink to="/services/instant-web">Kertas</NuxtLink></li>
                            <li class="text-4"><NuxtLink to="/services/custom-web">Mesin</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="w-full mt-10"/>
            <p class="block w-full text-4 text-center sm:text-start mt-4">© 2025 Cahaya Maju. All rights reserved.</p>
        </div>
    </div>
</template>
<style>
</style>

<template>
    <div class="section bg-white py-20">
        <div class="container mx-auto">
            <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20">
                <img src="/img/layanan/img-slitting.png" class="w-45% h-auto" />
                <div class="flex flex-col items-start gap-8 mt-4">
                    <div class="h3-bold text-primary20 uppercase w-full lg:text-start text-center flex flex-col items-center lg:items-start gap-2">
                        <span>Slitting</span>
                        <p class="capitalize bg-secondary10 rounded-bl-[20px] rounded-tr-[20px] text-white py-2 px-8">Pemotong Gulungan</p>
                    </div>
                    <div class="lg:text-start text-center">
                        <p class="text-netral">
                            Mesin Slitting adalah mesin yang digunakan untuk memotong gulungan kertas besar menjadi gulungan
                            lebih pendek tanpa harus memotong semuanya atau dengan hasil terputus-putus.
                        </p>
                        <p class="mt-8">
                            Mesin slitter memiliki hasil potongan yang presisi, cepat pengerjaannya, dan suara mesin yang halus.
                            Gramasi kertas yang bisa dikerjakan mulai dari 30 - 400 gr.
                        </p>
                    </div>
                    <div class="flex lg:justify-start justify-center gap-4 mt-4 w-full">
                        <button-paper-button :title="'Detail Layanan  ➔'" :customClass="'btn-paper bg-primary20 text-white'"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
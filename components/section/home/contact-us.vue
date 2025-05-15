<template>
    <section id="contact-us" class="">
      <!-- <div class="flex justify-center">
        <div class="bg-card flex justify-between transform-translate-y-14 overflow-hidden w-200 lg:w-[1280px] rounded-tl-[100px] rounded-br-[100px] relative h-87 sm:h-100 lg:h-120 border-20 border-[#EEF2FF]">
          <div class="p-15 lg:p-23 absolute z-10">
            <h3 class="lg:w-1/2 mb-13 text-white md:text-start text-center">
              Temukan penawaran terbaik untuk kebutuhan kertas Anda hari ini juga!
            </h3>
            <div class="bottom flex justify-center md:justify-start items-center text-white">
              <button-paper-button
                :title="'Lihat Semua  ➔'"
                :customClass="'btn-paper bg-primary30'"
                :isIcon="false"
              />
            </div>
          </div>
          <div class="gradient absolute z-1 w-full h-full"></div>
          <img
            src="/img/contact-us-img.png"
            alt="img-contact"
            class="w-60% absolute h-auto right-0 bottom-0 z-0 opacity-10"
          />
        </div>
      </div> -->
      <div class=" px-15 lg:px-29 mx-auto bg-primary text-white pt-40 lg:pt-40">
        <div class=" flex lg:flex-row flex-col gap-20 sm:gap-30 ">
          <div class="lg:w-70%">
            <h1 class="text-white">hubungi kami</h1>
            <p class="mb-9">Kami siap membantu Anda! Jika Anda memiliki pertanyaan seputar produk, pemesanan, atau ingin berdiskusi lebih lanjut mengenai kebutuhan kertas untuk bisnis Anda, jangan ragu untuk menghubungi kami.</p>
            <div class="flex items-start gap-6 mb-9">
              <img src="/svg/location.svg" class="w-6" />
              <div>
                <p class="text-5 font-600">Alamat Kantor</p>
                <p>Jl. Pergudangan Margomulyo Permai Blok Sentral No. 1, 
                  Tandes Kidul, Tandes - Surabaya</p>
                </div>
              </div>
              <div class="flex items-start gap-6 mb-9">
                <img src="/svg/white-clock.svg" class="w-6" />
                <div>
                  <p class="text-5 font-600">Jam Operasional</p>
                  <p>Senin - Jumat | 08.00 s/d 16.00<br/>Sabtu | 08.00 s/d 14.00</p>
                </div>
              </div>
              <div class="flex items-start gap-6 mb-9">
                <img src="/svg/phone.svg" class="w-6" />
                <div>
                  <p class="text-5 font-600">Telepon</p>
                  <p>031-35925928</p>
                </div>
              </div>
            </div>
            <card-form-card/>
          </div>
          <img src="/img/map.png" class="w-full mt-28" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style lang="scss" scoped>
  .bg-card {
    background: linear-gradient(90deg,rgb(229, 177, 119) 0%, rgba(230, 222, 216, 1) 80%, rgba(242, 235, 230, 1) 100%);
  }
  .gradient {
    background: linear-gradient(90deg,rgba(188, 121, 43, 1) 0%, rgba(226, 191, 151, 0.4) 80%, rgba(226, 191, 151, 0) 100%);
    // opacity: 50%;
  }
  </style>
  
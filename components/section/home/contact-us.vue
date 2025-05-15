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
      <div class="bg-primary text-white pt-40 lg:pt-40">
        <div class=" flex lg:flex-row flex-col gap-20 sm:gap-30 container mx-auto">
          <div class="lg:w-70%">
            <h1 class="text-white uppercase">hubungi kami</h1>
            <p class="mb-9">Kami siap membantu Anda! Jika Anda memiliki pertanyaan seputar produk, pemesanan, atau ingin berdiskusi lebih lanjut mengenai kebutuhan kertas untuk bisnis Anda, jangan ragu untuk menghubungi kami.</p>
            <div class="flex items-center gap-6 mb-9">
              <img src="/svg/location.svg" class="w-[32px]" />
              <div>
                <p class="paragraph-24-semibold mb-[9px]">Alamat Kantor</p>
                <p>Jl. Pergudangan Margomulyo Permai Blok Sentral No. 1, 
                  Tandes Kidul, Tandes - Surabaya</p>
                </div>
              </div>
              <div class="flex items-center gap-6 mb-9">
                <img src="/svg/white-clock.svg" class="w-[32px]" />
                <div>
                  <p class="paragraph-24-semibold mb-[9px]">Jam Operasional</p>
                  <p>Senin - Jumat | 08.00 s/d 16.00<br/>Sabtu | 08.00 s/d 14.00</p>
                </div>
              </div>
              <div class="flex items-center gap-6 mb-9">
                <img src="/svg/phone.svg" class="w-[32px]" />
                <div>
                  <p class="paragraph-24-semibold mb-[9px]">Telepon</p>
                  <p>031-35925928</p>
                </div>
              </div>
            </div>
            <card-form-card/>
          </div>
          <div class="mt-[117px] h-113 container mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.9382926600913!2d112.68923743864832!3d-7.2548842481879365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff001ffa97ab%3A0x1cf840e7f9ec035e!2sCV.%20CAHAYA%20MAJU!5e0!3m2!1sid!2sid!4v1747320576720!5m2!1sid!2sid" width="100%" height="100%" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <!-- <img src="/img/map.png" class="w-full mt-28" /> -->
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
  
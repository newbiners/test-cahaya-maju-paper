<template>
     <div class="flex justify-center transform-translate-z-100 mt-[220px] md:mt-[554px] bg-primary h-40">
        <div class="bg-card container mx-auto flex justify-between transform-translate-y-14 overflow-hidden w-full rounded-tl-[100px] rounded-br-[100px] relative h-87 sm:h-100 lg:h-[536px] ">
          <div class="p-7 md:p-15 lg:p-23 absolute z-10 h-full flex items-center lg:items-start  justify-center flex-col">
            <h3 class="lg:w-45% mb-[20px] md:mb-[50px] uppercase text-white h3-bold md:text-start text-center">
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
          <div class="gradient absolute z-1 top-0 left-0 w-full h-full"></div>
          <img
            src="/img/contact-us-img.png"
            alt="img-contact"
            class="w-60% absolute h-auto right-0 bottom-0 z-0 opacity-40"
          />
        </div>
      </div>
</template>
<style lang="scss" scoped>
.bg-card {
  background: rgb(229, 177, 119);
  @apply absolute z-1 -top-80 lg:-top-110;
}
.gradient {
  background: linear-gradient(90deg,rgba(188, 121, 43, 1) 0%, rgba(226, 191, 151, 0.4) 80%, rgba(226, 191, 151, 0) 100%);
  // opacity: 50%;
}
</style>
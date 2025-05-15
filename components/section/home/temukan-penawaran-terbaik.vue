<template>
     <div class="flex justify-center transform-translate-z-100 bg-primary h-40">
        <div class="bg-card flex justify-between transform-translate-y-14 overflow-hidden w-[500px] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[1280px] rounded-tl-[100px] rounded-br-[100px] relative h-87 sm:h-100 lg:h-120 border-15 border-bg">
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
      </div>
</template>
<style lang="scss" scoped>
.bg-card {
  background: linear-gradient(90deg,rgb(229, 177, 119) 0%, rgba(230, 222, 216, 1) 80%, rgba(242, 235, 230, 1) 100%);
  @apply absolute z-1 -top-80 lg:-top-110;
}
.gradient {
  background: linear-gradient(90deg,rgba(188, 121, 43, 1) 0%, rgba(226, 191, 151, 0.4) 80%, rgba(226, 191, 151, 0) 100%);
  // opacity: 50%;
}
</style>
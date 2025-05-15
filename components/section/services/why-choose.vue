<template>
    <section id="why-choose"class="why-choose bg-[#F6F6F6]">
      <div class="container mx-auto">
        <div class="section-title">
            <h1 class="mx-auto text-center w-full lg:w-55%">{{ title }}</h1>
        </div>

        <!-- <div class="section-content mt-20"> -->
            <!-- <div class="services-list grid grid-cols-3 gap-8 grid-t"> -->
            <!-- <div class="choose-us-list flex flex-wrap justify-center gap-8 mx-auto w-30%">
                <shared-choose-us-box
                    title="Innovative Solutions"
                    description="We thrive on innovation, constantly pushing boundaries to deliver solutions that exceed expectations."
                    icon="/svg/icon-lampu.svg"
                />
                <shared-choose-us-box
                    title="Innovative Solutions"
                    description="We thrive on innovation, constantly pushing boundaries to deliver solutions that exceed expectations."
                    icon="/svg/icon-lampu.svg"
                />
                <shared-choose-us-box
                    title="Innovative Solutions"
                    description="We thrive on innovation, constantly pushing boundaries to deliver solutions that exceed expectations."
                    icon="/svg/icon-lampu.svg"
                />
                <shared-choose-us-box
                    title="Innovative Solutions"
                    description="We thrive on innovation, constantly pushing boundaries to deliver solutions that exceed expectations."
                    icon="/svg/icon-lampu.svg"
                />
                <shared-choose-us-box
                    title="Innovative Solutions"
                    description="We thrive on innovation, constantly pushing boundaries to deliver solutions that exceed expectations."
                    icon="/svg/icon-lampu.svg"
                />
            </div> -->
            <!-- </div> -->
        <!-- </div> -->
          <div class="section-content mt-20">
              <div class="services-list grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center">
                  <shared-choose-us-box
                      v-for="(item, index) in chooseUsItems"
                      :key="index"
                      :title="item.title"
                      :description="item.description"
                      :icon="item.icon"
                      class="shared-choose-us-box"
                      :class="[
                            item.class,
                            isLastOddItem(index)
                                ? 'w-full lg:w-1/2 justify-self-center lg:[grid-column:span_2/span_1]'
                                : 'col-span-1'
                        ]"
                  />
              </div>
          </div>
        </div>
    </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    chooseUsItems: {
        type: Array,
        required: true,
        default: () => [
            {
                title: 'Affordable, High-Quality Websites',
                description: 'Forget expensive development costs! Our ready-made website solutions give you a modern, polished website at a fraction of the usual price, without sacrificing quality.',
                icon: '/svg/mark-check-blue.svg'
            },
            {
                title: 'Showcase Your Portfolio & Services with Ease',
                description: "Highlight your best work with a sleek, well-organized portfolio page. Whether you're a freelancer, agency, or small business owner, we’ll help you present your expertise professionally.",
                icon: '/svg/mark-check-blue.svg'
            },
            {
                title: 'Boost Your Online Presence & Get More Clients',
                description: 'A professional website increases your credibility and helps you attract potential customers. Our websites are designed with SEO best practices, so your business gets found on Google faster!',
                icon: '/svg/mark-check-blue.svg'
            },
            {
                title: 'Easy Website Management – No Technical Skills Required!',
                description: 'Tired of relying on developers for simple updates? With our intuitive Content Management System (CMS), you can edit text, add images, and update pages yourself—no coding needed!',
                icon: '/svg/mark-check-blue.svg'
            }
        ]
    }
});

const isLastOddItem = (index) => {
    return props.chooseUsItems.length % 2 !== 0 && index === props.chooseUsItems.length - 1;
};

// Tambahkan kelas unik ke setiap item
props.chooseUsItems.forEach((item, index) => {
    item.class = `why-choose-item--${index + 1}`;
});

onMounted(() => {
    props.chooseUsItems.forEach((item) => {
        $gsap.from("." + item.class, {
            scrollTrigger: {
                trigger: "." + item.class,
                start: "top 75%",
                end: "bottom bottom",
            },
            opacity: 0,
            y: 20,
            scale: 0.95,
        });
    });
});
</script>

<style scoped>
/* .shared-choose-us-box{
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.11);
} */
/* .services-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.shared-choose-us-box {
  flex: 1 1 calc(33.333% - 2rem);
}

.flex-basis-30 {
  width: 33.333% !important;
} */
</style>
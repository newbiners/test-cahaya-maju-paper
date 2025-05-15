<template>
    <section id="contact-us" class="mx-auto py-10 contact-us bg-primary">
        <div class="background-image">
        <div class="container mx-auto py-20 lg:pb-88 lg:pt-40 text-white">
            <div
                class="flex flex-col lg:flex-row gap-8 align-start justify-center items-center lg:items-start"
            >
                <div class="flex w-full lg:flex-1">
                    <div class="relative contact-form w-full lg:w-80%">
                        <div class="relative z-1">
                            <div class="card text-black rounded-6">
                                <h2>Get in Touch.</h2>
                                <p class="mb-12 text-[#1B1B1B]">
                                    Reach out to us, we're here to help!
                                </p>
                                <form @submit.prevent="submitForm">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            placeholder="What's your name?*"
                                            v-model="model.name"
                                            required
                                            class="form-input"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="What's your phone number?*"
                                            v-model="model.email"
                                            required
                                            class="form-input"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Whats your email?"
                                            v-model="model.phone"
                                            class="form-input"
                                        />
                                        <textarea
                                            type="text"
                                            placeholder="What's your problem?"
                                            rows="5"
                                            v-model="model.message"
                                            class="form-input resize-none"
                                        ></textarea>
                                        <div id="cf-turnstile"></div>
                                        <button
                                            class="btn btn-primary"
                                            :disabled="isLoading"
                                        >
                                            {{
                                                isLoading
                                                    ? "Sending..."
                                                    : "Submit"
                                            }}
                                        </button>
                                        <div
                                            class="text-center text-primary30"
                                            v-if="formSuccess"
                                        >
                                            <p class="">
                                                Message sent successfully!
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full lg:flex-1 section-right">
                    <div class="flex flex-col gap-12 w-100% mt-8">
                        <h2 class="my-0 text-white">Frequently Asked Questions (FAQ)
                        </h2>
                        <!-- <hr class="border-3 border-b-[#0F34DB] border-t-none border-r-none border-l-none"> -->
                        <div class="flex flex-col gap-0">
                            <div
                                    v-for="(item, index) in faqItems"
                                    :key="index"
                                    class="flex flex-col gap-4 items-start lg:items-center border-b-[#0F34DB] border-t-none border-r-none border-l-none border-3 py-8 px-0"
                                    :style="item.custom"
                                >
                                    <div class="flex items-center justify-between w-full cursor-pointer" @click="toggleFAQ(index)">
                                        <div class="text-white">{{ item.question }}</div>
                                        <img src="/svg/chevron-down.svg" :class="item.isOpen ? 'rotate-0' : '-rotate-90'" class="w-6 h-6 icon transition-transform duration-300" />
                                    </div>
                                    <div v-show="item.isOpen" class="text-white py-4 opacity-80 ">
                                        {{ item.answer }}
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </section>
</template>

<script setup lang="ts">
const isLoading = ref(false);
const formSuccess = ref(false);

const model = reactive({
    name: "",
    email: "",
    phone: "",
    message: "",
    __cf_turnstile_token: "",
});

declare global {
    interface Window {
        turnstileToken?: string;
        turnstile: any;
    }
}

const faqItems = reactive([
    {
        question: "What is included in the instant website service?",
        answer: "You get a fully functional, professionally designed website, SEO-friendly setup, mobile optimization, and an easy-to-use CMS so you can update your site without coding knowledge.",
        isOpen: false,
        custom: "border-top: 3px solid #0F34DB;",
    },
    {
        question: "Can Bitzania help redesign my existing website or app?",
        answer: "Absolutely! We offer website and app redesign services to improve performance, user experience, and branding while keeping your business goals in focus.",
        isOpen: false,
    },
    {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes! We provide maintenance and support services to ensure your website, app, or software runs smoothly, stays secure, and remains up to date.",
        isOpen: false,
    },
    {
        question: "How much does a project cost?",
        answer: "Pricing depends on the scope, features, and complexity. We offer affordable and transparent pricing—contact us for a customized quote.",
        isOpen: false,
    },
    {
        question: "Can you help with branding and marketing materials?",
        answer: "We take a consultative approach to understand your needs and recommend the best solution based on your business goals, budget, and scalability requirements. Contact us for a free consultation to discuss your project.",
        isOpen: false,
    },
    {
        question: "How do I get started?",
        answer: "It’s simple! Contact us today for a free consultation, and let’s discuss how we can bring your vision to life.",
        isOpen: false,
    },
]);

const toggleFAQ = (index: number) => {
    faqItems[index].isOpen = !faqItems[index].isOpen;
};

const submitForm = async (event: Event) => {
    if (isLoading.value) return;
    isLoading.value = true;
    formSuccess.value = false;
    console.log("submitForm");
    if (window.turnstile.isExpired()) {
        window.turnstile.reset();
        return;
    }
    const token = window.turnstile.getResponse();
    model.__cf_turnstile_token = token;
    console.log(model);
    // submit form with ajax post call
    try {
        const response = await fetch(
            "https://32m7jdxbpz4takf2swbpzlffb40bvcgz.lambda-url.us-east-1.on.aws/",
            {
                method: "POST",
                body: JSON.stringify(model),
            }
        );
        console.log(response);
        formSuccess.value = true;
        setTimeout(() => {
            formSuccess.value = false;
        }, 5000);

        // reset form
        model.name = "";
        model.email = "";
        model.phone = "";
        model.message = "";
        model.__cf_turnstile_token = "";
    } catch (error) {
        console.error(error);
        alert("Something went wrong, please try again later.");
    } finally {
        window.turnstile.reset();
        isLoading.value = false;
    }
};
</script>

<style lang="scss" scoped>
.background-image {
    background: url("/svg/asked-question-img.svg");
    background-size: 40%;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: no-repeat;
}

.form-input {
    width: 100%;
    border: none;
    background-color: white;
    border-radius: 0;
    border-bottom: 1px solid #B8BFB68C;
    padding: 0.75rem 0.25rem;
    outline: none;
    // transition: border-color 0.3s;
    font-size: 1rem;
    color: #1B1B1B;
    font-family: 'Poppins', sans-serif;
}

.section-right h3,p{
    font-family: 'Inter', sans-serif;
}

@screen lt-lg {
    .background-image {
        background-image: none;
    }
}
</style>
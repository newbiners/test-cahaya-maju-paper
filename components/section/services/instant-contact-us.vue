<template>
    <section id="contact-us" class="mx-auto py-10 contact-us bg-primary">
        <div class="background-image">
        <div class="container mx-auto py-20 lg:pb-88 lg:pt-40 text-white">
            <div
                class="flex flex-col lg:flex-row gap-0 align-start justify-center items-center lg:items-start"
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
                        <h1 class="my-0 text-white">Get Started Today – No More Delays!
                        </h1>
                        <p class="text-white">Your business deserves an affordable, high-quality website that works for you.
                            Don't waste time on complicated development—get online quickly and start growing your business now!
                        </p>
                        <span class="text-[#6DA1FF] text-6 fw-semibold">Ready to launch? Get in touch today!</span>

                        <div class="flex gap-4 items-center mt-20">
                            <NuxtLink to="/contact-us" class="btn btn-outline">Contact Us</NuxtLink>
                            <NuxtLink href="https://wa.me/6281234011145" target="_blank" class="btn btn-white">Get a Free Consultation</NuxtLink>
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

// .section-right h3,p{
//     font-family: 'Inter', sans-serif;
// }

@screen lt-lg {
    .background-image {
        background-image: none;
    }
}
</style>

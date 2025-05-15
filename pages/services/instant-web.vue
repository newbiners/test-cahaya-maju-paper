<template>
    <div class="page page-index">
        <section-services-top-instant />
        <section-services-why-choose
            title="Why Choose Our Instant Website Service?"
        />
        <section-services-development-service
            title="What You Get With Our Instant Website Development Service"
            :items_left="items_left"
            img_top="/img/img-digital-marketing.png"
            img_bottom="/img/img-seo.png"
        />
        <!-- <section-services-instant-our-work /> -->
        <section-services-our-work
            :item_our_works="item_our_works"
            :class_bg="'bg-[#F6F6F6]'"
        />
        <section-services-instant-it-works />
        <!-- <section-services-instant-faq /> -->
        <section-services-faq :faqItems="faqItems" />
        <section-services-instant-contact-us />
    </div>
</template>

<script setup>
useSeoMeta(
    {
        title: "Instant Website Service | Get a Professional Website in Just 7 Days",
        description:
            "Need a website fast? Our instant website service delivers a high-quality, SEO-optimized website in just 7 days—no coding required. Affordable, user-friendly, and built to boost your online presence. Get started today with Bitzania!",
    },
    {
        tagPriority: "high", // overrides route rules
    }
);

const items_left = [
    {
        title: "A Ready-to-Use Website – No Hassle!",
        description:
            "We provide professionally designed templates customized for your business, so you get a polished, modern website that fits your brand from day one.",
        icon: "/svg/rocket-icon.svg",
    },
    {
        title: "Super-Fast Turnaround – Go Live in Just 7 Days",
        description:
            "Unlike traditional web development that takes months, our process ensures your website is fully designed, optimized, and launched within a week!",
        icon: "/svg/hourglass.svg",
    },
    {
        title: "User-Friendly CMS – Take Full Control",
        description:
            "Your website comes with a world-class CMS, allowing you to manage content effortlessly—without hiring a developer.",
        icon: "/svg/paper&pena.svg",
    },
    {
        title: "SEO-Optimized for Maximum Visibility",
        description:
            "We build websites that Google loves! From fast loading speeds to mobile optimization and built-in SEO features, your site will be search-engine ready from day one.",
        icon: "/svg/statistik.svg",
    },
    {
        title: "No Hidden Fees – 100% Transparent Pricing",
        description:
            "What you see is what you pay. No surprise costs, no unnecessary upsells—just a professional website at a fair price.",
        icon: "/svg/magnifier.svg",
    },
];

const item_our_works = [
    {
        image: "/img/portfolio/nextgen.png",
        title: "Nextgen Indonesia",
        description: "",
        tags: ["Website"],
        backgroundColor: "#000",
        color: "#fff",
    },
    {
        image: "/img/portfolio/derrimut-dental.png",
        title: "Derrimut Dental",
        description: "",
        tags: ["Website"],
        backgroundColor: "#37A4FB",
        color: "#fff",
    },
    {
        image: "/img/portfolio/moire.png",
        title: "Moire",
        description: "",
        tags: ["Website"],
        backgroundColor: "#B0BED5",
        color: "#fff",
    },
];

const faqItems = reactive([
    {
        question: "What is included in the instant website service?",
        answer: "You get a fully functional, professionally designed website, SEO-friendly setup, mobile optimization, and an easy-to-use CMS so you can update your site without coding knowledge.",
        isOpen: false,
    },
    {
        question: "How long does it take to get my website live?",
        answer: "Your website will be ready to launch within 7 days after we receive all required content from you.",
        isOpen: false,
    },
    {
        question: "Can I customize my website design?",
        answer: "Yes! You can choose from our professionally designed templates, and we’ll customize it with your branding, colors, images, and content to match your business.",
        isOpen: false,
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! Every website we build is fully responsive, meaning it looks and works great on desktops, tablets, and smartphones.",
        isOpen: false,
    },
    {
        question: "Do I need technical skills to update my website?",
        answer: "No! Our websites come with a user-friendly CMS that allows you to easily edit text, add images, and update pages without needing a developer.",
        isOpen: false,
    },
    {
        question: "What if I need extra features or customization?",
        answer: "If you need additional customizations, advanced features, or integrations, we offer custom add-ons at an affordable price. Just let us know what you need!",
        isOpen: false,
    },
    {
        question: "Are there any hidden costs?",
        answer: "No hidden fees—what you see is what you pay! We provide clear, upfront pricing with no surprises.",
        isOpen: false,
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes! We offer optional maintenance and support plans if you ever need assistance after your website is live.",
        isOpen: false,
    },
]);
</script>

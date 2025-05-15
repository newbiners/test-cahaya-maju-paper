<template>
    <div class="page page-index">
        <section-services-top-mobile />
        <section-services-why-choose
            title="Why Choose Our Mobile App Development Services?"
            :choose-us-items="chooseUsItems"
        />
        <section-services-challenges
            title="Common Challenges We Solve"
            img_challenges="/img/img-challenges-mobile.png"
            :items_right="itemsChallenges"
        />
        <section-services-development-service
            title="Our Mobile App Development Services"
            :items_left="items_left"
            img_top="/img/img-mobile-dev-services.png"
            img_bottom="/img/img-mobile-dev-services-bottom.png"
        />
        <section-services-our-work
            :item_our_works="item_our_works"
            :class_bg="'bg-white'"
        />
        <section-services-faq :faqItems="faqItems" />
        <section-services-contact-us
            title="Get Started Today! Let’s Build Your Mobile App"
            description="Your business deserves an affordable, high-quality website that works for you. Don't waste time on complicated development—get online quickly and start growing your business now!"
        />
    </div>
</template>

<script setup>
useSeoMeta(
    {
        title: "Custom Mobile App Development | iOS & Android Solutions",
        description:
            "Bitzania develops high-performance mobile apps for iOS and Android, tailored to your business needs. We create user-friendly, scalable, and secure apps with seamless API integrations. Elevate your mobile presence—get started today!",
    },
    {
        tagPriority: "high", // overrides route rules
    }
);

const items_left = [
    {
        title: "Custom Mobile App Development",
        description:
            "We build native and cross-platform apps tailored to your business needs.",
        icon: "/svg/painting.svg",
    },
    {
        title: "Cross-Platform App Development",
        description:
            "Develop once, deploy on iOS & Android using Flutter, React Native, or hybrid frameworks.",
        icon: "/svg/globe.svg",
    },
    {
        title: "Enterprise Mobile Solutions",
        description:
            "Boost productivity with secure and scalable enterprise mobile apps for internal teams and business operations.",
        icon: "/svg/folder.svg",
    },
    {
        title: "E-commerce & Payment Apps",
        description:
            "Seamless shopping experiences with integrated payment gateways, order tracking, and push notifications.",
        icon: "/svg/shopping-bag.svg",
    },
    {
        title: "Mobile App Analytics & Performance Optimization",
        description:
            "Track user engagement, optimize speed, and improve conversion rates with data-driven insights.",
        icon: "/svg/phone-rings.svg",
    },
    {
        title: "App Maintenance & Updates",
        description:
            "We provide bug fixes, security patches, feature enhancements, and ongoing support to keep your app running smoothly.",
        icon: "/svg/tackle.svg",
    },
];

const chooseUsItems = [
    {
        title: "Custom-Built for Your Business",
        description:
            "We develop tailored mobile apps that align with your goals—no off-the-shelf templates!",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "iOS & Android Compatibility",
        description:
            "We build native and cross-platform apps for both iOS & Android, ensuring the best performance across all devices.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "User-Friendly & Intuitive UI/UX",
        description:
            "We create stunning, easy-to-navigate mobile interfaces that enhance user engagement.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Seamless Backend & API Integrations",
        description:
            "Our apps integrate with third-party APIs, CRMs, payment gateways, and cloud solutions for a connected experience.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "High Performance & Security",
        description:
            "Speed, scalability, and security are our top priorities—our apps run fast, handle high traffic, and protect sensitive data.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Ongoing Support & Maintenance",
        description:
            "We provide continuous updates, bug fixes, and feature enhancements to keep your app running smoothly.",
        icon: "/svg/mark-check-blue.svg",
    },
];

const item_our_works = [
    {
        image: "/img/portfolio/united-farmatic.png",
        title: "PT United Farmatic Indonesia",
        description: "",
        tags: ["Mobile Apps"],
        backgroundColor: "#084391",
        color: "#000",
    },
    {
        image: "/img/portfolio/iLuvRun.png",
        title: "iLuvRun",
        description: "",
        tags: ["Mobile Apps"],
        backgroundColor: "#FF0000",
        color: "#fff",
    },
    {
        image: "/img/portfolio/mitra-sejati.png",
        title: "CV Mitra Sejati Distribusi",
        description: "",
        tags: ["Mobile Apps"],
        backgroundColor: "#49A7D6",
        color: "#fff",
    },
];

const faqItems = reactive([
    {
        question: "What platforms do you develop mobile apps for?",
        answer: "We build iOS, Android, and cross-platform apps using Flutter, React Native, and Native Development (Swift, Kotlin).",
        isOpen: false,
        isHtml: true,
    },
    {
        question:
            "Can you integrate third-party tools like payment gateways & APIs?",
        answer: "Yes! We integrate payment systems (Stripe, PayPal, Apple Pay, Google Pay), CRMs, ERPs, and automation tools.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Can you help with app store submission?",
        answer: "Yes! We handle the entire process, ensuring your app meets Apple App Store & Google Play Store guidelines.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Do you provide app updates & maintenance?",
        answer: "Yes! We offer ongoing maintenance, bug fixes, security patches, and feature enhancements to keep your app up to date.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "How much does mobile app development cost?",
        answer: "Pricing depends on complexity, features, and platform choice. Contact us for a custom quote.",
        isOpen: false,
        isHtml: false,
    },
]);

const itemsChallenges = [
    {
        title: "Struggling to engage customers on mobile?",
        description:
            "We design interactive, user-centric apps that enhance engagement and retention.",
        icon: "/svg/growth_down.svg",
    },
    {
        title: "Slow & unresponsive apps?",
        description:
            "We develop high-performance mobile applications with optimized speed and responsiveness.",
        icon: "/svg/hourglass.svg",
    },
    {
        title: "Need seamless integration with existing systems?",
        description:
            "We connect your app with CRM, ERP, payment gateways, and other tools for a seamless digital experience.",
        icon: "/svg/clips.svg",
    },
    {
        title: "Concerned about maintenance & future scalability?",
        description:
            "We ensure your app is future-proof, scalable, and easy to update as your business grows.",
        icon: "/svg/tackle.svg",
    },
    {
        title: "Worried about security & compliance?",
        description:
            "We implement encryption, secure authentication, and compliance standards (GDPR, HIPAA, etc.) to keep your data safe.",
        icon: "/svg/padlock.svg",
    },
];
</script>

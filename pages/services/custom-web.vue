<template>
    <div class="page page-index">
        <section-services-top-custom />
        <section-services-why-choose
            title="Why Choose Bitzania for Website Development?"
            :choose-us-items="chooseUsItems"
        />
        <section-services-development-service
            title="Our Website Development Services"
            :items_left="items_left"
            img_top="/img/img-custom-top-development-service.png"
            img_bottom="/img/img-custom-bottom-development-service.png"
        />
        <section-services-custom-it-work />
        <section-services-our-work
            :item_our_works="item_our_works"
            :class_bg="'bg-white'"
        />
        <section-services-faq :faqItems="faqItems" />
        <section-services-custom-contact-us />
    </div>
</template>

<script setup>
useSeoMeta(
    {
        title: "Custom Website Development | Scalable, Secure & Fully Optimized Solutions",
        description:
            "Bitzania builds high-quality, fully customizable websites designed to grow with your business. From custom web design to performance optimization and maintenance, we deliver fast, secure, and scalable solutions. Get started today!",
    },
    {
        tagPriority: "high", // overrides route rules
    }
);

const items_left = [
    {
        title: "Custom Website Design",
        description:
            "We design sleek, modern, and user-friendly websites that enhance engagement and build credibility.",
        icon: "/svg/rocket-icon.svg",
    },
    {
        title: "Full-Stack Web Development",
        description:
            "From front-end visuals to back-end functionality, we build high-performance websites using the latest technologies.",
        icon: "/svg/painting.svg",
    },
    {
        title: "Performance & Security Optimization",
        description:
            "Your website will be fast, secure, and fully optimized for the best user experience.",
        icon: "/svg/lightning.svg",
    },
    {
        title: "Custom Integrations & API Development",
        description:
            "We integrate payment systems, CRMs, automation tools, and analytics to make your website a powerful digital hub.",
        icon: "/svg/globe.svg",
    },
    {
        title: "Website Revamp & Migration",
        description: "Maintenance & Technical Support",
        icon: "/svg/clips.svg",
    },
    {
        title: "Maintenance & Technical Support",
        description:
            "We provide ongoing updates, security patches, and feature enhancements to ensure your website stays optimized.",
        icon: "/svg/tackle.svg",
    },
];

const chooseUsItems = [
    {
        title: "Built for Your Business—No Templates!",
        description:
            "Every website we create is fully customized to match your brand, industry, and goals—no generic templates, only strategic solutions.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Fast, Secure & Scalable Development",
        description:
            "Our websites load quickly, handle high traffic, and come with built-in security to ensure long-term reliability.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "User-Friendly, Mobile-Optimized Experience",
        description:
            "We design responsive, mobile-friendly websites that provide seamless navigation across all devices.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Powerful Integrations & Automations",
        description:
            "From CRMs and payment gateways to analytics and automation tools, we integrate the best technology to enhance your website’s capabilities.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "SEO & Performance Optimization",
        description:
            "We follow SEO best practices, ensure fast load times, and optimize for accessibility—helping your website rank higher and perform better.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Ongoing Support & Maintenance",
        description:
            "We provide continuous support, security updates, and performance enhancements to keep your site running smoothly.",
        icon: "/svg/mark-check-blue.svg",
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
        question: "How long does it take to build a custom website?",
        answer: `<p>Timelines depend on project complexity:</p>          
                    <ul style="list-style-type: disc; padding-left: 1.75rem;">
                        <li>Basic business website – 3 to 5 weeks</li>
                        <li>Custom development with integrations – 6 to 10 weeks</li>
                        <li>Advanced platforms (SaaS, portals, etc.) – Varies based on scope</li>
                    </ul>
                `,
        isOpen: false,
        isHtml: true,
    },
    {
        question: "Can you revamp my existing website?",
        answer: "Yes! We offer website redesigns, performance enhancements, and feature upgrades to modernize your site.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Do you integrate third-party tools like payment systems?",
        answer: "Absolutely! We work with Midtrans, Xendit, Stripe, PayPal and custom APIs to enhance your website’s functionality.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Will my website be mobile-friendly and SEO-optimized?",
        answer: "Yes! Our websites are fully responsive, SEO-friendly, and built for speed to improve search rankings and user experience.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Can you migrate my website to a new platform?",
        answer: "Yes! We offer seamless website migrations while preserving your data, SEO rankings, and functionalities.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Do you provide website maintenance and support?",
        answer: "Yes! We offer ongoing support, security updates, bug fixes, and performance monitoring to keep your website running smoothly.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "How much does custom website development cost?",
        answer: "Pricing depends on the project scope. Contact us for a tailored quote based on your needs.",
        isOpen: false,
        isHtml: false,
    },
]);
</script>

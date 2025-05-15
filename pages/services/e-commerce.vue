<template>
    <div class="page page-index">
        <section-services-top-ecommerce />
        <section-services-why-choose
            title="Why Choose Bitzania for Your E-Commerce Website?"
            :choose-us-items="chooseUsItems"
        />
        <section-services-challenges-ecommerce />
        <section-services-development-service
            title="Our E-commerce Development Services"
            :items_left="items_left"
            img_top="/img/img-ecommerce-top-development-service.png"
            img_bottom="/img/img-ecommerce-bottom-development-service.png"
        />
        <section-services-our-work
            :item_our_works="item_our_works"
            :class_bg="'bg-white'"
        />
        <section-services-faq :faqItems="faqItems" />
        <section-services-contact-us
            title="Get Started Today – Let’s Build Your Store!"
            description="Your business deserves a fast, secure, and scalable e-commerce store that works seamlessly from day one."
        />
    </div>
</template>

<script setup>
useSeoMeta(
    {
        title: "E-Commerce Website Development | Shopify & WooCommerce Experts",
        description:
            "Bitzania builds high-performance online stores with Shopify and WooCommerce. We create scalable, secure, and fully customized e-commerce solutions to boost your sales. Get started today and grow your business online!",
    },
    {
        tagPriority: "high", // overrides route rules
    }
);

const items_left = [
    {
        title: "Custom E-commerce Store Development",
        description:
            "We build feature-rich Shopify and WooCommerce stores that are secure, scalable, and high-performing.",
        icon: "/svg/painting.svg",
    },
    {
        title: "Shopify & WooCommerce Customization",
        description:
            "We tailor your store with custom themes, plugins, checkout flows, and unique features to match your business model.",
        icon: "/svg/rocket-icon.svg",
    },
    {
        title: "Store Performance Optimization",
        description:
            "We improve site speed, server performance, and database efficiency, ensuring a smooth user experience.",
        icon: "/svg/lightning.svg",
    },
    {
        title: "Third-Party Integrations",
        description:
            "We integrate payment gateways, shipping solutions, CRM, ERP, and marketing tools to streamline your operations.",
        icon: "/svg/clips.svg",
    },
    {
        title: "E-commerce Migration & Upgrades",
        description:
            "Need to switch platforms? We offer seamless Shopify & WooCommerce migrations with zero downtime.",
        icon: "/svg/globe.svg",
    },
    {
        title: "Maintenance & Ongoing Support",
        description:
            "We provide regular updates, security patches, and technical support to keep your store running at peak performance.",
        icon: "/svg/tackle.svg",
    },
];

const chooseUsItems = [
    {
        title: "Fast & Scalable Stores",
        description:
            "Your online store will be built for speed, performance, and long-term growth, handling high traffic and large product catalogs effortlessly.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Seamless Shopify & WooCommerce Integration",
        description:
            "From payment gateways and inventory systems to third-party APIs, we integrate everything your store needs to run smoothly.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Custom Features & Functionality",
        description:
            "Need a custom checkout process, dynamic pricing, or automation workflows? We develop tailor-made solutions to match your business model.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Secure & High-Performance Development",
        description:
            "We follow best practices in security, database optimization, and code efficiency to ensure your store is stable and safe.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Ongoing Maintenance & Support",
        description:
            "Our job doesn’t end at launch—we offer continuous support, updates, and performance improvements to keep your store running smoothly.",
        icon: "/svg/mark-check-blue.svg",
    },
];

const item_our_works = [
    {
        image: "/img/portfolio/depot-kamera.png",
        title: "Depot Kamera",
        description: "",
        tags: ["E-Commerce"],
        backgroundColor: "#F0EFF5",
        color: "#000",
    },
    {
        image: "/img/portfolio/verist.png",
        title: "Verist",
        description: "",
        tags: ["E-Commerce"],
        backgroundColor: "#F5F3EB",
        color: "#fff",
    },
    {
        image: "/img/portfolio/oggi-furniture.png",
        title: "Oggi Furniture",
        description: "",
        tags: ["E-Commerce"],
        backgroundColor: "#F6F6F6",
        color: "#fff",
    },
];

const faqItems = reactive([
    {
        question: "How long does it take to build an e-commerce store?",
        answer: `<p>It depends on the project scope:</p>          
                    <ul style="list-style-type: disc; padding-left: 1.75rem;">
                        <li>Basic Shopify/WooCommerce setup – 2 to 4 weeks</li>
                        <li>Custom-built store with integrations – 4 to 8 weeks</li>
                        <li>Platform migration & complex development – Timeline varies</li>
                    </ul>
                `,
        isOpen: false,
        isHtml: true,
    },
    {
        question: "Can you customize my existing Shopify or WooCommerce store?",
        answer: "Yes! We offer custom themes, feature enhancements, performance optimizations, and plugin development.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Do you integrate payment gateways and shipping providers?",
        answer: "Absolutely! We integrate PayPal, Stripe, local banks, shipping APIs, and automated tax calculators.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Is my store mobile-friendly and SEO-optimized?",
        answer: "Yes! We build fully responsive, mobile-friendly stores with fast load speeds, SEO best practices, and structured data to improve search rankings.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Can you migrate my store from another platform?",
        answer: "Yes! We offer seamless migrations to Shopify or WooCommerce, preserving all data and minimizing downtime.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Do you provide maintenance and support?",
        answer: "Yes! We offer ongoing support, security updates, bug fixes, and feature enhancements to keep your store running smoothly.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "How much does e-commerce development cost?",
        answer: "Pricing depends on the project scope. Contact us for a custom quote tailored to your needs.",
        isOpen: false,
        isHtml: false,
    },
]);
</script>

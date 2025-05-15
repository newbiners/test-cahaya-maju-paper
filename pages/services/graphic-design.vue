<template>
    <div class="page page-index">
        <section-services-top-graphic-design />
        <section-services-why-choose
            title="Why Choose Our Graphic Design Services?"
            :choose-us-items="chooseUsItems"
        />
        <section-services-challenges
            title="Common Design Challenges We Solve"
            img_challenges="/svg/design-challenge.svg"
            :items_right="itemsChallenges"
        />
        <section-services-development-service
            title="Our Graphic Design Services"
            :items_left="items_left"
            img_top="/svg/graphic-services-1.svg"
            img_bottom="/svg/graphic-services-2.svg"
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
        title: "Professional Graphic Design Services | Elevate Your Brand Identity",
        description:
            "Bitzania offers high-quality graphic design services, including logo design, branding, social media graphics, and packaging. We create custom, visually stunning designs that make your brand stand out. Get started today and bring your vision to life!",
    },
    {
        tagPriority: "high", // overrides route rules
    }
);

const items_left = [
    {
        title: "Logo & Brand Identity Design",
        description:
            "A strong logo, color scheme, and typography build brand recognition and credibility.",
        icon: "/svg/rocket-icon.svg",
    },
    {
        title: "Marketing & Advertising Graphics",
        description:
            "We design flyers, posters, brochures, business cards, and banners that make an impact.",
        icon: "/svg/broadcast.svg",
    },
    {
        title: "Social Media Graphics",
        description:
            "Stand out with custom Instagram posts, Facebook ads, LinkedIn banners, and more.",
        icon: "/svg/phone-rings.svg",
    },
    {
        title: "Website & UI/UX Design",
        description:
            "From landing pages to full websites, we design sleek, conversion-focused interfaces.",
        icon: "/svg/globe.svg",
    },
    {
        title: "Infographics & Presentation Design",
        description:
            "Communicate complex ideas visually with clear and engaging infographics and pitch decks.",
        icon: "/svg/folder.svg",
    },
    {
        title: "Custom Illustrations & Digital Art",
        description:
            "Unique, hand-crafted visuals tailored to your brand’s style and message.",
        icon: "/svg/pen.svg",
    },
    {
        title: "Print & Packaging Design",
        description:
            "Business cards, product packaging, labels, and event materials designed to impress.",
        icon: "/svg/print.svg",
    },
];

const chooseUsItems = [
    {
        title: "Unique & Custom Designs",
        description:
            "We create designs that reflect your brand’s personality—no generic templates!",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Strategic & Results-Driven",
        description:
            "We blend creativity with marketing strategy to make designs that engage and convert.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Consistent Branding Across All Platforms",
        description:
            "From your logo to social media graphics, we ensure a cohesive visual identity.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "High-Quality & Scalable Designs",
        description:
            "Our designs are crafted with high resolution and scalability in mind, ensuring they look perfect in every format.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Fast Turnaround & Unlimited Revisions",
        description:
            "We work quickly while ensuring your complete satisfaction with unlimited revisions.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Multiple File Formats & Source Files Provided",
        description:
            "We deliver designs in PNG, JPG, PDF, AI, PSD, SVG, and any other format you need.",
        icon: "/svg/mark-check-blue.svg",
    },
];

const item_our_works = [
    {
        image: "/img/portfolio/global-sukses.png",
        title: "Global Mas Sukses",
        description: "",
        tags: ["Graphic Design"],
        backgroundColor: "#F5F5F6",
        color: "#000",
    },
    {
        image: "/svg/real-fit-catering.svg",
        title: "Real Fit Catering",
        description: "",
        tags: ["Graphic Design"],
        color: "#fff",
    },
    {
        image: "/img/portfolio/ohmypet.png",
        title: "Oh My Pet!",
        description: "",
        tags: ["Graphic Design"],
        backgroundColor: "white",
        color: "#fff",
    },
];

const faqItems = reactive([
    {
        question: "What types of graphic design services do you offer?",
        answer: "We offer branding, logo design, UI/UX, social media graphics, print materials, and custom illustrations.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Can you help with a complete brand identity?",
        answer: "Yes! We develop full brand identity kits including logos, color palettes, typography, and brand guidelines.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "How long does it take to complete a design project?",
        answer: `<p>Timelines depend on the project:</p> <ul style="list-style-type: disc; padding-left: 1.75rem;"> <li>Logos & social media graphics – 3 to 5 days</li> <li>Marketing materials & branding kits – 1 to 2 weeks</li> <li>UI/UX design – 2 to 4 weeks</li> </ul> `,
        isOpen: false,
        isHtml: true,
    },
    {
        question: "Can I request revisions?",
        answer: "Yes! We offer unlimited revisions until you're 100% satisfied with the design.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Do you provide the source files?",
        answer: "Absolutely! You will receive AI, PSD, SVG, and other editable files upon request.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Can you create designs for both print & digital use?",
        answer: "Yes! We ensure your designs are optimized for web, mobile, and high-quality printing.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "How much do your graphic design services cost?",
        answer: "Pricing depends on complexity—contact us for a custom quote!",
        isOpen: false,
        isHtml: false,
    },
]);

const itemsChallenges = [
    {
        title: "Struggling to establish a strong brand identity?",
        description:
            "We create professional logos, brand guidelines, and assets to make your business memorable.",
        icon: "/svg/paper&pena.svg",
    },
    {
        title: "Need high-impact marketing visuals?",
        description:
            "We design compelling ads, brochures, banners, and presentations to drive engagement.",
        icon: "/svg/broadcast.svg",
    },
    {
        title: "Social media content not performing well?",
        description:
            "Our social media graphics are designed to boost likes, shares, and audience interaction.",
        icon: "/svg/phone-rings.svg",
    },
    {
        title: "Uninspiring website or app UI?",
        description:
            "We design user-friendly, aesthetically pleasing UI/UX that enhances user experience.",
        icon: "/svg/grid-layout.svg",
    },
    {
        title: "Confused about print vs. digital designs?",
        description:
            "We create versatile designs suitable for web, print, and mobile platforms.",
        icon: "/svg/lamp-blue.svg",
    },
];
</script>

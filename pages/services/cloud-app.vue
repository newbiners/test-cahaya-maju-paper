<template>
    <div class="page page-index">
        <section-services-cloud-app />
        <section-services-why-choose
            title="Why Choose Our Cloud Application Services?"
            :choose-us-items="chooseUsItems"
        />
        <section-services-challenges
            title="Common Challenges We Solve"
            img_challenges="/img/img-challenges-cloud.png"
            :items_right="itemsChallenges"
        />
        <section-services-development-service
            title="Our E-commerce Development Services"
            :items_left="items_left"
            img_top="/svg/cloud-top-1.svg"
            img_bottom="/svg/cloud-bottom-1.svg"
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
        title: "Cloud Application Development | Scalable & Secure Business Solutions",
        description:
            "Bitzania specializes in cloud application development, offering scalable, secure, and cost-effective solutions. From cloud migration to custom API integrations, we help businesses optimize performance and reduce costs. Get started with cloud transformation today!",
    },
    {
        tagPriority: "high", // overrides route rules
    }
);

const items_left = [
    {
        title: "Custom Cloud Application Development",
        description:
            "From idea to deployment, we build cloud-native applications tailored to your business needs.",
        icon: "/svg/painting.svg",
    },
    {
        title: "Cloud Migration & Modernization",
        description:
            "Move your existing applications to the cloud seamlessly with zero downtime.",
        icon: "/svg/globe.svg",
    },
    {
        title: "Cloud API Development & Integrations",
        description:
            "Enhance your cloud app’s capabilities with seamless API connections.",
        icon: "/svg/clips.svg",
    },
    {
        title: "SaaS Application Development",
        description:
            "We design and develop scalable SaaS solutions that drive recurring revenue.",
        icon: "/svg/lamp-blue.svg",
    },
    {
        title: "Cloud-Based Data Analytics & Dashboards",
        description:
            "Get real-time insights and data-driven decision-making with our cloud analytics solutions.",
        icon: "/svg/folder.svg",
    },
    {
        title: "Ongoing Cloud Maintenance & Support",
        description:
            "We provide security patches, performance optimization, and continuous improvements.",
        icon: "/svg/tackle.svg",
    },
];

const chooseUsItems = [
    {
        title: "Tailored for Your Business Needs",
        description:
            "We build cloud applications that align with your business goals—no one-size-fits-all solutions.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Scalability & Performance",
        description:
            "Our cloud solutions grow with your business, ensuring high availability and optimal performance even under heavy traffic.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Cost-Effective & Efficient",
        description:
            "Reduce infrastructure costs and maintenance overhead with cloud-based applications that require minimal on-site hardware.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Seamless Integrations",
        description:
            "We connect your cloud apps with CRMs, ERPs, payment gateways, and third-party APIs for a unified digital ecosystem.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "Enhanced Security & Compliance",
        description:
            "Our solutions adhere to industry-leading security standards, ensuring data protection, encryption, and regulatory compliance.",
        icon: "/svg/mark-check-blue.svg",
    },
    {
        title: "24/7 Monitoring & Support",
        description:
            "We provide continuous monitoring, updates, and proactive maintenance to keep your cloud application running smoothly.",
        icon: "/svg/mark-check-blue.svg",
    },
];

const item_our_works = [
    {
        image: "/svg/cloud-see-our-work-1.svg",
        title: "Grand Gion",
        description: "",
        tags: ["Cloud Application"],
        color: "#000",
    },
    {
        image: "/svg/cloud-see-our-work-2.svg",
        title: "PT Golden Sunkist Plastindo",
        description: "",
        tags: ["Cloud Application"],
        color: "#fff",
    },
    {
        image: "/svg/cloud-see-our-work-3.svg",
        title: "PT Samudera Kencana Sejahtera",
        description: "",
        tags: ["Cloud Application"],
        color: "#fff",
    },
];

const faqItems = reactive([
    {
        question: "What is a cloud application?",
        answer: `<p>A cloud application is software that runs on remote servers and is accessed via the internet, rather than being installed on a local computer. This ensures scalability, flexibility, and remote accessibility.</p>
                `,
        isOpen: false,
        isHtml: true,
    },
    {
        question: "How can a cloud application benefit my business?",
        answer: "Cloud applications reduce infrastructure costs, improve performance, enhance security, and allow for seamless scalability to support business growth.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Can you migrate my existing application to the cloud?",
        answer: "Yes! We offer full cloud migration services to move your existing software, databases, and workflows to a cloud-based infrastructure with minimal downtime.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Is my data secure in the cloud?",
        answer: "Absolutely! We implement industry-leading security measures, including data encryption, firewalls, and multi-factor authentication, to keep your data protected.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "What cloud platforms do you work with?",
        answer: "We develop cloud applications on AWS and Google Cloud depending on your business needs.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes! We offer continuous monitoring, security updates, performance optimizations, and technical support to ensure your cloud application runs smoothly.",
        isOpen: false,
        isHtml: false,
    },
    {
        question: "How much does cloud application development cost?",
        answer: "Pricing depends on factors such as complexity, features, and integrations. Contact us for a custom quote tailored to your business needs.",
        isOpen: false,
        isHtml: false,
    },
]);

const itemsChallenges = [
    {
        title: "Struggling with high IT infrastructure costs?",
        description:
            "We migrate your business to a cost-effective cloud environment, reducing IT expenses while improving efficiency.",
        icon: "/svg/bag.svg",
    },
    {
        title: "Experiencing performance issues with legacy systems?",
        description:
            "Our cloud solutions eliminate performance bottlenecks and improve system responsiveness.",
        icon: "/svg/lightning.svg",
    },
    {
        title: "Worried about security threats and data loss?",
        description:
            "We implement multi-layered security, encryption, and automatic backups to safeguard your data.",
        icon: "/svg/padlock.svg",
    },
    {
        title: "Need a scalable solution to support business growth?",
        description:
            "Our cloud applications dynamically scale to handle increasing workloads and user demands.",
        icon: "/svg/growth_down.svg",
    },
    {
        title: "Lack of seamless integration with existing tools?",
        description:
            "We ensure full compatibility with your existing systems, streamlining workflows and automating processes.",
        icon: "/svg/clips.svg",
    },
];
</script>

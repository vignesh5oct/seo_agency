import { FaCameraRetro, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";

// Home Page
export const home_page_brand_name = "Building Brands in the";
export const home_page_brand_name_2 = "Digital Agency";
export const home_page_content = `Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.`;
export const home_page_image_1 = "https://www.alwin.io/assets/images/home/banner_img.webp";
export const learnMore = "Learn More";
export const companies_page_title_1 = "Trusted by 350+ Successful Business Tycoons";
export const brand_page_title_1 = "Trusted by 350+ Successful Business Tycoons";



// Menus
export const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/#about",
    },
    {
        id: 3,
        name: "Services",
        link: "/services",
    },
    {
        id: 4,
        name: "Contact",
        link: "/contact",
    },
];

export const footerLinks = [
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Features",
        link: "/#features",
    },
    {
        title: "Works",
        link: "/#works",
    },
    {
        title: "Career",
        link: "/#career",
    },
];

export const helpLinks = [
    {
        id: 1,
        title: "Customer Support",
        link: "/#support",
    },
    {
        id: 2,
        title: "Delivery Details",
        link: "/#delivery-details",
    },
    {
        id: 3,
        title: "Terms & Conditions",
        link: "/#terms",
    },
    {
        id: 4,
        title: "Privacy Policy",
        link: "/#policy",
    },
];
export const resourcesLinks = [
    {
        id: 1,
        title: "Free Ebooks",
        link: "/#ebooks",
    },
    {
        id: 2,
        title: "How To Blog",
        link: "/#blogs",
    },
    {
        id: 3,
        title: "Subscribe",
        link: "https://www.youtube.com/@premk97",
    },
];
export const socialMedia = [
    {
        id: 1,
        title: "Instagram",
        icon: <FaInstagram className="text-2xl hover:text-primary" />,
        link: "https://www.instagram.com/pk_premkumar97?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
        id: 2,
        title: "Youtube",
        icon: <FaFacebook className="text-2xl hover:text-primary" />,
        link: "/#blogs",
    },
    {
        id: 3,
        title: "LinkedIn",
        icon: <FaLinkedin className="text-2xl hover:text-primary" />,
        link: "https://www.linkedin.com/in/premkumar-r-124720161/",
    },
];


// Brand Page
export const companies = [
    { name: "airbnb", url: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg" },
    { name: "apple", url: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" },
    { name: "spark", url: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" },
    { name: "samsumg", url: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg" },
    { name: "quora", url: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" },
    { name: "sass", url: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" },
    { name: "facebook", url: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg" },
    { name: "disney", url: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg" },
]


// Service Page
export const serviceTitle = "Explore Our Services";
export const serviceContent = "We are self-service data analytics software that lets you create visually.";
export const servicesProvided = [
    {
        name: "App Development",
        icon: <FaCameraRetro className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "0",
    },
    {
        name: "Web Designing",
        icon: <GiNotebook className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "300",
    },
    {
        name: "Graphic Designing",
        icon: <SlNote className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "500",
    },
    {
        name: "Digital Marketing",
        icon: <SlNote className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "700",
    },
];

export const BlogsData = [
    {
        id: 1,
        image: blog1,
        title: "Realtime analytics",
        description:
            "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 2,
        image: blog2,
        title: "Realtime analytics",
        description:
            "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 3,
        image: blog3,
        title: "Realtime analytics",
        description:
            "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
        author: "Someone",
        date: "April 22, 2022",
    },
    
];
import HeroPng from "Assets/hero/hero.png";
import Particle from "Assets/hero/particle.png";
import Ui from "Assets/about/ui.png";
import Web from "Assets/about/web.png";
import App from "Assets/about/app.png";
import Graphic from "Assets/about/graphic.png";
import AboutImage from "Assets/about/about.png";
import Work from "Assets/portfolio/work.png";
import PortfolioParticle from "Assets/portfolio/particle.png";
import ClientAvatar from "Assets/client/client.jpeg";

import Company1 from "Assets/company/company-1.png";
import Company2 from "Assets/company/company-2.png";
import Company3 from "Assets/company/company-3.png";
import Company4 from "Assets/company/company-4.png";
import Company5 from "Assets/company/company-5.png";
import Company6 from "Assets/company/company-6.png";
import Company7 from "Assets/company/company-7.png";
import Company8 from "Assets/company/company-8.png";
import BlogImage from "Assets/blog/blog-1.png";

import Logo from "Assets/header/logo.png";

export const data = {
    Hero: {
        title: "We are <br /> Code Station21",
        slogan: "Your Dream, We Build",
        description: "Where an idea turns into a project. Help your startups, business, and ideas to grow more and solve the problem with the power of code.",
        btnLabel: "See Projects",
        images: {
            hero: HeroPng,
            particle: Particle
        }
    },
    About: {
        heading: {
            value1: "We Provide Best Solutions",
            value2: "For Your Business"
        },
        myself: {
            title: "Let's Something <br /> Know Great About Us",
            description: "We are a group of professional software developer team that run by enthusiast for coding and design.",
            features: [
                "100% client satisfaction",
                "Quality Service",
                "Lifetime aftersales supports"
            ],
            button: "Contact Us",
            image: AboutImage
        },
        solutions: [
            {
                title: "UI/UX",
                description: "Start with listening to your idea, research, make a wireframe, build a prototype, finalizing the UI/UX.",
                icon: Ui
            },
            {
                title: "Web Development",
                description: "Create a highspeed, modern and responsive website and web application for you.",
                icon: Web
            },
            {
                title: "App Development",
                description: "Both Andriod and ios are developing here. We offer a cross-platform solution that is easy to use and maintain.",
                icon: App
            },
            {
                title: "Graphic Design",
                description: "We provide all kinds of designs like logos, flyers, visiting cards, social media, etc.",
                icon: Graphic
            }
        ]
    },
    Skill: {
        experience: {
            title1: "Creative & Professional",
            title2: "Skills Experience",
            description: "We are a remote developer agency based in Bangladesh, working with clients around the world. As passionate designers & developer, we love building website, mobile app and UI/UX that are easy to use.",
            btnText: "Get Any Project",
            btnUrl: "/"
        },
        progress: [
            { field: "Graphics Design", progress: 70 },
            { field: "Ui/Ux Design", progress: 80 },
            { field: "Web Development", progress: 90 },
            { field: "App Development", progress: 85 }
        ],
        awards: {
            title: "Great Achievements <br /> In Our Career",
            list: [
                { title: "Project Done", award: "150", star: 0 },
                { title: "Satisfied Client", award: "99", star: 5 },
                { title: "Awards Wining", award: "5", star: 4.5 }
            ]
        }
    },

    Portfolio: {
        heading: {
            value1: "Latest Project That",
            value2: "Recently Done"
        },
        particle: PortfolioParticle,
        tabs: [
            { label: "Web Development", filter: "web", value: "1" },
            { label: "App Development", filter: "app", value: "2" },
            { label: "UI/UX", filter: "ui", value: "3" },
            { label: "Graphics Design", filter: "graphic", value: "4" }
        ],
        works: [
            { name: "Graphics Design", filter: "graphic", image: Work, url: "/" },
            { name: "Graphics Design", filter: "graphic", image: Work, url: "/" },
            { name: "Web Development", filter: "web", image: Work, url: "/" },
            { name: "Web Development", filter: "web", image: Work, url: "/" },
            { name: "Web Development", filter: "web", image: Work, url: "/" },
            { name: "App Development", filter: "app", image: Work, url: "/" },
            { name: "Web Development", filter: "web", image: Work, url: "/" },
            { name: "UI/UX", filter: "ui", image: Work, url: "/" }
        ]
    },
    Client: {
        heading: {
            value1: "What Our Client Say",
            value2: "About Ourself"
        },
        reviews: [
            {
                title: "Super support",
                name: "Jhon Doe",
                star: 5,
                review: "They are very professional and have a great team. They are always ready to help you.",
                avatar: ClientAvatar
            },
            {
                title: "Very Much helpful",
                name: "Miranda Dis",
                star: 4,
                review: "Our full social media posting and marketing are handled by them. They are so professional and always believe in analytics rather than other things.",
                avatar: ClientAvatar
            },
            {
                title: "Quality Service",
                name: "Luiz Fendi",
                star: 4,
                review: "We build our eCommerce site from here. Their UI/UX experience is so much great and the user engaging.",
                avatar: ClientAvatar
            }
        ]
    },
    Blog: {
        heading: {
            value1: "Every Single Update",
            value2: "News & Blogs"
        },
        company: [
            { logo: Company1 }, { logo: Company2 }, { logo: Company3 }, { logo: Company4 },
            { logo: Company5 }, { logo: Company6 }, { logo: Company7 }, { logo: Company8 }
        ],
        blogs: [
            {
                title: "Designer focuses on creation & implementation1",
                category: "Design",
                time: "25 January 2022",
                user: "Rayman Rahman",
                image: BlogImage,
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
            },
            {
                title: "Designer focuses on creation & implementation2",
                category: "Design",
                time: "25 January 2022",
                user: "Siam Ahnaf",
                userLink: "https://www.siamahnaf.com/",
                image: BlogImage,
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
            },
            {
                title: "Designer focuses on creation & implementation3",
                category: "Design",
                time: "25 January 2022",
                user: "Nayemul Houque",
                image: BlogImage,
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
            }
        ]
    },

    Footer: {
        logo: Logo,
        address: "171/5, Borhanpur Lane, 6 Hazaribagh Road, Dhaka 1211",
        email: "info@codestation21.com",
        phone: "+880 1552-938771",
        social: {
            github: "https://github.com/codestation21",
            facebook: "https://www.facebook.com/codestation21",
            twitter: "https://twitter.com/codestation21",
            behance: "https://behance.com/codestation21"
        },
        services: [
            "Web Development",
            "Mobile apps development",
            "UI/UX Design",
            "Graphics Design",
            "Digital Marketing",
            "SEO and SMM"
        ],
        newsletter: {
            title: "Newsletters",
            description: "Let's be friends and get interesting news about us",
            placeholder: "Write Email",
            buttonValues: {
                default: "Subscribe",
                loading: "Subscribing...",
                success: "Email received!",
                error: "Something went wrong"
            }
        }
    },
    Contact: {
        heading: {
            value1: "Do You Have Any Projects",
            value2: "Plz Say Hello"
        },
        form: {
            placeholders: {
                name: "Your Full Name",
                email: "Email Address",
                message: "Write Message"
            },
            btnText: "Send Message",
            messages: {
                success: "Email received! We will contact you soon.",
                error: "Something went wrong. Try again!"
            },
            errors: {
                nameRequired: "Please Enter Your Name!",
                emailRequired: "Please enter an email addreess!",
                emailInvalid: "The email you enter is invalid email!",
                messageRequired: "Please add your message!",
                messageMin: "Message should not be less than 25 characters!",
                messageMax: "Message should not be more than 1000 characters!"
            }
        }
    },
    Header: {
        logo: Logo,
        btnText: "See Projects",
        drawerDescription: "We are codestation21, a group of people passionate about solving problems with the power of code. We have more than 4+ professional experience in different domains and clients. Our problem-solving skills help us to create a great product for you. We are always available to help your dream projects come true."
    },
    Meta: {
        title: "Code Station21 | Web and Mobile application developing agency",
        description: "We are web and mobile application developing agency . We use technology like React.js, Next.js, Express.js, Node.js, Restful API, GraphQL, MongoDB, Typrescript, Flutter and almost all javascript framework and libraray. We can solve design and develop applications fully coustomize for you. We provide complete digital space solutions for you.",
        url: "https://codestation21.com",
        author: "Siam Ahnaf"
    },
    Navs: [
        { name: "Home", Id: "home" },
        { name: "About", Id: "about" },
        { name: "Portfolio", Id: "portfolio" },
        { name: "Client", Id: "client" },
        { name: "Blog", Id: "blog" },
        { name: "Contact", Id: "contact" },
    ]
};


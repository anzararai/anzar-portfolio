import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo1 from './logo1.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo1,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const project = [
    {
        title: 'Personal Portfolio Website',
        description: 'A modern, responsive portfolio website showcasing my work with smooth animations and interactive contact form.',
        bgImage: '/portfollio.png',
        bgImageDark: '/bgImageDark.png',
        techStack: ['nextjs', 'tailwindcss', 'framer-motion', 'web3forms'],
        githubLink: 'https://github.com/anzararai/anzar-portfolio',
        liveLink: 'https://anzar-portfolio.vercel.app/'
    },
    {
        title: 'Smart Todo List App',
        description: 'A feature-rich todo application with local storage persistence, allowing users to manage tasks efficiently.',
        bgImage: '/todo-project.png', 
        bgImageDark: '/todo-project.png',
        techStack: ['reactjs', 'tailwindcss', 'local-storage', 'hooks'],
        githubLink: 'https://github.com/anzararai/todo-app-react',
        liveLink: 'https://anzararai.github.io/todo-app-react/'
    },
    {
        title: 'Real-Time Weather App',
        description: 'A dynamic weather application that fetches live weather data using API integration with clean UI design.',
        bgImage: '/weather.png',
        bgImageDark: '/weather.png',
        techStack: ['reactjs', 'weather-api', 'vanilla-css', 'javascript'],
        githubLink: 'https://github.com/anzararai/weather-app',
        liveLink: 'https://weatherappanzar.netlify.app/'
    },
    {
        title: 'Bat-Ball-Stump Game',
        description: 'An interactive guessing game built with vanilla JavaScript, featuring random number generation and game logic.',
        bgImage: '/bat-ball-stump-game.png',
        bgImageDark: '/bat-ball-stump-game.png',
        techStack: ['javascript', 'html', 'css', 'dom-manipulation'],
        githubLink: 'https://github.com/anzararai/bat-ball-stump',
        liveLink: 'https://anzararai.github.io/bat-ball-stump/'
    },
]

export const serviceData = [
    { title: 'Frontend Web Development', description: 'I create responsive, modern, and user-friendly websites using HTML, CSS, JavaScript, and React.js.I focus on building clean and interactive UIs that look great on every device' },
    { title: 'Next.js Development', description: 'I build fast, SEO-friendly, and scalable web applications using Next.js.I use features like server-side rendering (SSR), static site generation (SSG), and dynamic routing to improve performance and visibility.'},
    { title: 'API Integration & Data Fetching', description: 'I integrate APIs to fetch and display real-time data in web applications.Using Fetch API and Next.js data-fetching methods, I make dynamic and interactive web pages.'},
    { title: 'AI-Powered Development', description: 'Leveraging AI tools like ChatGPT, Claude, and GitHub Copilot to write cleaner code, accelerate development, and build intelligent features that enhance user experience.'},
    { title: 'Deployment & Hosting', description: 'I deploy and host my React and Next.js projects on platforms like Vercel and Netlify.I use Git & GitHub for version control and smooth project management.'},
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Frontend Stack', description: 'React.js, Next.js, Tailwind CSS, JavaScript, HTML CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E in Computer Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Learning & Growth', description: 'Exploring Backend Development with Node.js & MongoDB' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
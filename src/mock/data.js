import React from 'react';

import Python from '../Icons/Python';
import Tailwind from '../Icons/Tailwind';
import GraphQL from '../Icons/GraphQL';
import Typescript from '../Icons/Typescript';
import Javascript from '../Icons/Javascript';
import Cplusplus from '../Icons/Cplusplus';
import Bootstrap from '../Icons/Bootstrap';
import Gatsby from '../Icons/Gatsby';
import MongoDB from '../Icons/MongoDB';
import Nextjs from '../Icons/Nextjs';
import Nodejs from '../Icons/Nodejs';
import Postgresql from '../Icons/Postgresql';
import ReactIcon from '../Icons/React';
import Firebase from '../Icons/Firebase';
import MaterialUI from '../Icons/MaterialUI';
import ChakraUI from '../Icons/ChakraUI';
import MySQL from '../Icons/MySQL';
import ReactQuery from '../Icons/ReactQuery';
import Redux from '../Icons/Redux';
import Sass from '../Icons/Sass';
import Zustand from '../Icons/Zustand';
import Stackoverflow from '../Icons/Stackoverflow';
import Linkedin from '../Icons/Linkedin';
import SolidGitHub from '../Icons/SolidGitHub';
import Instagram from '../Icons/Instagram';

export const hero = {
    title: '',
    subtitle: 'I am a Fullstack Web Developer and a Competitive Programmer',
    cta: '',
};

export const about = {
    img: 'profile-sm.jpg',
    paragraphOne: `I'm currently a pre-final year student, pursuing B.Tech in Computer Science and Engineering at Indian Institute of Technology (ISM) Dhanbad.`,
    paragraphTwo:
        "I am a full-stack web developer and a competitive programmer who loves to design and develop beautiful websites. I love to learn new things, I'm always open to learn new technologies and constantly strive to improve my technical competency.",
    paragraphThree:
        'My projects make use of a vast variety of latest technology tools. My best experiences are with NodeJS, ReactJS and Next JS. Below are some of my projects.',
    // paragraphThree: 'Note that not all of them mentioned are here.',
    resume: '#',
};

export const skills = [
    { icon: <Cplusplus />, title: 'C++' },
    { icon: <Javascript />, title: 'Javascript' },
    { icon: <Python />, title: 'Python' },
    { icon: <Typescript />, title: 'Typescript' },
    { icon: <Nodejs />, title: 'Node JS' },
    { icon: <Postgresql />, title: 'Postgresql' },
    { icon: <MySQL />, title: 'MySQL' },
    { icon: <MongoDB />, title: 'MongoDB' },
    { icon: <Firebase />, title: 'Firebase' },
    { icon: <ReactIcon />, title: 'React JS' },
    { icon: <GraphQL />, title: 'GraphQL' },
    { icon: <ReactQuery />, title: 'React Query' },
    { icon: <Nextjs />, title: 'Nextjs' },
    { icon: <Gatsby />, title: 'Gatsby' },
    { icon: <Redux />, title: 'Redux' },
    { icon: <Zustand />, title: 'Zustand' },
    { icon: <ChakraUI />, title: 'ChakraUI' },
    { icon: <MaterialUI />, title: 'MaterialUI' },
    { icon: <Tailwind />, title: 'Tailwind CSS' },
    { icon: <Sass />, title: 'Sass' },
    { icon: <Bootstrap />, title: 'Bootstrap' },
];

export const experience = [
    {
        timePeriod: 'Sept 2021 - April 2022',
        jobTitle: 'Full Stack Web Developer',
        employerName: 'NVCTI',
        content:
            'Integrated APIs with frontend, developed authentication routes, created and managed database schemas, managed application state with react-redux',
    },
    'last',
];

export const projects = [
    {
        id: 1,
        img: 'bloggy-1.jpg',
        title: 'Bloggy',
        info: `Bloggy is a platform to publish your feeling, ideas, experience to public. You can create and find unique and beautiful blogs here.`,
        info2: `Bloggy uses Nodejs as backend and MongoDB to store data. Frontend of the app is made with React, application state is managed with react-redux and it uses ChakraUI to create beautiful and responsive components for the app. It uses TinyMCE rich text editor to create blogs.`,
        tags: ['Node Js', 'MongoDB', 'React Js', 'Chakra UI', 'Redux'],
        url: 'https://bloggy-it.herokuapp.com/',
        repo: 'https://github.com/ss497254/Bloggy',
    },
    {
        id: 2,
        img: 'Lab-Project-1.jpg',
        title: 'SASA',
        info: `Created a Nodejs based web app and implementing clustering and LRU page replacement algorithm for faster data access, more efficient handling of large number of requests.`,
        info2: `Faster data access is gained by using LRU page replacement algorithm that caches previously fetched data so we don't have to perform frequent database queries and server performance is increased by concurrently running multiple child processes to efficiently use CPU cores.`,
        tags: ['Node Js', 'React Js', 'Clustering', 'Caching'],
        url: 'https://s-a-s-a.herokuapp.com/',
        repo: 'https://github.com/ss497254/Lab-Project',
    },
    {
        id: 3,
        img: 'weather-app.jpg',
        title: 'Weather App',
        info: 'A simple web app that gives you the weather details.',
        info2: "It's a node app that uses weatherstack API to fetch weather data and implements Server Side Rendering(SSR) to dynamically create pages on demand.",
        tags: ['Node Js', 'HTML', 'CSS', 'API', 'SSR'],
        url: 'https://weather-app-saurabh.herokuapp.com/',
        repo: 'https://github.com/ss497254/weather-app',
    },
];

export const contact = {
    cta: '',
    btn: '',
    email: 'ss497254@gmail.com',
};

export const footer = {
    networks: [
        {
            id: 1,
            icon: <Instagram size={45} />,
            name: 'Instargram',
            url: 'https://instagram.com/saurabh.singh.4',
        },
        {
            id: 2,
            icon: <Stackoverflow size={45} />,
            name: 'Stackoverflow',
            url: 'https://stackoverflow.com/users/17679757/ss497254',
        },
        {
            id: 3,
            icon: <Linkedin size={45} />,
            name: 'Linkedin',
            url: '#',
        },
        {
            id: 4,
            name: 'Github',
            icon: <SolidGitHub size={45} />,
            url: 'https://github.com/ss497254',
        },
    ],
};

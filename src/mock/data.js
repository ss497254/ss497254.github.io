export const hero = {
    title: '',
    subtitle: 'I am a Fullstack Developer and a Competitive Programmer',
    cta: '',
};

export const about = {
    img: 'profile.jpg',
    paragraphOne: `I'm currently in my pre-final year, pursuing B.Tech in Computer Science and Engineering at IIT(ISM) Dhanbad.`,
    paragraphTwo:
        'My projects make use of a vast variety of latest technology tools. My best experiences are with NodeJS and React JS. Below are some of my projects.',
    paragraphThree: '',
    // paragraphThree: 'Note that not all of them mentioned are here.',
    resume: '#',
};

export const projects = [
    {
        id: 1,
        img: 'bloggy-1.jpg',
        title: 'Bloggy',
        info: `Bloggy is a platform to publish your feeling, ideas, experience to public. You can create and find unique and beautiful blogs here.`,
        info2: `Tech Stack: Node Js, ReactJS, MongoDB`,
        url: 'https://bloggy-it.herokuapp.com/',
        repo: 'https://github.com/ss497254/Bloggy',
    },
    {
        id: 2,
        img: 'Lab-Project-1.jpg',
        title: 'SASA',
        info: `Implementing Operating System core concepts for creating a Node js based client-server for faster data access, more efficient handling of large number of requests.`,
        info2: `Faster data access is gained by using LRU page replacement algorithm and performance is increased by concurrently running Multiple Child Processes.`,
        url: 'https://s-a-s-a.herokuapp.com/',
        repo: 'https://github.com/ss497254/Lab-Project',
    },
    {
        id: 3,
        img: 'weather-app.jpg',
        title: 'Weather App',
        info: 'A simple web app that gives you the weather details.',
        info2: 'It uses weatherstack API to fetch weather data and Implements Server Side Rendering(SSR).',
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
            name: 'instagram',
            url: 'https://instagram.com/saurabh.singh.4',
        },
        {
            id: 2,
            name: 'stack-overflow',
            url: 'https://stackoverflow.com/users/17679757/ss497254',
        },
        {
            id: 3,
            name: 'linkedin',
            url: '#',
        },
        {
            id: 4,
            name: 'github',
            url: 'https://github.com/ss497254',
        },
    ],
};

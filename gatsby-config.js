module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ss497254 | Portfolio`,
                short_name: `ss497254`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#00b1ff`,
                display: `standalone`,
                icon: 'src/images/favicon.png',
            },
        },
    ],
};

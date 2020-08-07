module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dries Standaert | Design & Front-end`,
        short_name: `Dries Standaert`,
        description: `Personal website of Dries Standaert. Design and front-end of user interfaces and digital identities.`,
        start_url: `/`,
        lang: `en-US`,
        display: `standalone`,
        icon: `src/assets/images/favicon/favicon.png`,
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
}

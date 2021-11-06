module.exports = {
  siteMetadata: {
    title: `Cem Hurrell`,
    description: `Full Stack Junior Web Developer: I design and build pretty, practical things.`,
    author: `@cemhurrell`,
    image: `https://www.cemhurrell.com/icon_feature.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cem Hurrell`,
        short_name: `Cem`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

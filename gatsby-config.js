module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    //{
      // resolve: "gatsby-source-wordpress",
      // options: {
      //   /*
      //     * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
      //     * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
      //     */
      //   baseUrl: "maireadlee.ie/blog",
      //   // The protocol. This can be http or https.
      //   protocol: "http",
      //   // Indicates whether the site is hosted on wordpress.com.
      //   // If false, then the asumption is made that the site is self hosted.
      //   // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
      //   // If your site is hosted on wordpress.org, then set this to false.
      //   hostingWPCOM: false,
      //   // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
      //   // This feature is untested for sites hosted on Wordpress.com.
      //   // Defaults to true.
      //   useACF: false,
      //   auth: {
      //     // If auth.user and auth.pass are filled, then the source plugin will be allowed
      //     // to access endpoints that are protected with .htaccess.
      //     htaccess_user: "mairead",
      //     htaccess_pass: "jimmytherobin",
      //     htaccess_sendImmediately: false,
  
      //     // If hostingWPCOM is true then you will need to communicate with wordpress.com API
      //     // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
      //     // then add your clientId, clientSecret, username, and password here
      //     //wpcom_app_clientSecret:
      //       //"",
      //     //wpcom_app_clientId: "",
      //    // wpcom_user: "",
      //     //wpcom_pass: "",
      //   },
      //   // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
      //   // It can help you debug specific API Endpoints problems
      //   verboseOutput: true,
      //   // Search and Replace Urls across WordPress content
      //   //searchAndReplaceContentUrls: {
      //     //sourceUrl: "https://source-url.com",
      //     //replacementUrl: "https://replacement-url.com",
      //   //},
      // },
    //},

],
};

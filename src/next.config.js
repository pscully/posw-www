const postCSS = require('@zeit/next-css');
const mavenPro = require('typeface-maven-pro');

var exports = module.exports = {}

exports.postCSS = postCSS();

exports.mavenPro = mavenPro;

// const client = require('./client')

// module.exports = {
//   // Make sure that your node enviroment supports async/await
//   exportPathMap: async function (defaultPathMap) {
  
//     const path = await client
//       // get all the posts and return those with slugs
//       .fetch('*[_type == "post"].slug.current')
//       .then(data =>
//         // use reduce to build an object with routes
//         // and select the blog.js file, and send in the
//         // correct query paramater.
//         data.reduce(
//           (acc, slug) => ({
//             '/': { page: '/' },
//             ...acc,
//             [`/${slug}`]: { page: '/', query: { slug } }
//           }),
//           {}
//         )
//       )
//       .catch(console.error)
//     return path
//   }
// }


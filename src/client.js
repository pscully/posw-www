import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'tztunl49', // you can find this in sanity.json
  dataset: 'posts', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})
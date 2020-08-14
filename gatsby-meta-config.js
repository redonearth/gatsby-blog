module.exports = {
  title: `Redonearth Blog`,
  description: `Blog posted about Programming, life, etc.`,
  author: `Redonearth`,
  introduction: `Web Programmer, SI 2년차 개발자. SI를 벗어나기 위해 노력 중.`,
  siteUrl: `https://redonearth.netlify.com`, // Your blog site url
  social: {
    twitter: `redonearth_dev`, // Your Twitter account
    github: `redonearth`, // Your GitHub account
    medium: ``, // Your Medium account
    facebook: `redonearth`, // Your Facebook account
    linkedin: `hongjisang`, // Your LinkedIn account
  },
  icon: `content/assets/felog.png`, // Add your favicon
  keywords: [`blog`],
  comment: {
    // disqusShortName: 'redonearth-blog', // Your disqus-short-name. check disqus.com.
    utterances: 'redonearth/gatsby-blog-comments', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'redonearth',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: 'UA-175450339-1', // Add your google analytics tranking ID
}

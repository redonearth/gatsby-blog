module.exports = {
  title: `Redonearth Blog`,
  description: `Blog posted about Programming, life, etc.`,
  author: `Redonearth`,
  introduction: `Web Front-End Developer이자 3년차 개발자. 분당에 서식 중.`,
  siteUrl: `https://redonearth.netlify.app`, // Your blog site url
  social: {
    twitter: `redonearth_dev`, // Your Twitter account
    github: `redonearth`, // Your GitHub account
    medium: `redonearth-dev`, // Your Medium account
    facebook: `redonearth`, // Your Facebook account
    linkedin: `hongjisang`, // Your LinkedIn account
    instagram: `redonearth`,
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

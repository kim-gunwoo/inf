// eslint-disable-next-line import/no-anonymous-default-export
export default {
  titleTemplate: '%s - 디폴트 title',
  openGraph: {
    type: 'website',
    site_name: '디폴트 og site name',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
};

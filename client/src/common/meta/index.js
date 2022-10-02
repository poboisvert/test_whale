import Head from 'next/head';
import config from '../../lib/webconfig';

const isProduction = process.env.NEXT_PUBLIC_WEB_TITLE === 'development';

export default function Meta({ title, description, keywords, author, url }) {
  //console.log(isProduction);
  return (
    <Head>
      <title>
        {title ? [title, config.site_title].join(' | ') : config.site_title}
      </title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='language' content='English' />
      <meta
        name='description'
        content={description ? description : config.site_description}
      />
      <meta
        property='og:title'
        content={
          title ? [title, config.site_title].join(' | ') : config.site_title
        }
        key='ogtitle'
      />
      <meta
        property='og:site_name'
        content={
          title ? [title, config.site_title].join(' | ') : config.site_title
        }
        key='ogsitename'
      />

      <meta
        property='og:description'
        content={description ? description : config.site_description}
        key='ogdesc'
      />
      <meta
        property='og:url'
        content={url ? url : config.base_url}
        key='ogurl'
      />
      <link rel='icon' type='image/png' href='/img/icons/favicon.ico' />
      <link rel='apple-touch-icon' href='/img/icons/favicon.ico' />

      <meta
        name='keywords'
        content={
          keywords
            ? keywords.join(',')
            : config.site_keywords.map((it) => it.keyword).join(',')
        }
      />
      {author ? <meta name='author' content={author} /> : null}
      <link rel='canonical' href={config.base_url + url} />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@200;400&display=swap'
        rel='stylesheet'
      />
    </Head>
  );
}

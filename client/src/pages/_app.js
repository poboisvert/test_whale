import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';

const Container = dynamic(() => import('../common/container'), {
  suspense: true,
});

const Meta = dynamic(() => import('../common/meta'), {
  suspense: true,
});

const GlobalStyles = createGlobalStyle`
html,
body {
    background-color: #FFF0E5;
    font-family: 'Roboto';
    font-style: normal;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Suspense fallback={`Loading...`}>
        <GlobalStyles />
        <Meta />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Suspense>
    </>
  );
}

export default MyApp;

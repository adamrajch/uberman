// import App from 'next/app'
import Nav from "../components/nav";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrap">
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "white",
          height: "100vh",
          padding: "0"
        }}
      >
        <Nav />
        <Component {...pageProps} />
      </Container>
      <style jsx>{`
        .wrap {
          background: papayawhip;
        }
      `}</style>
      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}
      </style>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

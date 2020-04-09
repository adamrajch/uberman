// import App from 'next/app'
import Nav from "../components/nav";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Footer from "../components/footer";

const ComponentContainer = styled.div`
  margin: 0.25em;
  background: #222831;
  border-radius: 3em;
  min-height: 84vh;
  max-height: 87vh;
  overflow: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <div className="wrap">
      <Container maxWidth="xl" className="container">
        <Nav />
        <ComponentContainer>
          <Component {...pageProps} className="comp" />
        </ComponentContainer>
        <Footer />
      </Container>
      <style jsx>{`
        .wrap {
          background-color: #393e46;
          height: 100%;
          min-height: 100vh;
          // position:relative;
        }
        .container{
        
            // background-color: #1b262c,
            height: 100%,
            min-height:100vh;
            // position:relative;
        }
        .comp{
          background-color:#222831;
          // color:green;
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
            // color: #bbe1fa;
          }
          html,
          body {
            width: 100%;
            height: 100%;
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

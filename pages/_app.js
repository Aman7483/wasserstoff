import React, { Fragment, useState } from "react";
import Head from "next/head";
import SplashScreenSlide1Collect from "./components/SplashScreenSlide1Collect";
import CollectionLanding from "./index";
import "./global.css";

function MyApp({ Component, pageProps }) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const handleSplashScreenClick = () => {
    setShowSplashScreen(false);
  };

  return (
    <Fragment>
      <Head>
        <title>TASK</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {showSplashScreen ? (
        <SplashScreenSlide1Collect onClick={handleSplashScreenClick} />
      ) : (
        <CollectionLanding />
      )}
    </Fragment>
  );
}

export default MyApp;

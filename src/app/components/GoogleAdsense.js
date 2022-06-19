import { useEffect } from "react";
import {
  AdvertisingProvider,
  AdvertisingSlot,
  logVersionInfo,
} from "react-advertising";
const GoogleAdsense = ({ slot }) => {
  logVersionInfo();
  // useEffect(() => {
  //   setTimeout(() => {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   }, 1000);
  // }, []);
  // return (
  //   <div>
  //     <ins
  //       className="adsbygoogle"
  //       style={{ display: "inline-block", width: "728px", height: "90px" }}
  //       data-ad-client="ca-pub-4928141533512330"
  //       data-ad-slot={slot}
  //       data-ad-format="auto"
  //       data-adtest="on"
  //       data-full-width-responsive="true"
  //     ></ins>
  //   </div>
  // );
  return (
    <div className="App">
      <AdvertisingProvider
        config={{
          slots: [
            {
              id: "banner-ad",
              path: "/19968336/header-bid-tag-0",
              sizes: [
                [728, 90],
                [970, 90],
              ],
              prebid: [
                {
                  mediaTypes: {
                    banner: {
                      sizes: [
                        [728, 90],
                        [970, 90],
                      ],
                    },
                  },
                  bids: [
                    {
                      bidder: "appnexus",
                      params: {
                        placementId: 13144370,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        }}
      >
        <header className="App-header">
          <img
            src="./ebay-tech-logo-square-dark-bg.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">
            React Advertising Demo
            <br />
            <small>(GPT+Prebid with npm/ES6 modules)</small>
          </h1>{" "}
        </header>
        <main className="App-main">
          <p>
            This demo shows how to integrate advertising into your React
            application using Google Publisher Tags and Prebid.
          </p>
          <p>
            For more information, see the{" "}
            <a href="https://github.com/technology-ebay-de/react-advertising">
              react-advertising
            </a>{" "}
            readme on GitHub.
          </p>
          <h2>
            Slot <em>banner-ad</em>:
          </h2>
          <AdvertisingSlot id="banner-ad" />
          <p>
            This version uses the ES6 modules from the npm package, which is the
            default and recommended way, also used by <em>create-react-app</em>
          </p>
        </main>
      </AdvertisingProvider>
    </div>
  );
};

export default GoogleAdsense;

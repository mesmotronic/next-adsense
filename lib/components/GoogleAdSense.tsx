import Script from "next/script";
import { FC } from "react";

interface IProps {
  client: string;
  /**
   * Restricts anchor ads to the bottom of the page. Note that setting this
   * enables anchor ads even if they're turned off in your Auto ads settings.
   * @see https://support.google.com/adsense/answer/7478225
   */
  overlays?: "bottom" | "collapsed-bottom";
};

const GoogleAdSense: FC<IProps> = ({ client, overlays }) => {

  // if (process.env.NODE_ENV !== "production") {
  //   return null;
  // }

  return (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      async
      crossOrigin="anonymous"
      strategy="lazyOnload"
      data-overlays={overlays}
    />
  );

};

export default GoogleAdSense;

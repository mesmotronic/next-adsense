import Script from "next/script";
import { FC } from "react";

interface IProps {
  client: string;
};

const GoogleAdSense: FC<IProps> = ({ client }) => {

  // if (process.env.NODE_ENV !== "production") {
  //   return null;
  // }

  return (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      async
      crossOrigin="anonymous"
      strategy="lazyOnload"
      data-overlays="bottom"
    />
  );

};

export default GoogleAdSense;
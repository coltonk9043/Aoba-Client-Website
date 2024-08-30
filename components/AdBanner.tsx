import Script from "next/script";

export const AdBanner = () => {
    const publisherId =  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

    return (
          <Script
            id="nextjs-google-adsense"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${publisherId}`}
            strategy={"afterInteractive"}
            crossOrigin="anonymous"/>
      );
}

export default AdBanner;

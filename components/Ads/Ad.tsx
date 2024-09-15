import { ReactNode, Suspense } from "react";
import AdClient from "./AdClient";

type AdProps = {
    children: ReactNode;
};

const AdUnit = ({ children }: AdProps) => {
    return (
        <Suspense>
            <AdClient>{children}</AdClient>
        </Suspense>
    );
};

export const InArticleAd = () => {
    return (
        <>
            <p className="border-b">Advertisement</p>
            <AdUnit>
                <ins
                    className="adsbygoogle"
                    data-ad-client={"ca-" + process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID!}
                    style={{ display: "block", textAlign: "center" }}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-slot="6681596133"
                ></ins>
            </AdUnit>
        </>
    );
}

export const DisplayAd = () => {
    return (
        <>
            <p className="border-b">Advertisement</p>
            <AdUnit>
                <ins
                    className="adsbygoogle"
                    data-ad-client={"ca-" + process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID!}
                    style={{ display: "block" }}
                    data-ad-slot="4502990413"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
            </AdUnit>
        </>
    );
}

export function InFeedAd() {
    return (
        <>
            <p className="border-b">Advertisement</p>
            <AdUnit>
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client={"ca-" + process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID!}
                    data-ad-format="fluid"
                    data-ad-layout-key="-f9+5v+4m-d8+7b"
                    data-ad-slot="3380084295"
                ></ins>
            </AdUnit>
        </>

    );
}
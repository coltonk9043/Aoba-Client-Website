
import { DisplayAd } from "@/components/Ads/Ad";
import { TitleBar } from "@/components/TitleBar"
import { WikiSideBar } from "@/components/WikiSideBar"

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            <TitleBar/>
            <div className="md:flex">
                <WikiSideBar/>
                <div className="flex-grow">
                    <div className="m-auto mt-6 mb-6 mx-4 sm:mt-8 sm:mb-8 sm:mx-6 md:mt-10 md:mb-10 md:mx-auto max-w-[1200px]">
                        {children}
                        <DisplayAd/>
                    </div>
                </div>
            </div>
        </>   
    )
}


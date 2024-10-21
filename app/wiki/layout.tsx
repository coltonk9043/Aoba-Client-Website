
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
                    <div className="m-auto mt-10 mb-10 mr-10 ml-10 md:mr-auto md:ml-auto max-w-[600px]">
                        {children}
                        <DisplayAd/>
                    </div>
                </div>
            </div>
            
        </>   
    )
}


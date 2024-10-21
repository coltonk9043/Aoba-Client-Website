
import { DisplayAd } from "@/components/ad";
import { TitleBar } from "@/components/title-bar"
import { WikiSideBar } from "@/components/wiki-side-bar"

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


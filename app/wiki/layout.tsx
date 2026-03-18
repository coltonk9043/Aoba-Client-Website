
import { DisplayAd } from "@/components/Ads/Ad";
import { TitleBar } from "@/components/TitleBar"
import { WikiSideBar } from "@/components/WikiSideBar"
import { TableOfContents } from "@/components/TableOfContents"

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            <TitleBar/>
            <div className="md:flex md:items-start">
                <WikiSideBar/>
                <div className="flex-grow min-w-0">
                    <div className="m-auto mt-6 mx-4 sm:mt-8 sm:mx-6 md:mt-10 md:mx-auto max-w-[1200px] pb-6 sm:pb-8 md:pb-10">
                        <div className="bg-[#2a2a1a] text-[#a1a18a] text-base px-5 py-3 rounded-lg mb-4">
                            This wiki is open source - contributions and edits are welcome on <a href="https://github.com/coltonk9043/Aoba-Client-Website" className="underline">GitHub</a>.
                        </div>
                        {children}
                        <DisplayAd/>
                    </div>
                </div>
                <TableOfContents/>
            </div>
        </>
    )
}


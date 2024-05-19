
import { TitleBar } from "@/components/TitleBar"
import { WikiSideBar } from "@/components/WikiSideBar"

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            <TitleBar/>
            <div className="flex">
                <WikiSideBar/>
                <div className="flex-grow">
                    <div className="m-auto mt-10 mb-10 max-w-[600px]">
                        {children}
                    </div>
                </div>
            </div>
        </>   
    )
}


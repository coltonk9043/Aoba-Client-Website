
import { TitleBar } from "@/components/TitleBar"
import { WikiSideBar } from "@/components/WikiSideBar"

export default async function Home({ children, posts }: { children: React.ReactNode, posts: string[] }) {
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


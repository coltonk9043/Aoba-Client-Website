import TitleBar from "@/components/TitleBar";
import Image from 'next/image'
import { IoLogoDiscord } from "react-icons/io5";

export default function Custom404() {
    return (
        <>
            <TitleBar />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 w-full max-w-lg">
                <Image className="z-3 m-auto max-w-full h-auto" src={"/aoba-name.png"} width={400} height={200} alt="Aoba Hacked Client" />
                <h1 className="mt-10 text-center text-2xl sm:text-3xl">404 - Page not found!</h1>
                <p className="text-center text-sm sm:text-base">You likely ended up here because Cocolots is an idiot!</p>
                <p className="text-center text-sm sm:text-base">If you clicked a link and ended up here! Let him know on the Discord!</p>

                <a
                    className="block m-auto mt-5 mb-5 hover:text-purple-300 duration-300 focus:outline-none focus:text-purple-300"
                    href="https://discord.gg/HyZ3uGrwgs"
                    aria-label="Join Discord"
                >
                    <IoLogoDiscord className="size-16 m-auto" />
                </a>
            </div>
        </>
    )
}
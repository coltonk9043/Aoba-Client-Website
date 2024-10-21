import TitleBar from "@/components/title-bar";
import Image from 'next/image'
import { IoLogoDiscord } from "react-icons/io5";

export default function Custom404() {
    return (
        <>
            <TitleBar />

            {/** Aoba Logo */}
                <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <Image className="z-3 m-auto" src={"/images/aoba-name.png"} width={400} height={200} alt="Aoba Hacked Client" />
                    <h1 className="mt-10 text-center">404 - Page not found!</h1>
                    <p className="text-center">You likely ended up here because Cocolots is an idiot!</p>
                    <p className="text-center">If you clicked a link and ended up here! Let him know on the Discord!</p>

                    <a className="m-auto mt-5 mb-5 hover:text-purple-300 duration-300" href="https://discord.gg/HyZ3uGrwgs">
                        <IoLogoDiscord className="size-16 m-auto mt-5 mb-5" />
                    </a>
                </div>
        </>
    )
}
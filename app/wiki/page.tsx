'use client'

import InformationPane from "@/components/InformationPane/InformationPane";
import Hacks from "../hacks";
import Link from "next/link";

export default function Page() {

    const generateModulePanels = () => {
        return Hacks.map((e, index) => {
            return (
                <Link href={"/wiki/hacks/" + e.name.toLowerCase()}>
                                <div key={e.name + index} className="bg-background-accent rounded-lg p-4 transition-transform shadow-lg hover:-translate-y-3 hover:cursor-pointer">
                    <p className="text-aoba-purple border-b-[1px] border-[#444] text-xl py-2">{e.name}</p>
                    <p className="my-4">{e.description}</p>
                    <div className="my-1 bg-aoba-purple inline-block p-2 rounded-xl">
                        <p className="text-sm">{e.category}</p>
                    </div>
                    </div>
                </Link>

            )
        });
    }

    return (
        <>
            <h1 className="my-3 pb-2 border-b-2 border-b-aoba-purple">🎮 Aoba Client Wiki</h1>
            <InformationPane>
                <h2 className="text-aoba-purple">📥 Installation Instructions</h2>
                <ol className="list-decimal mx-20">
                    <li>Install Minecraft Java Edition</li>
                    <li>Download and install <a href="https://fabricmc.net/use/">Fabric Loader</a> for your Minecraft version</li>
                    <li>Download the Aoba Client mod (.jar file)</li>
                    <li>Place the .jar file in your Minecraft mods folder (usually <code>%appdata%/.minecraft/mods</code>)</li>
                    <li>Launch Minecraft with the Fabric profile</li>
                </ol>

                <h2 className="text-aoba-purple">⚙️ Getting Started</h2>
                <ol className="list-decimal mx-20">
                    <li>Join a world or server</li>
                    <li>To set up the ClickGUI keybind, type in chat: <code>.aoba clickgui set [key]</code></li>
                    <li>Replace [key] with your desired key (e.g., <code>.aoba clickgui set RSHIFT</code>)</li>
                    <li>Press your set keybind to open the hack menu</li>
                </ol>
            </InformationPane>

            <div className="grid grid-cols-auto-fill-300 gap-5 m-10">
                {generateModulePanels()}
            </div>
        </>

    )
}
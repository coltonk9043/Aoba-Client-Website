'use client'

import InformationPane from "@/components/InformationPane/InformationPane";
import Hacks from "../hacks";
import Link from "next/link";

export default function Page() {

    const generateModulePanels = () => {
        return Hacks.map((e, index) => {
            return (
                <Link prefetch={false} key={e.name + index} href={"/wiki/hacks/" + e.name.toLowerCase()}>
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
            <h1 className="my-3 pb-2 border-b-2 border-b-aoba-purple">Installation</h1>

            <section className="my-8">
                <h2 className="text-aoba-purple mb-2">Prerequisites</h2>
                <p className="mb-2">Before installing Aoba Client, make sure you have the following:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Minecraft Java Edition</strong> - Aoba does not support Bedrock Edition.</li>
                    <li><strong>Fabric Loader</strong> - Aoba is built as a Fabric mod. Download and install the latest version of <a href="https://fabricmc.net/use/">Fabric Loader</a> that matches your Minecraft version.</li>
                    <li><strong>Fabric API</strong> - Required for Aoba to function. Download it from <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api">CurseForge</a> and place it in your <code>mods</code> folder alongside Aoba.</li>
                </ul>
            </section>

            <InformationPane className="my-8">
                <p className="font-semibold text-red-400">We want to stress that we have NEVER used, and will NEVER use, platforms such as MediaFire, Mega, Google Drive, or any other third-party services to host downloads for Aoba Client. These sources are not secure and could expose you to malware or unauthorized versions. Always download responsibly and from trusted sources!</p>
            </InformationPane>

            <section className="my-8">
                <h2 className="text-aoba-purple mb-2">Installing the Mod</h2>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>Open your Minecraft installation folder:
                        <ul className="list-none ml-4 mt-1 space-y-1">
                            <li><strong>Windows:</strong> <code>%appdata%/.minecraft</code></li>
                            <li><strong>macOS:</strong> <code>~/Library/Application Support/minecraft</code></li>
                            <li><strong>Linux:</strong> <code>~/.minecraft</code></li>
                        </ul>
                    </li>
                    <li>Navigate to the <code>mods</code> folder. If it does not exist, create it.</li>
                    <li>Place both the Aoba Client <code>.jar</code> file and the Fabric API <code>.jar</code> file into the <code>mods</code> folder.</li>
                    <li>Launch Minecraft using the <strong>Fabric</strong> profile from the Minecraft Launcher.</li>
                </ol>
            </section>

            <section className="my-8">
                <h2 className="text-aoba-purple mb-2">Getting Started</h2>
                <p className="mb-2">Once you are in-game, the primary way to interact with Aoba is through the <Link prefetch={false} href="/wiki/basics/clickgui">ClickGUI</Link>.
                The ClickGUI is a fully customizable graphical interface where you can browse, enable, and configure all of Aoba{"'"}s modules. 
                It features a flexible window system that lets you drag, resize, and arrange panels to your liking. The layout of the UI is saved between sessions.</p>
                <p className="mt-2 mb-2">As of 1.21.11+, the default keybind to open the ClickGUI is <strong>Right Shift</strong>. If you would like to change it, open chat and type:</p>
                <ol className="list-decimal ml-6 space-y-2">
                    <li><code>.aoba clickgui set [key]</code> - replacing <code>[key]</code> with your preferred key (e.g. <code>.aoba clickgui set RSHIFT</code>)</li>
                </ol>
            </section>

            <h2 className="my-3 pb-2 border-b-2 border-b-aoba-purple">Modules</h2>
            <p className="mt-2">For details on individual modules and what they do, see the <Link prefetch={false} href="/wiki/basics/modules">Modules</Link> page.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto-fill-300 gap-4 sm:gap-5 my-4">
                {generateModulePanels()}
            </div>
        </>
    )
}
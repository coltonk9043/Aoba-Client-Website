import ContributorWidget from "@/components/ContributorWidget/ContributorWidget";
import { FeaturePanel } from "@/components/FeaturePane/FeaturePane";
import TitleBar from "@/components/TitleBar";

import Image from 'next/image'
import Link from "next/link";
import Hacks, { Hack } from "./hacks";
import { RotatingText } from "@/components/RotatingText/RotatingText";
import { Particles } from "@/components/Particles/Particles";
import { Carousel } from "@/components/Carousel/Carousel";

export default function Home() {

  const features = ["Powerful",
    "Customizable",
    "Advanced",
    "Efficient",
    "Enhanced",
    "Optimized",
    "Automated",
    "Seamless",
    "Exceptional",
    "Dynamic",
    "Intelligent",
    "Responsive",
    "Versatile"];

  const generateHacksSummary = () => {
    return Hacks.map((e: Hack) => {
      return (
        <FeaturePanel description={e.name} href={"wiki/hacks/" + e.name.toLowerCase()} />
      )
    })
  }

  return (
    <main className="bg-landing bg-cover bg-fixed m-0 py-0">
      <Particles count={100} />

      <div className="z-10 relative">
        <TitleBar />

        {/** Aoba Logo */}
        <div className="mx-auto my-44 w-3/5">
          <Image className="text-center mx-auto my-8" style={{ animation: "logoBounce 2s infinite", filter: "drop-shadow(0 0 20px rgba(156, 39, 176, 0.5))" }} src={"/aoba-name.png"} width={400} height={200} alt="Aoba Hacked Client" />
          <p className="text-center text-3xl">The utility mod that is</p>
          <RotatingText className="text-3xl" features={features} />
          <p className="text-center text-2xl m-auto">Experience Minecraft like never before with our advanced utility mod. Supporting versions up to 1.21.4, Aoba provides powerful features while maintaining smooth performance.</p>

          <div className="flex gap-4 mx-4 mt-20 mb-5 justify-center flex-wrap">
            <div className="bg-background-purple min-w-[180px] rounded-lg py-6 px-10 border border-border-purple w-auto text-center">
              <p className="block text-4xl font-bold text-aoba-purple-dark">1.21.4</p>
              <p>Latest Version</p>
            </div>
            <div className="bg-background-purple min-w-[180px] rounded-lg py-6 px-10 border border-border-purple w-auto text-center">
              <p className="block text-4xl font-bold text-aoba-purple-dark">52</p>
              <p>Available Hacks</p>
            </div>
          </div>

          <div className="shadow font-bold cursor-pointer rounded bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark p-5 m-auto w-[350px] text-xl text-center">
            <Link href="/download" >
              <p>DOWNLOAD LATEST RELEASE</p>
            </Link>
          </div>
        </div>

        <div className="bg-zinc-900 my-8 text-center py-10">
          <div className="mx-auto w-3/5">
            <p className="mx-12 my-3 text-4xl text-transparent bg-clip-text bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark">Key Features</p>
            <p>Discover what makes Aoba Client the perfect choice for enhancing your Minecraft experience</p>

            <div className="grid grid-cols-auto-fill-300 justify-center my-6">
              <FeaturePanel title="Extensive Hack Collection" description="Access over 50 specialized modifications designed to enhance your gameplay. From combat improvements to quality-of-life features, we've got everything covered." />
              <FeaturePanel title="Advanced Command System" description="Take full control with our intuitive command system. Customize settings, toggle features, and manage your experience with simple, powerful commands." />
              <FeaturePanel title="Customizable UI" description="Make Aoba truly yours with extensive UI customization options. Adjust layouts, colors, and visibility to match your perfect setup." />
              <FeaturePanel title="Performance Optimization" description="Enjoy seamless gameplay with our optimized codebase. Aoba Client is designed to maintain high FPS while running multiple modifications simultaneously." />
            </div>

          </div>
        </div>

        <div className="my-8 text-center mx-auto w-1/2">
          <p className="mx-12 my-3 text-4xl">Screenshots</p>

          <Carousel images={[
            { src: "/screenshot_hacks.png", alt: "Hacks" },
            { src: "/screenshot_commands.png", alt: "Commands" },
            { src: "/screenshot_hud.png", alt: "UI Customization" },
          ]} />
        </div>

        <div className="bg-zinc-900 my-4 text-center py-10">
          <div className="mx-auto w-3/5">
            <p className="mx-12 my-3 text-4xl text-transparent bg-clip-text bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark">Available Mods</p>
            <p>Browse our comprehensive collection of gameplay enhancements</p>
            <div className="grid grid-cols-auto-fill-150">
              {generateHacksSummary()}
            </div>
          </div>
        </div>

        <div className="mt-4 text-center py-10">
          <div className="mx-auto w-3/4">
            <h1 className="m-auto text-center">Contributors</h1>
            <ContributorWidget />
          </div>
        </div>

        <div className="bg-zinc-900 mt-4 text-center py-5">
            <p className="">Website made by <a href="https://github.com/coltonk9043">coltonk9043</a>, <a href="https://github.com/cvs0">cvs0</a>, and <a href="https://github.com/BatchDebug">BatchDebug</a>
            </p>
          </div>
      </div>
    </main>
  );
}

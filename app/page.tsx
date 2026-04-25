import ContributorWidget from "@/components/ContributorWidget/ContributorWidget";
import { FeaturePanel } from "@/components/FeaturePane/FeaturePane";
import TitleBar from "@/components/TitleBar";

import Image from 'next/image'
import Link from "next/link";
import Hacks, { Hack } from "./hacks";
import { RotatingText } from "@/components/RotatingText/RotatingText";
import { Particles } from "@/components/Particles/Particles";
import { Carousel } from "@/components/Carousel/Carousel";
import { SectionDivider } from "@/components/SectionDivider";

const hacksSummary = Hacks.map((e: Hack) => (
  <a key={e.name} href={"wiki/hacks/" + e.name.toLowerCase()}
    className="px-3 py-2 rounded-lg border border-zinc-700 text-sm text-center hover:border-aoba-purple-dark hover:bg-aoba-purple-dark-0.2 transition-colors">
    {e.name}
  </a>
));

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

  const carouselImages = [
    { src: "/screenshot_hacks.png", alt: "Hacks" },
    { src: "/screenshot_commands.png", alt: "Commands" },
    { src: "/screenshot_hud.png", alt: "UI Customization" },
  ];

  return (
    <main className="bg-landing bg-cover bg-fixed m-0 py-0">
      <Particles count={100} />

      <div className="z-10 relative">
        <TitleBar />

        {/** Aoba Logo */}
        <div className="mx-auto my-20 sm:my-32 md:my-44 w-11/12 sm:w-4/5 md:w-3/5 px-4">
          <Image className="text-center mx-auto my-8 logo-bounce logo-glow max-w-full h-auto" src={"/aoba-name.png"} width={400} height={200} alt="Aoba Hacked Client" />
          <p className="text-center text-2xl sm:text-3xl">The utility mod that is</p>
          <RotatingText className="text-2xl sm:text-3xl" features={features} />
          <p className="text-center text-lg sm:text-xl md:text-2xl m-auto">Experience Minecraft like never before with our advanced utility mod. Supporting versions up to 26.1.1, Aoba provides powerful features while maintaining smooth performance.</p>

          <div className="flex gap-3 sm:gap-4 mt-12 sm:mt-16 md:mt-20 mb-5 justify-center flex-wrap">
            <div className="bg-background-purple min-w-[140px] sm:min-w-[180px] rounded-lg py-4 sm:py-6 px-6 sm:px-10 border border-border-purple w-auto text-center">
              <p className="block text-3xl sm:text-4xl font-bold text-aoba-purple-dark">26.1.1</p>
              <p className="text-sm sm:text-base">Latest Version</p>
            </div>
            <div className="bg-background-purple min-w-[140px] sm:min-w-[180px] rounded-lg py-4 sm:py-6 px-6 sm:px-10 border border-border-purple w-auto text-center">
              <p className="block text-3xl sm:text-4xl font-bold text-aoba-purple-dark">75</p>
              <p className="text-sm sm:text-base">Available Hacks</p>
            </div>
          </div>

          <div className="shadow font-bold cursor-pointer rounded bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark p-4 sm:p-5 m-auto max-w-[350px] w-full text-lg sm:text-xl text-center">
            <Link href="/download" >
              <p>DOWNLOAD LATEST RELEASE</p>
            </Link>
          </div>
        </div>

        <SectionDivider color="#121215" seed={1} />
        <div className="bg-background text-center py-8 sm:py-10">
          <div className="mx-auto w-11/12 max-w-[1200px] px-4">

            {/* Key Features */}
            <p className="mb-1 text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark">Key Features</p>
            <p className="text-sm sm:text-base mb-4">Discover what makes Aoba Client the perfect choice for enhancing your Minecraft experience</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              <FeaturePanel title="Extensive Hack Collection" description="Access over 50 specialized modifications designed to enhance your gameplay." />
              <FeaturePanel title="Advanced Command System" description="Take full control with our intuitive command system. Customize settings, toggle features, and manage your experience with simple, powerful commands." />
              <FeaturePanel title="Customizable UI" description="Make Aoba truly yours with extensive UI customization options. Adjust layouts, colors, and visibility to match your perfect setup." />
              <FeaturePanel title="Performance Optimization" description="Enjoy seamless, lagless gameplay with our optimized codebase." />
            </div>

            {/* Available Mods */}
            <p className="mb-1 text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark">Available Mods</p>
            <p className="text-sm sm:text-base mb-4">Browse our comprehensive collection of gameplay enhancements</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {hacksSummary}
            </div>

            {/* Screenshots */}
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
              <div className="lg:w-1/3 lg:text-left">
                <p className="mb-1 text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-tl from-aoba-purple to-aoba-purple-dark">Screenshots</p>
                <p className="text-sm sm:text-base">See Aoba Client in action. Browse through screenshots of the ClickGUI, module settings, and HUD overlays.</p>
                <br/>
                <p className="text-sm sm:text-base">Aoba is highly configurable and gives you full control over most of its functionality.</p>
              </div>
              <div className="lg:w-2/3 w-full">
                <Carousel images={carouselImages} />
              </div>
            </div>
          </div>
        </div>
        <SectionDivider color="#121215" seed={2} flip />

        <div className="mt-4 text-center py-8 sm:py-10">
          <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 px-4">
            <div className="bg-black/30 rounded-xl p-6 sm:p-8 mb-6">
              <h1 className="m-auto text-center text-3xl sm:text-4xl">Contributors</h1>
              <p className="text-sm sm:text-base mt-2">Aoba Client is fully open source and community-driven. Anyone can contribute, review the code, or fork the project on <a href="https://github.com/coltonk9043/Aoba-Client">GitHub</a>. A huge thank you to everyone who has helped make Aoba better. 💜</p>
            </div>
            <ContributorWidget />
          </div>
        </div>

        <SectionDivider color="#121215" seed={5} />
        <div className="bg-background text-center py-5 px-4">
          <p className="text-sm sm:text-base">Website made by <a href="https://github.com/coltonk9043">coltonk9043</a>, <a href="https://github.com/cvs0">cvs0</a>, and <a href="https://github.com/BatchDebug">BatchDebug</a></p>
        </div>
      </div>
    </main>
  );
}

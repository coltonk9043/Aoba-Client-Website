import { FeaturePanel } from "@/components/FeaturePane";
import { TitleBar } from "../components/TitleBar"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <TitleBar/>

      {/** Aoba Logo */}
      <div className="relative" style={{height: 500}}>
        <Image className="absolute" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} src={"/aoba-name.png"} width={400} height={200} alt="Aoba Hacked Client"/>
      </div>
      
      {/** Feature Panel */}
      <div className="p-5 border-0 border-t border-b border-zinc-500 bg-zinc-800">
        <h1 className="m-auto text-center">Features</h1>
        <div className="flex flex-wrap justify-center">
          <FeaturePanel title="Lots of hacks" description="Aoba contains plenty of hacks to cover all of your gameplay needs!" img=""/>
          <FeaturePanel title="Full-Fledged command system" description="Aoba's command system spans across the entire hacked client!" img=""/>
          <FeaturePanel title="UI Customization" description="Plenty of UI options to customize the way Aoba looks." img=""/>
        </div>
      </div>

      <div className="p-5 border-0 border-t border-b border-zinc-500 bg-zinc-900">

      </div>
    </main>
  );
}

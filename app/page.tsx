import { FeaturePanel } from "@/components/FeaturePane";
import TitleBar from "@/components/TitleBar";

import Image from 'next/image'

export default function Home() {

  // TODO: I want to create an actual Wiki, thus, I want to be able to
  // generate these dynamically based off of what is in the Wiki.
  // We can fetch a directory containing these pages and generate these.
  const hacks = [
    "Aimbot", "AntiCactus", "AntiInvis", "AntiKnockback", "AutoEat", "AutoFarm",
    "AutoFish", "AutoSign", "AutoSoup", "AutoTotem", "AutoRespawn", "AutoWalk", 
    "Breadcrumbs", "ChestESP", "Criticals", "CrystalAura", "EntityESP", "FastPlace", 
    "FastBreak", "Fly", "Freecam", "Fullbright", "ItemESP", "Glide", 
    "Jesus", "Jetpack", "KillAura", "Nametags", "Noclip", "NoFall", 
    "NoJumpDelay", "NoOverlay", "NoSlowdown", "Nuker", "PlayerESP", "POV", 
    "Reach", "Safewalk", "Sneak", "SpawnerESP", "Spider", "Sprint", 
    "Step", "Surround", "TileBreaker", "Timer", "Tracer", "Trajectory", 
    "TriggerBot", "XRay", "Zoom",
  ]

  const generateHacksSummary = () => {
    return hacks.map((e) => {
      return (
        <p key={e} className="text-center">{e}</p>
      )
    })
  }

  return (
    <main>
      <TitleBar />

      {/** Aoba Logo */}
      <div className="relative" style={{height: 500}}>
        <Image className="z-3 absolute w-[75%] max-w-[400px]" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)", animation: "logoBounce 2s infinite" }} src={"/aoba-name.png"} width={400} height={200} alt="Aoba Hacked Client"/>
      </div>
      
      {/** Feature Panel */}
      <div className="p-5 border-0 border-t border-b border-zinc-500 bg-zinc-800">
        <h2 className="m-auto mt-10 mb-10 max-w-[1000px] text-center">Aoba is a Minecraft client-side utility mod that provides an upper edge in your Minecraft experience. Supporting several versions up to 1.21</h2>
        <h1 className="m-auto text-center">Features</h1>
        <div className="flex flex-wrap justify-center">
          <FeaturePanel title="Lots of 'hacks'" description="Aoba contains plenty of hacks to cover all of your gameplay needs!" img="/screenshot_hacks.png"/>
          <FeaturePanel title="Full-Fledged command system" description="Aoba's command system spans across the entire client!" img="/screenshot_commands.png"/>
          <FeaturePanel title="UI Customization" description="Plenty of UI options to customize the way Aoba looks." img="/screenshot_hud.png"/>
        </div>
        <h2 className="ml-[50px] mr-[50px] mt-10 mb-10 text-center text-bold"><a className="text-blue-900" href="/download">Download</a> it and give it a try!</h2>
      </div>

      <div className="p-5">
        <div className="bg-zinc-900 w-[75%] max-w-[800px] m-auto">
          <h1 className="text-center border-b border-zinc-600">Hacks</h1>
          <div className="grid grid-cols-3 gap-x-20  m-auto">
            {generateHacksSummary()}
          </div>
        </div>
      </div>

      <div className="p-5 border-0 border-t border-b border-zinc-500 bg-zinc-800">
      
      </div>
    </main>
  );
}

export type WikiEntry = {
    name: string,
    path: string | undefined,
    children: WikiEntry[] | undefined,
}

export const WikiEntries: WikiEntry =
{
    name: "Wiki", path: "wiki/", children: [
        {
            name: "Basics", path: undefined, children: [
                { name: "Installation", path: "wiki/basics/installation", children: undefined },
                { name: "ClickGUI", path: "wiki/basics/clickgui", children: undefined },
                { name: "Modules", path: "wiki/basics/modules", children: undefined },
                { name: "Commands", path: "wiki/basics/commands", children: undefined }
            ]
        },
        {
            name: "Hacks", path: undefined, children: [
                { name: "Aimbot", path: "wiki/hacks/aimbot", children: undefined },
                { name: "AntiCactus", path: "wiki/hacks/anticactus", children: undefined },
                { name: "AntiInvis", path: "wiki/hacks/antiinvis", children: undefined },
                { name: "AntiKnockback", path: "wiki/hacks/antiknockback", children: undefined },
                { name: "AutoEat", path: "wiki/hacks/autoeat", children: undefined },
                { name: "AutoFarm", path: "wiki/hacks/autofarm", children: undefined },
                { name: "AutoFish", path: "wiki/hacks/autofish", children: undefined },
                { name: "AutoRespawn", path: "wiki/hacks/autorespawn", children: undefined },
                { name: "AutoSign", path: "wiki/hacks/autosign", children: undefined },
                { name: "AutoSoup", path: "wiki/hacks/autosoup", children: undefined },
                { name: "AutoTotem", path: "wiki/hacks/autototem", children: undefined },
                { name: "AutoWalk", path: "wiki/hacks/autowalk", children: undefined },
                { name: "Breadcrumbs", path: "wiki/hacks/breadcrumbs", children: undefined },
                { name: "ChestESP", path: "wiki/hacks/chestesp", children: undefined },
                { name: "Criticals", path: "wiki/hacks/criticals", children: undefined },
                { name: "CrystalAura", path: "wiki/hacks/crystalaura", children: undefined },
                { name: "EntityESP", path: "wiki/hacks/entityesp", children: undefined },
                { name: "FastBreak", path: "wiki/hacks/fastbreak", children: undefined },
                { name: "FastPlace", path: "wiki/hacks/fastplace", children: undefined },
                { name: "Fly", path: "wiki/hacks/fly", children: undefined },
                { name: "Freecam", path: "wiki/hacks/freecam", children: undefined },
                { name: "Fullbright", path: "wiki/hacks/fullbright", children: undefined },
                { name: "Glide", path: "wiki/hacks/glide", children: undefined },
                { name: "ItemESP", path: "wiki/hacks/itemesp", children: undefined },
                { name: "Jesus", path: "wiki/hacks/jesus", children: undefined },
                { name: "Jetpack", path: "wiki/hacks/jetpack", children: undefined },
                { name: "KillAura", path: "wiki/hacks/killaura", children: undefined },
                { name: "Nametags", path: "wiki/hacks/nametags", children: undefined },
                { name: "Noclip", path: "wiki/hacks/noclip", children: undefined },
                { name: "NoFall", path: "wiki/hacks/nofall", children: undefined },
                { name: "NoJumpDelay", path: "wiki/hacks/nojumpdelay", children: undefined },
                { name: "NoOverlay", path: "wiki/hacks/nooverlay", children: undefined },
                { name: "NoSlowdown", path: "wiki/hacks/noslowdown", children: undefined },
                { name: "Nuker", path: "wiki/hacks/nuker", children: undefined },
                { name: "PlayerESP", path: "wiki/hacks/playeresp", children: undefined },
                { name: "POV", path: "wiki/hacks/pov", children: undefined },
                { name: "Reach", path: "wiki/hacks/reach", children: undefined },
                { name: "Safewalk", path: "wiki/hacks/safewalk", children: undefined },
                { name: "Sneak", path: "wiki/hacks/sneak", children: undefined },
                { name: "SpawnerESP", path: "wiki/hacks/spawneresp", children: undefined },
                { name: "Spider", path: "wiki/hacks/spider", children: undefined },
                { name: "Sprint", path: "wiki/hacks/sprint", children: undefined },
                { name: "Step", path: "wiki/hacks/step", children: undefined },
                { name: "Surround", path: "wiki/hacks/surround", children: undefined },
                { name: "TileBreaker", path: "wiki/hacks/tilebreaker", children: undefined },
                { name: "Timer", path: "wiki/hacks/timer", children: undefined },
                { name: "Tracer", path: "wiki/hacks/tracer", children: undefined },
                { name: "Trajectory", path: "wiki/hacks/trajectory", children: undefined },
                { name: "TriggerBot", path: "wiki/hacks/triggerbot", children: undefined },
                { name: "XRay", path: "wiki/hacks/xray", children: undefined },
                { name: "Zoom", path: "wiki/hacks/zoom", children: undefined },
            ]
        }
    ]
}
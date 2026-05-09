import Hacks from "../hacks";

export type WikiEntry = {
    name: string,
    path: string | undefined,
    children: WikiEntry[] | undefined,
}

const moduleEntries: WikiEntry[] = [...Hacks]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((h) => ({
        name: h.name,
        path: `wiki/hacks/${h.name.toLowerCase()}`,
        children: undefined,
    }));

export const WikiEntries: WikiEntry[] = [
        { name: "Installation", path: "wiki", children: undefined },
        { name: "Reporting Bugs", path: "wiki/basics/bugs", children: undefined },
        {
            name: "Basics", path: undefined, children: [
                { name: "ClickGUI", path: undefined, children: [
                    { name: "Overview", path: "wiki/basics/clickgui", children: undefined },
                    { name: "Components", path: undefined, children: [
                        { name: "Button", path: "wiki/basics/clickgui/components/button", children: undefined },
                        { name: "Checkbox", path: "wiki/basics/clickgui/components/checkbox", children: undefined },
                        { name: "Slider", path: "wiki/basics/clickgui/components/slider", children: undefined },
                        { name: "TextBox", path: "wiki/basics/clickgui/components/textbox", children: undefined },
                        { name: "Keybind", path: "wiki/basics/clickgui/components/keybind", children: undefined },
                        { name: "Color Picker", path: "wiki/basics/clickgui/components/colorpicker", children: undefined },
                        { name: "Enum Selector", path: "wiki/basics/clickgui/components/enum", children: undefined },
                        { name: "Blocks Selector", path: "wiki/basics/clickgui/components/blocks", children: undefined },
                        { name: "Hotbar Selector", path: "wiki/basics/clickgui/components/hotbar", children: undefined },
                    ]},
                ]},
                { name: "Modules", path: "wiki/basics/modules", children: undefined },
                { name: "Commands", path: "wiki/basics/commands", children: undefined },
                { name: "Macros", path: "wiki/basics/macros", children: undefined },
                { name: "Alt Manager", path: "wiki/basics/altmanager", children: undefined },
                { name: "Addons", path: undefined, children: [
                    { name: "Overview", path: "wiki/basics/addons", children: undefined },
                    { name: "Developing Addons", path: "wiki/basics/addons/developing", children: undefined }
                ]}
            ]
        },
        {
            name: "Modules", path: undefined, children: moduleEntries
        }
]
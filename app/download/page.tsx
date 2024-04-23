import { DownloadPane } from "@/components/DownloadPane";
import { TitleBar } from "@/components/TitleBar";

export default function Page() {
    return (
        <main>
            <TitleBar/>
            <div className="m-auto w-3/4 mt-10 mb-10">
                <h1 className="border-b border-zinc-500">MC 1.20.4</h1>
                <DownloadPane version={"1.4"} changelog={""} link={"https://github.com/coltonk9043/Aoba-MC-Hacked-Client/releases/download/v1.4.0/Aoba-1.4.0-1.20.4.jar"}/>
                <h1 className="border-b border-zinc-500">MC 1.20.3</h1>
                <DownloadPane version={"1.4"} changelog={""} link={"https://github.com/coltonk9043/Aoba-MC-Hacked-Client/releases/download/v1.4.0/Aoba-1.4.0-1.20.3.jar"}/>
                <h1 className="border-b border-zinc-500">MC 1.20.2</h1>
                <DownloadPane version={"1.4"} changelog={""} link={"https://github.com/coltonk9043/Aoba-MC-Hacked-Client/releases/download/v1.4.0/Aoba-1.4.0-1.20.2.jar"}/>
                <h1 className="border-b border-zinc-500">MC 1.20.1</h1>
                <DownloadPane version={"1.3.2"} changelog={""} link={"https://github.com/coltonk9043/Aoba-MC-Hacked-Client/releases/download/v1.3.2/Aoba-1.20.1.jar"}/>
                <h1 className="border-b border-zinc-500">MC 1.20</h1>
                <DownloadPane version={"1.3.2"} changelog={""} link={"https://github.com/coltonk9043/Aoba-MC-Hacked-Client/releases/download/v1.3.2/Aoba-1.20.jar"}/>
                <h1 className="border-b border-zinc-500">MC 1.19.4</h1>
                <DownloadPane version={"1.3"} changelog={""} link={"https://github.com/coltonk9043/Aoba-MC-Hacked-Client/releases/download/v1.3a/Aoba-1.19.4.jar"}/>
            </div>
        </main>
    )
}
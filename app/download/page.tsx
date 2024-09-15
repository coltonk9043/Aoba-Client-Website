import { DisplayAd } from "@/components/Ads/Ad";
import ReleasesWidget from "@/components/ReleaseWidget/ReleaseWidget";
import TitleBar from "@/components/TitleBar";
import React from "react";

enum ReleaseType {
    Release = 0,
    Prerelease = 1,
}

type Release = {
    url: string,
    assets_url: string,
    upload_url: string,
    html_url: string,
    id: number,
    author: Uploader,
    node_id: string,
    tag_name: string,
    draft: boolean,
    prerelease: boolean,
    created_at: string,
    published_at: string,
    assets: ReleaseAsset[],
    tarball_url: string,
    zipball_url: string,
    body: string,
    mentions_count: number,
}

type ReleaseAsset = {
    url: string,
    id: number,
    node_id: string,
    name: string,
    label: string | undefined,
    uploader: Uploader,
    content_type: string,
    state: string,
    size: number,
    download_count: number,
    created_at: string,
    updated_at: string,
    browser_download_url: string,
}

type Uploader = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
}

const DownloadPane = (release: Release) => {
    const generateReleaseType = () => {
        if (release.prerelease) {
            return (<p className="m-2 border border-red-500 text-red-500 rounded-md pr-2 pl-2">Prerelease</p>)
        } else {
            return (<p className="m-2 border border-green-500 text-green-500 rounded-md pr-2 pl-2">Release</p>)
        }
    }

    const generateDownloads = () => {
        return release.assets.map((e: ReleaseAsset) => {
            let nameSplit = e.name.split("-");
            let minecraftVersion = nameSplit[nameSplit.length - 1].replace(".jar", "")
            return (
                <>
                    <div className="col-span-3 border-b border-zinc-600" />
                    <p className="text-center mt-2">{minecraftVersion}</p>
                    <p className="italic text-center mt-2">{e.name}</p>
                    <a className="bg-blue-400 rounded-md pr-2 pl-2 m-2 text-center" href={e.browser_download_url}>
                        <p>Download</p>
                    </a>
                </>
            )
        });
    }

    const generateImages = () => {
        let images = release.body.match(/([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm);
        return images?.map((e: string, index: number) => {
            if (e.startsWith("https://github.com/coltonk9043/Aoba-MC-Hacked-Client/assets")) {
                return (
                    <img key={release.tag_name + index} className="rounded-lg" src={e} alt="screenshot" />
                )
            } else
                return undefined;
        });
    }

    return (
        <>
            <div className="border border-zinc-500 bg-zinc-800 rounded-lg mt-5 mb-5 p-3">
                <div className="flex border-b border-zinc-500">
                    <h2 className="grow">Aoba {release.tag_name}</h2>
                    {generateReleaseType()}
                </div>

                <div className="grid grid-cols-3 border border-zinc-600 rounded-lg mt-5 mb-t p-5" style={{ gridTemplateColumns: "auto auto 105px" }}>
                    <p className="font-bold text-center">Version / File</p>
                    <p className="font-bold text-center">Filename</p>
                    <br />

                    {generateDownloads()}
                </div>

                <p className="text-gray-400">Full changelog available on <a className="text-blue-400 font-semibold" href={release.html_url}>GitHub</a></p>

                <h2>Images</h2>
                {generateImages()}
            </div>
            
        </>

    )
}

const Releases = async (props: { prerelease: boolean }) => {
    // Grab the data in GitHub, parse the json, and store it.
    const githubData = await fetch("https://api.github.com/repos/coltonk9043/Aoba-MC-Hacked-Client/releases", { next: { revalidate: 3600 } })
        .then((e) => { return e.json(); })
        .then((json) => { return json })

    // Generates the actual Download panels 
    const generateReleaseDownloads = () => {
        if (Array.isArray(githubData)) {
            return githubData.map((e: Release, i: number) => {
                if ((props.prerelease && !e.prerelease) || (!props.prerelease && e.prerelease))
                    return;

                return (
                    <>
                        {DownloadPane(e)}
                        { i > 1 && i % 2 == 0 ? <DisplayAd /> : undefined}
                    </>
                    
                )
            })
        }
        return undefined;
    }

    return generateReleaseDownloads();
}

export default function Page() {
    return (
        <main className="bg-[url('/pretty.png')] bg-cover bg-fixed">
            <TitleBar />
            <div className="m-5 w-auto max-w-[850px] sm:m-auto sm:mt-10 sm:mb-10 sm:w-3/4 bg-zinc-900 p-5 md:p-10 rounded-lg">
                <h1>Aoba Hacked Client for Minecraft Downloads</h1>
                <p className="text-gray-400">Below are all available versions of Aoba, ranging from 1.19.4 to 1.20.x</p>

                <ReleasesWidget>
                    <div><Releases prerelease={false} /></div>
                    <div><Releases prerelease={true} /></div>
                </ReleasesWidget>
            </div>
        </main>
    )
}
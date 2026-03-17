import { DisplayAd } from "@/components/Ads/Ad";
import InformationPane from "@/components/InformationPane/InformationPane";
import ReleasesWidget from "@/components/ReleaseWidget/ReleaseWidget";
import TitleBar from "@/components/TitleBar";
import Link from "next/link";
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

function parseTagName(tagName: string): { version: string; date?: string } {
    const newFormat = tagName.match(/^build-([\d.]+)-(\d{8})$/);
    if (newFormat) {
        const [, version, dateStr] = newFormat;
        const month = parseInt(dateStr.substring(0, 2)) - 1;
        const day = parseInt(dateStr.substring(2, 4));
        const year = parseInt(dateStr.substring(4, 8));
        const formatted = new Date(year, month, day).toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
        });
        return { version, date: formatted };
    }
    const oldFormat = tagName.match(/^build-(.+)$/);
    if (oldFormat) return { version: oldFormat[1] };
    return { version: tagName };
}

function parseAssetVersion(name: string): string {
    const withoutExt = name.replace(/\.jar$/, "");
    const newFormat = withoutExt.match(/-([\d.]+)-\d{8}$/);
    if (newFormat) return newFormat[1];
    const parts = withoutExt.split("-");
    return parts[parts.length - 1];
}

const DownloadPane = (release: Release) => {
    const parsed = parseTagName(release.tag_name);

    const generateReleaseType = () => {
        if (release.prerelease) {
            return (<p className="m-2 border border-red-500 text-red-500 rounded-md pr-2 pl-2">Prerelease</p>)
        } else {
            return (<p className="m-2 border border-green-500 text-green-500 rounded-md pr-2 pl-2">Release</p>)
        }
    }

    const generateDownloads = () => {
        return release.assets.map((e: ReleaseAsset) => {
            let minecraftVersion = parseAssetVersion(e.name);
            return (
                <React.Fragment key={e.id}>
                    <div className="col-span-3 border-b border-zinc-600" />
                    <p className="text-center mt-2">{minecraftVersion}</p>
                    <p className="italic text-center mt-2">{e.name}</p>
                    <a className="bg-purple-600 rounded-md p-3 m-2 text-center" href={e.browser_download_url}>
                        Download
                    </a>
                </React.Fragment>
            )
        });
    }

    return (
        <>
            <div className="border border-zinc-500 bg-zinc-800 rounded-lg mt-5 mb-5 p-3">
                <div className="flex border-b border-zinc-500">
                    <div className="grow">
                        <h2>Aoba {parsed.version} - {parsed.date}</h2>
                    </div>
                    {generateReleaseType()}
                </div>


                <div className="grid grid-cols-3 border border-zinc-600 rounded-lg mt-5 mb-t p-5" style={{ gridTemplateColumns: "auto auto 105px" }}>
                    <p className="font-bold text-center">Version / File</p>
                    <p className="font-bold text-center">Filename</p>
                    <br />

                    {generateDownloads()}
                </div>

                <p className="text-gray-400">Full changelog available on <a className="text-blue-400 font-semibold" href={release.html_url}>GitHub</a></p>
            </div>
        </>

    )
}

const Releases = async (props: { prerelease: boolean }) => {
    // Grab the data in GitHub, parse the json, and store it.
    const githubData = await fetch("https://api.github.com/repos/coltonk9043/Aoba-Client/releases", { next: { revalidate: 3600 } })
        .then((e) => { return e.json(); })
        .then((json) => { return json })

    // Generates the actual Download panels 
    const generateReleaseDownloads = () => {
        if (Array.isArray(githubData)) {
            return githubData.map((e: Release, i: number) => {
                if ((props.prerelease && !e.prerelease) || (!props.prerelease && e.prerelease))
                    return;

                return (
                    <React.Fragment key={e.id}>
                        {DownloadPane(e)}
                        <DisplayAd />
                    </React.Fragment>

                )
            })
        }
        return undefined;
    }

    return generateReleaseDownloads();
}

export default function Page() {
    return (
        <main className="bg-landing bg-cover bg-fixed">
            <TitleBar />
            <div className="mx-4 my-6 sm:mx-auto sm:my-10 w-auto max-w-[850px] sm:w-11/12 md:w-3/4 bg-zinc-900 p-4 sm:p-6 md:p-10 rounded-lg">
                <h1 className="pb-2 text-2xl sm:text-3xl md:text-4xl">🎮 Aoba Client Downloads</h1>
                <p className="text-gray-400 text-sm sm:text-base">Below are all available versions of Aoba, ranging from Minecraft versions 1.19.4 to 1.21.x</p>

                <InformationPane className="my-5">
                    <h2 className="text-aoba-purple">📥 Installation Instructions</h2>
                    <p>Installation instructions can be found on the <Link href="/wiki/">Wiki</Link></p>
                </InformationPane>
                
                <ReleasesWidget>
                    <div><Releases prerelease={false} /></div>
                    <div><Releases prerelease={true} /></div>
                </ReleasesWidget>
            </div>
        </main>
    )
}

import { DisplayAd } from "@/components/ad";
import ReleasesWidget from "@/components/release-widget";
import TitleBar from "@/components/title-bar";
import React from "react";

enum ReleaseType {
  Release = 0,
  Prerelease = 1,
}

type Release = {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: Uploader;
  node_id: string;
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: ReleaseAsset[];
  tarball_url: string;
  zipball_url: string;
  body: string;
  mentions_count: number;
};

type ReleaseAsset = {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: string | undefined;
  uploader: Uploader;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
};

type Uploader = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

const DownloadPane = (release: Release) => {
  const generateReleaseType = () => {
    if (release.prerelease) {
      return (
        <p className="m-2 border border-red-500 text-red-500 rounded-md px-2 text-sm">
          Prerelease
        </p>
      );
    } else {
      return (
        <p className="m-2 border border-green-500 text-green-500 rounded-md px-2 text-sm">
          Release
        </p>
      );
    }
  };

  const generateDownloads = () => {
    return release.assets.map((e: ReleaseAsset) => {
      let nameSplit = e.name.split("-");
      let minecraftVersion = nameSplit[nameSplit.length - 1].replace(
        ".jar",
        ""
      );
      return (
        <React.Fragment key={e.id}>
          <div className="col-span-3 border-b border-zinc-600 my-2" />
          <div className="grid grid-cols-3 gap-2 items-center">
            <p className="text-center">{minecraftVersion}</p>
            <p className="italic text-center text-sm truncate">{e.name}</p>
            <a
              className="bg-blue-400 rounded-md px-2 py-1 text-center text-sm hover:bg-blue-500 transition-colors"
              href={e.browser_download_url}
            >
              Download
            </a>
          </div>
        </React.Fragment>
      );
    });
  };

  const generateImages = () => {
    let images = release.body.match(
      /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm
    );
    return images?.map((e: string, index: number) => {
      if (e.startsWith("https://github.com/coltonk9043/Aoba-Client/assets")) {
        return (
          <img
            key={release.tag_name + index}
            className="rounded-lg w-full h-auto my-2"
            src={e}
            alt="screenshot"
          />
        );
      } else return null;
    });
  };

  return (
    <div className="border border-zinc-500 bg-zinc-800 rounded-lg my-5 p-3">
      <div className="flex flex-wrap items-center border-b border-zinc-500 pb-2">
        <h2 className="text-xl font-semibold mr-2">Aoba {release.tag_name}</h2>
        {generateReleaseType()}
      </div>

      <div className="border border-zinc-600 rounded-lg mt-5 mb-5 p-3">
        <div className="grid grid-cols-3 gap-2 mb-2">
          <p className="font-bold text-center">Version</p>
          <p className="font-bold text-center">Filename</p>
          <p className="font-bold text-center">Download</p>
        </div>
        {generateDownloads()}
      </div>

      <p className="text-gray-400 text-sm">
        Full changelog available on{" "}
        <a
          className="text-blue-400 font-semibold hover:underline"
          href={release.html_url}
        >
          GitHub
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {generateImages()}
      </div>
    </div>
  );
};

const Releases = async (props: { prerelease: boolean }) => {
  const githubData = await fetch(
    "https://api.github.com/repos/coltonk9043/Aoba-Client/releases",
    { next: { revalidate: 3600 } }
  )
    .then((e) => e.json())
    .then((json) => json);

  const generateReleaseDownloads = () => {
    if (Array.isArray(githubData)) {
      return githubData.map((e: Release, i: number) => {
        if (
          (props.prerelease && !e.prerelease) ||
          (!props.prerelease && e.prerelease)
        )
          return null;

        return (
          <React.Fragment key={e.id}>
            <DownloadPane {...e} />
            {i > 1 && i % 2 === 0 && <DisplayAd />}
          </React.Fragment>
        );
      });
    }
    return null;
  };

  return generateReleaseDownloads();
};

export default function Page() {
  return (
    <main className="bg-[url('/images/pretty.png')] bg-cover bg-fixed min-h-screen">
      <TitleBar />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-zinc-900 p-5 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            Aoba Client for Minecraft Downloads
          </h1>
          <p className="text-gray-400 mb-6">
            Below are all available versions of Aoba, ranging from 1.19.4 to
            1.20.x
          </p>

          <ReleasesWidget>
            <div>
              <Releases prerelease={false} />
            </div>
            <div>
              <Releases prerelease={true} />
            </div>
          </ReleasesWidget>
        </div>
      </div>
    </main>
  );
}

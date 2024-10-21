import Image from "next/image";
import Link from "next/link";

export type GithubAvatar = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: number;
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
  contributions: number;
};

export const ContributorWidget = async (props: {}) => {
  const githubData = await fetch(
    "https://api.github.com/repos/coltonk9043/Aoba-Client/contributors",
    { next: { revalidate: 3600 } }
  )
    .then((e) => {
      return e.json();
    })
    .then((json) => {
      return json;
    });

  const generateContributors = () => {
    if (Array.isArray(githubData)) {
      return githubData.map((e: GithubAvatar) => {
        return (
          <div
            key={e.id}
            className="border border-zinc-500 bg-zinc-800 rounded-lg p-5 m-2 text-center"
          >
            <Link href={e.html_url}>
              <Image
                className=" mt-5 mb-5 m-auto rounded-full"
                src={e.avatar_url}
                alt={e.login}
                width={150}
                height={150}
              />
            </Link>

            <h2
              className="border-b border-zinc-500"
              style={{ color: e.login == "coltonk9043" ? "gold" : "white" }}
            >
              {e.login}
            </h2>
            <p>
              {e.contributions}{" "}
              {e.contributions > 1 ? "contributions" : "contribution"}
            </p>
          </div>
        );
      });
    }
  };

  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {generateContributors()}
    </div>
  );
};
export default ContributorWidget;

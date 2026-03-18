'use client'
import { WikiEntries, WikiEntry } from "@/app/wiki/wiki";
import { useState, useCallback, useEffect, memo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export interface DirectoryTreeNode {
    name: string;
    url_path: string;
    children: DirectoryTreeNode[];
}

function getExpandedState(): Record<string, boolean> {
    if (typeof window === 'undefined') return {};
    try {
        const stored = localStorage.getItem('wiki-sidebar-expanded');
        return stored ? JSON.parse(stored) : {};
    } catch {
        return {};
    }
}

function saveExpandedState(state: Record<string, boolean>) {
    try {
        localStorage.setItem('wiki-sidebar-expanded', JSON.stringify(state));
    } catch {}
}

interface CollapsibleTreeProps {
    entry: WikiEntry;
    pathname: string;
}

const CollapsibleTreeComponent = ({ entry, pathname }: CollapsibleTreeProps) => {
    const [expanded, setExpanded] = useState(() => {
        const state = getExpandedState();
        return state[entry.name] ?? false;
    });

    const toggleExpanded = useCallback(() => {
        setExpanded((prev) => {
            const next = !prev;
            const state = getExpandedState();
            state[entry.name] = next;
            saveExpandedState(state);
            return next;
        });
    }, [entry.name]);

    const isActive = (path: string | undefined) => {
        if (!path) return false;
        return pathname === `/${path}` || pathname === `/${path}/`;
    };

    const renderChild = (child: WikiEntry, index: number) => {
        if (Array.isArray(child.children) && child.children.length > 0) {
            return <CollapsibleTree key={index} entry={child} pathname={pathname} />;
        }
        return (
            <a
                key={index}
                href={`/${child.path}`}
                className={`font-normal block p-2 rounded-lg hover:bg-zinc-800/50 focus:outline-none focus:text-aoba-purple ${isActive(child.path) ? 'bg-zinc-800 text-aoba-purple' : ''}`}
            >
                {child.name}
            </a>
        );
    };

    return (
        <div>
            <button
                className="flex gap-8 w-full text-left p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-aoba-purple rounded-lg hover:bg-zinc-800/50"
                onClick={toggleExpanded}
                aria-expanded={expanded}
            >
                <span className="font-semibold">{entry.name}</span>
                <Image
                    className={`w-4 h-4 ml-auto my-auto transition-transform ${expanded ? 'rotate-180' : ''}`}
                    src="/expander.png"
                    width={16}
                    height={16}
                    alt=""
                    aria-hidden="true"
                />
            </button>

            {entry.children && expanded && (
                <div className="ml-6">
                    {entry.children.map(renderChild)}
                </div>
            )}
        </div>
    );
};

export const CollapsibleTree = memo(CollapsibleTreeComponent);

const WikiSideBarComponent = () => {
    const pathname = usePathname();

    const isActive = (path: string | undefined) => {
        if (!path) return false;
        return pathname === `/${path}` || pathname === `/${path}/`;
    };

    return (
        <aside className="p-5 md:sticky md:top-14 md:max-h-[calc(100dvh-3.5rem)] md:overflow-y-auto md:shrink-0 md:min-w-[375px] md:max-w-[450px] md:border-r md:border-r-zinc-700">
            <div className="w-full px-2">
                {WikiEntries.map((entry, index) =>
                    Array.isArray(entry.children) && entry.children.length > 0 ? (
                        <CollapsibleTree key={index} entry={entry} pathname={pathname} />
                    ) : (
                        <a key={index} href={`/${entry.path}`} className={`font-semibold block p-2 rounded-lg hover:bg-zinc-800/50 focus:outline-none focus:text-aoba-purple ${isActive(entry.path) ? 'bg-zinc-800 text-aoba-purple' : ''}`}>
                            {entry.name}
                        </a>
                    )
                )}
            </div>
        </aside>
    );
};

export const WikiSideBar = memo(WikiSideBarComponent);

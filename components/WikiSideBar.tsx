'use client'
import { WikiEntries, WikiEntry } from "@/app/wiki/wiki";
import { useState, useCallback, memo } from "react";
import Image from "next/image";

export interface DirectoryTreeNode {
    name: string;
    url_path: string;
    children: DirectoryTreeNode[];
}

interface CollapsibleTreeProps {
    entry: WikiEntry;
}

const CollapsibleTreeComponent = ({ entry }: CollapsibleTreeProps) => {
    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = useCallback(() => {
        setExpanded((prev) => !prev);
    }, []);

    const renderChild = (child: WikiEntry, index: number) => {
        if (Array.isArray(child.children) && child.children.length > 0) {
            return <CollapsibleTree key={index} entry={child} />;
        }
        return (
            <a
                key={index}
                href={`/${child.path}`}
                className="font-light block py-1 hover:text-aoba-purple focus:outline-none focus:text-aoba-purple"
            >
                {child.name}
            </a>
        );
    };

    return (
        <div>
            <button
                className="flex gap-8 w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-aoba-purple rounded"
                onClick={toggleExpanded}
                aria-expanded={expanded}
            >
                <span className="font-semibold text-xl">{entry.name}</span>
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
                <div className="border-l border-l-gray-700">
                    <div className="ml-12">
                        {entry.children.map(renderChild)}
                    </div>
                </div>
            )}
        </div>
    );
};

export const CollapsibleTree = memo(CollapsibleTreeComponent);

const WikiSideBarComponent = () => {
    return (
        <div className="bg-zinc-800 border-aoba-purple border rounded-lg m-5 p-5 md:inline-block">
            <div className="w-full px-5 inline-block">
                <CollapsibleTree entry={WikiEntries} />
            </div>
        </div>
    );
};

export const WikiSideBar = memo(WikiSideBarComponent);
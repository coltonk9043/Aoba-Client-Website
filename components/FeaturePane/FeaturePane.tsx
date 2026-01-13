import { memo } from "react";

export interface FeaturePanelProps {
    key?: string;
    title?: string;
    description: string;
    href?: string;
}

const FeaturePanelComponent = ({ title, description, href }: FeaturePanelProps) => {
    const content = (
        <>
            {title && <h3 className="text-aoba-purple-dark text-2xl font-bold">{title}</h3>}
            <p>{description}</p>
        </>
    );

    return (
        <div className="m-2 p-4 border border-aoba-purple-dark-0.4 rounded-xl bg-opacity-20 bg-gradient-to-br from-aoba-purple-dark-0.2 to-aoba-purple-0.2 transition-transform hover:-translate-y-1 hover:scale-105">
            {href ? (
                <a className="text-center" href={href}>
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    );
};

export const FeaturePanel = memo(FeaturePanelComponent);
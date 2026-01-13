import { memo } from "react";

interface InformationPaneProps {
    children: React.ReactNode;
    className?: string;
}

const InformationPaneComponent = ({ children, className = "" }: InformationPaneProps) => {
    return (
        <div className={`bg-background-accent rounded-lg p-5 border-l-4 border-l-aoba-purple ${className}`}>
            {children}
        </div>
    );
};

const InformationPane = memo(InformationPaneComponent);

export default InformationPane;
interface SectionDividerProps {
    color: string;
    flip?: boolean;
    seed?: number;
}

function seededRandom(seed: number) {
    let s = seed;
    return () => {
        s = (s * 16807 + 0) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

function generateContourPoints(seed: number, segments: number = 8): number[][] {
    const rand = seededRandom(seed);
    const points: number[][] = [];

    for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * 1440;
        const y = 20 + rand() * 30;
        points.push([x, y]);
    }

    return points;
}

function pointsToFilledPath(points: number[][]): string {
    const line = points
        .map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`)
        .join(" ");
    return `${line} L1440,100 L0,100 Z`;
}

export const SectionDivider = ({
    color,
    flip = false,
    seed = 1,
}: SectionDividerProps) => {
    const points = generateContourPoints(seed);

    return (
        <div className="-mb-px">
            <svg
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                className={`block w-full h-12 md:h-20 ${flip ? "rotate-180" : ""}`}
            >
                <path
                    d={pointsToFilledPath(points)}
                    style={{ fill: color }}
                />
            </svg>
        </div>
    );
};

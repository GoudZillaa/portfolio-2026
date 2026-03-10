import { motion } from "framer-motion";

// Pixel art Godzilla as SVG-based pixel grid
const PixelGodzilla = () => {
    // 16x20 pixel art godzilla pattern
    const pixels: [number, number, string][] = [
        // Head
        [6, 0, "primary"], [7, 0, "primary"], [8, 0, "primary"],
        [5, 1, "primary"], [6, 1, "primary"], [7, 1, "primary"], [8, 1, "primary"], [9, 1, "primary"],
        [5, 2, "primary"], [6, 2, "cyber-mint"], [7, 2, "primary"], [8, 2, "cyber-mint"], [9, 2, "primary"],
        [5, 3, "primary"], [6, 3, "primary"], [7, 3, "primary"], [8, 3, "primary"], [9, 3, "primary"],
        [6, 4, "destructive"], [7, 4, "destructive"], [8, 4, "destructive"],
        // Neck
        [6, 5, "primary"], [7, 5, "primary"], [8, 5, "primary"],
        // Body
        [4, 6, "primary"], [5, 6, "primary"], [6, 6, "primary"], [7, 6, "primary"], [8, 6, "primary"], [9, 6, "primary"], [10, 6, "primary"],
        [3, 7, "primary"], [4, 7, "primary"], [5, 7, "primary"], [6, 7, "primary"], [7, 7, "primary"], [8, 7, "primary"], [9, 7, "primary"], [10, 7, "primary"], [11, 7, "primary"],
        [3, 8, "primary"], [4, 8, "primary"], [5, 8, "cyber-lavender"], [6, 8, "primary"], [7, 8, "primary"], [8, 8, "primary"], [9, 8, "cyber-lavender"], [10, 8, "primary"], [11, 8, "primary"],
        [3, 9, "primary"], [4, 9, "primary"], [5, 9, "primary"], [6, 9, "primary"], [7, 9, "primary"], [8, 9, "primary"], [9, 9, "primary"], [10, 9, "primary"], [11, 9, "primary"],
        [4, 10, "primary"], [5, 10, "primary"], [6, 10, "primary"], [7, 10, "primary"], [8, 10, "primary"], [9, 10, "primary"], [10, 10, "primary"],
        // Legs
        [4, 11, "primary"], [5, 11, "primary"], [9, 11, "primary"], [10, 11, "primary"],
        [4, 12, "primary"], [5, 12, "primary"], [9, 12, "primary"], [10, 12, "primary"],
        [3, 13, "primary"], [4, 13, "primary"], [5, 13, "primary"], [9, 13, "primary"], [10, 13, "primary"], [11, 13, "primary"],
        // Tail
        [10, 6, "primary"], [11, 5, "primary"], [12, 4, "primary"], [13, 3, "primary"], [14, 3, "primary"],
        [12, 5, "primary"], [13, 4, "primary"],
        // Spines
        [6, 0, "cyber-pink"], [7, -1, "cyber-peach"], [8, 0, "cyber-pink"],
        [7, 5, "cyber-mint"],
    ];

    const colorMap: Record<string, string> = {
        "primary": "hsl(var(--primary))",
        "cyber-mint": "hsl(var(--cyber-mint))",
        "cyber-lavender": "hsl(var(--cyber-lavender))",
        "cyber-pink": "hsl(var(--cyber-pink))",
        "cyber-peach": "hsl(var(--cyber-peach))",
        "destructive": "hsl(var(--destructive))",
    };

    const size = 6;

    return (
        <div className="pixel-godzilla-walk" style={{ position: "fixed", bottom: "20px", zIndex: 40, pointerEvents: "none" }}>
            <motion.svg
                width={16 * size}
                height={16 * size}
                viewBox={`0 -1 16 16`}
                style={{ imageRendering: "pixelated" }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
            >
                {pixels.map(([x, y, color], i) => (
                    <rect
                        key={i}
                        x={x}
                        y={y}
                        width={1}
                        height={1}
                        fill={colorMap[color] || colorMap.primary}
                        opacity={0.9}
                    />
                ))}
            </motion.svg>
        </div>
    );
};

export default PixelGodzilla;

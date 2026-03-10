import { useRef, useState, useCallback } from "react";

interface MagicCardProps {
    children: React.ReactNode;
    className?: string;
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
    gradientFrom?: string;
    gradientTo?: string;
}

const MagicCard = ({
    children,
    className = "",
    gradientSize = 280,
    gradientColor = "#2a2a2a",
    gradientOpacity = 0.85,
    gradientFrom = "#9E7AFF",
    gradientTo = "#FE8BBB",
}: MagicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setMousePos({ x: -500, y: -500 });
    }, []);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`card-solid relative overflow-hidden ${className}`}
            style={{
                // Spotlight inner glow follows cursor
                background: `radial-gradient(${gradientSize}px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--foreground) / 0.05) 0%, hsl(var(--card)) 100%)`,
            }}
        >
            {/* Glowing border gradient — mask cuts out center, leaves only 1px edge */}
            <div
                className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
                style={{
                    opacity: isHovered ? gradientOpacity : 0,
                    background: `radial-gradient(${gradientSize}px circle at ${mousePos.x}px ${mousePos.y}px, ${gradientFrom}, ${gradientTo}, transparent 80%)`,
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                    borderRadius: "inherit",
                }}
            />
            {children}
        </div>
    );
};

export default MagicCard;

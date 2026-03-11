import { useRef, useState, useCallback, memo } from "react";

interface MagicCardProps {
    children: React.ReactNode;
    className?: string;
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
    gradientFrom?: string;
    gradientTo?: string;
}

const MagicCard = memo(({
    children,
    className = "",
    gradientSize = 280,
    gradientOpacity = 0.85,
    gradientFrom = "#9E7AFF",
    gradientTo = "#FE8BBB",
}: MagicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            cardRef.current.style.setProperty("--mouse-x", `${x}px`);
            cardRef.current.style.setProperty("--mouse-y", `${y}px`);
        },
        []
    );

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`card-solid relative overflow-hidden group/magic-card ${className}`}
            style={{
                // Use CSS variables for the spotlight
                background: `radial-gradient(${gradientSize}px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), hsl(var(--foreground) / 0.05) 0%, hsl(var(--card)) 100%)`,
            } as React.CSSProperties}
        >
            {/* Glowing border gradient — mask cuts out center, leaves only 1px edge */}
            <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover/magic-card:opacity-100 transition-opacity duration-300"
                style={{
                    opacity: `var(--magic-opacity, ${gradientOpacity})`,
                    background: `radial-gradient(${gradientSize}px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${gradientFrom}, ${gradientTo}, transparent 80%)`,
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
});


export default MagicCard;

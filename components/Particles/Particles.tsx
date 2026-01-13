'use client'
import React, { useEffect, useRef, useCallback, memo } from "react";

interface ParticlesProps {
    count: number;
}

const ParticlesComponent = ({ count }: ParticlesProps) => {
    const requestRef = useRef<number>();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const isVisibleRef = useRef(true);
    const isMobileRef = useRef(false);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const body = document.body;
            canvas.width = window.innerWidth - 10;
            canvas.height = body.offsetHeight;
        }
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isVisibleRef.current) {
            requestRef.current = requestAnimationFrame(animate);
            return;
        }

        const context = canvas.getContext('2d');
        if (context) {
            context.globalCompositeOperation = "destination-over";
            context.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw(context);
            });
        }

        requestRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        isMobileRef.current = window.matchMedia('(max-width: 768px)').matches;

        // Reduce particle count by 60% on mobile
        const effectiveCount = isMobileRef.current ? Math.floor(count * 0.4) : count;

        resizeCanvas();

        particlesRef.current = [];
        for (let i = 0; i < effectiveCount; i++) {
            particlesRef.current.push(new Particle(
                canvas,
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }

        const handleResize = () => {
            resizeCanvas();
        };

        // Pause animation when tab is hidden
        const handleVisibilityChange = () => {
            isVisibleRef.current = !document.hidden;
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [count, resizeCanvas, animate]);

    return (
        <div className="absolute left-0 top-0 w-full pointer-events-none">
            <canvas ref={canvasRef} id="minecraft-particles" />
        </div>
    );
};

export const Particles = memo(ParticlesComponent);

const padding = 50; // Padding area for fade effect
class Particle {
    canvas: HTMLCanvasElement;
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    opacity: number;
    pulse: number;
    pulseSpeed: number;
    fadeAmount: number;

    constructor(canvas : HTMLCanvasElement, x : number, y : number) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedY = Math.random() * 1.25 - 0.625;
        this.speedX = Math.random() * 1.25 - 0.625;
        this.opacity = Math.random() * 0.6 + 0.4;
        this.pulse = Math.random() * Math.PI * 2; // Random starting phase
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.fadeAmount = 1; // New property for fade transition
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulse += this.pulseSpeed;
        
        // Smooth sine wave for opacity
        const basePulse = (Math.sin(this.pulse) + 1) / 2; // Normalize to 0-1
        this.opacity = basePulse * 0.5 + 0.3; // Range from 0.3 to 0.8
        
        // Handle wrapping with fade effect
        if (this.y < padding) {
            this.fadeAmount = this.y / padding;
        } else if (this.y > this.canvas.height - padding) {
            this.fadeAmount = (this.canvas.height - this.y) / padding;
        } else if (this.x < padding) {
            this.fadeAmount = this.x / padding;
        } else if (this.x > this.canvas.width - padding) {
            this.fadeAmount = (this.canvas.width - this.x) / padding;
        } else {
            this.fadeAmount = 1;
        }
        
        // Wrap positions with smooth transition
        if (this.y < -this.size) this.y = this.canvas.height + this.size;
        if (this.y > this.canvas.height + this.size) this.y = -this.size;
        if (this.x < -this.size) this.x = this.canvas.width + this.size;
        if (this.x > this.canvas.width + this.size) this.x = -this.size;
    }

    draw(ctx : CanvasRenderingContext2D) {
        const finalOpacity = this.opacity * this.fadeAmount;
        ctx.fillStyle = "rgba(156, 39, 176)";
        ctx.globalAlpha = finalOpacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
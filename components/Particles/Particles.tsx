'use client'
import React from "react";

export const Particles = (props : {count : number}) => {
    const requestRef = React.useRef<number>()
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const particles : Particle[] = [];

    React.useEffect(() => {
        const canvas = canvasRef.current;
        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);
        if(canvas){
            for (let i = 0; i < props.count; i++) {
                particles.push(new Particle(
                    canvas,
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                ));
            }
        }

        requestRef.current = requestAnimationFrame(animate);

        // Callback to remove event listeners and cancel animation frame.
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if(requestRef.current)
                cancelAnimationFrame(requestRef.current);
        };
    }, []);

    /**
     * Resizes the canvas to the Window size.
     */
    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if(canvas){
            var body = document.body;
            canvas.width = window.innerWidth - 10;
            canvas.height = body.offsetHeight;
        }
    }

    /**
     * Tick Animation Function
     */
    const animate = () => {
        if(canvasRef.current){
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if(context){
                context.globalCompositeOperation = "destination-over"
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Update Particles
                particles.forEach(particle => {
                    particle.update();
                    particle.draw(context);
                });
            }

            requestRef.current = requestAnimationFrame(animate);
        }
    }

    return (
        <div className="absolute left-0 top-0 w-full">
            <canvas ref={canvasRef} id="minecraft-particles" />
        </div>
    );
}

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
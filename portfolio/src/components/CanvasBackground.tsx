'use client';

import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

   
    const ballColor = 'rgba(17, 75, 157, 0.203)';

    class Ball {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      color: string;

      constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      }

      update(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        this.draw(context);
      }
    }

    const balls: Ball[] = [];

    const init = () => {
      balls.length = 0;
      for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 8 + 4; 
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 1.5;
        const dy = (Math.random() - 0.5) * 1.5;
        balls.push(new Ball(x, y, dx, dy, radius, ballColor));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);


      ctx.fillStyle = '#A4A5A6';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball) => ball.update(ctx, canvas));
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="backgroundCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default CanvasBackground;

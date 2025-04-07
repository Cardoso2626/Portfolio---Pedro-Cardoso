'use client';

import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = ['#121E2C', '#0D0D0D', '#1A1A1A', '#2B1B38', '#3A1B38', '#4A1B38'];

  // A classe precisa vir antes da declaração da lista de bolas, para poder ser usada como tipo
  class Ball {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
    color: string;
    ctx: CanvasRenderingContext2D;

    constructor(
      x: number,
      y: number,
      dx: number,
      dy: number,
      radius: number,
      color: string,
      ctx: CanvasRenderingContext2D
    ) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
      this.ctx = ctx;
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }

    update(canvas: HTMLCanvasElement) {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
  }

  const balls: Ball[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const init = () => {
      balls.length = 0;
      for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 20 + 10;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        balls.push(new Ball(x, y, dx, dy, radius, color, ctx));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach((ball) => ball.update(canvas));
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
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

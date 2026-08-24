"use client";

import { useEffect, useRef } from "react";
import { GRID_SIZE, palette } from "@/lib/palette";

type Cell = { key: string; gx: number; gy: number; life: number; color: string };
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
};

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function GridTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const surface: HTMLCanvasElement = canvas;
    const draw: CanvasRenderingContext2D = ctx;

    const cells = new Map<string, Cell>();
    const particles: Particle[] = [];
    let raf = 0;
    let last = { gx: -1, gy: -1 };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      surface.width = Math.floor(window.innerWidth * dpr);
      surface.height = Math.floor(window.innerHeight * dpr);
      surface.style.width = `${window.innerWidth}px`;
      surface.style.height = `${window.innerHeight}px`;
      draw.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function colorAt(i: number) {
      return palette[i % palette.length];
    }

    function stamp(clientX: number, clientY: number) {
      const gx = Math.floor(clientX / GRID_SIZE);
      const gy = Math.floor(clientY / GRID_SIZE);
      if (gx === last.gx && gy === last.gy) return;
      last = { gx, gy };

      const neighbors = [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      neighbors.forEach(([dx, dy], i) => {
        const x = gx + dx;
        const y = gy + dy;
        const key = `${x},${y}`;
        const color = colorAt(Math.abs(x + y + i) % palette.length);
        cells.set(key, {
          key,
          gx: x,
          gy: y,
          life: i === 0 ? 1 : 0.7,
          color,
        });
      });

      const originX = gx * GRID_SIZE + GRID_SIZE / 2;
      const originY = gy * GRID_SIZE + GRID_SIZE / 2;
      const count = 4 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1.8;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.25,
          life: 1,
          size: Math.random() > 0.5 ? 4 : 6,
          color: colorAt(Math.floor(Math.random() * palette.length)),
        });
      }
      if (particles.length > 220) particles.splice(0, particles.length - 220);
      if (cells.size > 120) {
        const extra = [...cells.values()].sort((a, b) => a.life - b.life);
        extra.slice(0, cells.size - 120).forEach((c) => cells.delete(c.key));
      }
    }

    function tick() {
      draw.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const cell of [...cells.values()]) {
        cell.life -= 0.01;
        if (cell.life <= 0) {
          cells.delete(cell.key);
          continue;
        }
        const { r, g, b } = hexToRgb(cell.color);
        draw.fillStyle = `rgba(${r},${g},${b},${cell.life * 0.72})`;
        draw.fillRect(cell.gx * GRID_SIZE, cell.gy * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        draw.strokeStyle = `rgba(17,17,17,${cell.life * 0.55})`;
        draw.lineWidth = 1;
        draw.strokeRect(
          cell.gx * GRID_SIZE + 0.5,
          cell.gy * GRID_SIZE + 0.5,
          GRID_SIZE - 1,
          GRID_SIZE - 1
        );
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.012;
        p.x += p.vx;
        p.y += p.vy;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const snap = 4;
        const sx = Math.round(p.x / snap) * snap;
        const sy = Math.round(p.y / snap) * snap;
        const { r, g, b } = hexToRgb(p.color);
        draw.fillStyle = `rgba(${r},${g},${b},${Math.min(1, p.life + 0.15)})`;
        draw.fillRect(sx, sy, p.size, p.size);
      }

      raf = window.requestAnimationFrame(tick);
    }

    function onMove(event: MouseEvent | PointerEvent) {
      stamp(event.clientX, event.clientY);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[25] mix-blend-multiply dark:mix-blend-screen"
      aria-hidden
    />
  );
}

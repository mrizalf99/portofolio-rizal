import { useEffect, useRef } from "react";

export default function BinaryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const fontSize = 14;
    const chars = "01";
    let columns = 0;
    let drops = [];

    const initCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns)
        .fill(1)
        .map(() => Math.floor(Math.random() * -50)); // Mulai dari posisi acak di atas layar
    };

    initCanvas();
    window.addEventListener("resize", initCanvas);

    let lastTime = 0;
    const fps = 20; // Kecepatan jatuh biner (semakin besar semakin cepat)
    const interval = 1000 / fps;

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);

      if (currentTime - lastTime < interval) return;
      lastTime = currentTime;

      // Efek jejak pudar sesuai warna background slate-950 (#020617)
      ctx.fillStyle = "rgba(2, 6, 23, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Variasi warna hijau terang untuk kepala karakter dan hijau emerald untuk ekor
        ctx.fillStyle = Math.random() > 0.85 ? "#6ee7b7" : "#10b981";
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Canvas Animasi Biner */}
      <canvas ref={canvasRef} className="h-full w-full opacity-205" />

      {/* Gradasi agar menyatu halus dengan section di bawahnya */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
    </div>
  );
}

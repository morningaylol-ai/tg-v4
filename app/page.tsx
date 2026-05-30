"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Bot,
  Boxes,
  Braces,
  ChartLine,
  ChevronDown,
  Code2,
  Crown,
  Database,
  FileCode2,
  FileSearch,
  Gauge,
  Globe,
  Layers3,
  Lock,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles as SparklesIcon,
  Terminal,
  Workflow,
  BotMessageSquare,
  ArrowRight,
} from "lucide-react";

const stats = [
  { value: 100, label: "Projects" },
  { value: 50, label: "Clients" },
  { value: 24, label: "7 Support" },
  { value: 99.9, label: "Uptime" },
];

const services = [
  { icon: Bot, title: "Telegram Bots", text: "Command-grade bots for sales, ops, alerts, and workflows." },
  { icon: Globe, title: "Websites", text: "Luxury digital headquarters built to impress and convert." },
  { icon: MonitorSmartphone, title: "Software", text: "Internal tools, dashboards, portals, and control planes." },
  { icon: FileSearch, title: "Parsers", text: "High-speed extraction pipelines for structured intelligence." },
  { icon: Network, title: "API Integrations", text: "Dense system meshes that move data without friction." },
  { icon: Workflow, title: "Automation", text: "Business engines that remove manual effort and scale output." },
];

const stack = [
  { label: "Python", icon: Braces },
  { label: "JavaScript", icon: Code2 },
  { label: "TypeScript", icon: FileCode2 },
  { label: "Node.js", icon: Server },
  { label: "React", icon: Layers3 },
  { label: "Next.js", icon: Rocket },
  { label: "PostgreSQL", icon: Database },
  { label: "Docker", icon: Boxes },
  { label: "Redis", icon: Gauge },
  { label: "Linux", icon: ShieldCheck },
];

const workflow = ["IDEA", "ARCHITECTURE", "DEVELOPMENT", "AUTOMATION", "DEPLOYMENT", "SCALING"];

const lines = [
  "> create_bot()",
  "> SUCCESS",
  "> deploy_project()",
  "> SUCCESS",
  "> automate_business()",
  "> SUCCESS",
];

const terminalBoot = [
  "> Loading neural systems...",
  "> Connecting global nodes...",
  "> Initializing AI modules...",
  "> Deploying infrastructure...",
  "> Access granted.",
];

const areaData = [
  { name: "Mon", value: 34 },
  { name: "Tue", value: 48 },
  { name: "Wed", value: 41 },
  { name: "Thu", value: 62 },
  { name: "Fri", value: 58 },
  { name: "Sat", value: 72 },
  { name: "Sun", value: 88 },
];

const lineData = [
  { name: "Q1", value: 28 },
  { name: "Q2", value: 36 },
  { name: "Q3", value: 51 },
  { name: "Q4", value: 74 },
  { name: "Q5", value: 83 },
];

const pieData = [
  { name: "Bots", value: 42 },
  { name: "Web", value: 26 },
  { name: "Automation", value: 20 },
  { name: "API", value: 12 },
];

const colors = ["#d4af37", "#7c5cff", "#38bdf8", "#22c55e"];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = target * eased;
      setCount(Number.isInteger(target) ? Math.round(next) : Number(next.toFixed(1)));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView]);

  return count;
}

function GoldenCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(t * 0.3) * 0.15;
      mesh.current.rotation.y += delta * 0.35;
    }
    if (ring.current) {
      ring.current.rotation.z -= delta * 0.12;
      ring.current.rotation.x = Math.sin(t * 0.2) * 0.08;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={mesh} castShadow receiveShadow>
        <dodecahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.15}
          emissive="#5e4a00"
          emissiveIntensity={0.7}
        />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.04, 16, 120]} />
        <meshStandardMaterial
          color="#f6d56c"
          metalness={1}
          roughness={0.2}
          emissive="#8f6a00"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function BackgroundScene() {
  return (
    <Canvas className="pointer-events-none absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 1.2, 7]} />
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#050508", 5, 22]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 5, 3]} intensity={2.1} color="#ffd86e" />
      <directionalLight position={[-4, 2, -2]} intensity={0.8} color="#6a63ff" />
      <pointLight position={[0, 2, 4]} intensity={2.2} color="#fff0b0" />
      <GoldenCore />
      <Sparkles count={140} size={4} speed={0.25} opacity={0.5} color="#d4af37" />
      <mesh position={[0, -2.8, -3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#07070a" metalness={0.4} roughness={0.95} />
      </mesh>
    </Canvas>
  );
}

function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 300 });
  const sy = useSpring(y, { damping: 30, stiffness: 300 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[70] h-72 w-72 rounded-full blur-3xl"
      style={{
        left: sx,
        top: sy,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(124,92,255,0.08) 35%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-amber-200/70">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300/85 md:text-base">{subtitle}</p>
    </div>
  );
}

function Orb({
  delay = 0,
  size = 16,
  className = "",
}: {
  delay?: number;
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full border border-amber-300/20 bg-white/5 backdrop-blur-md ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow: "0 0 60px rgba(212,175,55,0.2)",
      }}
      animate={{ y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function Preloader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onDone, delay: 0.7 });
    terminalBoot.forEach((_, i) => {
      tl.to({}, { duration: 0.85, onStart: () => setIndex(i), ease: "none" });
    });
    tl.to(".preloader-crown", {
      scale: 1.04,
      textShadow: "0 0 22px rgba(212,175,55,0.8)",
      duration: 0.8,
    });
    return () => {
      tl.kill();
    };
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 50%)",
        }}
      />
      <div className="relative flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="preloader-crown mb-8 text-6xl text-amber-300 md:text-8xl"
        >
          <Crown size={96} strokeWidth={1.6} className="drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-semibold tracking-[0.5em] text-amber-100 md:text-2xl"
        >
          BEL_MONARH OS v1.0
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-2 text-sm uppercase tracking-[0.4em] text-slate-400"
        >
          Boot sequence begins
        </motion.p>
        <div className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left font-mono text-sm text-amber-100/90 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {terminalBoot.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: i <= index ? 1 : 0.2, x: i <= index ? 0 : -10 }}
              transition={{ duration: 0.35 }}
              className="min-h-[1.6rem]"
            >
              {i === index ? <TypingLine text={line} /> : line}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TypingLine({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(interval);
    }, 24);
    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <span>
      {shown}
      <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-amber-300 align-middle" />
    </span>
  );
}

function TerminalWindow() {
  const [current, setCurrent] = useState(0);
  const [buffer, setBuffer] = useState<string[]>([lines[0]]);

  useEffect(() => {
    let line = 1;
    const interval = window.setInterval(() => {
      setCurrent(line % lines.length);
      setBuffer((prev) => [...prev, lines[line % lines.length]]);
      line += 1;
      if (line > 9) line = 1;
    }, 1800);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-amber-300/15 bg-[#07070b]/90 p-5 shadow-[0_0_90px_rgba(212,175,55,0.08)] backdrop-blur-2xl">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400/80" />
        <div className="h-3 w-3 rounded-full bg-amber-300/80" />
        <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs uppercase tracking-[0.35em] text-slate-400">Live Terminal</span>
      </div>
      <div className="space-y-2 font-mono text-sm text-emerald-200/90">
        {buffer.slice(-6).map((line, i) => (
          <motion.div
            key={`${line}-${i}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2"
          >
            <span className="text-amber-300">{i % 2 === 0 ? ">" : "✓"}</span>
            <span>{line}</span>
          </motion.div>
        ))}
        <motion.div key={current} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2 text-slate-200">
          <span className="text-amber-300">$</span>
          <TypingLine text={lines[current]} />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent,rgba(255,255,255,0.02))]" />
    </div>
  );
}

function DashboardPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Python Command Center</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Empire Intelligence</h3>
          </div>
          <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-100">
            Live Metrics
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="areaGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4af37" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#d4af37" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(3,3,8,0.95)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 16 }} />
                <Area type="monotone" dataKey="value" stroke="#f6d56c" fill="url(#areaGold)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(3,3,8,0.95)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 16 }} />
                <Line type="monotone" dataKey="value" stroke="#7c5cff" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-4 rounded-3xl border border-white/10 bg-black/30 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
            <ChartLine size={16} className="text-amber-300" /> Live Product Mix
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={58} outerRadius={90} paddingAngle={4}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "rgba(3,3,8,0.95)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 16 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col justify-center gap-3 text-sm text-slate-300">
              <p className="leading-7">
                A private control room for analytics, code telemetry, and business intelligence.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Deploy Speed", "2.4x"],
                  ["Queue Health", "Green"],
                  ["Automation", "Active"],
                  ["Security", "Locked"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{k}</div>
                    <div className="mt-1 text-lg font-semibold text-white">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <TerminalWindow />
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-amber-200/70">
            <Code2 size={14} /> Live code snippets
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-4 font-mono text-sm text-slate-200">
            <div className="text-slate-500">def build_empire():</div>
            <div className="pl-4 text-amber-100">automate()</div>
            <div className="pl-4 text-amber-100">scale()</div>
            <div className="pl-4 text-amber-100">dominate()</div>
            <div className="text-slate-500">return "Success"</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCounter({ item }: { item: { value: number; label: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const count = useCountUp(item.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7 }}
      className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-2xl"
    >
      <div className="text-3xl font-semibold text-white md:text-5xl">
        {item.label === "Uptime" ? `${count}%` : `${count}+`}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{item.label}</div>
    </motion.div>
  );
}

function HeroButton({
  href,
  label,
  icon: Icon,
  primary = false,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  primary?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] transition ${
        primary
          ? "border-amber-300/20 bg-amber-300 text-black shadow-[0_0_40px_rgba(212,175,55,0.28)]"
          : "border-white/12 bg-white/5 text-white backdrop-blur-xl"
      }`}
    >
      <Icon size={16} className={primary ? "text-black" : "text-amber-300"} />
      <span>{label}</span>
    </motion.a>
  );
}

function TiltCard({
  service,
  delay,
}: {
  service: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; text: string };
  delay: number;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setRotate({ x: (0.5 - py) * 10, y: (px - 0.5) * 12 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay, duration: 0.6 }}
      onMouseMove={onMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(124,92,255,0.12),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/15 bg-amber-300/10 text-amber-200 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
            <Icon size={22} />
          </div>
          <SparklesIcon size={16} className="text-amber-300/70 opacity-0 transition group-hover:opacity-100" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300/85">{service.text}</p>
      </div>
    </motion.div>
  );
}

export default function Page() {
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 6800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040407] text-white selection:bg-amber-300/30 selection:text-amber-100">
      <CursorGlow />
      <motion.div
        className="fixed left-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-transparent via-amber-300 to-transparent"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>{!ready && <Preloader onDone={() => setReady(true)} />}</AnimatePresence>

      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(124,92,255,0.12),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_20%,rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <BackgroundScene />

      
<div className="fixed inset-0 z-0 opacity-20 bg-center bg-cover"
style={{backgroundImage:"url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop')"}} />

<main className="relative z-10">
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 md:px-10 lg:px-14">
          <div className="absolute inset-0 bg-radial-royal" />
          <Orb className="left-8 top-24" size={18} delay={0} />
          <Orb className="right-10 top-40" size={28} delay={1.4} />
          <Orb className="bottom-28 left-[20%]" size={12} delay={2.1} />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-100/90 backdrop-blur-xl"
              >
                <Crown size={14} /> BEL_MONARH OS
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9 }}
                className="mt-6 text-5xl font-black leading-[0.9] tracking-[0.12em] text-white drop-shadow-[0_0_30px_rgba(212,175,55,0.16)] md:text-7xl lg:text-8xl"
              >
                BEL_<span className="text-amber-300">MONARH</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-6 max-w-2xl text-lg font-medium uppercase tracking-[0.25em] text-slate-300 md:text-xl"
              >
                Разработчик. Архитектор. Инженер автоматизации.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-300/90 md:text-lg"
              >
                Я создаю системы. Автоматизирую бизнес. Разрабатываю цифровые продукты.
                This is not a freelance page. This is a private operating system for a technology empire.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-4">
                <HeroButton href="https://t.me/bel_monarh" label="TELEGRAM" icon={MessageCircle} primary />
                <HeroButton href="#projects" label="PROJECTS" icon={ArrowRight} />
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
                  <Lock size={14} className="text-amber-300" /> Private System
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
                  <BotMessageSquare size={14} className="text-amber-300" /> @bel_monarh
                </div>
              </div>
            </div>

            <div className="relative min-h-[560px] rounded-[36px] border border-amber-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[0_0_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(124,92,255,0.12),transparent_35%)]" />
              <div className="relative flex h-full min-h-[560px] flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-black/30 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Royal Hall OS</p>
                    <p className="mt-2 text-2xl font-semibold">Digital Headquarters</p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-emerald-200">
                    Online
                  </div>
                </div>

                <div className="relative flex-1">
                  <motion.div
                    animate={{ y: [0, -8, 0], rotateY: [0, 4, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-6 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),rgba(0,0,0,0)_70%)] blur-3xl"
                  />
                  <motion.div
                    animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-16 h-48 w-48 -translate-x-1/2 rounded-full border border-amber-300/30 bg-amber-300/5 backdrop-blur-md"
                  />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-300/15 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_40%)]" />
                  <div className="absolute bottom-10 left-6 right-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Mission</div>
                        <div className="mt-1 font-medium text-white">Systems that scale</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Signal</div>
                        <div className="mt-1 font-medium text-white">Telegram-first ops</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-500">
                  <span>Empire status</span>
                  <span>Stable • Secure • Expanding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Capabilities"
              title="Премиальные инженерные решения"
              subtitle="Each module is presented like a high-security command asset, not a standard portfolio card."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, i) => (
                <TiltCard key={service.title} delay={i * 0.08} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Command Line"
              title="Interactive terminal"
              subtitle="A live system prompt that gives the page a working-machine feel."
            />
            <TerminalWindow />
          </div>
        </section>

        <section id="projects" className="px-6 py-20 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Command Center"
              title="Python analytics dashboard"
              subtitle="Charts, snippets, and telemetry arranged like an elite control room."
            />
            <DashboardPanel />
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Workflow"
              title="From idea to empire scale"
              subtitle="A cinematic pipeline that communicates velocity and execution."
            />
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
              <div className="grid gap-4 lg:grid-cols-6">
                {workflow.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative rounded-3xl border border-white/10 bg-black/30 p-5 text-center shadow-[0_0_50px_rgba(0,0,0,0.25)]"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/15 bg-amber-300/10 text-amber-200">
                      <span className="text-sm font-semibold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-4 text-sm font-semibold tracking-[0.3em] text-white">{step}</div>
                    {i < workflow.length - 1 && (
                      <ChevronDown className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-[-90deg] text-amber-300/40 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Proof"
              title="Statistics built to feel authoritative"
              subtitle="Counters animate on view and reinforce the sense of scale."
            />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <StatCounter key={item.label} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Stack"
              title="Interactive technology wall"
              subtitle="Hover-ready tiles for the core stack used to power the system."
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {stack.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/15 bg-amber-300/10 text-amber-200 transition group-hover:shadow-[0_0_40px_rgba(212,175,55,0.18)]">
                    <item.icon size={22} />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-white">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[36px] border border-amber-300/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_0_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-amber-200/70">Final directive</p>
                  <h2 className="mt-4 text-4xl font-black tracking-[0.12em] text-white md:text-6xl">
                    YOUR IDEA * MY CODE = RESULT
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                    A premium Telegram-first identity for BEL_MONARH, designed like a sovereign operating
                    system with cinematic motion, deep contrast, and elite-grade visual authority.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <HeroButton href="https://t.me/bel_monarh" label="TELEGRAM" icon={MessageCircle} primary />
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                    className="absolute h-64 w-64 rounded-full border border-amber-300/15"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                    className="absolute h-48 w-48 rounded-full border border-violet-400/20"
                  />
                  <div className="relative rounded-full border border-white/10 bg-black/40 p-10 shadow-[0_0_100px_rgba(212,175,55,0.14)]">
                    <Crown size={64} className="text-amber-300 drop-shadow-[0_0_24px_rgba(212,175,55,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 pb-10 pt-2 text-center text-xs uppercase tracking-[0.35em] text-slate-500 md:px-10">
        BEL_MONARH • PRIVATE DIGITAL HEADQUARTERS
      </footer>
    </div>
  );
}

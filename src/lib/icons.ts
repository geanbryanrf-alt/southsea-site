import { Activity, GitMerge, Globe, Layers, LineChart, LucideIcon, Network, PenTool, RefreshCw, Search, ShieldCheck, Tractor, TrendingUp } from "lucide-react";
import type { OperatingStep, Solution } from "@/data/content";

export const solutionIcons: Record<Solution["icon"], LucideIcon> = {
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Network,
  Tractor,
  LineChart,
  Globe,
};

export const stepIcons: Record<OperatingStep["icon"], LucideIcon> = {
  Search,
  PenTool,
  Layers,
  GitMerge,
  Activity,
};

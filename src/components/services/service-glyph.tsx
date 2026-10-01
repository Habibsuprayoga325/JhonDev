import {
  Boxes,
  Cable,
  Globe,
  Layers,
  MonitorSmartphone,
  ShoppingCart,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIcon } from "@/lib/services-data";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  globe: Globe,
  pos: ShoppingCart,
  erp: Boxes,
  mobile: MonitorSmartphone,
  saas: Layers,
  iot: Cable,
  crm: Users,
  api: Workflow,
};

/** Ikon untuk satu layanan. Kalau key tidak dikenal, fallback ke Globe. */
export function ServiceGlyph({ name }: { name: ServiceIcon }) {
  const Icon = ICONS[name] ?? Globe;
  return <Icon aria-hidden="true" className="size-5" />;
}

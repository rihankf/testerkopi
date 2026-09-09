// ══════════════════════════════════════════════════════════
// BARREL EXPORT — Penghubung data ke halaman
// File ini mengumpulkan semua export data dan tipe
// agar halaman cukup import dari satu tempat.
// ══════════════════════════════════════════════════════════

export { tools } from "./products";
export { articles } from "./articles";
export { team, locations } from "./company";
export { problems } from "./problems";

export type {
  Tool,
  Article,
  TeamMember,
  ContactLocation,
  PriceComparison,
  Problem,
} from "@/types";

import { CursoClient } from "./CursoClient";
import { siteData } from "@/data/content";

export const metadata = {
  title: "O Código Financeiro Corporativo | Southsea Investments",
  description: siteData.course.text
};

export default function Curso() {
  return (
    <div className="w-full overflow-hidden">
      <CursoClient />
    </div>
  );
}

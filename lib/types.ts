export type PathSummary = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
};

export type PortfolioVisibility = "private" | "summary_only" | "summary_with_work";

export type LabType = "structured" | "visual" | "hybrid" | "capstone";

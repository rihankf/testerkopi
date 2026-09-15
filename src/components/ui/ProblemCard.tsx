import { Problem } from "@/types";

interface ProblemCardProps {
  problem: Problem;
}

export default function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <div className="problem-card">
      <div
        className="problem-card-icon"
        style={{ fontSize: "56px", marginBottom: "20px" }}
      >
        {problem.icon}
      </div>
      <h3>{problem.title}</h3>
      <p>{problem.description}</p>
      <div className="problem-impact">
        <strong>Dampak:</strong> {problem.impact}
      </div>
    </div>
  );
}

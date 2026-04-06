type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="subtle">{description}</p>
    </div>
  );
}

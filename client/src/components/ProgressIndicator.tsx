interface ProgressIndicatorProps {
  current: number;
  total: number;
  sectionTitle: string;
}

export function ProgressIndicator({ current, total, sectionTitle }: ProgressIndicatorProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-6 p-4 bg-muted/30 border border-border/40 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Section {current} of {total}
        </span>
        <span className="text-sm font-semibold text-foreground">
          {sectionTitle}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

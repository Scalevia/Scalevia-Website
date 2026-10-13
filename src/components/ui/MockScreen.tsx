// Abstract UI mockups standing in for real screenshots
export function MockScreen({ kind }: { kind: string }) {
  return (
    <div
      dir="ltr"
      className="h-full overflow-hidden rounded-t-xl border border-line bg-surface shadow-[0_24px_50px_-24px_rgb(12_12_13/0.35)]"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-fg/15" />
        <span className="h-2 w-2 rounded-full bg-fg/15" />
        <span className="h-2 w-2 rounded-full bg-fg/15" />
        <span className="ms-2 h-2 w-24 rounded-full bg-fg/8" />
      </div>
      <div className="p-4">{body(kind)}</div>
    </div>
  );
}

const bar = "rounded-full bg-fg/10";

function body(kind: string) {
  switch (kind) {
    case "store":
      return (
        <div className="grid grid-cols-4 gap-2.5">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="space-y-1.5">
              <div className={`aspect-square rounded-lg ${i % 3 === 0 ? "bg-[#3d6fd6]/25" : "bg-fg/[0.06]"}`} />
              <div className={`h-1.5 w-4/5 ${bar}`} />
              <div className="h-1.5 w-1/3 rounded-full bg-fg/25" />
            </div>
          ))}
        </div>
      );
    case "course":
      return (
        <div className="grid grid-cols-[1fr_2.2fr] gap-4">
          <div className="space-y-2.5">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-2 rounded-full ${i === 1 ? "bg-[#3d6fd6]/50" : "bg-fg/10"}`} />
            ))}
          </div>
          <div className="space-y-2.5">
            <div className="flex aspect-video items-center justify-center rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgb(125_184_224/0.45),rgb(61_111_214/0.15))]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface shadow-sm">
                <span className="ms-0.5 h-0 w-0 border-y-[6px] border-s-[10px] border-y-transparent border-s-[#3d6fd6]" />
              </span>
            </div>
            <div className={`h-2 w-3/4 ${bar}`} />
            <div className="h-1.5 w-full rounded-full bg-fg/5">
              <div className="h-full w-3/5 rounded-full bg-brand-gradient" />
            </div>
          </div>
        </div>
      );
    case "landing":
      return (
        <div className="flex flex-col items-center gap-2.5 pt-3">
          <div className={`h-3 w-2/3 ${bar}`} />
          <div className={`h-3 w-1/2 ${bar}`} />
          <div className="mt-1 h-1.5 w-3/5 rounded-full bg-fg/5" />
          <div className="mt-2 h-6 w-28 rounded-full bg-fg" />
          <div className="mt-4 grid w-full grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-14 rounded-lg border border-line bg-surface-2" />
            ))}
          </div>
        </div>
      );
    case "pos":
      return (
        <div className="grid grid-cols-[2fr_1fr] gap-3">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className={`h-10 rounded-md ${i === 5 ? "bg-[#3d6fd6]/40" : "bg-fg/[0.06]"}`} />
            ))}
          </div>
          <div className="space-y-2 rounded-lg border border-line p-2.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 ${bar}`} />
            ))}
            <div className="mt-3 h-6 rounded-md bg-fg" />
          </div>
        </div>
      );
    default:
      // dashboard
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2 rounded-lg border border-line p-2.5">
                <div className="h-1.5 w-1/2 rounded-full bg-fg/10" />
                <div className="h-3 w-3/4 rounded-full bg-fg/20" />
              </div>
            ))}
          </div>
          <div className="flex h-24 items-end gap-2 rounded-lg border border-line p-3">
            {[40, 55, 35, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
              <div key={i} className={`flex-1 rounded-sm ${i === 9 ? "bg-brand-gradient" : "bg-[#3d6fd6]/20"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
  }
}

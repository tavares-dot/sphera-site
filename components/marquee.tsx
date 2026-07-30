/** Infinite horizontal marquee of words, separated by the orange sphere dot. */
export function Marquee({
  items,
  reverse = false,
  duration = 28,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-white/10 bg-bg2 py-6 select-none">
      <div
        className={`marquee ${reverse ? "marquee-rev" : ""}`}
        style={{ ["--marquee-dur" as string]: `${duration}s` }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="display px-8 text-2xl font-extrabold uppercase tracking-tight text-fg/85 sm:text-3xl">
              {item}
            </span>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

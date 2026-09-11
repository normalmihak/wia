import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  /** Anchors the section's aria-labelledby. */
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /**
   * `center` stacks everything on the centre axis; `split` puts the heading
   * left and the lead paragraph right. Alternating the two down the page
   * keeps the rhythm from flattening into one repeated pattern.
   */
  align?: "center" | "split";
  tone?: "light" | "dark";
};

export default function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
}: Props) {
  const eyebrowColor = tone === "dark" ? "text-aqua-300" : "text-brand-600";
  const titleColor = tone === "dark" ? "text-white" : "text-ink-900";
  const leadColor = tone === "dark" ? "text-brand-100/80" : "text-slate-600";

  if (align === "split") {
    return (
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <div>
          <Reveal>
            <p
              className={`text-[0.8125rem] font-semibold tracking-[0.14em] ${eyebrowColor}`}
            >
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id={id}
              className={`mt-4 text-3xl leading-[1.3] font-bold tracking-[-0.02em] sm:text-[2.75rem] ${titleColor}`}
            >
              {title}
            </h2>
          </Reveal>
        </div>

        {lead && (
          <Reveal delay={110}>
            <p className={`max-w-2xl text-base leading-[1.75] lg:pb-2 ${leadColor}`}>
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div>
      <Reveal>
        <p
          className={`text-center text-[0.8125rem] font-semibold tracking-[0.14em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      </Reveal>
      {/* 메인 카피는 데스크톱에서 한 줄로 떨어지도록 폭을 넉넉히 잡습니다. */}
      <Reveal delay={60}>
        <h2
          id={id}
          className={`mx-auto mt-4 max-w-5xl text-center text-3xl leading-[1.3] font-bold tracking-[-0.02em] sm:text-[2.75rem] ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {/* 서브 카피는 두 줄로 접히도록 폭을 제한합니다. */}
      {lead && (
        <Reveal delay={110}>
          <p
            className={`mx-auto mt-2.5 max-w-2xl text-center text-base leading-[1.75] ${leadColor}`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

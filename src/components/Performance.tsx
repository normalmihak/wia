import { Target, Drop } from "@phosphor-icons/react/dist/ssr";
import { performance } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons = [Target, Drop] as const;

/** 5-point satisfaction scale → bar width. */
const pct = (score: number) => `${(score / 5) * 100}%`;

export default function Performance() {
  return (
    <section
      id="performance"
      aria-labelledby="performance-heading"
      className="relative isolate overflow-hidden bg-ink-950 py-30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[36rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(27,66,152,0.55)_0%,rgba(4,9,26,0)_70%)] blur-2xl"
      />

      <div className="container-x">
        <SectionHeader
          id="performance-heading"
          tone="dark"
          eyebrow="QUALITY IN NUMBERS"
          title="정밀도는 주장이 아니라 측정값입니다"
          lead={
            <>
              2020년 고객만족도 조사에서 경쟁 4개사와 나란히 평가받은
              결과입니다.
              <br />
              조색 정확도와 로트별 재현성 두 항목 모두에서 앞섰습니다.
            </>
          }
        />

        <ul className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {performance.map((item, i) => {
            const Icon = icons[i] ?? Target;
            return (
              <li key={item.key}>
                <Reveal delay={i * 100} className="h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm md:p-10">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-aqua-300"
                      >
                        <Icon size={22} weight="duotone" />
                      </span>
                      <p className="text-xs font-semibold tracking-[0.14em] text-brand-200">
                        {item.key}
                      </p>
                    </div>

                    <p className="tnum mt-7 text-6xl font-bold tracking-[-0.03em] text-white md:text-7xl">
                      {item.headline}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-brand-100">
                      {item.title}
                    </h3>

                    {/* Comparison bars — labelled in text, not by colour alone */}
                    <div className="mt-8 space-y-3.5">
                      <div>
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="font-medium text-white">위아케미칼</span>
                          <span className="tnum font-semibold text-white">
                            {item.bar.ours.toFixed(1)}점
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#3b79e5,#5ad8f7)]"
                            style={{ width: pct(item.bar.ours) }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="font-medium text-white/60">
                            경쟁 4개사 평균
                          </span>
                          <span className="tnum font-semibold text-white/60">
                            {item.bar.theirs.toFixed(1)}점
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-white/30"
                            style={{ width: pct(item.bar.theirs) }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="mt-7 border-t border-white/10 pt-5 text-[0.9375rem] leading-[1.7] text-brand-100/80">
                      {item.note}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal delay={80}>
          <p className="mt-8 text-center text-[0.8125rem] text-white/45">
            * 2020년 고객만족도 조사 기반 · 5점 척도 · 경쟁 4개사 평균 대비
          </p>
        </Reveal>
      </div>
    </section>
  );
}

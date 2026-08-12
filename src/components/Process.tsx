import { process, swatchColors } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-white pt-30 pb-15"
    >
      <div className="container-x">
        <SectionHeader
          id="process-heading"
          eyebrow="HOW WE WORK"
          title="문의부터 양산까지 네 단계"
          lead={
            <>
              처음 연락하실 때는 소재와 도장라인 조건만 알려주시면 됩니다.
              <br />
              나머지는 담당 기술진이 확인한 뒤 배합 방향을 제안드립니다.
            </>
          }
        />

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item, i) => (
            <li key={item.step}>
              <Reveal delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-surface-muted p-8">
                  <div className="flex items-center gap-3">
                    <span className="tnum text-2xl font-bold tracking-[-0.02em] text-brand-400">
                      {item.step}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-brand-200),transparent)]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-[-0.01em] text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.75] text-slate-600">
                    {item.body}
                  </p>

                  {"swatches" in item && item.swatches && (
                    <ul
                      aria-label="조색 가능한 컬러 예시"
                      className="mt-6 flex flex-wrap gap-1.5 xl:mt-auto xl:pt-6"
                    >
                      {swatchColors.map((color) => (
                        <li
                          key={color}
                          title={color.toUpperCase()}
                          style={{ backgroundColor: color }}
                          className="h-6 w-6 rounded-md ring-1 ring-black/5"
                        />
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { Flask, Leaf, Palette } from "@phosphor-icons/react/dist/ssr";
import { strengths } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const icons = {
  flask: Flask,
  leaf: Leaf,
  palette: Palette,
} as const;

export default function Strengths() {
  return (
    <section
      id="strengths"
      aria-labelledby="strengths-heading"
      className="bg-surface-muted py-30"
    >
      <div className="container-x">
        <SectionHeader
          id="strengths-heading"
          eyebrow="OUR STRENGTHS"
          title="색이 틀어지면 라인이 멈춥니다"
          lead={
            <>
              양산에서 색이 어긋나면 전수 검사와 재작업, 납기 지연으로
              이어집니다.
              <br />
              위아케미칼은 조색 단계에서 변수를 잡아 그 리스크를 줄입니다.
            </>
          }
        />

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {strengths.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title}>
                <Reveal delay={i * 90} className="h-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_2px_8px_-2px_rgba(13,37,96,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(13,37,96,0.35)]">
                    <span
                      aria-hidden
                      className="grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(140deg,#1b4298,#3b79e5_60%,#22c2f0)] text-white shadow-[0_10px_28px_-12px_rgba(27,66,152,0.8)]"
                    >
                      <Icon size={28} weight="duotone" />
                    </span>

                    <p className="mt-6 text-xs font-semibold tracking-[0.1em] text-brand-500">
                      {item.tag}
                    </p>
                    <h3 className="mt-2 text-xl leading-[1.4] font-bold tracking-[-0.01em] text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-[1.75] text-slate-600">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { cases } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Cases() {
  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="bg-surface-muted py-30"
    >
      <div className="container-x">
        <SectionHeader
          id="cases-heading"
          eyebrow="CASE HISTORY"
          title="고객사 개발 이력 및 적용 사례"
          lead={
            <>
              휴대폰·화장품·가전 분야에서 실제 양산 라인에 올라간 배합입니다.
              <br />
              적용 부위와 도료 구성을 그대로 정리했습니다.
            </>
          }
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <li key={`${item.client}-${item.part}-${i}`}>
              <Reveal delay={(i % 3) * 60} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 transition-colors duration-300 hover:border-brand-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      aria-hidden
                      size={18}
                      weight="fill"
                      className="shrink-0 text-brand-500"
                    />
                    <h3 className="text-base font-bold text-ink-900">
                      {item.client}
                    </h3>
                  </div>

                  <dl className="mt-4 space-y-2 text-[0.9375rem]">
                    <div className="flex gap-2.5">
                      <dt className="w-16 shrink-0 text-slate-500">적용부위</dt>
                      <dd className="font-medium text-ink-800">{item.part}</dd>
                    </div>
                    <div className="flex gap-2.5">
                      <dt className="w-16 shrink-0 text-slate-500">적용도료</dt>
                      <dd className="font-medium text-ink-800">{item.paint}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

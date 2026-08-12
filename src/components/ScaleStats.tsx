import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { scaleStats, topMessage } from "@/lib/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ScaleStats() {
  return (
    <section aria-labelledby="scale-heading" className="bg-brand-50 py-30">
      <div className="container-x">
        <SectionHeader
          id="scale-heading"
          eyebrow="TRACK RECORD"
          title="앞서가는 제조사가 믿고 선택한 위아케미칼"
          lead={
            <>
              2015년 법인 설립 이후 휴대폰과 화장품, 가전 분야 제조사와 함께
              일해 왔습니다.
              <br />
              그동안 쌓인 결과를 숫자로 정리했습니다.
            </>
          }
        />

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {scaleStats.map((stat, i) => {
            const numeric = Number(stat.value.replace(/,/g, ""));
            return (
              <Reveal key={stat.label} delay={i * 70}>
                <div className="text-center">
                  <dd className="tnum text-4xl font-bold tracking-[-0.03em] text-brand-600 sm:text-5xl">
                    <CountUp value={numeric} />
                    {/* 카운트업은 장식적 모션이므로 aria-hidden 처리하고, 최종값은 여기서 정확히 전달합니다. */}
                    <span className="sr-only">{stat.value}</span>
                    <span className="ml-1 align-baseline text-lg font-semibold text-brand-500 sm:text-xl">
                      {stat.unit}
                    </span>
                  </dd>
                  <dt className="mt-3 text-sm font-medium text-slate-600">
                    {stat.label}
                  </dt>
                </div>
              </Reveal>
            );
          })}
        </dl>

        <Reveal delay={140}>
          <figure className="mx-auto mt-16 max-w-4xl rounded-3xl border border-brand-100 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(13,37,96,0.45)] md:p-11">
            <Quotes
              aria-hidden
              size={36}
              weight="fill"
              className="text-brand-200"
            />
            <blockquote className="mt-5 text-lg leading-[1.8] font-medium tracking-[-0.01em] text-ink-800 md:text-xl">
              {topMessage.quote}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3.5 border-t border-slate-100 pt-6">
              <span
                aria-hidden
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(140deg,#1b4298,#3b79e5)] text-sm font-bold text-white"
              >
                WIA
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-ink-900">
                  {topMessage.name}
                </span>
                <span className="block text-slate-500">{topMessage.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

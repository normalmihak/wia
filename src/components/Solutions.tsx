import Image from "next/image";
import { solutions } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="bg-white pt-15 pb-30"
    >
      <div className="container-x">
        <SectionHeader
          id="solutions-heading"
          eyebrow="PRODUCTS &amp; SOLUTIONS"
          title="소재별, 용도별 맞춤 도료 설계"
          lead="하도 칼라부터 상도 질감·우레탄·UV까지, 제품이 놓이는 환경에 맞춰 도료 구성을 다르게 가져갑니다. 아래는 분야별 대표 구성입니다."
        />

        <div className="mt-10 space-y-6">
          {solutions.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <article className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-surface-muted shadow-[0_2px_10px_-4px_rgba(13,37,96,0.08)] transition-shadow duration-300 hover:shadow-[0_28px_70px_-36px_rgba(13,37,96,0.4)]">
                <div
                  className={`grid items-stretch gap-0 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  {/* Subject sits on the right of every source photo, so a
                      centred crop would slice them in half — hence 72%. */}
                  <figure className="relative min-h-56 lg:min-h-[24rem]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-[72%_center] object-cover"
                    />
                  </figure>

                  <div className="flex flex-col justify-center p-8 md:p-11">
                    <p className="text-xs font-semibold tracking-[0.14em] text-brand-500">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2.5 text-2xl font-bold tracking-[-0.01em] text-ink-900 md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[0.9375rem] leading-[1.75] text-slate-600">
                      {item.body}
                    </p>

                    <dl className="mt-7 space-y-2.5">
                      {item.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-slate-200/90 pt-2.5"
                        >
                          <dt className="w-20 shrink-0 text-[0.8125rem] font-semibold text-brand-600">
                            {spec.label}
                          </dt>
                          <dd className="text-[0.9375rem] font-medium text-ink-800">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {item.clients.map((client) => (
                        <li
                          key={client}
                          className="rounded-full border border-brand-200 bg-brand-100/60 px-3 py-1.5 text-[0.8125rem] font-medium text-brand-700"
                        >
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

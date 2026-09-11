import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { heroStats } from "@/lib/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink-950 pt-28 pb-[80px] md:pt-32"
    >
      {/* Gradient field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(160deg,#04091a_0%,#0d2560_38%,#1b4298_66%,#2456bd_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(90,216,247,0.35)_0%,rgba(36,86,189,0)_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,194,240,0.28)_0%,rgba(27,66,152,0)_70%)] blur-2xl"
      />
      <div aria-hidden className="noise pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.8125rem] font-medium tracking-wide text-brand-100 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua-300" />
                플라스틱용 기능성 도료 전문 기업
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.15] font-bold tracking-[-0.02em] text-white sm:text-[3.25rem] xl:text-[3.75rem]">
                기능성 도료의 혁신
                <br />
                <span className="bg-[linear-gradient(90deg,#ffffff_0%,#b8d0fb_45%,#5ad8f7_100%)] bg-clip-text text-transparent">
                  위아케미칼
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-base leading-[1.75] text-brand-100/85 sm:text-lg">
                정확한 조색, 일관된 품질, 맞춤형 기능성 도료.
                <br />
                산업 제품의 완성도를 높이는 기술을 제공합니다.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-brand-700 shadow-[0_10px_40px_-12px_rgba(90,216,247,0.7)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  도료 문의하기
                  <ArrowRight
                    size={18}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15"
                >
                  제품 살펴보기
                </a>
              </div>
            </Reveal>
          </div>

          {/* Product photo — subject sits right of frame, so crop at 68%. */}
          <Reveal delay={280}>
            <figure className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 shadow-[0_40px_120px_-40px_rgba(4,9,26,0.9)] lg:aspect-[5/4]">
              <Image
                src="/photos/hero.jpg"
                alt="도장 부스에서 스프레이 건으로 플라스틱 패널에 파란색 기능성 도료를 도장하는 위아케미칼 작업자"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-[68%_center] object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(to_top,rgba(4,9,26,0.5),transparent)]"
              />
            </figure>
          </Reveal>
        </div>

        {/* Key figures */}
        <Reveal delay={120}>
          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-ink-950/40 px-6 py-5 backdrop-blur-sm">
                <dt className="text-[0.8125rem] font-medium text-brand-200/80">
                  {stat.label}
                </dt>
                <dd className="tnum mt-1.5 text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

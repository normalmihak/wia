import { ArrowRight, Printer, MapPin, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-brand-600 py-15"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0d2560_0%,#1b4298_45%,#2456bd_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(90,216,247,0.35)_0%,rgba(27,66,152,0)_68%)] blur-2xl"
      />

      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2
                id="contact-heading"
                className="max-w-lg text-3xl leading-[1.3] font-bold tracking-[-0.02em] text-white sm:text-[2.75rem]"
              >
                찾는 색과 기능이 있다면,
                <br />
                위아케미칼에 맡겨 주세요
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-5 max-w-md text-base leading-[1.75] text-brand-100/85">
                고객과의 협의를 통해 맞춤형 페인트를 제공합니다. 소재와 도장라인
                정보를 알려주시면 담당 기술진이 검토 후 회신드립니다.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-8 backdrop-blur-sm md:p-10">
              <h3 className="text-lg font-bold text-white">문의 안내</h3>

              <dl className="mt-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"
                  >
                    <EnvelopeSimple size={20} weight="duotone" />
                  </span>
                  <div>
                    <dt className="text-[0.8125rem] font-medium text-brand-200">
                      이메일
                    </dt>
                    <dd className="mt-0.5 text-lg font-semibold text-white">
                      <a
                        href={`mailto:${company.email}`}
                        className="underline decoration-white/30 underline-offset-4 transition-colors duration-200 hover:decoration-white"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"
                  >
                    <Printer size={20} weight="duotone" />
                  </span>
                  <div>
                    <dt className="text-[0.8125rem] font-medium text-brand-200">
                      팩스
                    </dt>
                    <dd className="tnum mt-0.5 text-lg font-semibold text-white">
                      {company.fax}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"
                  >
                    <MapPin size={20} weight="duotone" />
                  </span>
                  <div>
                    <dt className="text-[0.8125rem] font-medium text-brand-200">
                      안산 디자인센터
                    </dt>
                    <dd className="mt-0.5 text-[0.9375rem] leading-[1.7] font-medium text-white">
                      {company.locations[0].address}
                    </dd>
                  </div>
                </div>
              </dl>

              <a
                href={`https://map.naver.com/p/search/${encodeURIComponent(
                  company.locations[0].address,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-brand-700 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                오시는 길 보기
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

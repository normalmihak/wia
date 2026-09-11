import { MapPin, Buildings } from "@phosphor-icons/react/dist/ssr";
import { company } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const overview = [
  { label: "회사명", value: company.name },
  { label: "대표자", value: company.ceo },
  { label: "설립", value: company.founded },
  { label: "생산능력", value: company.capacity },
  { label: "주요 비즈니스", value: company.business },
  { label: "주요 고객", value: company.clientCount },
];

export default function Company() {
  return (
    <section
      id="company"
      aria-labelledby="company-heading"
      className="bg-white py-30"
    >
      <div className="container-x">
        <SectionHeader
          id="company-heading"
          eyebrow="COMPANY"
          title="회사 소개"
          lead={
            <>
              안산 디자인센터에서 개발하고 화성 생산공장에서 양산합니다.
              <br />
              두 거점이 조색부터 출하까지 전 과정을 함께 관리합니다.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* 회사 개요 */}
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-slate-200/80 bg-surface-muted p-8 md:p-10">
              <div className="flex items-center gap-2.5">
                <Buildings aria-hidden size={20} weight="duotone" className="text-brand-600" />
                <h3 className="text-lg font-bold text-ink-900">회사 개요</h3>
              </div>

              <dl className="mt-7 divide-y divide-slate-200/90">
                {overview.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <dt className="w-32 shrink-0 text-[0.875rem] font-semibold text-slate-500">
                      {row.label}
                    </dt>
                    <dd className="text-[0.9375rem] font-medium text-ink-900">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* 사업장 */}
          <Reveal delay={90} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {company.locations.map((loc) => (
                <div
                  key={loc.label}
                  className="flex-1 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_2px_10px_-4px_rgba(13,37,96,0.08)]"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                    {loc.role}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">
                    {loc.label}
                  </h3>
                  <p className="mt-2.5 flex items-start gap-2 text-[0.9375rem] leading-[1.7] text-slate-600">
                    <MapPin
                      aria-hidden
                      size={18}
                      weight="duotone"
                      className="mt-0.5 shrink-0 text-brand-500"
                    />
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

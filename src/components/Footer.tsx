import Image from "next/image";
import { company, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-15 pb-10">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div>
            <Image
              src="/logo/wia-logo-w.png"
              alt="위아케미칼"
              width={160}
              height={36}
              loading="lazy"
              className="h-7 w-auto"
            />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-[1.8] text-white/55">
              {company.philosophy}
            </p>
          </div>

          <nav aria-label="바닥글 메뉴">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9375rem] text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-4 border-t border-white/10 pt-10 text-xs sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <dt className="text-white/45">대표자</dt>
            <dd className="mt-1 text-white/80">{company.ceo}</dd>
          </div>
          <div>
            <dt className="text-white/45">이메일</dt>
            <dd className="mt-1 text-white/80">
              <a
                href={`mailto:${company.email}`}
                className="transition-colors duration-200 hover:text-white"
              >
                {company.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-white/45">팩스</dt>
            <dd className="tnum mt-1 text-white/80">{company.fax}</dd>
          </div>
          {company.locations.map((loc) => (
            <div key={loc.label}>
              <dt className="text-white/45">{loc.label}</dt>
              <dd className="mt-1 leading-[1.6] text-white/80">{loc.address}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-[0.8125rem] text-white/40">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

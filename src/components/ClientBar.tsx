import Image from "next/image";
import { clients } from "@/lib/site";
import Reveal from "./Reveal";

/** Three sets per half so the track stays wider than any viewport. */
const HALF = [...clients, ...clients, ...clients];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20"
      aria-hidden={hidden || undefined}
    >
      {HALF.map((client, i) => (
        <li
          key={`${client.name}-${i}`}
          className="flex h-12 w-28 shrink-0 items-center justify-center md:w-32"
        >
          <Image
            src={`/logo/clients/${client.file}`}
            alt={hidden ? "" : client.name}
            width={128}
            height={48}
            loading="lazy"
            sizes="128px"
            className="max-h-10 w-auto max-w-full object-contain opacity-60 grayscale"
          />
        </li>
      ))}
    </ul>
  );
}

export default function ClientBar() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="border-b border-slate-100 bg-white py-15"
    >
      <div className="container-x">
        <Reveal>
          <h2
            id="clients-heading"
            className="text-center text-xl font-medium tracking-wide text-slate-500"
          >
            국내외 브랜드가 위아케미칼의 도료를 선택했습니다
          </h2>
        </Reveal>
      </div>

      {/* Full-bleed marquee. The track holds two identical halves and slides
          exactly -50%, so the loop is seamless. Edges fade via a mask so the
          logos do not collide with the viewport border. */}
      <div
        className="marquee mt-[3.25rem] w-full overflow-hidden"
        role="group"
        aria-label="주요 고객사 로고"
      >
        <div className="marquee-track flex w-max">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}

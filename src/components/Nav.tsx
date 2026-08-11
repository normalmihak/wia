"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { nav } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape route + scroll lock for the mobile sheet
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="주요 메뉴"
        className="container-x flex h-18 items-center justify-between gap-6 py-4"
      >
        <Link
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="위아케미칼 홈으로"
        >
          <Image
            src="/logo/wia-logo-w.png"
            alt="위아케미칼"
            width={132}
            height={30}
            priority
            className="h-6 w-auto md:h-7"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-[0.9375rem] font-medium text-white/75 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 items-center rounded-full bg-white px-5 text-[0.9375rem] font-semibold text-brand-700 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
          >
            문의하기
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="grid h-11 w-11 place-items-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="container-x flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-xl bg-white px-4 font-semibold text-brand-700"
            >
              문의하기
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

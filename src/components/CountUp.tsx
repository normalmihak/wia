"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** 최종 도달 값 (정수). */
  value: number;
  /** ms. 지표 카운트업은 마이크로 인터랙션보다 길게 잡습니다. */
  duration?: number;
  /** 기본은 천 단위 콤마(ko-KR). */
  formatter?: (n: number) => string;
};

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

/**
 * 뷰포트에 들어오는 순간 0에서 목표값까지 딱 한 번 올라간다.
 * 숫자 자체는 장식적 모션이라 스크린리더에는 노출하지 않고,
 * 최종값은 형제 sr-only 텍스트로 항상 정확하게 전달한다.
 */
export default function CountUp({
  value,
  duration = 1500,
  formatter = (n) => n.toLocaleString("ko-KR"),
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || startedRef.current) continue;
          startedRef.current = true;

          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.round(value * easeOutQuint(progress)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} aria-hidden="true">
      {formatter(display)}
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** 최종 채움 비율(0–100). */
  percent: number;
  /** 채움 막대 배경 클래스. */
  fillClassName: string;
  /** ms. 같은 카드 안의 두 막대가 순차로 차오르도록 어긋나게 줍니다. */
  delay?: number;
};

/**
 * 뷰포트에 들어오면 0에서 목표 비율까지 한 번만 차오르는 막대.
 *
 * 막대 자체는 장식이고 실제 점수는 바로 옆 텍스트가 전달하므로 aria-hidden 처리합니다.
 * 높이 10px짜리 알약 모양이라 scaleX로 늘리면 양 끝 라운드가 찌그러져 보여서,
 * 폭을 직접 전환합니다. 리프 노드 4개뿐이라 레이아웃 비용은 무시할 수준입니다.
 */
export default function ScoreBar({ percent, fillClassName, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setFilled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setFilled(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10"
    >
      <div
        className={`h-full rounded-full transition-[width] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${fillClassName}`}
        style={{
          width: filled ? `${percent}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

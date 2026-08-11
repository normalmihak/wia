# 위아케미칼 홈페이지

WIA CHEMICAL 원페이지 기업 홈페이지 · Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript

## 실행

```bash
npm run dev
```

http://localhost:3000

프로덕션 빌드:

```bash
npm run build
```

> ⚠️ `npm run build`는 `dev` 서버를 끈 상태에서 실행하세요. 동시에 돌리면 `.next` 캐시가 깨져 500 에러가 납니다. 깨졌다면 `.next` 폴더를 지우고 다시 시작하면 됩니다.

## 콘텐츠 수정

문구·수치·고객사·사업장 정보는 전부 **[`src/lib/site.ts`](src/lib/site.ts) 한 곳**에 모여 있습니다.
이 파일만 고치면 페이지 전체에 반영되므로, 컴포넌트를 직접 건드릴 필요가 없습니다.

| 항목 | 변수 |
|------|------|
| 회사 개요 (대표자·설립·주소 등) | `company` |
| 상단 메뉴 | `nav` |
| 히어로 지표 3개 | `heroStats` |
| 고객사 로고 | `clients` |
| 기술 강점 3개 | `strengths` |
| 숫자 지표 4개 | `scaleStats` |
| 품질 지표 (조색·로트) | `performance` |
| 제품 · 솔루션 3개 | `solutions` |
| 적용 사례 | `cases` |
| 기업 문화 | `culture` |
| 대표 메시지 | `topMessage` |

### 아직 비어 있는 값

회사소개서 PDF에 없어 비워 둔 항목입니다. 확보되면 `src/lib/site.ts`에 채워 넣으세요.

- `company.tel` — 대표전화 (현재 팩스만 노출 중)
- `company.email` — 문의 이메일

## 디자인 토큰

색상·폰트·모션 토큰은 [`src/app/globals.css`](src/app/globals.css)의 `@theme` 블록에 정의돼 있습니다.
브랜드 기준색은 로고 블루 `#1B4298` (`--color-brand-600`)입니다.

- 본문 폰트: Pretendard (CDN)
- 아이콘: Phosphor Icons (`@phosphor-icons/react`)

## 이미지

`public/photos`, `public/logo` 에 있습니다. 원본은 `D:\0_WIA` 에서 가져왔습니다.

| 파일 | 원본 |
|------|------|
| `photos/hero.jpg` | `0_홈페이지/0_소스/1_사진/wia-bg-3.jpg` |
| `photos/spray-wide.jpg` | `0_홈페이지/0_소스/1_사진/wia-bg-1.jpg` |
| `photos/spray-alt.jpg` | `0_홈페이지/0_소스/1_사진/wia-bg-2.jpg` |
| `photos/booth.png` | `0_홈페이지/0_소스/1_사진/Image_fx (10).png` |
| `logo/wia-logo*.png` | `로고/` |
| `logo/clients/*.png` | `로고/협력사/` |

## 접근성 · 성능 기준

- 본문 대비 4.5:1 이상, 키보드 포커스 링 상시 노출, 본문 건너뛰기 링크
- 터치 타깃 최소 44px, 모바일 메뉴 Esc 닫기
- 스크롤 리빌은 `transform`/`opacity`만 사용, `prefers-reduced-motion` 존중
- JS가 없으면 리빌 애니메이션이 꺼지고 콘텐츠는 그대로 노출 (`@media (scripting: enabled)` 게이팅)
- 고객사 로고 마퀴는 `transform`만 애니메이션, hover/focus 시 정지
- 이미지 `width`/`height` 지정으로 CLS 방지, 히어로 외 전부 lazy load

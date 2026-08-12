/**
 * 사이트 전역 콘텐츠.
 * 모든 수치·문구는 `230111_회사소개서 / wia_company.pdf` 기준입니다.
 * 내용 수정은 이 파일만 고치면 전체 페이지에 반영됩니다.
 */

export const company = {
  name: "위아케미칼 주식회사",
  nameEn: "WIA CHEMICAL CO., LTD.",
  ceo: "김동구",
  founded: "2015년 12월 10일",
  foundedYear: 2015,
  capacity: "1,200 t / 년",
  business: "자동차 · 휴대폰 케이스 · 가전제품 · 화장품",
  clientCount: "약 12개사 (대리점 포함 · 2023년 기준)",
  fax: "070-4833-5244",
  // 회사소개서에 대표전화가 없어 비워 두었습니다. 확보되면 여기에 채우면 됩니다.
  tel: "",
  email: "dgkim0019@naver.com",
  philosophy:
    "세계 최고의 화학 기술로 인간과 환경을 위한 제품과 서비스 제공",
  locations: [
    {
      label: "안산 디자인센터",
      role: "본사 · 연구개발",
      address: "경기도 안산시 단원구 산단로 325",
    },
    {
      label: "화성 생산공장",
      role: "생산 · 품질관리",
      address: "경기도 화성시 만세구 마도면 화성로 687",
    },
  ],
} as const;

export const nav = [
  { href: "#strengths", label: "기술 강점" },
  { href: "#performance", label: "품질 지표" },
  { href: "#process", label: "진행 과정" },
  { href: "#solutions", label: "제품 · 솔루션" },
  { href: "#cases", label: "적용 사례" },
  { href: "#company", label: "회사 소개" },
] as const;

/**
 * 섹션별로 숫자의 역할을 나눠 중복 노출을 피합니다.
 *   히어로        → 규모   (생산능력 · 고객사 · 업력)
 *   scaleStats    → 실적   (대응 건수 · 경력 · 적용 사례)
 *   performance   → 정밀도 (조색 · 로트 · ΔE)
 */
export const heroStats = [
  { value: "1,200t", label: "연간 생산능력" },
  { value: "12개사", label: "공급 고객사" },
  { value: "2015년", label: "법인 설립" },
] as const;

export const clients = [
  { name: "슈피겐", file: "spigen.png" },
  { name: "글램팜", file: "glampalm.png" },
  { name: "무사시", file: "musashi.png" },
  { name: "이화공업", file: "iwha.png" },
  { name: "코집", file: "cozip.png" },
  { name: "YK", file: "yk.png" },
] as const;

export const strengths = [
  {
    icon: "palette",
    tag: "기능성 설계",
    title: "색만 입히지 않습니다",
    body: "SOFT FEEL 질감, 항균, 내오염, UV 경화까지. 제품이 요구하는 촉감과 내구 조건을 컬러와 함께 설계해 도료 한 층으로 해결합니다.",
  },
  {
    icon: "flask",
    tag: "맞춤 배합",
    title: "표준 제품을 그대로 납품하지 않습니다",
    body: "TPU를 비롯한 소지의 과학적 특성과 업체별 도장라인 효율을 분석한 뒤 배합을 조정합니다. 같은 색이라도 라인이 다르면 배합이 달라집니다.",
  },
  {
    icon: "leaf",
    tag: "친환경 · 신소재",
    title: "규제와 소재 변화를 함께 봅니다",
    body: "친환경 도료와 신소재용 도료를 병행 개발합니다. 리얼 메탈, 경량화처럼 바뀌는 소재 트렌드에 맞춰 배합을 계속 갱신합니다.",
  },
] as const;

export const scaleStats = [
  { value: "1,000", unit: "건 이상", label: "연간 컬러 대응" },
  { value: "14", unit: "년 이상", label: "숙련 기술 경력" },
  { value: "100", unit: "%", label: "고객 맞춤형 조색" },
  { value: "9", unit: "종", label: "양산 적용 사례" },
] as const;

/** 문의부터 양산까지의 진행 단계. 02 단계에만 컬러 스와치를 노출합니다. */
export const process = [
  {
    step: "01",
    title: "소재 · 라인 분석",
    body: "소지의 과학적 특성과 업체별 도장라인 효율을 먼저 확인합니다. 여기서 배합의 방향이 정해집니다.",
  },
  {
    step: "02",
    title: "조색 · 샘플 제작",
    body: "정밀 측색기로 목표 색상을 조색하고 샘플을 제작합니다. 매년 1,000건 이상의 컬러 요청을 이 단계에서 소화합니다.",
    swatches: true,
  },
  {
    step: "03",
    title: "승인 · 신뢰성 검증",
    body: "실제 라인 조건에서 밀착과 질감, 항균·내오염 등 신뢰성 항목을 확인한 뒤 양산 승인으로 넘어갑니다.",
  },
  {
    step: "04",
    title: "양산 · 로트 관리",
    body: "승인 색상과 양산품의 색차를 ΔE* 0.3 이하로 관리합니다. 로트가 바뀌어도 같은 색이 나옵니다.",
  },
] as const;

/** 조색 단계에 노출하는 컬러 칩. 도료 회사임을 시각적으로 드러내는 장치입니다. */
export const swatchColors = [
  "#d92d20",
  "#f79009",
  "#fdb022",
  "#12b76a",
  "#06aed4",
  "#1b4298",
  "#7a5af8",
  "#ee46bc",
  "#667085",
  "#0c111d",
] as const;

export const performance = [
  {
    key: "ACCURACY",
    headline: "110%",
    title: "타사 대비 조색 정밀도",
    detail: "평균 만족도 4.1점 (경쟁 4개사 평균 3.7점)",
    note: "컬러 편차 최소화를 위한 정밀 측색기 사용",
    bar: { ours: 4.1, theirs: 3.7 },
  },
  {
    key: "CONSISTENCY",
    headline: "124%",
    title: "타사 대비 로트별 제품 안정성",
    detail: "평균 만족도 4.3점 (경쟁 4개사 평균 3.4점)",
    note: "로트 편차 최소화를 위한 ΔE* 0.3 이하 생산관리",
    bar: { ours: 4.3, theirs: 3.4 },
  },
] as const;

export const solutions = [
  {
    id: "mobile",
    eyebrow: "MOBILE PHONE CASE",
    title: "휴대폰 케이스",
    body: "매 시즌 컬러가 바뀌는 시장입니다. 하도 칼라와 상도 질감용 도료를 조합해 촉감과 색상을 동시에 잡고, 투명 케이스는 UV 경화로 황변과 오염을 억제합니다.",
    specs: [
      { label: "하도", value: "칼라" },
      { label: "상도", value: "질감용 WIA-SF1000M" },
      { label: "투명 케이스", value: "UV · 내오염용 WIA-SF1100M" },
    ],
    clients: ["슈피겐", "리어스", "토니가드"],
    image: "/photos/spray-alt.jpg",
    alt: "도장 부스에서 스프레이 건으로 플라스틱 패널에 파란색 도료를 도장하는 작업자",
  },
  {
    id: "cosmetic",
    eyebrow: "COSMETIC CASE",
    title: "화장품 케이스",
    body: "손에 자주 닿는 제품일수록 지문과 마모가 눈에 띕니다. SOFT FEEL 상도로 부드러운 촉감을 유지하면서 항균·내오염 신뢰성 기준을 충족합니다.",
    specs: [
      { label: "하도", value: "칼라" },
      { label: "상도", value: "질감용 SF · WIA-SF1000M" },
      { label: "특성", value: "SOFT FEEL · 항균 · 내오염" },
    ],
    clients: ["이노코스텍", "아진", "수코스메틱", "강동"],
    image: "/photos/spray-wide.jpg",
    alt: "밝은 도장 부스에서 도료가 균일하게 분사되는 모습",
  },
  {
    id: "appliance",
    eyebrow: "CONSUMER ELECTRONICS",
    title: "가전 · 미용기기 · 웨어러블",
    body: "고온과 반복 마찰에 노출되는 부품입니다. 우레탄 상도로 내스크래치와 색상 지속성을 확보해 사용 기간 내내 초기 색을 유지합니다.",
    specs: [
      { label: "하도", value: "칼라" },
      { label: "상도", value: "우레탄" },
      { label: "적용", value: "미용기기 · 웨어러블 케이스" },
    ],
    clients: ["에이알", "언일전자"],
    image: "/photos/booth.png",
    alt: "보호 장비를 착용한 기술자가 스프레이 건으로 도장 작업을 하는 모습",
  },
] as const;

export const cases = [
  { client: "슈피겐", part: "핸드폰 케이스", paint: "하도 칼라 · 상도 질감용 WIA-SF1000M" },
  { client: "리어스", part: "핸드폰 투명 케이스", paint: "하도 프라이머 · 상도 UV" },
  { client: "토니가드", part: "TPU 핸드폰 케이스", paint: "하도 칼라 · 상도 질감용 WIA-SF1000M" },
  { client: "이노코스텍", part: "화장품 케이스", paint: "하도 칼라 · 상도 질감용 SF" },
  { client: "아진 · 수코스메틱", part: "화장품 케이스", paint: "하도 칼라 · 상도 질감용 WIA-SF1000M" },
  { client: "아진 · 강동", part: "화장품 케이스", paint: "하도 칼라 · 상도 질감용 WIA-SF1000M" },
  { client: "에이알", part: "미용기기", paint: "하도 칼라 · 상도 우레탄" },
  { client: "언일전자", part: "웨어러블 케이스", paint: "하도 칼라 · 상도 우레탄" },
  { client: "리어스", part: "핸드폰 투명 케이스", paint: "하도 프라이머 · 상도 내오염용 WIA-SF1100M" },
] as const;

export const topMessage = {
  quote:
    "위아케미칼은 2015년 법인 설립 이래 쌓아온 제조 기술과 개발 노하우를 강점으로 협업하고 발전하고 있습니다. 격변하는 외부 환경과 다양한 고객의 요구에 부응할 수 있도록, 사원 한 사람 한 사람이 스스로 생각하고 아이디어를 가지고 행동할 수 있는 회사를 지향합니다.",
  name: "김동구",
  role: "위아케미칼 주식회사 대표이사",
} as const;

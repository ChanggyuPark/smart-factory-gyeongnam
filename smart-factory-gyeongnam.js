(() => {
  'use strict';

  // ===== 2026 공고별 변경 영역 =====
  const CONFIG = {
    pathname: '/smart-factory-gyeongnam',
    pageSelector: '#page2763115', // Sixshop 대상 Page ID
    rootId: 'yc-smartfactory-gyeongnam-app',
    routeClass: 'yc-smartfactory-gyeongnam-route-active',
    apiUrl: 'https://yc-smartfactory-form-xxo5.vercel.app/api/smart-factory', // 기존 API 유지
    officialUrl: 'https://www.smart-factory.kr/usr/bg/ba/ma/bsnsPbancDtl?pbancId=2026-N-0078&pbancSn=2',
    ycCutoff: '2026-10-14',
    officialDeadline: '2026-10-19T12:00:00+09:00'
  };

  if (window.__YC_SMARTFACTORY_GYEONGNAM_LANDING_LOADED__) return;
  window.__YC_SMARTFACTORY_GYEONGNAM_LANDING_LOADED__ = true;

  const META = {
    title: '2026 경남 스마트공장 기초구축 지원사업 추가모집 | YC코퍼레이션',
    description: '경남 13개 시·군 제조기업 33개사 추가모집. 최대 7,200만원 지원, 기업 현금 부담 3,840만원. 공식 마감 10월 19일 12시, YC 상담 및 신청 접수는 10월 14일까지입니다.',
    keywords: '경남 스마트공장, 경남 스마트공장 기초구축, 경남테크노파크 스마트공장, 스마트공장 추가모집, 스마트공장 공급기업, MES 구축, ERP 구축'
  };
  const previousMeta = [];

  function setMeta(selector, attrs) {
    let el = document.head.querySelector(selector);
    if (!el) { el = document.createElement('meta'); document.head.appendChild(el); }
    previousMeta.push([el, el.getAttribute('content'), el.parentNode === document.head]);
    Object.entries(attrs).forEach(([k,v]) => k === 'content' ? el.setAttribute('content', v) : el.setAttribute(k, v));
  }
  function applyMeta() {
    if (!previousMeta.length) previousMeta.push(['title', document.title]);
    document.title = META.title;
    setMeta('meta[name="description"]', {name:'description', content:META.description});
    setMeta('meta[name="keywords"]', {name:'keywords', content:META.keywords});
    setMeta('meta[property="og:title"]', {property:'og:title', content:META.title});
    setMeta('meta[property="og:description"]', {property:'og:description', content:META.description});
  }
  function restoreMeta() {
    if (!previousMeta.length) return;
    const titleRec = previousMeta.find(x => x[0] === 'title');
    if (titleRec) document.title = titleRec[1];
    previousMeta.filter(x => x[0] !== 'title').forEach(([el, content]) => { if (content == null) el.remove(); else el.setAttribute('content', content); });
    previousMeta.length = 0;
  }

  function findPageEl() {
    return document.querySelector(CONFIG.pageSelector);
  }

  const LANDING_HTML = "<div id=\"app\"><div class=\"lp\"><section class=\"hero gyeongnam-hero\" id=\"top\"><div class=\"wrap\"><div class=\"hero-copy\">\n<div class=\"hero-kicker\"><span>2026 추가모집</span><span>경남 13개 시·군 · 총 33개사</span></div>\n<h1><span class=\"hero-thin\">2026 경남 스마트공장</span><br><span class=\"hero-box\">기초구축 지원사업 추가모집</span></h1>\n<p class=\"lead\">경상남도와 시·군이 스마트공장 구축비의 60%를 지원합니다. 공장 진단부터 사업계획서, 온라인 접수까지 YC코퍼레이션이 함께 준비합니다.</p>\n<div class=\"hero-money\"><div><span class=\"hm-label\">지원금</span><strong>최대 7,200만원</strong></div><div><span class=\"hm-label\">기업 현금 부담</span><strong>3,840만원</strong></div></div>\n<p class=\"hero-money-note\">총사업비 1억 2천만원 기준</p>\n<div class=\"hero-deadline\"><div><span>공식 접수 마감</span><b>10월 19일(월) 12:00</b></div><div class=\"yc-cutoff\"><span>YC 상담 및 신청 접수</span><b>10월 14일까지</b></div></div>\n<button class=\"btn hero-cta\" data-act=\"tofor\" type=\"button\">신청 가능 여부 확인</button>\n<p class=\"trust\">지원 대상과 소재지, 구축 이력을 먼저 확인한 뒤 접수 준비를 안내드립니다.</p>\n</div></div></section><section class=\"deadline-notice\"><div class=\"wrap\"><div class=\"deadline-notice-inner\"><b>공식 접수 마감은 10월 19일(월) 12:00입니다.</b><span>사업계획서 및 제출서류 준비를 위해 <strong>YC 상담 및 신청 접수는 10월 14일까지</strong> 진행합니다.</span></div></div></section><section class=\"s tight head-split line-object line-object-corner gyeongnam-program\" id=\"program\"><div class=\"wrap\"><div class=\"s-head\"><div><p class=\"eyebrow\">PROGRAM</p><h2>2026 경남 스마트공장 추가모집</h2></div><p class=\"lead\">지원 대상, 부담금, 일정부터 먼저 확인하세요. 신청 유형은 공고 용어를 기준으로 안내합니다.</p></div>\n<div class=\"program-summary\"><div class=\"program-main\"><div class=\"tblwrap\"><table><tbody>\n<tr><th>지원 대상</th><td>본점과 구축 공장이 모두 경남에 있는 중소·중견 제조기업</td></tr>\n<tr><th>지원 금액</th><td><b class=\"blue-text\">최대 7,200만원</b> · 총사업비의 60% (도비 30% + 시·군비 30%)</td></tr>\n<tr><th>기업 부담</th><td><b>현금 3,840만원</b> + 현물 960만원 <span class=\"tdesc\">현물은 도입기업 인건비·클라우드 이용료 등으로 편성 가능</span></td></tr>\n<tr><th>지원 내용</th><td>스마트공장 솔루션 구축 및 솔루션과 연동되는 자동화장비·제어기·센서</td></tr>\n<tr><th>사업 기간</th><td>6개월 이내</td></tr>\n<tr><th>신청 유형</th><td><b>최초구축 또는 동일수준</b><span class=\"tdesc\">스마트공장을 처음 구축하는 기업 또는 공고 기준에 따라 기존 기초수준 구축기업의 동일수준 재신청</span></td></tr>\n<tr><th>공식 접수 마감</th><td><b>2026년 10월 19일(월) 12:00</b></td></tr>\n<tr><th>YC 상담·신청 접수</th><td><b class=\"blue-text\">2026년 10월 14일까지</b></td></tr>\n</tbody></table></div></div>\n<aside class=\"program-side\"><span class=\"side-k\">CHECK FIRST</span><h3>접수 전 먼저 확인합니다</h3><ul><li>구축 공장 소재지</li><li>공장등록 및 제조업 여부</li><li>스마트공장 지원 이력</li><li>현금 자부담 가능 여부</li></ul><button class=\"btn\" data-act=\"tofor\" type=\"button\">신청 가능 여부 확인</button></aside></div>\n<div class=\"official-link-row\"><a class=\"btn alt\" href=\"https://www.smart-factory.kr/usr/bg/ba/ma/bsnsPbancDtl?pbancId=2026-N-0078&pbancSn=2\" target=\"_blank\" rel=\"noopener\">공식 공고문 확인하기 ↗</a></div></div></section><section class=\"s head-left region-section\" id=\"region\"><div class=\"wrap\"><div class=\"s-head\"><div><p class=\"eyebrow\">REGION</p><h2>2026년 추가모집 시·군별 선정 기업 수</h2></div><p class=\"lead\">구축 공장 주소지 기준으로 배정됩니다. 이번 추가모집은 총 33개사입니다.</p></div><div class=\"alloc-grid\">\n<div><b>창원시</b><strong>10</strong><span>개사</span></div><div><b>양산시</b><strong>6</strong><span>개사</span></div><div><b>함안군</b><strong>4</strong><span>개사</span></div><div><b>사천시</b><strong>2</strong><span>개사</span></div><div><b>창녕군</b><strong>2</strong><span>개사</span></div><div><b>남해군</b><strong>2</strong><span>개사</span></div><div><b>통영시</b><strong>1</strong><span>개사</span></div><div><b>밀양시</b><strong>1</strong><span>개사</span></div><div><b>거제시</b><strong>1</strong><span>개사</span></div><div><b>하동군</b><strong>1</strong><span>개사</span></div><div><b>산청군</b><strong>1</strong><span>개사</span></div><div><b>함양군</b><strong>1</strong><span>개사</span></div><div><b>거창군</b><strong>1</strong><span>개사</span></div>\n</div><div class=\"region-note\"><b>2026년 추가모집 기준 안내</b><span>진주·김해·의령·합천·고성은 이번 추가모집 배정 물량이 없습니다. 시·군별 모집지역과 선정 규모는 연도 및 공고 차수에 따라 달라질 수 있습니다.</span></div></div></section><section class=\"s tight eligible-section\" id=\"eligible\"><div class=\"wrap\"><div class=\"s-head\"><div><p class=\"eyebrow\">ELIGIBILITY</p><h2>신청할 수 있는지 먼저 확인하세요</h2></div><p class=\"lead\">아래 기준으로 1차 확인 후, 실제 신청 가능 여부는 상담 과정에서 공고 기준으로 다시 검토합니다.</p></div><div class=\"elig-grid\"><article class=\"elig-card yes\"><span class=\"elig-k\">신청 가능</span><h3>이 조건에 해당하는 제조기업</h3><ul><li>공장등록이 된 제조기업</li><li>중소기업 또는 중견기업</li><li>국세·지방세 체납이 없는 기업</li><li>본점과 구축 공장이 모두 경남에 있는 기업</li><li>구축 공장이 2026 추가모집 배정 시·군에 있는 기업</li><li>최초구축 또는 공고상 동일수준 신청 요건에 해당하는 기업</li></ul></article><article class=\"elig-card no\"><span class=\"elig-k\">신청이 어려운 경우</span><h3>아래 항목은 별도 확인이 필요합니다</h3><ul><li>제조 시설 없이 유통·시공·서비스만 하는 경우</li><li>대기업·공공기관·비영리 기관</li><li>솔루션 연동 없이 장비만 구입하려는 경우</li><li>국세·지방세 체납 또는 휴·폐업 상태</li><li>다른 스마트공장 구축지원사업을 수행 중인 경우</li><li>동일 내용으로 정부 지원을 받았거나 참여제한 중인 경우</li></ul></article></div><p class=\"section-note\">※ 세부 자격과 참여제한 여부는 기업별 상황에 따라 달라질 수 있어 상담 시 공고 기준으로 확인합니다.</p></div></section><section class=\"inline-cta\"><div class=\"wrap\"><div><span>우리 회사가 이번 추가모집 대상인지 궁금하다면</span><b>소재지·업종·구축 이력부터 먼저 확인해드립니다.</b></div><button class=\"btn\" data-act=\"tofor\" type=\"button\">신청 가능 여부 확인</button></div></section><section class=\"s head-left line-object line-object-track solution-v13 solution-v14\" id=\"solution\"><div class=\"wrap\"><div class=\"s-head\"><div><p class=\"eyebrow\">WHAT WE BUILD</p><h2><span class=\"solution-thin\">이번 사업에서 검토할 수 있는</span> <span class=\"solution-box\">6가지 구축 영역</span></h2></div><p class=\"lead\">지원 가능 여부는 공고 기준과 솔루션·설비 연동 범위를 확인해 최종 구성합니다.</p></div><div class=\"areas\">\n<article class=\"area\"><span class=\"an\">생산 관리</span><span class=\"ad\">작업지시·실적·불량을 현장 데이터로 관리</span><div class=\"chips\"><span class=\"chip\">Smart Line (MES)</span></div></article>\n<article class=\"area\"><span class=\"an\">설비 데이터 수집</span><span class=\"ad\">가동·비가동·알람·생산수량을 자동 수집</span><div class=\"chips\"><span class=\"chip\">장비 연동 IoT</span><span class=\"chip\">제어기·센서</span></div></article>\n<article class=\"area\"><span class=\"an\">가공 데이터 · 경로 최적화</span><span class=\"ad\">NC 프로그램 검증·최적화와 다축 가공경로 구성</span><div class=\"chips\"><span class=\"chip\">ENCY CAM</span><span class=\"chip\">ENCY Tuner</span><span class=\"chip\">Carveco</span></div></article>\n<article class=\"area\"><span class=\"an\">ERP</span><span class=\"ad\">수주·생산·구매·재고를 생산 데이터와 연결</span><div class=\"chips\"><span class=\"chip\">Odoo ERP</span><span class=\"chip\">Smart Line</span></div></article>\n<article class=\"area\"><span class=\"an\">에너지 관리</span><span class=\"ad\">설비별 전력 사용량과 피크 시간대를 측정</span><div class=\"chips\"><span class=\"chip\">Next Carbon (FEMS)</span></div></article>\n<article class=\"area\"><span class=\"an\">로봇 · 연동 설비</span><span class=\"ad\">솔루션과 데이터로 연결되는 자동화 설비 구성</span><div class=\"chips\"><span class=\"chip\">ENCY Robot</span><span class=\"chip\">ENCY Hyper</span><span class=\"chip\">연동 설비·센서</span></div></article>\n</div><p class=\"section-note\">※ 장비 단독 구매가 아닌 스마트공장 솔루션과 데이터로 연동되는 범위를 기준으로 검토합니다. 실제 지원 가능 범위와 사업비는 공고 및 원가검토 결과에 따라 달라질 수 있습니다.</p></div></section><section class=\"s head-center line-object line-object-ring package-v13 package-v16\" id=\"package\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">업종별 맞춤 구성</span></h2><p class=\"lead\"><span class=\"ed\">같은 지원사업도 업종에 따라 구성이 달라집니다. 우리 공장과 가까운 업종을 골라보세요.</span></p></div><div class=\"tabs\" role=\"tablist\"><button aria-controls=\"pkg-0\" aria-selected=\"true\" class=\"tab\" data-i=\"0\" role=\"tab\">기계·금속 가공</button><button aria-controls=\"pkg-1\" aria-selected=\"false\" class=\"tab\" data-i=\"1\" role=\"tab\">목공·가구</button><button aria-controls=\"pkg-2\" aria-selected=\"false\" class=\"tab\" data-i=\"2\" role=\"tab\">사출·성형</button><button aria-controls=\"pkg-3\" aria-selected=\"false\" class=\"tab\" data-i=\"3\" role=\"tab\">식품·음료 제조</button><button aria-controls=\"pkg-4\" aria-selected=\"false\" class=\"tab\" data-i=\"4\" role=\"tab\">금형</button><button aria-controls=\"pkg-5\" aria-selected=\"false\" class=\"tab\" data-i=\"5\" role=\"tab\">판금·용접</button><button aria-controls=\"pkg-6\" aria-selected=\"false\" class=\"tab\" data-i=\"6\" role=\"tab\">전자·조립</button><button aria-controls=\"pkg-7\" aria-selected=\"false\" class=\"tab\" data-i=\"7\" role=\"tab\">디자인·조형 제작</button><button aria-controls=\"pkg-8\" aria-selected=\"false\" class=\"tab\" data-i=\"8\" role=\"tab\">로봇 자동화 도입</button><button aria-controls=\"pkg-9\" aria-selected=\"false\" class=\"tab\" data-i=\"9\" role=\"tab\">소공인 공방 (10인 미만)</button></div><div id=\"pkg-panels\">\n<div class=\"pkg\" id=\"pkg-0\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">기계·금속 가공</span></h3><p class=\"who\"><span class=\"ed\">CNC 선반·머시닝센터 5~20대로 부품을 깎는 가공업체. 다품종 소량 주문이 많고, 납기와 전기요금이 수익을 좌우하는 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">기계가 언제, 왜 멈췄는지 나중에야 안다</span></li><li><span class=\"ed\">가공 프로그램(NC 데이터)이 담당자 개인 PC에 흩어져 있고, 검증은 시험 절삭으로 한다</span></li><li><span class=\"ed\">가공 조건을 작업자 경험으로 잡아 사이클타임이 사람마다 다르다</span></li><li><span class=\"ed\">전기요금 고지서는 오는데 어느 설비가 얼마나 쓰는지 모른다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">CNC·머시닝센터에 데이터 수집장치를 붙여 가동·비가동·알람과 실제 가공시간을 자동 기록</span></li><li><span class=\"ed\">ENCY CAM으로 다축 가공경로를 만들고, 실제 기계 구조를 반영한 시뮬레이션으로 충돌·간섭을 사전 검증</span></li><li><span class=\"ed\">ENCY Tuner로 기존 G코드를 다시 짜지 않고 불러와 검증·최적화 — 공구 경로의 낭비 구간과 비효율 이송을 줄임</span></li><li><span class=\"ed\">NC 프로그램을 버전별로 관리해 '어느 제품은 어느 프로그램으로' 가 사내에 남도록 정리</span></li><li><span class=\"ed\">작업지시를 현장 태블릿으로 내려보내고, 생산 실적과 불량을 터치로 입력</span></li><li><span class=\"ed\">분전반과 주요 설비에 전력 계측기 설치 → 설비별 사용량과 피크 시간대 집계</span></li><li><span class=\"ed\">관리자 화면 하나에 가동률·생산량·전력·알람을 모아서 표시</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">ENCY CAM</span></span><span class=\"chip\"><span class=\"ed\">ENCY Tuner</span></span><span class=\"chip\"><span class=\"ed\">Next Carbon (FEMS)</span></span><span class=\"chip\"><span class=\"ed\">장비 연동 IoT</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/05-img-metal.png?updatedAt=1790834048679\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">가공 데이터와 설비 데이터가 한 곳에 모이면, 사이클타임이 긴 프로그램과 대기 시간이 긴 설비가 먼저 눈에 띕니다. 시험 절삭으로 확인하던 것을 화면에서 먼저 검증하니 장비를 세우는 시간도 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">CNC 2~3대 규모부터 시작할 수 있습니다. 설비를 한 번에 다 연결하지 않고 핵심 설비부터 늘려갑니다. 구축 3~4개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"기계·금속 가공\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-1\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">목공·가구</span></h3><p class=\"who\"><span class=\"ed\">CNC 라우터로 주방·인테리어 가구 부품, 목재 소품을 만드는 제조사. 주문마다 도면이 다르고, 판재 손실이 곧 원가인 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">도면이 PDF·손그림으로 와서 매번 다시 그린다</span></li><li><span class=\"ed\">판재 배치를 눈대중으로 해 자투리가 많이 남는다</span></li><li><span class=\"ed\">작업자마다 가공 조건이 달라 품질이 들쭉날쭉하다</span></li><li><span class=\"ed\">주문·재고 현황이 수첩과 카톡에 흩어져 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">Carveco로 도면을 가공 경로로 바꾸고, 판재 배치(네스팅)를 자동 계산 — 자재 사용률까지 표시</span></li><li><span class=\"ed\">자주 쓰는 가공 조건을 템플릿으로 저장해 누가 작업해도 같은 품질로</span></li><li><span class=\"ed\">Next Wood CNC 라우터 도입·세팅과 작업자 교육</span></li><li><span class=\"ed\">Smart Line으로 주문별 작업지시·완료 기록, 자재 사용량과 불량 집계</span></li><li><span class=\"ed\">견적 낼 때 쓸 수 있도록 제품별 자재·작업시간 데이터 축적</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Carveco</span></span><span class=\"chip\"><span class=\"ed\">Next Wood 장비</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/06-img-wood.png?updatedAt=1790834048631\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">같은 판재에서 몇 장을 더 뽑았는지가 숫자로 보입니다. 견적을 낼 때도 '이 제품은 자재가 얼마, 시간이 얼마'라는 근거가 생깁니다.</span></div><p class=\"scale\"><span class=\"ed\">라우터 1대를 쓰는 소규모 공방부터 가능합니다. 구축 2~3개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"목공·가구\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-2\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">사출·성형</span></h3><p class=\"who\"><span class=\"ed\">사출기 5~30대를 거의 24시간 돌리는 플라스틱 성형업체. 금형 교체 시간과 불량률, 전기요금이 수익을 결정하는 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">샷 수와 양품·불량을 작업자가 종이에 적는다</span></li><li><span class=\"ed\">금형 교체 시간이 기록되지 않아 어디를 줄여야 할지 모른다</span></li><li><span class=\"ed\">호기별 전력 사용량을 모른 채 요금만 낸다</span></li><li><span class=\"ed\">안전 점검 기록이 서류철에만 남아 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">사출기 신호를 받아 샷 카운트·가동 상태를 자동 수집</span></li><li><span class=\"ed\">불량 사유를 현장 태블릿에서 버튼으로 입력 → 금형별·호기별·제품별로 집계</span></li><li><span class=\"ed\">금형 교체 시작·완료를 기록해 교체 시간을 데이터로 관리</span></li><li><span class=\"ed\">호기별 전력 계측과 피크 시간대 관리(Next Carbon)</span></li><li><span class=\"ed\">Next Safe로 일일 안전점검·아차사고 기록을 디지털로 전환</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">Next Carbon (FEMS)</span></span><span class=\"chip\"><span class=\"ed\">Next Safe</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/07-img-molding.png?updatedAt=1790834048167\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">'어느 금형이, 어느 호기에서, 몇 %의 불량을 내는지'가 한 표로 나옵니다. 지원사업 사업계획서에 쓸 개선 근거도 이 데이터에서 나옵니다.</span></div><p class=\"scale\"><span class=\"ed\">사출기 3~5대 규모부터 가능합니다. 주력 호기만 먼저 연결하고 나중에 넓힙니다. 구축 3~5개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"사출·성형\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-3\" role=\"tabpanel\">\n<div class=\"pkg-main\">\n<h3><span class=\"ed\">식품·음료 제조</span></h3>\n<p class=\"who\"><span class=\"ed\">HACCP 인증을 받았거나 준비 중인 식품 제조업체. 원료 입고부터 칭량·배합·가열·포장까지 공정마다 기록을 남겨야 하고, 문제가 생기면 어느 원료가 어느 제품으로 갔는지 바로 찾아야 하는 공장입니다.</span></p>\n<div class=\"pkg-block pain-block\">\n<p class=\"bl\">애로사항</p>\n<ul class=\"pains\">\n<li><span class=\"ed\">CCP 점검 기록을 손으로 쓰고, 일지가 서류철로만 쌓인다</span></li>\n<li><span class=\"ed\">원료 로트와 완제품이 연결되지 않아 회수·추적에 시간이 걸린다</span></li>\n<li><span class=\"ed\">배합 비율과 가열 조건을 작업자 경험으로 맞춰 품질이 흔들린다</span></li>\n<li><span class=\"ed\">냉장·냉동·가열 설비 때문에 전기요금이 큰데 어디서 새는지 모른다</span></li>\n</ul>\n</div>\n<div aria-hidden=\"true\" class=\"flow-arrow\">→</div>\n<div class=\"pkg-block build-block\">\n<p class=\"bl\">구축방안</p>\n<ol class=\"buildlist\">\n<li><span class=\"ed\">원료 입고–칭량–배합–가열–포장을 로트 번호로 연결해, 완제품에서 원료까지 역추적되도록 구성</span></li>\n<li><span class=\"ed\">온도·습도 등 CCP 계측값을 센서로 자동 수집하고, 기준을 벗어나면 담당자에게 알림</span></li>\n<li><span class=\"ed\">손으로 쓰던 생산일지·점검일지·CCP 일지를 화면 입력으로 전환하고 보관 기간에 맞춰 자동 저장</span></li>\n<li><span class=\"ed\">배합 레시피를 시스템에 등록해 작업지시서로 그대로 내려보내기</span></li>\n<li><span class=\"ed\">냉장·냉동·가열 설비 전력을 계측해 피크 시간대와 낭비 구간 확인</span></li>\n<li><span class=\"ed\">위생 점검과 작업자 건강 상태 기록을 디지털로 전환</span></li>\n<li><span class=\"ed\">회계·재고·구매는 ERP와 연결 (얼마에요 또는 Odoo)</span></li>\n</ol>\n</div>\n</div>\n<aside class=\"pkg-side\">\n<div class=\"chips\">\n<span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span>\n<span class=\"chip\"><span class=\"ed\">IoT 센서 (온도·습도)</span></span>\n<span class=\"chip\"><span class=\"ed\">Next Carbon (FEMS)</span></span>\n<span class=\"chip\"><span class=\"ed\">Next Safe</span></span>\n<span class=\"chip\"><span class=\"ed\">얼마에요 ERP</span></span>\n</div>\n<div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/08-img-food.png?updatedAt=1790834049037\");'></div>\n<div class=\"eff\"><b>기대 효과</b><span class=\"ed\">문제가 생겼을 때 '어느 원료 로트가 어느 제품으로 갔는지'를 화면에서 바로 찾습니다. 점검 기록이 자동으로 쌓이니 심사 준비에 드는 시간도 줄어듭니다.</span></div>\n<p class=\"scale\"><span class=\"ed\">직원 10명 안팎의 소규모 식품공장부터 가능합니다. 라인 한 개로 시작해 넓혀갑니다. 구축 3~5개월.</span></p>\n<button class=\"btn\" data-act=\"tofor\" data-industry=\"식품·음료 제조\">이 조합으로 상담받기</button>\n</aside>\n</div><div class=\"pkg\" hidden=\"\" id=\"pkg-4\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">금형</span></h3><p class=\"who\"><span class=\"ed\">프레스·사출 금형을 설계하고 직접 가공하는 업체. 형상이 복잡하고 후가공(연마) 비중이 커서 숙련공 의존도가 높은 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">5축 가공 경로를 만드는 데 시간이 오래 걸린다</span></li><li><span class=\"ed\">연마·광택 품질이 사람에 따라 다르다</span></li><li><span class=\"ed\">수정·재가공 이력이 개인 노하우로만 남는다</span></li><li><span class=\"ed\">공정별 소요 시간을 몰라 납기를 감으로 답한다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">ENCY CAM으로 연속 5축 등 고난도 형상의 가공경로를 만들고, 기계 구조를 반영한 시뮬레이션으로 충돌을 사전 확인</span></li><li><span class=\"ed\">ENCY Tuner로 기존에 쓰던 G코드를 그대로 불러와 검증·최적화 — 수십 년 쌓인 가공 데이터를 버리지 않고 개선</span></li><li><span class=\"ed\">폴리싱 로봇 + ENCY Hyper로 연마 공정을 자동화 — 3D 데이터에서 연마 경로 생성</span></li><li><span class=\"ed\">금형별 가공·수정 이력과 실제 가공시간을 기록해 다음 제작 때 재사용</span></li><li><span class=\"ed\">공정별 소요 시간을 쌓아 납기 산출 근거 마련, 작업자 교육과 가공 조건 표준화</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">ENCY CAM</span></span><span class=\"chip\"><span class=\"ed\">ENCY Tuner</span></span><span class=\"chip\"><span class=\"ed\">폴리싱 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/09-img-die&amp;mold.png?updatedAt=1790834048098\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">사람에게 묶여 있던 연마 품질과 가공 노하우를 데이터로 옮깁니다. 숙련공은 난이도 높은 작업에 집중하고, 반복 작업은 로봇이 맡습니다.</span></div><p class=\"scale\"><span class=\"ed\">가공기 2~3대 규모부터 가능합니다. 연마 자동화는 비슷한 형상이 반복될수록 효과가 큽니다. 구축 4~6개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"금형\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-5\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">판금·용접</span></h3><p class=\"who\"><span class=\"ed\">레이저 절단·절곡·용접으로 함체, 구조물, 기계 부품을 만드는 업체. 용접 인력 확보가 가장 어려운 공장입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">용접 숙련공을 구하기 어렵고 고령화되고 있다</span></li><li><span class=\"ed\">철판 배치를 눈대중으로 해 자재 손실이 크다</span></li><li><span class=\"ed\">어느 작업이 어디까지 갔는지 현장에 가봐야 안다</span></li><li><span class=\"ed\">분진·흄 때문에 작업환경과 안전 점검 부담이 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">SmartWare 파이버레이저 절단기 도입 + 네스팅으로 철판 손실 절감</span></li><li><span class=\"ed\">반복 형상은 용접 로봇 도입, Ency Robot(OLP)으로 현장을 세우지 않고 프로그램 작성</span></li><li><span class=\"ed\">Smart Line으로 절단–절곡–용접–도장 공정별 진행 현황 표시</span></li><li><span class=\"ed\">작업 실적과 자재 사용량을 함께 기록해 원가 근거 확보</span></li><li><span class=\"ed\">Next Safe로 유해요인·보호구 점검 이력 관리</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">SmartWare 파이버레이저</span></span><span class=\"chip\"><span class=\"ed\">용접 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Robot (OLP)</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">Next Safe</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/10-img-laser.png?updatedAt=1790834048494\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">반복 용접을 로봇이 맡고 숙련공은 난이도 높은 작업에 집중합니다. 오프라인 프로그래밍이라 로봇을 세워두고 티칭하는 시간도 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">절단기 1대 또는 용접 1셀부터 시작할 수 있습니다. 구축 4~6개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"판금·용접\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-6\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">전자·조립</span></h3><p class=\"who\"><span class=\"ed\">부품을 받아 조립·검사·포장해 납품하는 다품종 소량 조립업체. 납품처가 생산 이력 추적을 요구하는 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">제품별로 누가 언제 조립했는지 추적이 안 된다</span></li><li><span class=\"ed\">수주·생산·재고가 각각 다른 엑셀에 있다</span></li><li><span class=\"ed\">검사 결과가 담당자 파일로만 남는다</span></li><li><span class=\"ed\">납기 문의에 확인해보고 연락드리겠다고 답한다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">바코드·QR로 제품 단위 조립 이력 기록(작업자·시간·설비까지)</span></li><li><span class=\"ed\">공정별 검사 결과와 불량 사유를 기록하고 원인별로 집계</span></li><li><span class=\"ed\">Odoo ERP로 수주–생산–재고–구매를 하나로 연결</span></li><li><span class=\"ed\">Smart Dash로 견적·고객 상담 이력 관리</span></li><li><span class=\"ed\">납품처 요구 자료(이력 추적표)를 화면에서 바로 출력</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span><span class=\"chip\"><span class=\"ed\">Odoo (ERP)</span></span><span class=\"chip\"><span class=\"ed\">Smart Dash</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/11-img-Electronics.png?updatedAt=1790834049419\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">납품처가 이력을 요구할 때 서류를 다시 만들 필요가 없습니다. 재고와 수주가 연결되니 '지금 만들 수 있는지'를 바로 답할 수 있습니다.</span></div><p class=\"scale\"><span class=\"ed\">조립 라인 1개, 직원 10명 이하 업체도 가능합니다. 구축 3~4개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"전자·조립\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-7\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">디자인·조형 제작</span></h3><p class=\"who\"><span class=\"ed\">전시물, 조형물, 목업, 사이니지를 만드는 제작사. 한 점짜리 대형 형상이 많고 납기가 짧은 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">대형 형상을 손으로 깎느라 시간이 오래 걸린다</span></li><li><span class=\"ed\">수정 요청이 오면 처음부터 다시 만들어야 한다</span></li><li><span class=\"ed\">대형 CNC는 비싸고 공간을 많이 차지한다</span></li><li><span class=\"ed\">3D 데이터가 있어도 가공으로 바로 이어지지 않는다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">외부에서 받은 3D 데이터를 가공용으로 정리하는 작업 흐름 수립</span></li><li><span class=\"ed\">조형(밀링) 로봇 + ENCY Hyper로 대형 형상 절삭 — 로봇은 CNC보다 작업 범위가 넓음</span></li><li><span class=\"ed\">ENCY Robot으로 배치 전에 도달 범위·간섭을 시뮬레이션으로 확인</span></li><li><span class=\"ed\">큰 형상을 나눠 깎고 접합하는 분할 가공 방식 설계, 소재별(우레탄·목재·스티로폼) 가공 조건 확립</span></li><li><span class=\"ed\">후가공·도장 공정과 연계, 작업자 교육</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">조형 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"chip\"><span class=\"ed\">ENCY Robot</span></span><span class=\"chip\"><span class=\"ed\">ENCY CAM</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/14-img-design.png?updatedAt=1790834048857\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">3D 데이터만 있으면 크기를 키워도 같은 방식으로 깎습니다. 수정 요청도 데이터에서 반영해 다시 가공하면 되니 재제작 부담이 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">로봇 1대와 작업 셀 하나로 시작할 수 있습니다. 구축 3~5개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-industry=\"디자인·조형 제작\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-8\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">로봇 자동화 도입</span></h3><p class=\"who\"><span class=\"ed\">적재·이송·투입·후가공처럼 단순 반복 작업에 계속 사람을 붙여야 하는 공장. 야간·주말 인력 확보가 어려운 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">사람을 구하지 못해 라인을 다 못 돌린다</span></li><li><span class=\"ed\">로봇을 넣고 싶은데 우리 공정에 맞을지 확신이 없다</span></li><li><span class=\"ed\">티칭·프로그램을 누가 맡을지 막막하다</span></li><li><span class=\"ed\">도입 후 활용을 못 할까 봐 투자 결정을 미루고 있다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">공정을 분석해 로봇이 맡을 구간과 사람이 맡을 구간을 나눔</span></li><li><span class=\"ed\">Ency Robot(OLP)으로 배치 전에 시뮬레이션 — 도달 범위·간섭·사이클타임을 화면에서 먼저 확인</span></li><li><span class=\"ed\">SmartWare 로봇과 주변장치(그리퍼·지그·안전펜스) 구성 및 설치</span></li><li><span class=\"ed\">Ency Hyper로 로봇 가동 상태를 실시간 모니터링</span></li><li><span class=\"ed\">로봇 생산 실적을 Smart Line에 연결해 사람 작업과 함께 집계</span></li><li><span class=\"ed\">현장 담당자 교육 — 간단한 경로 수정은 직접 할 수 있게</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">SmartWare 로봇</span></span><span class=\"chip\"><span class=\"ed\">ENCY Robot (OLP)</span></span><span class=\"chip\"><span class=\"ed\">ENCY Hyper</span></span><span class=\"chip\"><span class=\"ed\">Smart Line (MES)</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/12-img-robot.png?updatedAt=1790834049360\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">도입 전에 화면에서 먼저 돌려보고 결정합니다. 사이클타임과 배치 가능 여부를 숫자로 확인한 뒤 투자하니, '사놓고 못 쓰는' 위험이 줄어듭니다.</span></div><p class=\"scale\"><span class=\"ed\">로봇 1대로 한 공정만 먼저 바꿔보는 방식도 가능합니다. 구축 4~6개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-solution=\"로봇 자동화·로봇 프로그래밍 (OLP · ENCY Robot · Hyper)\">이 조합으로 상담받기</button></aside></div><div class=\"pkg\" hidden=\"\" id=\"pkg-9\" role=\"tabpanel\"><div class=\"pkg-main\"><h3><span class=\"ed\">소공인 공방 (10인 미만)</span></h3><p class=\"who\"><span class=\"ed\">대표가 직접 작업하는 1~9인 공방. 주문 제작·소량 생산이 중심이라 큰 시스템은 오히려 부담인 곳입니다.</span></p><div class=\"pkg-block pain-block\"><p class=\"bl\">애로사항</p><ul class=\"pains\"><li><span class=\"ed\">견적·주문·재고가 카톡과 수첩에 흩어져 있다</span></li><li><span class=\"ed\">장비 1~2대로 납기를 맞추느라 늘 빠듯하다</span></li><li><span class=\"ed\">새 프로그램을 배울 시간이 없다</span></li><li><span class=\"ed\">대형 MES는 우리 규모에 과하다</span></li></ul></div><div aria-hidden=\"true\" class=\"flow-arrow\">→</div><div class=\"pkg-block build-block\"><p class=\"bl\">구축방안</p><ol class=\"buildlist\"><li><span class=\"ed\">Carveco 또는 ENCY CAM으로 설계–가공을 한 흐름으로 연결(필요한 기능만)</span></li><li><span class=\"ed\">소형 CNC·Next Wood 장비 도입, 세팅과 1:1 교육</span></li><li><span class=\"ed\">Smart Dash로 주문·견적·고객 이력을 한 곳에 정리</span></li><li><span class=\"ed\">스마트공방 사업 범위에 맞춘 최소 구성으로 신청 서류 준비 지원</span></li><li><span class=\"ed\">구축 후 온라인교육·기술지원 카페로 이어지는 사후 지원</span></li></ol></div></div><aside class=\"pkg-side\"><div class=\"chips\"><span class=\"chip\"><span class=\"ed\">Carveco 또는 ENCY CAM</span></span><span class=\"chip\"><span class=\"ed\">Next Wood 장비</span></span><span class=\"chip\"><span class=\"ed\">Smart Dash</span></span></div><div class=\"imgspot industry-visual filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.28)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/13-img-Small.png?updatedAt=1790834049059\");'></div><div class=\"eff\"><b>기대 효과</b><span class=\"ed\">규모에 맞춰 꼭 필요한 것만 넣습니다. 교육까지 포함해서, 직원이 없어도 대표님 혼자 운영할 수 있는 수준으로 맞춥니다.</span></div><p class=\"scale\"><span class=\"ed\">대표님 혼자 일하는 1인 공방도 가능합니다. 장비 1~2대 + 소프트웨어. 구축 1~3개월.</span></p><button class=\"btn\" data-act=\"tofor\" data-size=\"1~9명\">이 조합으로 상담받기</button></aside></div></div></div></section><section class=\"s head-split line-object line-object-corner cases-v13\" id=\"cases\" style=\"background:var(--ground)\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">스마트공장 구축 사례</span></h2></div><div class=\"cases\"><article class=\"case\"><div class=\"ph case-image\"><img alt=\"S테크 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/19-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">S테크</span></h3><p class=\"meta\"><span class=\"ed\">사출 제조</span> · <span class=\"ed\">2022 경기도형 스마트공장 구축지원</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">사출 공정 관리와 납기 개선, 제품 설계·시제품 제작 프로세스의 효율화가 필요했습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">생산관리 시스템(MES), 설계 소프트웨어, 3D 프린터 구축</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">납기 준수율 30% 증가 · 제조 리드타임 30% 단축 · 반품률 60% 이상 감소</span></p></div></article><article class=\"case\"><div class=\"ph case-image\"><img alt=\"Y우드 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/20-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">Y우드</span></h3><p class=\"meta\"><span class=\"ed\">목재 제조</span> · <span class=\"ed\">경기테크노파크 지원사업</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">목재 제조 공정의 설계·생산 정보가 분산돼 있어 디지털 관리가 필요했습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">목재 제조 공정의 생산·작업 정보 디지털화</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">수기·분산 관리 → 디지털 관리 체계로 전환</span></p></div></article><article class=\"case\"><div class=\"ph case-image\"><img alt=\"C메탈 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/21-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">C메탈</span></h3><p class=\"meta\"><span class=\"ed\">금속 제조</span> · <span class=\"ed\">2023 경기도형 스마트공장 구축지원</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">재고·납기·도면 관리가 분산돼 있고, 반복 용접 공정의 품질 편차가 있었습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">생산관리 시스템(MES), 바코드 관리, 용접 자동화 로봇 구축</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">용접 공정 불량률 10% → 1% 개선</span></p></div></article><article class=\"case\"><div class=\"ph case-image\"><img alt=\"D우드 스마트공장 구축 사례 이미지\" decoding=\"async\" loading=\"lazy\" src=\"https://ik.imagekit.io/smartware/yc/smart-factory/22-img.jpg\"/></div><div class=\"body\"><h3><span class=\"ed\">D우드</span></h3><p class=\"meta\"><span class=\"ed\">목공 제조</span> · <span class=\"ed\">혁신바우처</span></p><dl><dt>구축 전</dt><dd><span class=\"ed\">자동화 설비의 가동 상태를 실시간으로 확인하기 어렵고, 재단 공정의 품질 편차 관리가 필요했습니다.</span></dd><dt>구축 내용</dt><dd><span class=\"ed\">CNC 라우터, IoT 센서, 생산관리 시스템을 연동해 설비 모니터링·생산관리를 구축</span></dd></dl><p class=\"res\"><span class=\"res-label\">도입 후 변화</span><span class=\"ed\">KPI · 불량률 1.5% → 0.5% · 설비 가동률 70% → 95%</span></p></div></article></div></div></section><section class=\"s tight head-center process-v13\" id=\"process\"><div class=\"wrap\"><div class=\"s-head\"><div><p class=\"eyebrow\">PROCESS</p><h2 class=\"process-title-box\">추가모집 진행 과정</h2></div></div><ol class=\"steps\"><li><b>상담·신청 접수</b><p>소재지·업종·구축 이력을 먼저 확인합니다.</p></li><li><b>자격·서류 확인</b><p>신청요건과 준비 가능한 증빙서류를 점검합니다.</p></li><li><b>공장 진단·구축 협의</b><p>현장 문제와 구축할 솔루션·연동 범위를 정합니다.</p></li><li><b>사업계획서·온라인 접수</b><p>도입기업과 YC가 계획서를 준비해 공식 시스템에 접수합니다.</p></li><li><b>선정 후 구축·교육</b><p>협약 후 설치, 교육, 안정화까지 진행합니다.</p></li></ol></div></section><section class=\"inline-cta second\"><div class=\"wrap\"><div><span>공식 마감 전에 사업계획서와 서류 준비가 필요합니다.</span><b>YC 상담 및 신청 접수는 10월 14일까지입니다.</b></div><button class=\"btn\" data-act=\"tofor\" type=\"button\">신청 가능 여부 확인</button></div></section><section class=\"s docs-section\" id=\"docs\"><div class=\"wrap\"><div class=\"s-head\"><div><p class=\"eyebrow\">DOCUMENTS</p><h2>도입기업이 준비할 서류</h2></div><p class=\"lead\">발급에 시간이 걸리는 서류부터 먼저 준비하면 접수 일정이 훨씬 안정적입니다.</p></div><div class=\"docs-grid\">\n<article class=\"doc priority\"><span class=\"doc-badge\">먼저 준비</span><h3>중소·중견기업 확인서</h3><p>중소기업현황정보시스템 등에서 발급. 발급 상태에 따라 시간이 걸릴 수 있어 우선 확인합니다.</p></article>\n<article class=\"doc priority\"><span class=\"doc-badge\">먼저 준비</span><h3>공장등록확인서</h3><p>정부24 또는 관할 시·군에서 확인. 구축 공장과 신청 소재지 확인에 사용합니다.</p></article>\n<article class=\"doc\"><span class=\"doc-badge\">기업 준비</span><h3>최근 3개년 재무제표</h3><p>2023~2025년 기준 자료를 홈택스 또는 세무대리인을 통해 준비합니다.</p></article>\n<article class=\"doc\"><span class=\"doc-badge\">기업 준비</span><h3>국세·지방세 완납증명서</h3><p>홈택스·위택스 등에서 발급해 체납 여부를 확인합니다.</p></article>\n<article class=\"doc\"><span class=\"doc-badge\">기업 준비</span><h3>사업자등록증명원</h3><p>홈택스에서 발급. 일반 사업자등록증 사본과 구분해 준비합니다.</p></article>\n<article class=\"doc\"><span class=\"doc-badge\">공고 양식</span><h3>정보활용동의서 등</h3><p>공고 첨부 양식에 맞춰 작성·서명합니다. 필요한 추가 증빙은 기업별로 안내합니다.</p></article>\n<article class=\"doc with-yc\"><span class=\"doc-badge\">YC와 함께</span><h3>사업계획서</h3><p>현재 공정의 문제, 도입 목적, 구축 범위와 KPI를 현장 진단 후 함께 정리합니다.</p></article>\n<article class=\"doc with-yc\"><span class=\"doc-badge\">YC와 함께</span><h3>구축 구성·견적 자료</h3><p>솔루션과 연동 설비 범위를 정리하고 공고 기준에 맞춰 사업비 구성을 검토합니다.</p></article>\n</div><p class=\"section-note\">※ 제출서류의 발급일·유효기간 및 추가 증빙은 공식 공고와 기업별 신청조건에 따라 최종 확인합니다.</p></div></section><section class=\"s tight schedule-section\" id=\"schedule\"><div class=\"wrap\"><div class=\"s-head\"><div><p class=\"eyebrow\">SCHEDULE</p><h2>2026년 추가모집 공고 일정</h2></div><p class=\"lead\">상세 일정은 진행 과정에서 조정될 수 있습니다.</p></div><div class=\"tblwrap\"><table><thead><tr><th>단계</th><th>일정</th><th>내용</th></tr></thead><tbody>\n<tr><td><b>신청 접수</b></td><td><b class=\"blue-text\">~ 10.19(월) 12:00</b></td><td>마감 이후 신청·제출·수정 불가</td></tr>\n<tr><td>요건 검토</td><td>~ 10.30</td><td>서류 및 신청자격 확인, 필요 시 서면평가</td></tr>\n<tr><td>기술성 평가</td><td>11.10 ~ 11.12</td><td>사업계획서 발표 및 대면평가</td></tr>\n<tr><td>현장 확인·원가계산</td><td>11.23 ~ 12.11</td><td>계획서·현장 일치 여부 확인 및 사업비 조정</td></tr>\n<tr><td>최종 선정·협약</td><td>~ 12.18</td><td>도입기업·공급기업·경남테크노파크 협약</td></tr>\n<tr><td>구축</td><td>협약 후 6개월 이내</td><td>설치·교육·중간점검·최종점검 진행</td></tr>\n</tbody></table></div><div class=\"official-link-row\"><a class=\"btn alt\" href=\"https://www.smart-factory.kr/usr/bg/ba/ma/bsnsPbancDtl?pbancId=2026-N-0078&pbancSn=2\" target=\"_blank\" rel=\"noopener\">공식 공고문 확인하기 ↗</a></div></div></section><section class=\"why-yc-v13 why-yc-head-center line-object-track head-left s line-object tight\"><div class=\"wrap\"><div class=\"s-head\"><h2><span class=\"ed\">이번 추가모집도 YC코퍼레이션과 함께</span></h2></div><div class=\"slim\"><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/15-img-solution.jpg?updatedAt=1790834040606\");'></div><b class=\"why-title-strong\"><span class=\"ed\">직접 개발한 솔루션</span></b><p><span class=\"ed\">Smart Line / Next Carbon / Next Safe / Smart Dash 자체 개발. 공장에 맞게 기능을 조정할 수 있습니다.</span></p></div><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/16-img-smart(1).png?updatedAt=1790834047686\");'></div><b class=\"why-title-strong\"><span class=\"ed\">소프트웨어 + 장비를 한 곳에서</span></b><p><span class=\"ed\">MES / CAM / 로봇 / CNC 라우터까지. 업체를 따로 찾을 필요가 없습니다.</span></p></div><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/17-img-smart(2).png?updatedAt=1790834047021\");'></div><b class=\"why-title-strong\"><span class=\"ed\">스마트공장 지원사업 구축 경험</span></b><p><span class=\"ed\">경기테크노파크 지원사업 등 중소 제조기업 스마트공장 구축.</span></p></div><div><div class=\"why-media filled-media\" style='background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.25)),url(\"https://ik.imagekit.io/smartware/yc/smart-factory/18-img-smart(3).png?updatedAt=1790834049663\");'></div><b class=\"why-title-strong\"><span class=\"ed\">구축 후에도 이어지는 지원</span></b><p><span class=\"ed\">온라인 교육과 기술지원 커뮤니티 운영. 설치하고 끝나지 않습니다.</span></p></div></div></div></section><section class=\"final-form-section final-faq-left final\" id=\"apply\"><div class=\"wrap\"><div class=\"final-copy\"><h2>경남 스마트공장 추가모집<br>상담·신청 접수</h2><p>신청 가능 여부와 준비서류를 확인한 뒤 접수 준비를 안내드립니다.</p><h3 class=\"faq-left-title faq-inline-title\">자주 묻는 질문</h3><div class=\"faq-left faq-inline faq\">\n<details><summary>지금 신청 가능한 기업은 어디인가요?</summary><div class=\"ans\">본점과 구축 공장이 모두 경남에 있는 중소·중견 제조기업 중, 2026년 추가모집 배정 시·군과 공고상 신청요건을 충족하는 기업이 대상입니다. 실제 가능 여부는 소재지와 구축 이력을 함께 확인합니다.</div></details>\n<details><summary>공식 마감과 YC 상담 마감이 왜 다른가요?</summary><div class=\"ans\">공식 접수 마감은 10월 19일(월) 12시입니다. 다만 사업계획서 작성, 구축범위 협의와 제출서류 준비가 필요해 YC 상담 및 신청 접수는 10월 14일까지 진행합니다.</div></details>\n<details><summary>지원금과 실제 현금 부담은 얼마인가요?</summary><div class=\"ans\">총사업비 1억 2천만원 기준으로 지원금은 최대 7,200만원이며 기업 현금 부담은 3,840만원입니다. 나머지 기업 부담분 중 960만원은 도입기업 인건비·클라우드 이용료 등 현물로 편성할 수 있습니다.</div></details>\n<details><summary>예전에 스마트공장 지원을 받은 적이 있어도 가능한가요?</summary><div class=\"ans\">공고상 동일수준 신청요건에 해당하면 신청 가능한 경우가 있습니다. 과거 지원 이력과 현재 수행 중인 사업 여부를 확인한 뒤 안내드립니다.</div></details>\n<details><summary>로봇이나 장비도 지원받을 수 있나요?</summary><div class=\"ans\">장비 단독 구매가 아니라 스마트공장 솔루션과 데이터로 연동되는 자동화장비·제어기·센서는 구축 범위로 검토할 수 있습니다. 실제 인정 범위는 공고와 원가검토 기준에 따릅니다.</div></details>\n<details><summary>어떤 서류부터 준비해야 하나요?</summary><div class=\"ans\">중소·중견기업 확인서와 공장등록확인서처럼 발급 상태 확인이 필요한 서류를 먼저 준비하는 것이 좋습니다. 상담 후 기업별 필요한 서류와 공고 양식을 함께 확인합니다.</div></details>\n<details><summary>YC는 접수 과정에서 어디까지 함께하나요?</summary><div class=\"ans\">신청자격 확인, 공장 진단, 구축범위 협의, 사업계획서 기술 내용 정리와 온라인 접수 준비를 함께 진행하고, 선정 후에는 구축·교육·안정화까지 이어갑니다.</div></details>\n</div></div><form class=\"form form-v2\" id=\"lead-form\">\n<h3><span class=\"ed\">경남 스마트공장 추가모집 상담·신청 접수</span></h3>\n<p class=\"sub\"><span class=\"ed\">신청 가능 여부와 준비서류를 확인해드립니다. 1분이면 접수 완료.</span></p>\n<div class=\"form-section\">\n<div class=\"form-section-title\">기본 정보</div>\n<div class=\"fld\">\n<label for=\"f-name\"><span class=\"ed\">성함</span><em class=\"star\">*</em></label>\n<input autocomplete=\"name\" id=\"f-name\" name=\"name\" placeholder=\"홍길동\" required=\"\" type=\"text\"/>\n</div><div class=\"fld\">\n<label for=\"f-position\">\n<span class=\"ed\">직책</span>\n<em class=\"star\">*</em>\n</label>\n<input autocomplete=\"organization-title\" id=\"f-position\" name=\"position\" placeholder=\"예: 대표이사, 부장, 팀장, 담당자\" required=\"\" type=\"text\"/>\n</div>\n<div class=\"fld\">\n<label for=\"f-phone\"><span class=\"ed\">연락처</span><em class=\"star\">*</em></label>\n<input autocomplete=\"tel\" id=\"f-phone\" inputmode=\"numeric\" maxlength=\"13\" name=\"phone\" placeholder=\"010-0000-0000\" required=\"\" type=\"tel\"/>\n</div>\n<div class=\"fld\">\n<label for=\"f-email\"><span class=\"ed\">이메일</span><em class=\"star\">*</em></label>\n<input autocomplete=\"email\" id=\"f-email\" name=\"email\" placeholder=\"name@company.co.kr\" required=\"\" type=\"email\"/>\n</div>\n<div class=\"fld\">\n<label for=\"f-company\"><span class=\"ed\">회사명</span><em class=\"star\">*</em></label>\n<input autocomplete=\"organization\" id=\"f-company\" name=\"company\" placeholder=\"(주)와이씨\" required=\"\" type=\"text\"/>\n</div><div class=\"fld address-field-group\">\n<label>\n<span class=\"ed\">사업장 주소</span>\n<em class=\"star\">*</em>\n</label>\n<div class=\"address-postcode-row\">\n<input id=\"f-postcode\" name=\"postcode\" placeholder=\"우편번호\" readonly=\"\" required=\"\" type=\"text\"/>\n<button class=\"address-search-btn\" id=\"address-search-btn\" type=\"button\">주소 검색</button>\n</div>\n<input id=\"f-address-base\" name=\"address_base\" placeholder=\"기본주소\" readonly=\"\" required=\"\" type=\"text\"/>\n<input id=\"f-address-detail\" name=\"address_detail\" placeholder=\"상세주소를 입력해주세요\" required=\"\" type=\"text\"/>\n</div>\n</div>\n<div class=\"form-section\">\n<div class=\"form-section-title\">공장 정보</div>\n<div class=\"fld\">\n<label for=\"f-size\"><span class=\"ed\">공장 규모 (직원 수)</span><em class=\"star\">*</em></label>\n<select id=\"f-size\" name=\"factory_size\" required=\"\">\n<option value=\"\">선택해주세요</option>\n<option>1~9명</option>\n<option>10~29명</option>\n<option>30~49명</option>\n<option>50~99명</option>\n<option>100명 이상</option>\n</select>\n</div>\n<div class=\"fld\">\n<label for=\"f3\"><span class=\"ed\">업종</span><em class=\"star\">*</em></label>\n<select id=\"f3\" name=\"industry\" required=\"\">\n<option value=\"\">선택해주세요</option>\n<option value=\"기계·금속 가공\">기계·금속 가공</option>\n<option value=\"목공·가구\">목공·가구</option>\n<option value=\"사출·성형\">사출·성형</option>\n<option value=\"식품·음료 제조\">식품·음료 제조</option>\n<option value=\"금형\">금형</option>\n<option value=\"판금·용접\">판금·용접</option>\n<option value=\"전자·조립\">전자·조립</option>\n<option value=\"디자인·조형 제작\">디자인·조형 제작</option>\n<option value=\"주조·단조·열처리\">주조·단조·열처리</option>\n<option value=\"표면처리·도장·도금\">표면처리·도장·도금</option>\n<option value=\"고무·화학·소재\">고무·화학·소재</option>\n<option value=\"자동차·기계부품\">자동차·기계부품</option>\n<option value=\"섬유·의류·피혁\">섬유·의류·피혁</option>\n<option value=\"포장재·인쇄\">포장재·인쇄</option>\n<option value=\"의료기기·정밀기기\">의료기기·정밀기기</option>\n<option value=\"건축자재·콘크리트\">건축자재·콘크리트</option>\n<option value=\"기타 제조업\">기타 제조업</option>\n</select>\n</div>\n<div class=\"fld\">\n<label><span class=\"ed\">스마트공장 지원사업 구축 이력</span><em class=\"star\">*</em></label>\n<div class=\"choices inline\">\n<label class=\"choice\"><input name=\"history\" required=\"\" type=\"radio\" value=\"0회\"/><span>0회</span></label>\n<label class=\"choice\"><input name=\"history\" type=\"radio\" value=\"1회\"/><span>1회</span></label>\n<label class=\"choice\"><input name=\"history\" type=\"radio\" value=\"2회 이상\"/><span>2회 이상</span></label>\n</div>\n</div>\n</div>\n<div class=\"form-section\">\n<div class=\"form-section-title\">관심 내용</div>\n<div class=\"fld\">\n<label><span class=\"ed\">관심 솔루션 (복수 선택)</span><em class=\"star\">*</em></label>\n<div class=\"choices choices-grid\" data-required-group=\"solution\">\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"제조 관리 시스템 (MES · Smart Line)\"/><span>제조 관리 시스템 (MES · Smart Line)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"공장 에너지 관리 솔루션 (FEMS · Next Carbon)\"/><span>공장 에너지 관리 솔루션 (FEMS · Next Carbon)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"산업안전 관리 솔루션 (Next Safe)\"/><span>산업안전 관리 솔루션 (Next Safe)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"가공경로 생성·검증·최적화 (CAM · ENCY CAM · Tuner)\"/><span>가공경로 생성·검증·최적화 (CAM · ENCY CAM · Tuner)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"로봇 자동화·로봇 프로그래밍 (OLP · ENCY Robot · Hyper)\"/><span>로봇 자동화·로봇 프로그래밍 (OLP · ENCY Robot · Hyper)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"설비 데이터 수집·가동 모니터링 (IoT 센서·장비 연동)\"/><span>설비 데이터 수집·가동 모니터링 (IoT 센서·장비 연동)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"산업장비 도입 (CNC·레이저·로봇 · SmartWare)\"/><span>산업장비 도입 (CNC·레이저·로봇 · SmartWare)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"사내 업무·고객 관리 (그룹웨어·CRM · Smart Dash)\"/><span>사내 업무·고객 관리 (그룹웨어·CRM · Smart Dash)</span></label>\n<label class=\"choice\"><input name=\"solution\" type=\"checkbox\" value=\"개별 상담 희망\"/><span>개별 상담 희망</span></label>\n</div>\n<p class=\"check-note\">※ 하나 이상 선택해주세요.</p>\n</div>\n<div class=\"fld\">\n<label for=\"f-message\"><span class=\"ed\">문의 내용</span><em class=\"star\">*</em></label>\n<textarea id=\"f-message\" name=\"message\" placeholder=\"공장 상황이나 궁금한 점을 적어주세요\" required=\"\" rows=\"4\"></textarea>\n</div>\n</div>\n<p class=\"agree privacy-agree\">\n<input id=\"agree\" name=\"privacy_consent\" required=\"\" style=\"width:auto;margin-top:4px\" type=\"checkbox\"/>\n<span class=\"ed\">[필수] 개인정보 수집·이용에 동의합니다. 수집 항목: 성함·연락처·이메일 / 목적: 상담 및 진단 안내 / 보유기간: 3년</span>\n</p>\n<p class=\"agree\">\n<input id=\"mkt\" name=\"marketing_consent\" style=\"width:auto;margin-top:4px\" type=\"checkbox\"/>\n<span class=\"ed\">[선택] 지원사업 공고, 교육·세미나 소식을 메일로 받겠습니다.</span>\n</p>\n<button class=\"btn\" type=\"submit\"><span class=\"ed\">신청 가능 여부 확인</span></button>\n<p class=\"form-note\"><span class=\"ed\">전화 상담 010-8698-1235 · hyj@ycgroup.co.kr</span></p>\n</form></div></section><div class=\"mcta gyeongnam-mcta\"><span><b>YC 상담·신청 접수 10.14까지</b>공식 마감 10.19 12:00</span><button class=\"btn\" data-act=\"tofor\" type=\"button\">신청 가능 여부 확인</button></div></div></div>";
  let cleanupFns = [];
  let lastPathname = '';

  function isTargetRoute() {
    return window.location.pathname === CONFIG.pathname;
  }

  function addCleanup(fn) {
    cleanupFns.push(fn);
  }

  function runCleanup() {
    cleanupFns.forEach(fn => {
      try { fn(); } catch (e) { console.warn('[YC Smart Factory Gyeongnam] cleanup:', e); }
    });
    cleanupFns = [];
  }

  function removeLanding() {
    runCleanup();
    document.getElementById(CONFIG.rootId)?.remove();
    document.documentElement.classList.remove(CONFIG.routeClass);
    document.body?.classList.remove(CONFIG.routeClass);
    document.querySelectorAll('.yc-smartfactory-gyeongnam-source-page').forEach(el => el.classList.remove('yc-smartfactory-gyeongnam-source-page'));
    restoreMeta();
  }

  function ensureDaumPostcode() {
    if (window.daum?.Postcode) return Promise.resolve();

    const existing = document.querySelector('script[data-yc-daum-postcode="1"]');
    if (existing) {
      return new Promise((resolve, reject) => {
        if (window.daum?.Postcode) return resolve();
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
      });
    }

    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
      s.async = true;
      s.dataset.ycDaumPostcode = '1';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function formatPhone(value) {
    const n = (value || '').replace(/\D/g, '').slice(0, 11);
    if (n.length <= 3) return n;
    if (n.length <= 7) return n.slice(0, 3) + '-' + n.slice(3);
    return n.slice(0, 3) + '-' + n.slice(3, 7) + '-' + n.slice(7);
  }

  function bindLanding(root) {
    const q = (sel) => root.querySelector(sel);
    const qa = (sel) => [...root.querySelectorAll(sel)];

    // 업종별 탭
    const tabs = qa('#package .tab');
    const panels = qa('#pkg-panels > .pkg');
    tabs.forEach(t => {
      const handler = () => {
        tabs.forEach(x => x.setAttribute('aria-selected', x === t ? 'true' : 'false'));
        panels.forEach(p => { p.hidden = p.id !== t.getAttribute('aria-controls'); });
      };
      t.addEventListener('click', handler);
      addCleanup(() => t.removeEventListener('click', handler));
    });

    const form = q('#lead-form');
    const industry = q('#f3');
    const size = q('#f-size');

    function goForm(value, opts = {}) {
      if (value && industry) {
        industry.value = value;
        industry.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (opts.size && size) {
        size.value = opts.size;
        size.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (opts.solution && form) {
        const cb = [...form.querySelectorAll('input[name="solution"]')]
          .find(el => el.value === opts.solution);
        if (cb) {
          cb.checked = true;
          cb.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
      form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => q('#f-name')?.focus({ preventScroll: true }), 500);
    }

    qa('[data-act="tofor"]').forEach(btn => {
      const handler = (e) => {
        e.preventDefault();
        goForm(btn.dataset.industry || '', {
          size: btn.dataset.size || '',
          solution: btn.dataset.solution || ''
        });
      };
      btn.addEventListener('click', handler);
      addCleanup(() => btn.removeEventListener('click', handler));
    });

    // 준비중 모달
    const comingModal = q('#coming-modal') || q('.modal');
    const openComing = (e) => {
      e?.preventDefault?.();
      comingModal?.classList.add('open');
      comingModal?.setAttribute('aria-hidden', 'false');
    };
    const closeComing = () => {
      comingModal?.classList.remove('open');
      comingModal?.setAttribute('aria-hidden', 'true');
    };

    qa('a.coming-link').forEach(a => {
      a.addEventListener('click', openComing);
      addCleanup(() => a.removeEventListener('click', openComing));
    });
    q('#modal-close')?.addEventListener('click', closeComing);
    q('#modal-consult')?.addEventListener('click', () => { closeComing(); goForm(''); });
    comingModal?.querySelectorAll('[data-modal-close]').forEach(el => {
      el.addEventListener('click', closeComing);
      addCleanup(() => el.removeEventListener('click', closeComing));
    });
    if (comingModal) {
      const bgHandler = (e) => { if (e.target === comingModal) closeComing(); };
      comingModal.addEventListener('click', bgHandler);
      addCleanup(() => comingModal.removeEventListener('click', bgHandler));
    }

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeComing();
        q('#submit-success-modal')?.classList.remove('open');
      }
    };
    document.addEventListener('keydown', escHandler);
    addCleanup(() => document.removeEventListener('keydown', escHandler));

    // 전화번호 자동 포맷
    const phoneInput = q('#f-phone') || q('#f2');
    if (phoneInput) {
      const phoneHandler = (e) => { e.target.value = formatPhone(e.target.value); };
      phoneInput.addEventListener('input', phoneHandler);
      phoneInput.addEventListener('blur', phoneHandler);
      addCleanup(() => {
        phoneInput.removeEventListener('input', phoneHandler);
        phoneInput.removeEventListener('blur', phoneHandler);
      });
    }

    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const successModal = q('#submit-success-modal');
    const addressSearchBtn = q('#address-search-btn');

    function getUTM(name) {
      return new URLSearchParams(window.location.search).get(name) || '';
    }

    function openSuccess() {
      successModal?.classList.add('open');
      successModal?.setAttribute('aria-hidden', 'false');
    }

    function closeSuccess() {
      successModal?.classList.remove('open');
      successModal?.setAttribute('aria-hidden', 'true');
    }

    successModal?.querySelector('.submit-success-close')?.addEventListener('click', closeSuccess);
    successModal?.querySelector('.submit-success-confirm')?.addEventListener('click', closeSuccess);

    if (successModal) {
      const successBgHandler = (e) => { if (e.target === successModal) closeSuccess(); };
      successModal.addEventListener('click', successBgHandler);
      addCleanup(() => successModal.removeEventListener('click', successBgHandler));
    }

    if (addressSearchBtn) {
      const addressHandler = async () => {
        try {
          await ensureDaumPostcode();
        } catch (e) {
          alert('주소 검색 서비스를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
          return;
        }

        if (!window.daum?.Postcode) {
          alert('주소 검색 서비스를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
          return;
        }

        new window.daum.Postcode({
          oncomplete(data) {
            const postcode = data.zonecode || '';
            const baseAddress = data.roadAddress || data.jibunAddress || '';
            const postcodeEl = q('#f-postcode');
            const baseEl = q('#f-address-base');
            const detailEl = q('#f-address-detail');

            if (postcodeEl) postcodeEl.value = postcode;
            if (baseEl) baseEl.value = baseAddress;
            if (detailEl) {
              detailEl.value = '';
              detailEl.focus();
            }
          }
        }).open();
      };

      addressSearchBtn.addEventListener('click', addressHandler);
      addCleanup(() => addressSearchBtn.removeEventListener('click', addressHandler));
    }

    const submitHandler = async (e) => {
      e.preventDefault();

      const checkedSolutions = [...form.querySelectorAll('input[name="solution"]:checked')].map(el => el.value);
      if (!checkedSolutions.length) {
        const note = form.querySelector('.check-note');
        if (note) note.style.color = 'var(--yc)';
        alert('관심 솔루션을 하나 이상 선택해주세요.');
        form.querySelector('input[name="solution"]')?.focus();
        return;
      }

      const history = form.querySelector('input[name="history"]:checked')?.value || '';
      if (!history) {
        alert('스마트공장 구축 이력을 선택해주세요.');
        return;
      }

      const postcode = q('#f-postcode')?.value.trim() || '';
      const addressBase = q('#f-address-base')?.value.trim() || '';
      const addressDetail = q('#f-address-detail')?.value.trim() || '';

      if (!postcode || !addressBase) {
        alert('주소 검색을 통해 주소를 선택해주세요.');
        return;
      }

      const fullAddress = [postcode, addressBase, addressDetail].filter(Boolean).join(' ');

      const payload = {
        name: q('#f-name')?.value.trim() || '',
        position: q('#f-position')?.value.trim() || '',
        phone: q('#f-phone')?.value.trim() || '',
        email: q('#f-email')?.value.trim() || '',
        company: q('#f-company')?.value.trim() || '',
        address: fullAddress,
        postcode,
        address_base: addressBase,
        address_detail: addressDetail,
        factory_size: q('#f-size')?.value || '',
        industry: q('#f3')?.value || '',
        history,
        solutions: checkedSolutions,
        message: q('#f-message')?.value.trim() || '',
        privacy_consent: !!q('#agree')?.checked,
        marketing_consent: !!q('#mkt')?.checked,
        utm_source: getUTM('utm_source'),
        utm_medium: getUTM('utm_medium'),
        utm_campaign: getUTM('utm_campaign'),
        utm_content: getUTM('utm_content'),
        utm_term: getUTM('utm_term'),
        submitted_at: new Date().toISOString()
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = '신청 중...';
      }

      try {
        const response = await fetch(CONFIG.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error('Webhook request failed: ' + response.status);

        openSuccess();

        form.innerHTML = `
          <div class="form-complete">
            <div class="form-complete-icon">✓</div>
            <h3>신청이 완료되었습니다.</h3>
            <p>접수해주신 내용을 확인한 뒤<br>담당자가 유선으로 자세히 안내드리겠습니다.</p>
          </div>
        `;
      } catch (err) {
        console.error(err);
        alert('신청 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.originalText || '신청 가능 여부 확인';
        }
      }
    };

    form.addEventListener('submit', submitHandler);
    addCleanup(() => form.removeEventListener('submit', submitHandler));
  }

  function renderLanding() {
    if (!isTargetRoute()) {
      removeLanding();
      return;
    }

    // 이미 정상 렌더된 경우 중복 생성 금지
    if (document.getElementById(CONFIG.rootId)) {
      document.documentElement.classList.add(CONFIG.routeClass);
      document.body?.classList.add(CONFIG.routeClass);
      return;
    }

    const pageEl = findPageEl();
    if (!pageEl) return;
    pageEl.classList.add('yc-smartfactory-gyeongnam-source-page');

    document.documentElement.classList.add(CONFIG.routeClass);
    document.body?.classList.add(CONFIG.routeClass);
    applyMeta();

    const root = document.createElement('div');
    root.id = CONFIG.rootId;
    root.innerHTML = LANDING_HTML;

    // section/itemElement 내부가 아니라 Sixshop page 요소의 형제 Root로 삽입
    pageEl.parentNode.insertBefore(root, pageEl);

    bindLanding(root);
    ensureDaumPostcode().catch(() => {});
  }

  function reconcileRoute() {
    const pathname = window.location.pathname;
    const pathMatches = pathname === CONFIG.pathname;
    const pageEl = findPageEl();
    const pageMatches = !!pageEl;
    const shouldRender = pathMatches && pageMatches;
    const hasRoot = !!document.getElementById(CONFIG.rootId);

    // 이중 잠금: 정확한 pathname + 지정 Sixshop Page ID가 모두 있을 때만 렌더링
    if (shouldRender) {
      if (!hasRoot) {
        renderLanding();
      } else {
        pageEl.classList.add('yc-smartfactory-gyeongnam-source-page');
        document.documentElement.classList.add(CONFIG.routeClass);
        document.body?.classList.add(CONFIG.routeClass);
      }
    } else {
      // URL 또는 Page ID 중 하나라도 불일치하면 즉시 원상복구
      if (hasRoot || document.documentElement.classList.contains(CONFIG.routeClass) || document.body?.classList.contains(CONFIG.routeClass)) {
        removeLanding();
      } else {
        document.querySelectorAll('.yc-smartfactory-gyeongnam-source-page').forEach(el => el.classList.remove('yc-smartfactory-gyeongnam-source-page'));
      }
    }

    lastPathname = pathname;
  }

  // 초기 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reconcileRoute, { once: true });
  } else {
    reconcileRoute();
  }

  // Sixshop SPA 이동 대응: history API를 덮어쓰지 않고 가볍게 pathname/DOM 재확인
  window.setInterval(reconcileRoute, 300);
  window.addEventListener('popstate', reconcileRoute);
})();
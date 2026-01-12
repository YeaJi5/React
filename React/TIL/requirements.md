# React TIL Project Requirements

이 저장소는 React 학습 과정을 기록하는 TIL(Today I Learned) 프로젝트이다.  
목표는 “나중에 다시 봤을 때 바로 복습/재현 가능한 기록”을 남기는 것이다.

---

## 1. 목적 (Goals)

- React 학습 내용을 일관된 형식으로 기록한다.
- 개념을 단순 정리하는 것을 넘어, **직접 실행 가능한 예시 코드**를 남긴다.
- 삽질/버그 해결 과정을 축적하여 동일 문제 재발 시 빠르게 해결한다.
- GitHub에서 검색/탐색이 쉬운 구조로 유지한다.

---

## 2. 저장소 구조 (Repository Structure)

### 2.1 기본 폴더 구조

- TIL은 날짜 기반으로 관리한다.

TIL/
2026/
01/
2026-01-12.md

yaml
코드 복사

### 2.2 파일 네이밍 규칙

- 날짜 형식: `YYYY-MM-DD.md`
- 파일명 예시: `2026-01-12.md`

---

## 3. TIL 작성 규칙 (Writing Rules)

### 3.1 하루 최소 기준

- 최소 1개 TIL 파일 작성 (짧아도 됨)
- 단, “링크만 던지기” 금지 (최소한 핵심 요약/예시 포함)

### 3.2 필수 섹션

모든 TIL은 아래 섹션을 반드시 포함한다.

1. **Today Goal**
2. **TL;DR (3줄 요약)**
3. **Key Concepts**
4. **Example / Code**
5. **Troubleshooting (있으면 필수)**
6. **Next (다음 할 일)**

### 3.3 코드 작성 기준

- 최소 1개 이상의 코드 블록 포함 (실행 가능/재현 가능 형태)
- “왜 이렇게 작성했는지” 간단한 설명 포함
- 가능한 경우 `Before / After` 형태로 개선점 기록

---

## 4. React 학습 범위 (Scope)

### 4.1 필수 학습 범위

- JSX 기본 문법
- 컴포넌트(함수형) 구조
- props / state
- 이벤트 처리
- 조건부 렌더링 / 리스트 렌더링
- useEffect 기본 사용 패턴
- useMemo / useCallback 개념 이해
- 컴포넌트 설계 (분리 기준, 책임 분리)
- 폴더 구조 및 리팩토링 기록

### 4.2 선택 학습 범위 (Optional)

- React Router
- 상태관리(예: Zustand, Redux Toolkit 등)
- 성능 최적화(렌더링 추적, memo, profiler)
- 테스트(React Testing Library)
- Next.js 전환 시 차이점 정리

---

## 5. 품질 기준 (Quality Bar)

### 5.1 “좋은 TIL” 기준

- 단순 요약이 아니라 **예시 코드 + 관찰 결과**가 있다.
- 실수를 숨기지 않고 Troubleshooting으로 남긴다.
- 다음에 다시 봤을 때 “바로 써먹을 수 있는 문장”이 있다.

### 5.2 “피해야 할 TIL” 기준

- 링크만 있고 내용이 없다.
- 문장만 길고, 예시나 결론이 없다.
- 무엇을 배웠는지 한 줄 요약이 없다.

---

## 6. 커밋 규칙 (Commit Rules)

### 6.1 커밋 최소 단위

- TIL 파일 추가/수정은 의미 있는 단위로 커밋한다.
- 하루 1커밋이 이상적이지만, 강제하지 않는다.

### 6.2 커밋 메시지 컨벤션

- `docs(til): YYYY-MM-DD react <topic>`
- 예시:
  - `docs(til): 2026-01-12 react useEffect basics`
  - `docs(til): 2026-01-13 react props vs state`

---

## 7. 템플릿 (Template)

TIL 문서는 아래 템플릿을 사용한다.

````md
# YYYY-MM-DD TIL - Topic

## ✅ Today Goal

-

## 🧠 TL;DR (3줄 요약)

-
-
-

## 📌 Key Concepts

### 1)

- 정의:
- 왜 필요함:
- 언제 씀:
- 주의점:

## 🔎 Example / Code

```js
// code here
🧯 Troubleshooting
문제 1)
증상:

원인:

해결:

배운 점:

⏭️ Next
[ ]

[ ]

[ ]

---

## 8. 유지 보수 (Maintenance)

- 매주 1회, TIL 중 “자주 쓰는 개념”을 모아 `SUMMARY.md`로 정리한다. (선택)
- 자주 반복되는 에러는 `TROUBLESHOOTING.md`로 모은다. (선택)

---

## 9. Done Definition (완료 기준)

다음 조건을 만족하면 “React TIL 기록 습관”이 정상적으로 구축된 것으로 본다.

- 2주 이상 연속으로 TIL 작성
- 최소 10개 이상의 Troubleshooting 기록
- TL;DR만 읽어도 복습 흐름이 이어지는 수준의 문서화
```
````

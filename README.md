# 디자이너 유형 테스트

5문항에 답하고 나의 디자이너 유형(감각의 연금술사 · 구조의 설계자 · 연결의 촉진자)을 알아보는 테스트입니다.
[Montage](https://github.com/wanteddev/montage-web) 디자인 시스템으로 만들었습니다.

## 실행

Montage 패키지는 GitHub Packages에 있어서, `read:packages` 권한이 있는 GitHub 토큰을 `~/.npmrc`에 먼저 등록해야 합니다.

```bash
npm config set "//npm.pkg.github.com/:_authToken" "<GitHub 토큰>"
npm install
npm run dev
```

## 내용 수정

- 질문과 선택지: `src/data/questions.ts`
- 유형 이름과 설명: `src/data/types.ts`
- 결과 계산 규칙: `src/lib/getResult.ts` (가장 많이 고른 유형, 동점이면 동점 유형 중 가장 마지막 문항에서 고른 유형)

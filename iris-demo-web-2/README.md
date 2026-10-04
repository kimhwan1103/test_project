# SoftBank Hackathon 2026 · Term1 (Demo 2)

해커톤 예선 1(2026-10-03~04, 서울) 소개 정적 페이지. 참가자가 만든 **비공식** 페이지이며, 내용은 킥오프 자료에서 발췌했다. `index.html` + `styles.css` + `main.js`, 빌드 단계 없음.

- 섹션: 히어로(상태·카운트다운) / 테마 / 심사 기준(배점 막대) / Day 1·2 일정(현재 세션 `NOW`) + 선발 흐름 / 장소 / 데모 1·2
- 언어: 日本語(기본) / 한국어 / English. 선택은 localStorage에 저장된다. 일본어 원문은 `index.html`, 번역은 `main.js`의 `TRANSLATIONS`.
- 시간 기준: KST. 상단은 `Day 2 종료까지` 남은 시간(10/4 18:00 기준)을 보여주고, 회장 운영 시간 중에는 빨간색으로 표시된다. 종료 후에는 `종료되었습니다`.

## 수정 포인트

- `main.js`의 `CONFIG.days`: 일자별 개장·폐장 시각. 마지막 날 폐장 시각이 카운트다운 목표
- `main.js`의 `CONFIG.demo1Url`: 데모 1 배포 URL. 비우면 "URL 미설정"
- 세션 시각: `index.html`의 `.timeline`(`data-date`, `data-start`, `data-end`)

## 로컬 실행

```sh
python3 -m http.server 4000
```

## 배포 (Railpack)

루트에 `index.html`이 있으면 Railpack이 정적 사이트로 감지해 Caddy로 서빙한다. 별도 설정·환경변수 불필요.

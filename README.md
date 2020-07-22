## Checklist

* HTML 4.x 이후의 HTML 표준의 변천사는 어떻게 되나요?
  * HTML 4.01 이후: 외부 스타일 시트 도입  
                파일 형태로 스타일 시트 작성, HTML에 삽입  
                새로운 태그 도입  
  * HTML 5: 다량의 새로운 HTML 태그 도입

* MS와 IE는 왜 역사의 죄인이 되었을까요?
속도 느림
버전 올라갈수록 메모리 점유율 높아짐
세션 복구와 같은 기능의 안정성, 편의성 떨어짐
웹 표준을 어김
호환성 낮음
보안 취약함

* `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
`<section>`: 일반 구획 요소 문서, 어플리케이션의 일반적인 섹션
             관계있는 문서 분리해 독립적인 구역 표현
`<div>`: 레이아웃 만드는 등 컨텐츠 구획 구분
`<header>`: 섹션의 제목, 목차, 검색, 로고 등 포함
            페이지 상단 부분
`<footer>`: 섹션의 저자, 링크, 저작권 정보 등 포함
            페이지 하단 부분
`<article>`: 블로그, 뉴스 등 자체적으로 구성되어 있는 콘텐츠 묶음
             독립적 내용
  
* 블럭 레벨 엘리먼트와 인라인 엘리먼트의 차이는 무엇일까요?
block level element: 화면 전체 사용(width값 100%)하는 태그
                     하나의 태그 완료되면 줄바꿈 일어남
inline element: 화면 일부 차지하는 태그
                줄 바꾸지 않고 한 행에 정렬

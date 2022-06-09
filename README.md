2022년 1월부터 2월까지 재직했던 스타트업에서 제작한 홈페이지 입니다! 홈페이지 제작 전 과정을 전담했습니다.

pc, 모바일 호환 가능한 반응형 웹페이지입니다. 현재는 회사 운영 종료로 사이트가 서버에서 내려간 상태입니다. 

### 디렉토리 구조 및 사용 라이브러리
🗂 **src**

- 📁 **assets**
: 이미지 파일
- 📁 **components**
: 재사용성을 가진 컴포넌트(모달, navbar, footer, styled-components를 이용한 각종 버튼, 컨테이너 등)
- 📁 **modules**
: 기능별 리듀서, 액션, 액션 생성 함수, thunk 함수(Ducks 패턴을 채택하여 기능별로 한 파일에 작성)
- 📁 **pages**
: *기능별 페이지들로 구성된 하위 폴더들* 의 모음
- 📁 **styles**
: css 전역변수, styled-components의 GlobalStyle, 미디어쿼리 등을 정의
- 📁 **utils**
: 각종 함수 모음
- App.js
- index.js
- keys.js
: 서버요청 baseurl들을 정의(통상적인 env 파일과 유사)

### 스크린샷
<img width="1440" alt="스크린샷 2022-04-27 오전 9 43 10" src="https://user-images.githubusercontent.com/87167786/172777462-ba005823-0b50-4437-beb1-f9b567826c35.png">
<img width="1440" alt="스크린샷 2022-04-27 오전 9 43 26" src="https://user-images.githubusercontent.com/87167786/172777469-5105f035-2114-4844-bc21-4c4997d7c110.png">
<img width="1440" alt="스크린샷 2022-04-27 오전 9 44 22" src="https://user-images.githubusercontent.com/87167786/172777471-4bb97608-ab71-4e8a-b9e4-40d90599d354.png">
<img width="1440" alt="스크린샷 2022-04-27 오전 9 49 09" src="https://user-images.githubusercontent.com/87167786/172777475-658c6893-0acd-4bb8-b44a-cfe2b2581734.png">




### velog 기록
아래는 구현 과정에서의 고민이 담겨있는 velog 글들입니다~

[로그인 로직 짜기](https://velog.io/@eunddodi/lo%EA%B7%B8%EC%9D%B8-lo%EC%A7%81)

[컴포넌트 조건부 렌더링 시 각기 다른 서버 요청을 하고 싶을 때](https://velog.io/@eunddodi/01.24-%EC%9B%94-2022)

[React 모바일 웹 앱 100vh 실제 화면 크기로 맞추기](https://velog.io/@eunddodi/React-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9-%EC%95%B1-100vh-%EC%8B%A4%EC%A0%9C-%ED%99%94%EB%A9%B4-%ED%81%AC%EA%B8%B0%EB%A1%9C-%EB%A7%9E%EC%B6%94%EA%B8%B0)

[탭 메뉴 구현하기](https://velog.io/@eunddodi/%ED%83%AD-%EB%A9%94%EB%89%B4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

[인턴기록 1: 라우팅](https://velog.io/@eunddodi/%EC%9D%B8%ED%84%B4%EA%B8%B0%EB%A1%9D-%EB%9D%BC%EC%9A%B0%ED%8C%85)



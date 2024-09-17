# React Native - Beginner

### React Native에 대한 입문입니다.

##### Begin React Native

- "react": "18.2.0"
- "react-native": "0.74.5"

<img src="https://img.shields.io/badge/React Native-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white"/>

---

- **24-09-16 : #1.1 ~ #2.3 / Introduction + 3rd-party components & API**
  - 설치 S/W
    - React-Native는 휴대폰 App을 만드는 것이라서 추가적인 S/W가 필요함
    - Android
      - Android Studio
      - JAVA
      - Android SDK
      - Simulator
    - iOS (MacOS에서 사용해야 함)
      - XCode
      - Simulator
  - React-Native
    - 코드와 OS 사이에 있는 interface
      - 코드는 iOS 또는 JAVA Android 코드로 번역이 됨
    - React-Native가 실제로 element를 렌더링하는 것이 아니고, OS에게 렌더링 해달라고 요청하며 OS가 렌더링을 함
      - 휴대폰 안에 존재하는 브라우저가 아님
  - Expo
    - 추가적인 S/W를 사용할 필요없이 VSCode를 쓰고, 휴대폰에서 App을 바로 test할 수 있음
      - 테스트 목적(프로토타입)으로 많이 사용함
      - 직접 출시할 예정이라면, 추가적인 S/W를 설치해야 함
    - 설치법
      1. `npm i -g expo-cli`로 cli 환경 설치하기
         - Mac 사용자라면, `Watchman`을 추가적으로 설치
           ```
           brew update
           brew install watchman
           ```
      2. apple store(`Expo Go`) 또는 google play store(`Expo`)에서 다운받기
    - 프로젝트 설치법
      1. `npx create-expo-app@latest 프로젝트명 --template`으로 프로젝트 설치하기
         - `blank` 선택하기
      2. `expo login`으로 cli에서 로그인하기
      3. `npm start`로 테스트 실행하기
    - <a href="https://expo.dev" target="_blank">홈페이지</a>
  - Snack
    - 브라우저에서 React-Native App을 만들 수 있게 해주는 온라인 코드 에디터
    - <a href="https://snack.expo.dev" target="_blank">홈페이지</a>
  - `<View />`
    - `<div />` 대신 사용하는 element
  - `<Text />`
    - text 사용 시 필수로 사용하는 element
  - style
    - 일부 style을 사용할 수 없음 (border 등)
    - 사용법 : `const styles = StyleSheet.create(스타일객체);`
      - ex.
        ```
        <View styles={styles.container} />
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
          },
        });
        ```
    - 자동 완성 기능 제공
      - 그냥 객체로 사용해도 되나, 자동 완성 기능을 제공하지 않음
  - StatusBar
    - 3rd-party 패키지로부터 사용
  - 3rd-party Components & API
    - React-Native는 필수로 필요로하는 component와 API만 제공
      - 유지 관리와 업데이트가 힘들기 때문
    - 다른 기능들은 커뮤니티 패키지를 사용해야 함
    - <a href="https://reactnative.directory" target="_blank">홈페이지</a>
  - Expo SDK
    - Expo 팀이 자체적으로 Packages와 APIs를 만들어 배포함
    - <a href="https://docs.expo.dev/versions/latest"           target="_blank">홈페이지</a>
- **24-09-17 : #2.4 ~ #2.10 / Weather App**

<!-- ![Logo of the project](./public/favicon.png) -->

# ICPC Sinchon Official Website

> 신촌지역 대학교 프로그래밍 동아리 연합 공식 홈페이지



## 설치 및 개발환경 준비

아래의 명령어를 통해 레파지토리를 클론합니다.

```shell
git clone https://github.com/icpc-sinchon/icpc-sinchon.github.io
```

아래의 명령어를 통해 패키지 의존성을 설치합니다.

```shell
npm install
```

의존성을 설치한 후, 아래의 명령어를 통해 Next.js를 개발환경에서 실행할 수 있습니다.

```shell
npm run dev
```

기본 포트는 `4789`로, `localhost:4789`에서 페이지를 확인해볼 수 있습니다.



## 배포하기

<!-- ### 배포에 앞서서

저도 익숙하지 않아서 더 간단한 방법으로 배포하는 방법을 싣지 못했습니다. 양해 부탁드립니다.

프로젝트 내 `suapc, halloffame` 두 페이지 접속시, `fetch`를 먼저 실행한 후에 페이지가 로딩됩니다.
이에 빌드 진행시, 로컬 호스트 서버가 켜져 있어야 정상적으로 빌드가 가능합니다. 
`npm run dev`로 `dev` 서버를 실행시킨 상태로 아래의 과정을 거쳐 주시기 바랍니다.

*`github.io`에서 서비스하기 위해 정적 페이지를 생성합니다. 



### 빌드

```shell
npm run build
```

위 명령어를 통해 개발이 완료된 프로젝트를 빌드합니다.

### 정적 파일 생성

```shell
npm run export
```

위 명령어로 정적 페이지를 생성합니다. 생성된 파일들은 `out/` 디렉토리에 저장됩니다.

### jekyll 프로젝트가 아님을 명시

```shell
cp .nojekyll out/
```

github pages로 배포하기 위해서 jekyll 프로젝트가 아님을 명시해야합니다.
제가 메인 디렉토리에 만들어 놓은 `.nojekyll` 파일을 `out `폴더에 복사해주시거나, 
이름이 `.nojekyll`인 빈 파일을 `out` 폴더에 생성해주시면 됩니다. -->

### main 브랜치로 pull request 

기여자분의 `fork`한 레파지토리에서, 혹은 `branch`에서 `main` 브랜치로 `pull request`를 보내주세요.
`merge`가 완료되면 `github actions`를 통해 배포됩니다.



## 추가

페이지 내 이미지들은 전부 `https://api.suapc.kr`로 링크되어 있습니다. 
github pages의 느린 이미지 로딩 속도를 극복하기 위해 해놓은 조치이니, 기여에 참고 부탁드립니다.

이미지를 추가하실 경우, `public/res`폴더 내에 넣고 일반적인 방법대로 링크를 해주시면 제가
`api` 서버로 옮겨서 수정하겠습니다.


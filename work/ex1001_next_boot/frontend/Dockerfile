# 해당 이미지를 기반으로 빌드 시작
FROM node:20-alpine as builder
# 작업폴더 잡기
WORKDIR /app
# 현재위치(app)에 라이브러리 목록을 복사한다.
COPY package*.json ./
# 라이브러리들을 다운로드해서 node_modules 폴더에 복사한다.
RUN npm install
# 현재위치에 있는 모든파일을 app(경로)에 모두 복사
COPY ./ ./
# 빌드 명령어 실행(.next 폴더 생성됨)
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
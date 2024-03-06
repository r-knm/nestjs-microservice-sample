# r-knm/nestjs-microservice-sample

下記の技術記事に関連するコードをアップしたリポジトリです。

## リポジトリ構成

下記３つの NestJS アプリケーションを管理しています。

- API Gateway: `api-gateway/`
- メールサービス（Microservice A）: `mail-service/`
- ユーザーサービス（Microservice B）: `user-service/`

## アプリケーション構成

## 起動方法

- Node: v20.11.1
  - (Pinned to Package.json by Volta.)
- NestJS: v10

上記３つのアプリケーションにて、該当ディレクトリ（`api-gateway/`、`mail-service/`、`user-service`）へ移動して下記のコマンドを実施してください。

1. `npm install`
2. `npm run start:dev`

## 動作確認

api-gateway では、「新規ユーザー登録」、「ユーザーリスト取得」、「メール送信履歴」の３つの Rest API を用意しています。
それぞれ参考ように Postman でのリクエスト画面を添付いたします。

## 参考

[NestJS Microservice](https://docs.nestjs.com/microservices/basics)

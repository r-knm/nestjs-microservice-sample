# r-knm/nestjs-microservice-sample

下記の技術記事に関連するコードをアップしたリポジトリです。
[NestJSのMicroservices機能を使ってマイクロサービスアーキテクチャのサンプルアプリを実装する](https://zenn.dev/r_knm/articles/88a7002df0454d)

## リポジトリ構成

下記３つの NestJS アプリケーションを管理しています。

- API Gateway: `api-gateway/`
- メールサービス（Microservice A）: `mail-service/`
- ユーザーサービス（Microservice B）: `user-service/`

## アプリケーション構成

<img width="1660" alt="2024_0305_NestJS_マイクロサービス_サンプルアプリ構成" src="https://github.com/r-knm/nestjs-microservices-sample/assets/102338067/b1d5c224-699c-492f-aebf-1ee7b524efa5">

## 起動方法

- Node: v20.11.1
  - (Pinned to Package.json by Volta.)
- NestJS: v10

上記３つのアプリケーションにて、該当ディレクトリ（`api-gateway/`、`mail-service/`、`user-service`）へ移動して下記のコマンドを実施してください。

1. `npm install`
2. `npm run start:dev`

## 動作確認

api-gateway では、「新規ユーザー登録」、「ユーザーリスト取得」、「メール送信履歴取得」の３つの Rest API を用意しています。
それぞれ参考ように Postman でのリクエスト画面を添付いたします。

- 新規ユーザー登録

![スクリーンショット 2024-03-06 23 40 22](https://github.com/r-knm/nestjs-microservices-sample/assets/102338067/786519f1-d3e4-4e39-8b0f-cf704ec24d45)

- ユーザーリスト取得

![スクリーンショット 2024-03-06 23 40 41](https://github.com/r-knm/nestjs-microservices-sample/assets/102338067/f4d6e150-016d-41ac-8904-4d5514f5fa5c)

- メール送信履歴取得

![スクリーンショット 2024-03-06 23 41 00](https://github.com/r-knm/nestjs-microservices-sample/assets/102338067/98b5c63a-ca77-42ad-a790-97564bb14599)

## 参考

[NestJS Microservice](https://docs.nestjs.com/microservices/basics)

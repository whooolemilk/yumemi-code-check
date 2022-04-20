![resas-population-graph-three vercel app_](https://user-images.githubusercontent.com/74092547/164067836-ef8adbe1-b882-4dd6-a596-f98fcc03a38a.png)

## URL

https://resas-population-graph-three.vercel.app/

## 仕様

- RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
- API レスポンスから都道府県一覧のチェックボックスを動的に生成する
- 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
- 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

## 環境変数

RESAS-API の API キーを，プロジェクト直下の.env ファイルに記載

```
RESAS_API_KEY = 'xxxxxxxxxxxxxxxxxxxx'
```

## Build Setup

```
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# Snapshot test
$ yarn test

```

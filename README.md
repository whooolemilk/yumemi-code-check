![resas-population-graph-three vercel app_](https://user-images.githubusercontent.com/74092547/164067836-ef8adbe1-b882-4dd6-a596-f98fcc03a38a.png)

## URL

https://resas-population-graph-three.vercel.app/

## 仕様

- RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
- API レスポンスから都道府県一覧のチェックボックスを動的に生成する
- 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
- 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

## 工夫したこと

### 開発の方法について

- 基本 issue ベースですすめ、issue ごとにブランチを切り PR を出して自分でレビューを行った。

### コンポーネントの設計について

- AtomicDesign を採用  
  → コンポーネント単位でテスト出来、メンテナンスがしやすく、仕様変更による手戻り作業の最少化が出来るため。

### テストコードについて

- スナップショットテスト  
  → 予期しない UI の更新を防げて、かつ、変更部分の差分が見れるため。

### ワイヤーフレームに基づく見た目の設計

- シンプルで見やすいブルーベースのデザイン

## 環境構築

```
# 依存関係のインストール
$ yarn install

# localhost:3000の起動
$ yarn dev

# スナップショットテストの実行
$ yarn test

# .envファイルの作成
$ copy .env.example .env

```

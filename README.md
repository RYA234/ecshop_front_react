

# ドメイン情報
## 概要
本リポジトリはB2C向けECショップのクローンWEBアプリケーションです。
杏○堂ネットスーパーのようなサイトを想定しています。
バックエンド:SpringBoot RESTAPI
フロントエンド:TypeScript Next.js
で作られています。

まだ開発中です。



## 機能
### 商品機能
商品をカテゴリーごとに表示
商品を1件表示する。

### 顧客機能
顧客の登録
顧客のログイン、ログアウト
JWT認証方式

### 買い物カゴ機能
追加、数量変更、買い物かごから1件だけ取り除く、買い物カゴを全削除

### 支払い機能

### 注文機能



# 非ドメイン情報
## 開発環境
2023/02/01時点での情報

名称|バージョン|説明
---|--------|---
Window|10|OS
VisualStudioCode||IDE
TypeScript||言語
React||ライブラリ
Next.js||ReactベースのWebフレームワーク
sytled-jsx||varcel製のcssの記法
axios||HTTP通信ライブラリ　RESTAPIに使う
TypeDoc||Type
StoryBook||UI開発ツール
Jest||ユニットテストライブラリ
React-Test-Library||ユニットテストライブラリ


## フォルダ構成
フォルダパス|説明
----------|----
`__tests___`|テスト系のファイル置き場
.next|next.jsのビルド結果
.storybook|storybookの設定ファイル置き場
component|Reactで作ったUIコンポーネント置き場
pages|Next.js標準の機能
public||検証用の画像の置き場
service||axiosでRESTAPIを呼んでいるファイルの置き場
stories|storybookのプロダクトコードの置き場1
types|EntityやApiのResponseなどを定義している型ファイルの置き場



## 起動方法
## アプリケーション起動方法
※バックエンドアプリケーションが起動していることが前提です。
```
npm run dev
```
http://127.0.0.1:3000/を開く

## StoryBookでの起動
StoryBookはバックエンドアプリケーションを起動しなくても動作します。

```
npm run storybook
```

http://127.0.0.1:6006/を開く

## jestでのユニットテスト実行方法
ユニットテストはバックエンドアプリケーションを起動しなくても動作します。

```
npm run test
```
ターミナル側にjestのCLIメニューが現れます。


## 参考資料

開発する上で役に立った公式ドキュメント以外の資料

書籍：




# Electric Sheep 2024 Team- Diverse Drivers (DD)

**README Last Update: Sep. 16, 2024**

# Abstract

- SF プロトタイピングハッカソン 2024 Team Diverse Drivers (DD) のコードを管理するためのリポジトリです。
- 今回は短期間のプロトタイピング開発なので、細かな開発ルールは定めなくてよいと思っています。
- **必ずブランチを切って作業してください！！**


# アプリケーション概要

## アプリケーションURL 

以下のリンクからアプリケーションにアクセスできます！動物とお話して一緒に冒険してみませんか？

[Electric-Sheep-2024-Diverse-Drivers-ANIMALink](https://mobility-adventure.shakenokiri.me/search)

## このアプリケーションにかける前提

近い将来人間と動物が共存する社会が実現しはじめます。我々はこれからの技術発展によって人類の余暇が増えることを予想しています。
余暇が増えた将来、人々の「時間間隔の変化」が起こることを期待しています。さらに、現在の技術のAI技術の発展と生物学と脳科学の進化により、人々は「動物とのコミュニケーション」が可能になる世界になると期待しています。

## アプリケーションの目的

本アプリケーションはこのような未来を想定し、人々が動物とコミュニケーションをとりながら、人間と一緒に動物が主導する冒険を楽しむためのアプリケーションを提案します。動物を用いることにより偶発性が高いモビリティを提供できると考えています。

## アプリケーションのターゲット

シンギュラリティを経験した人々は効率化、速度よりも「エモーショナル」な「目的のない旅」を求めるようになると予想することが出来る。
本アプリケーションはこのような人をターゲットにする。

# アプリケーションの構成と実装

## 使用技術

### フロントエンド部分

- React
- node.js
- TypeScript
- Material-UI

### API

- Google Gemini API 

### インフラ技術

- Dockerコンテナ
- Makefile

### デプロイ先

## アプリケーションの機能

### 機能概要
- ユーザーは動物を選択することが出来る。
- ユーザーは動物を乗り換えたりすることが出来る。
- ユーザーは動物らしい「目的のない旅」を楽しむことが出来る。
- ユーザーは動物と動物らしいコミュニケーションをとることができる。
- ユーザーは動物と一緒に冒険を楽しむことができる。

### 機能詳細

#### マップ機能

- ユーザは自分の位置情報を取得することが出来る
- ユーザは自分の位置情報を元に、自分から近い動物の情報を取得する
- ユーザーは自分がライドしたい動物を選択出来る

#### 動物ステータス機能

- 動物の今の状態と名前を確認することが出来る
- ユーザーがライドするのか、ライドをやめるのかを選択することが出来る

#### チャット機能

- ユーザは動物の人格を反映したAIチャットすることが出来る。
- ユーザーは動物とのコミュニケーションを通じて、動物の感情を読み取ることが出来る。
- ユーザは動物とのコミュニケーションで動物と会話したりできる。



## ディレクトリ構成

ディレクトリ構成図は以下の通りです。

```
mobility-adventure
├── README.md
└──app
   ├─ public
   │   └── images
   └── src
      ├── left_component 
      │   ├── Map 
      │   ├── components 
      │   │   ├── CaptureButton キャプチャ用のボタン
      │   │   
      │   ├── map_component
      │   └── util
      ├── pages
      │   ├── Ride
      │   └── Search
      └── right_component チャット画面のコンポーネント
         └── Drawer
```


## 今後の展望

- 今後は動物とのコミュニケーションをより深めるために、AI技術を用いて動物の感情を読み取る機構を実装できると考えています。
- ハード部分との連携を強化し、より生体データを取得し、それを解析することが出来る独自実装のAIを構築することが出来ると考えています。
- 動物側からのインタラクティブな会話の実装を行うことを考えている。
- 動物側から人間に話しかける機能も考えている。

---


# 開発者の環境構築

## git 関連

1. 開発環境において以下の準備を行ってください (準備ができていない場合のみ)。方法がわからない場合は聞いてください。
   - git のインストール
   - SSH の認証鍵生成 + 公開鍵 の GitHub への登録
1. このリポジトリを SSH でローカルに clone してください。

   ```
   git clone git@github.com:asahi1199/mobility-adventure.git
   ```

# 開発の作業フロー 

1. 自分が作業するタスクに対応するブランチを作成する。

   - ブラウザ上でブランチを作ってローカルに取り込む場合

     1. Code の画面でベースとするブランチに切り替えた上でブランチ選択のボタンをクリックする。「Find or create a branch...」のところに作成するブランチ名を打ち込む。「Create branch ... 」をクリックしブランチを作成する。
     1. ローカルに作成したブランチをローカルに取り込む。

        ```
        git fetch --all
        ```

     1. 作成したブランチに切り替えて作業を行う。

        ```
        git switch <ブランチ名>
        ```

        or

        ```
        git checkout <ブランチ名>
        ```

   - ローカルでブランチを作成してリモートに反映させる場合

     1. ベースとなるブランチに切り替えた状態で新たなブランチを作成する。

        ```
        git switch -c <ブランチ名>
        ```

     1. ブランチをリモートに反映する

        ```
        git push origin head
        ```

1. キリの良いところまで作業を進めたら、変更を加えたファイルを git に追加する。

   ```
   git add <ファイル or ディレクトリ>
   ```

1. 変更を git に commit する。

   ```
   git commit -m "<commit message>"
   ```

1. 変更をリモートに反映させる。

   ```
   git push origin <ブランチ名>
   ```

1. ブランチでの作業が完了したら pull request を作成する。

   - base branch を正しく指定する。
   - 必要であれば他者にレビューを依頼する (今回は基本的にレビューなしでいい気がする)。
   - conflict が発生している場合には解消する。

1. pull request をマージする。

# コマンドメモ

## git

### clone 関連

- `git clone <リモートリポジトリのURL>`: リモートリポジトリをローカルにクローン

### pull / branch 関連

- `git pull origin <ブランチ名>`: リモートリポジトリから pull
- `git branch`: 現在のブランチを確認
- `git branch <ブランチ名>`: 新たなブランチを作成
- `git switch <ブランチ名>`: ブランチを移動
- `git switch -c <ブランチ名>`: 新たなブランチを作成 + 移動

### commit 関連

- `git commit`: エディタを立ち上げてコミット
- `git commit -m <コミットメッセージ>`: エディタを立ち上げずにコミット
- `git status`: 前回のコミット以降に変更されたファイルを確認
- `git log`: コミットの状況確認
- `git log --graph`: コミットログを縦グラフで表示

### commit 修正関連

- `git commit --amend`: 直前のコミットメッセージを変更
- `git reset --soft <commit>`: コミットだけを取り消す (ローカルリポジトリの内容は変わらない)
- `git reset --hard <commit>`: コミットの取り消し + ローカルの変更内容も取り消す
- `git revert <commit>`: コミットの打ち消し (指定コミットの変更内容をもとに戻すための新規コミット作成)

### push 関連

- `git remote -v`: リモートリポジトリの情報表示
- `git push origin <ブランチ名>`: ブランチの push

## vim

### モード切り替え

- `i`: インサートモードへの切り替え
- `esc`: コマンドモードへの切り替え

### 保存・終了

- `:q`: 編集を終了 (変更がある場合には警告が出る)
- `:q!`: 保存せずに編集を強制終了 (変更があっても無視される)
- `:w`: 上書き保存
- `:w <ファイル名>`: 名前をつけて上書き保存
- `:wq`: 上書き保存して終了

### 移動

- `w`: 次の単語の先頭に移動
- `e`: 次の単語の末尾に移動
- `b`: 前の単語の先頭に移動
- `0`: 行の先頭に移動
- `$`: 行の末尾に移動
- `H`: 画面の一番上に移動
- `M`: 画面の中央に移動
- `L`: 画面の一番下に移動
- `gg`: ファイルの先頭に移動
- `G`: ファイルの末尾に移動

### NPM

```
npm install @use-gesture/react
npm install @react-spring/web
```



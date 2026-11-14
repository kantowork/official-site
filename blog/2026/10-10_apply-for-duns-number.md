---
layout: post
title: "米国LLC設立：D-U-N-S®番号取得手順"
date: 2026-10-10
tags: [LLC, AppleDeveloper]
---

前回の記事で、IRSからEIN（連邦雇用主識別番号）の返信を受け取りました。

手元に「定款（Articles of Organization）」と「EIN」が揃ったため、今回は **Apple Developer Program の組織（Organization）アカウント登録に必須となる「D-U-N-S® Number（ダンズナンバー）」の申請・取得手順** について紹介します。

> **D-U-N-S® Number（Data Universal Numbering System）とは？**
> 米国の民間信用調査会社 Dun & Bradstreet（D&B）が発行・管理する、企業を一意に識別するための世界標準の9桁のコードです。Apple Developer Programで法人・組織として登録する際、法人の実在証明として提出が義務付けられています。

---

## 1. 申請の流れとツールの選択

D-U-N-S番号の申請にはいくつかのルートがありますが、Apple Developer Programの登録が目的である場合、**Apple公式の「D-U-N-S® Lookup ツール」を経由して申請するのが最も確実かつ無料**です。

- **URL**: [Apple Developer - D-U-N-S Lookup](https://developer.apple.com/enroll/duns-lookup/)

### 申請ステップ

1. **自社がすでに登録されていないか検索**
   - Apple Developerアカウント（Apple Account）でサインインし、国名（United States）、Legal Entity Name（`KANTO WORK LLC`）、Registered Agentの住所等を入力して検索します。
   - 設立直後の新設法人は通常登録されていないため、「No results found（見つかりませんでした）」と表示されます。
2. **そのままD&Bへの新規リクエストを送信**
   - 検索結果画面の下部に表示される「Submit your information to D&B（D&Bへ情報を送信）」をクリックします。
   - 会社名、登記住所、担当者連絡先(あなたの連絡先)を入力し、送信します。

---

## 2. DUNS番号取得のタイムライン

10/10に申請を行ってから発番されるまでの実際のタイムラインです。

| 日時 (JST)     | ステータス / アクション  | 詳細内容                                                                              |
| :------------- | :----------------------- | :------------------------------------------------------------------------------------ |
| 10月10日 03:01 | **申請受付通知**         | D&Bよりリクエスト受付完了メールを受信                                                 |
| 10月10日 03:14 | **追加情報・書類の要請** | D&Bより追加情報と本人・実在確認書類の提出を求めるメールを受信（72時間以内の回答指定） |
| 10月10日 20:47 | **書類・フォームの提出** | 記入済み「Business Information Form (BIR Form)」および証明書類2点を添付して返信       |
| 10月10日 20:53 | **発番完了通知**         | D&Bより審査完了およびD-U-N-S番号発行通知を受信（**返信からわずか6分後！**）           |

---

## 3. D&Bからの追加要請と提出書類

メールには**「72時間以内に以下の情報と書類を返信してください」**との指示がありました。

### 提出した書類（3点）

新設法人のため直近決算の財務諸表（Financial Statement / 損益計算書・貸借対照表）は当然ありません。
D&Bからは代替書類として以下の2点の提出で実在証明として認められました：

1. **EIN Filing from the IRS（IRS発行の雇用主識別番号通知書）**
   - IRSからFAXで返信されたEIN付与通知のPDF
2. **Articles of Organization（ニューメキシコ州発行の設立許可証・定款）**
   - _Articles of Organization_ と _Certificate of Organization_ のPDF
3. **Business Information Form（先方からWordテンプレートが送付）**
   - **General Information**
     - Legal Business Name（正式法人名）
     - Business Street Address（所在地）: 州に登録した住所 (New Mexico)
     - Mailing Address（郵送先住所）: 同上
     - Primary Phone Number（電話番号）: `+81 ...`（日本の携帯電話番号）
     - Primary Contact E-mail（連絡先メール）: 独自ドメインのビジネスメール
     - Company Website/URL（Webサイト）: `https://www.kanto.work`
     - Date the Business started（事業開始年月）
     - Number of Employees（従業員数）: `1`
     - Names of Owners/Officers/Members（所有者情報）: `Owner` で自分に100%としました
     - **Headquarter/Parent Company（親会社の有無）**: `No`
   - **Operations & Business Description**
     - Description of Business Function: Form SS-4で申請した事業内容に合わせて記載
   - History of the Business
     - Legal Structure（法的形態）: `Limited Liability Company (LLC)`
     - Date Incorporated（設立年月日）: 州が登記した日
     - State Where Incorporated（設立州）: `New Mexico`
     - Registered Trade Style（商号・屋号登録）: `No`
   - Finance
     - Sales for Last Year（前年売上）: 新設法人のため決算実績ないため `TBD (under development)` としました

---

## 4. 登録完了

提出後、すぐにメール返送がありました。

```text
Case # xxxxx has been resolved.

Tracking Id:
Case Number:
Resolution Date/Time:
Business name:
Location:
Requester's Own Request Key:

Concern category:
Resolution: D-U-N-S Number created           <--- ⭐️
Sub-Resolution:

Updated Information:
Resolution Duns:                             <--- ⭐️
Business Name:
Address:

```

D&BからDUNS番号が発番された直後、すぐにApple Developer Programの登録画面に入力したくなりますが、少し待つ必要があります。
D&Bで発行された番号がApple側のデータベースやシステムに同期されるまで、**通常24〜48時間（場合によっては数営業日）のタイムラグ**が発生します。
数日置いてから自分で [https://www.dnb.com/de-de/upik-en.html](D&Bのサイト) で検索し、結果が出た頃にApple Developerの登録を進みます。

次回は、いよいよ **「Apple Developer Program 組織（法人）アカウントの登録と本人確認」** に進みます！

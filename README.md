# 樂命咖啡｜2026 中英文圖文菜單

## 上傳 GitHub Pages
1. 解壓縮，將 index.html、所有 CSS、app.js、ordering.js 與 assets 資料夾上傳至 GitHub 儲存庫最外層。不要直接上傳 ZIP。
2. 開啟 Settings → Pages。
3. Source 選 Deploy from a branch。
4. Branch 選 main，資料夾選 /(root)，按 Save。
5. 等待 GitHub 完成發布，從 Pages 頁面取得網站網址。

官方說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 使用與維護
- 直接雙擊 index.html 可在電腦預覽，不必啟動本機伺服器；請保留其他檔案和 assets 的相對位置。
- 本站為靜態網頁，含 60 個中英文品項、41 張品項照片（貝果不顯示照片），以及手機排版。
- 品名及價格可直接修改 index.html；style.css、desktop.css、mobile.css 控制外觀。
- 不需要安裝套件或進行編譯。
- 手機樣式已加入；尚未完成手機實機驗證。
- 圖片為隨包提供的現有素材；沒有對應照片的品項維持文字呈現。
- 已接上 A1、A2、A3、B1、B2、B3、W1 桌。網址加上 ?table=A2 即可開啟 A2 桌菜單。
- 不帶桌號的網址提供外帶點餐；無效或重複桌號不會導向任何內用桌。
- 桌號連結集中於 ordering.js，均由提供的 iCHEF 桌牌解碼而得。
- 正式上架後，使用實際 GitHub Pages 網址加上各桌參數製作 QR code。既有 iCHEF QR code 仍會直接進入 iCHEF，不會自動改成圖文菜單。
- 本網站菜單不會自動同步 iCHEF 的價格或庫存。
- 上架到 GitHub Pages 後，可從手機及其他電腦開啟 GitHub 提供的網站網址。

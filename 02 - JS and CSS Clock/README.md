# [Day02] Css + JS Clock
透過 JS 製作計算時鐘指針位移

疑問：
利用 `setInterval` 每秒執行一次 `setDate` function
若是設置每 0.5 毫秒執行一次效果如何？
  -> 看不出差異ＱＱ
  透過 `setInterval` 指定指針每秒位移角度。

計算角度：
**糟糕的做法**
在切版的時候有先將指針旋轉 90 deg 過，因此在動態計算角度時要再加上 90。

**好的做法**
切版的問題應該由切版解決，而不是為了解決切版問題在編寫程式時刻意修改切版問題。




### setTimeOut / setInterval
#### setTimeOut
延遲了某段指定時間(毫秒)後執行 **一次** 程式碼，並回傳獨立的 timer ID。
#### setInterval
延遲了某指定時間(毫秒)後以 **間隔固定的指定時間(毫秒)** 執行 **不斷循環** 程式碼，並回傳獨立的 timer ID。

### new Date
Date 建構一個表時間、日期的建構器函式。他是基於 **世界標準時間（UTC） 1970 年 1 月 1 日** 開始的毫秒數值來儲存時間。

這個Date物件只能由new Date 作為建構器來產生，如果把Date作為一般函式來呼叫(省略new運算子)，將會得到一個的代表當下時間的字串而非Date物件。

```javascript
new Date();
new Date(value);
new Date(dataString);
new Date(yaer, month[, day[, hour[, minutes[, seconds[, millisecond]]]]]);
```
- 如果沒有傳入參數到Date()建構器，會依系統設定建立出代表當下時間的Date物件。
- new Date(value)需傳入一個整數值，其數值是從1970-01-01 00:00:00 UTC(UTC = GMT)(格林威治標準時間)到現在的毫秒數(millisecond)。
- new Date(DataString)傳入一個日期或時間格式字串，並回傳新的Date物件。

根據規範中對時間格式字串的定義，是有特定要求的：
**The format is as follows: YYYY-MM-DDTHH:mm:ss.sssZ**

```javascript
new Date('2019-01-01T02:34:56Z')
```
![](https://i.imgur.com/eL6kKIX.png)

時間格式的詳細規則歡迎參閱規範：[Date Time String Format](https://tc39.es/ecma262/#sec-date-time-string-format)

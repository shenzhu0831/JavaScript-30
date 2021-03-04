# [Day02] Css + JS Clock
### input type - range
`<input type="range" />` 提供了使用者指定範圍內數值的功能。
由於 rang 並不像其他直接輸入數值的輸入框，因此對於 rang 來說是否精確並不重要，僅需要驗證數值是否超出範圍。
#### 基礎語法
```
<input type="range" min max step value> 
```
min: 最小合法值，若輸入的 `value` 小於該值，則無法通過驗證。若 `min` 值不是有效數字，則輸入沒有最小值。
max: 最大合法值，若輸入的 `value` 大於該值，則無法通過驗證。若 `max` 值不是有效數字，則輸入沒有最大值。
step: 指定每一次計算的跨距值，預設值為 1。
#### 驗證方式
range 使用的驗證方式如下：
- 若無法將 `value` 值轉換為有效浮點數值，則驗證失敗。
- `value` 值不得小於最小數值 `min`，`min` 值預設為 0。
- `value` 值不得大於最大數值 `max`，`max` 值預設為 100。

### data-* attribute
由 `data-[全域屬性]`構成的自定義 data 屬性，它能令 HTML 與其 DOM 擁有給腳本用的交換資訊。因此我們可以透過 `HTMLElement.dataset.testValue` 或 `HTMLElement.dataset["testValue"]` 取得該值。

以下幾種自定義命名規則：
- 名字絕對不能以 xml 起頭，無論是否用於 xml、
- 名字絕對不能包含分號（U+003A）、
- 名字絕對不能包含大寫 A 到大小 Z 的拉丁字母。

自訂的 data 屬性名 data-test-value 因為所有的減號（U+002D）都會被消去、緊接著的第一個字母，並且改為駝峰式命名。
### CSS variables
在 CSS3 中我們可直接在 CSS 內定義變數。

### addEventListener
### HTMLElement.dataset
該語法允許在讀取與寫入模式時使用HTML或DOM裡，所有設置在元件上的自定義資料屬性(data-*)。他是一個DOMStringMap,每個項目表示一個不同的資料屬性。

**注意的是，dataset可以被讀取，但不能直接被修改。**
# [Day02] Css + JS Clock
### CSS variables
在 CSS3 中我們可直接在 CSS 內定義變數。
```

```
### input type - range
`<input type="range" />` 提供了使用者指定範圍內數值的功能。
由於 rang 並不像其他直接輸入數值的輸入框，因此對於 rang 來說是否精確並不重要，僅需要驗證數值是否超出範圍。

### 基礎語法
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

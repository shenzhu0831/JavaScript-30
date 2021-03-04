### Day 3 
### sort()
將傳入參數轉換為字串再進行比較並且排序，預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。

如果 compareFunction 被應用，陣列元素們將根據比較函式之回傳值來排序。如果 a 和 b 為被比較之兩元素，則：
- 若 compareFunction(a, b) 的回傳值小於 0，則會把 a 排在小於 b 之索引的位置，即 a 排在 b 前面。
- 若 compareFunction(a, b) 回傳 0，則 a 與 b 皆不會改變彼此的順序，但會與其他全部的元素比較來排序。備註：ECMAscript 標準並不保證這個行為，因此不是所有瀏覽器（如 Mozilla 版本在 2003 以前）都遵守此行為。
- 若 compareFunction(a, b) 的回傳值大於 0，則會把 b 排在小於 a 之索引的位置，即 b 排在 a 前面。

compareFunction(a, b) 在給予一組特定元素 a 及 b 為此函數之兩引數時必須總是回傳相同的值。若回傳值不一致，排序順序則為 undefined。

將數字從小排到大：
```javascript
function compare(a, b) {
  if (在某排序標準下 a 小於 b) {
    return -1;
  }
  if (在某排序標準下 a 大於 b) {
    return 1;
  }
  // a 必須等於 b
  return 0;
}
```

也可以寫成：
```javascript
function compareNumbers(a, b) {
  return a - b;
}
```

compareFunction 可以被陣列中的各個元素多次呼叫。依據 compareFunction 的特性，這將會產生大量運算。越多元素要排序 compareFunction 就越多工作要做，因此選擇使用 map 來排列也就是一個更明智的選擇。

### reduce()
```javascript
arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
```
- callback function
  - accumulator
    用來累積回呼函式回傳值的累加器（accumulator）或 initialValue（若有提供的話，詳如下敘）。累加器是上一次呼叫後，所回傳的累加數值。
  - currentValue
    原陣列目前所迭代處理中的元素。
  - index(選填)
    處理元素在原陣列內的 index 值
  - array
    reduce() 所處理的陣列
- initialValue
  於第一次呼叫 callback 時要傳入的累加器初始值。若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。假如於一個空陣列呼叫 reduce() 方法且沒有提供累加器初始值，將會發生錯誤。

#### 遇到問題
在 callback function 內，傳入的資料格式為 Object，該 Object 作為計數器與每一次迭代的元素相加，會造成型別問題。
以本題目舉例：
total -> Object
inventor.passed / inventor.year -> Number
兩者相加會先轉型為 String 在相加，結果為 "[Object, Object]Number"
const panelList = document.querySelectorAll(".panel")
// openActive.addEventListener('click', removeActive)

function toggleActive() {
  // 檢查自己有無 open class 
  // 如果有
    // 就移除掉
  if(this.classList.contains('open')){
    this.classList.remove('open')
  } else {
    // 如果沒有
      // 1. 移除其他人的 open class 
      // 2. 在自己身上新增 open class 
    removeActive()
    this.classList.add('open')
  }
}

function textTransition(element){
  if(element.propertyName.includes('flex')){
    this.classList.toggle('open-active')
  }
}

function removeActive(){
  const openActive = document.querySelector(".open")
  if(!openActive) {
    return
  }

  openActive.classList.remove('open')
}

panelList.forEach(panel => {
  panel.addEventListener('click', toggleActive)
})

panelList.forEach(panel => {
  panel.addEventListener('transitionend', textTransition)
})

// 點擊畫面
//   展開元素
//     停留在最後效果畫面

//   點擊其他元素
//     關閉上一個效果畫面
//       展開點擊的元素


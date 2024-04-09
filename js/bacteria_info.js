var toggleButton = document.getElementById('toggleButton');
  var content = document.getElementById('content');

  // 設定點擊按鈕的事件處理函式
  toggleButton.addEventListener('click', function() {
    // 切換內容的顯示狀態
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      toggleButton.textContent = '點我隱藏內容';
    } else {
      content.style.display = 'none';
      toggleButton.textContent = '點我展開內容';
    }
  });
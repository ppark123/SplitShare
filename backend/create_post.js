function redirectToHome() {
    window.location.href = "../frontend/index.html";
}

function showPopup() {
    document.getElementById('postPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('postPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
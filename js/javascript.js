let scrollToBottom = document.getElementById('scroll-to-bottom');
let pageBottom = document.querySelector('#page-bottom');

scrollToBottom.addEventListener('click', ()=> {
console.log("testpoint");
  pageBottom.scrollIntoView();
})

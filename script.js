const bg = document.getElementById('bg')
const originalButton = document.getElementById('original-btn')
const darkButton = document.getElementById('dark-btn')
const lightButton = document.getElementById('light-btn')
const greenButton = document.getElementById('green-btn')

const buttons = [originalButton, darkButton, lightButton, greenButton]

buttons.forEach(function(button) {
  button.addEventListener('click', changeBg)            
})

function changeBg(btn) {
  const button = btn.target
  if (button == originalButton) {
    document.body.style.backgroundColor = '#FFDFD3';
    let header = document.getElementById('header');
    header.style.backgroundColor = '#FEC8D8';
    let nav = document.getElementById('nav');
    nav.style.backgroundColor = '#E0BBE4';
  } else if (button == darkButton) {
      document.body.style.backgroundColor = '#101010';
      let header = document.getElementById('header');
      header.style.backgroundColor = '#202020';
      let nav = document.getElementById('nav');
      nav.style.backgroundColor = '#080808';
  } else if (button == lightButton) {
      document.body.style.backgroundColor = '#ffffff';
      let header = document.getElementById('header');
      header.style.backgroundColor = '#f0f0f0';
      let nav = document.getElementById('nav');
      nav.style.backgroundColor = '#d0d0d0';
  } else {
      document.body.style.backgroundColor = '#e8f4ea';
      let header = document.getElementById('header');
      header.style.backgroundColor = '#d2e7d6';
      let nav = document.getElementById('nav');
      nav.style.backgroundColor = '#b8d8be';
  }}


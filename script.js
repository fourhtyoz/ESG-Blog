const bg = document.getElementById('bg')
const originalButton = document.getElementById('original-btn')
const darkButton = document.getElementById('dark-btn')


// Change backgrounds
const buttons = [originalButton, darkButton]
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

    let linkBtns = document.getElementsByTagName('button')
    for (i of linkBtns) {
      i.style.backgroundColor = '#000000';
      i.style.border = '1px solid #FFDFD3';
      i.style.color = '#FFDFD3';
    }
  } else {
      document.body.style.backgroundColor = '#121212';
      
      let header = document.getElementById('header');
      header.style.backgroundColor = '#121212';
      
      let nav = document.getElementById('nav');
      nav.style.backgroundColor = '#91C788';

      let links = document.getElementsByTagName('a')
      for (i of links) {
        i.style.backgroundColor = '#000000';
        i.style.border = '1px solid #91C788';
        i.style.color = '#91C788';
      }
      
      let linkBtns = document.getElementsByTagName('button')
      for (i of linkBtns) {
        i.style.backgroundColor = '#000000';
        i.style.border = '1px solid #91C788';
        i.style.color = '#91C788';
      }

      let menuBtn = document.getElementsById('menu-btn')
      menuBtn.addEventListener('mouseover', ()=> {
          menuBtn.style.backgroundColor = '#91C788';
          menuBtn.style.border = '1px solid #000000';
          menuBtn.style.color = '#000000';
      })
    }}

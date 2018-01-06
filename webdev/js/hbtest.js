var open = false;

function MenuAnim() {
  var menu = document.getElementById('ul');
  if (open) {
    open = false;
    menu.style.animationName = 'slideOut';
    menu.style.animationDuration = '1s';
    menu.style.animationFillMode = 'forwards';
  }
  else {
    open = true;
    menu.style.animationName = 'slideIn';
    menu.style.animationDuration= '1s'
    menu.style.animationFillMode = 'forwards';
  }
}
    

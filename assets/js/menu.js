var toggleMenu = document.getElementById('toggleMenu');

function abrirMenu(menu){
  menu.classList.add('menu-ativo');
}

function fecharMenu(menu){
  menu.classList.remove('menu-ativo');
}

toggleMenu.addEventListener('click',function(event){
  var menu = document.querySelector('.menu');

  if(menu.className == 'menu'){
    abrirMenu(menu);
  }
  else{
    fecharMenu(menu);
  }
})

var menuLista = document.querySelector('.menu__lista');

menuLista.addEventListener('click',function(){
  var menu = document.querySelector('.menu');
  fecharMenu(menu);
})

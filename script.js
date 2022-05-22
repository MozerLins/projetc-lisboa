var myCarousel = document.querySelector('#carousel-index');
//var MenuDropdown = document.querySelector('#CollapseMenu');
//var triggerTabList = document.getElementById('usermenu');

function myCarouse(){ //Carregar o Carrosel
    var logotipo = new bootstrap.Carousel(myCarousel, {
      interval: 500000,
      wrap: true
    })
}

function abreportal() {

}


/*
function MenuDropdown(){
  const bsCollapse = new bootstrap.Collapse('#myCollapse', {
    toggle: false
  })
}

function QuerySelector(){
  triggerTabList.addEventListener("click", function(event) {
     menuselect = event.target.innerHTML;
     const triggerEl =document.querySelector('#usermenu').innerHTML = menuselect
     
     triggerEl.addEventListener('shown.bs.tab', event => {
      event.target // newly activated tab
      event.relatedTarget // previous active tab
    })
 })
 
}*/
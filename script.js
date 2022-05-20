var myCarousel = document.querySelector('#carousel-index')
var MenuDropdown = document.querySelector('#CollapseMenu')
var triggerTabList = document.getElementById('usermenu')

QuerySelector();

function myCarouse(){
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000000,
      wrap: true
    })
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
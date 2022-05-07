var myCarousel = document.querySelector('#carousel-index')

function myCarouse(){
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000000,
      wrap: true
    })
}
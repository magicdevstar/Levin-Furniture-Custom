$(document).ready(function () {
  $(".banner-slick-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
  });
  for(let i = 3; i < 8; i ++){
    $(`.collection-list-slider--${i}`).slick({
      slidesToShow: i,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
    });
  }
})
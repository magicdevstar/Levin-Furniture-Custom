$(document).ready(function () {
  $(".banner-slick-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
  });
  for (let i = 3; i < 8; i++) {
    $(`.collection-list-slider--${i}`).slick({
      slidesToShow: i,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow:
        '<button type="button" class="collection--slick-arrow collection--slick-prev-arrow">&#10094;</button>',
      nextArrow:
        '<button type="button" class="collection--slick-arrow collection--slick-next-arrow">&#10095;</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: "unslick",
        },
      ],
    });
  }
});

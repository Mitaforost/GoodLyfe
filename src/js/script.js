$(document).ready(function (){
    $('.carousel__inner').slick(
        {
            speed: 1200,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                }
            ]
        }
    )
})
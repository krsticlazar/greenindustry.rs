document.addEventListener('DOMContentLoaded', (event) => {
    function getCurrentYear() {
        const yearElement = document.getElementById('');
        if (yearElement) {
            yearElement.innerText = new Date().getFullYear();
        } else {
            console.error('Element with ID "" not found.');
        }
    }

    getCurrentYear();

    //client section owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

});
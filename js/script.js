document.addEventListener("DOMContentLoaded", function() {
    
    //#region Navbar
    var currentPath = window.location.pathname.split("/").pop();
    var homeButton = document.getElementById('home-link');
    var dozvoleButton = document.getElementById('dozvole-link');
    var galerijaButton = document.getElementById('galerija-link');
    var onamaButton = document.getElementById('onama-link');
    var kontaktButton = document.getElementById('kontakt-link');

    function setActiveButton(button) {
        button.classList.add('active');
    }

    if (homeButton && (currentPath === 'index.html' || currentPath === '')) {
        setActiveButton(homeButton);
    } else if (dozvoleButton && currentPath === 'dozvole.html') {
        setActiveButton(dozvoleButton);
    } else if (galerijaButton && currentPath === 'galerija.html') {
        setActiveButton(galerijaButton);
    } else if (onamaButton && currentPath === 'onama.html') {
        setActiveButton(onamaButton);
    } else if (kontaktButton && currentPath === 'kontakt.html') {
        setActiveButton(kontaktButton);
    }
    //#endregion Navbar

    // #region Swiper initialization
    const customSwiper = new Swiper('.customSwiper', {
        loop: true, // Infinite scrolling
        speed: 1000,
        autoplay: {
            delay: 4000,
        },
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 5, 
                spaceBetween: 10,
            }
        }
    });
    // #endregion Swiper initialization

    // #region Swiper initialization
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '2',
        spaceBetween: 0, // Razmak između slajdova
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            767: {
                slidesPerView: 3, 
                spaceBetween: 10,
            }
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // #endregion Swiper initialization
    
    // #region FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isExpanded = answer.classList.contains('open');
    
            // Zatvori sve odgovore
            faqQuestions.forEach(q => {
                const ans = q.nextElementSibling;
                ans.classList.remove('open');
                q.querySelector('.faq-toggle').textContent = '+';
            });
    
            // Otvori trenutni odgovor ako nije već otvoren
            if (!isExpanded) {
                answer.classList.add('open');
                this.querySelector('.faq-toggle').textContent = '-';
            }
        });
    });
    // #endregion FAQ toggle

    // #region kontakt form
    const orderButtons = document.querySelectorAll('.order-btn');
    const subjectSelect = document.getElementById('subject');
    const kontaktFormSection = document.getElementById('kontakt-form');

    orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const subjectValue = this.getAttribute('data-subject');
        subjectSelect.value = subjectValue;

        // Scroll to kontakt form
        kontaktFormSection.scrollIntoView({ behavior: 'smooth' });
    });
    });
    //#endregion kontakt form
    

});
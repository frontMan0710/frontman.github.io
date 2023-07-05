const htmlCode = `
    <header class="header">
        <div class="head-wr">
            <div class="head-wr__logo">
                <img src="../images/logo.png" alt="">
            </div>
            <ul class="head-wr__links-wr">
                <li class="head-wr__links-wr-link">
                    <a href="#">Home</a>
                </li>
                <li class="head-wr__links-wr-link">
                    <a href="#">About</a>
                </li>
                <li class="head-wr__links-wr-link">
                    <a href="#">Service</a>
                </li>
                <li class="head-wr__links-wr-link">
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div class="head-wr__search-bar">
                <input type="text" placeholder="Search..">
                <button type="submit">
                    <ion-icon name="search-outline"></ion-icon>
                </button>
            </div>
        </div>
    </header>
    <!--Main----------------------------------------------------------------------------------------------------------->
    <main class="main">
        <!---Content----------------------------------------------------------------------------------------------->
        <section class="start">
            <div class="start-content">
                <div class="text-wrapper fade-in">
                    <h1 class="text-wrapper__title">First I wanted to be a veterinarian</h1>
                    <p class="text-wrapper__notation">
                        Lorem ipsum available but the majoty suffered alteration in some form,
                        by injected humour randomised words.
                    </p>
                    <div class="buttons">
                        <a href="#" class="buttons__button">
                            Contact Us
                        </a>
                        <a href="#" class="buttons__button">
                            Our Service
                        </a>
                    </div>
                </div>

                <div class="start-content__dog-image">
                    <img src="../images/start-dog.png" alt="" width="419" height="604">
                </div>
            </div>
        </section>

        <section class="first">
            <div class="first-content">
                <div class="first-text-wrapper">
                    <h2 class="first-text-wrapper__first-title fade-in">As a veterinarian and lover of animals.</h2>
                    <p class="first-text-wrapper__first-body-text fade-in">
                        Lorem ipsum available but the majoty suffered alteration in some form,
                        by humour randomised words.
                    </p>
                    <div class="first-button fade-in">
                        <a href="#" class="first-button__button">
                            Our Service
                        </a>
                    </div>
                </div>

                <div class="first-content__dog-image">
                    <img src="../images/first-dog.png" alt="" class="dog-image">
                    <img src="../images/empty.png" alt="" class="empty-to-image1">
                </div>
            </div>
        </section>

        <section class="second">
            <div class="second-content">
                <div class="second-text-wrapper">
                    <h2 class="second-text-wrapper__second-title fade-in sub-title">Title Here</h2>
                    <div class="body-text-wrapper">
                        <p class="body-text-wrapper__second-body-text body-text fade-in">
                            Lorem ipsum available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>

                <div class="cards">
                    <div class="cards__card">
                        <img src="../images/card1.png" alt="">
                        <div class="second-text-block fade-in">
                            <h2 class="second-text-block__card-title">Veterinarian</h2>
                            <p class="second-text-block__card-text">
                                Lorem ipsum available, but the majority have suffered alteration in some.
                            </p>
                        </div>
                    </div>
                    <div class="cards__card">
                        <img src="../images/card2.png" alt="">
                        <div class="second-text-block fade-in">
                            <h2 class="second-text-block__card-title">Vaccination Care</h2>
                            <p class="second-text-block__card-text">
                                Lorem ipsum available, but the majority have suffered alteration in some.
                            </p>
                        </div>
                    </div>
                    <div class="cards__card">
                        <img src="../images/card3.png" alt="">
                        <div class="second-text-block fade-in">
                            <h2 class="second-text-block__card-title">Dental Care</h2>
                            <p class="second-text-block__card-text">
                                Lorem ipsum available, but the majority have suffered alteration in some.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="third">
            <div class="third-content">
                <div class="third-content__dog-image">
                    <img src="../images/third-dog.png" alt="" class="third-dog-image">
                    <img src="../images/empty.png" alt="" class="empty-to-image2">
                </div>

                <div class="third-text-wrapper">
                    <h2 class="third-text-wrapper__title fade-in">As a veterinarian and lover of animals</h2>
                    <p class="third-text-wrapper__body-text fade-in">
                        Lorem ipsum available but the majoty suffered alteration in some form,
                        by humour randomised words
                    </p>
                    <div class="third-button fade-in">
                        <a href="#" class="third-button__button">
                            Our Service
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="fourth">

            <div class="fourth-content">

                <div class="fourth-text-wrapper">
                    <h2 class="fourth-text-wrapper__fourth-title fade-in sub-title">Title Here</h2>
                    <div class="body-text-wrapper">
                        <p class="body-text-wrapper__fourth-body-text body-text fade-in">
                            Lorem ipsum available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>

                <div class="cards">
                    <div class="cards__card">
                        <img src="../images/dog-to-card.png" alt="">
                        <div class="cards__price fade-in">
                            <span class="original-price">
                                <span class="transparent-empty">.</span>$50
                            </span>
                            <span class="discounted-price">$30</span>
                        </div>
                        <button class="cards__buy fade-in">
                            Buy Now
                        </button>
                    </div>
                    <div class="cards__card">
                        <img src="../images/dog-to-card2.png" alt="">
                        <div class="cards__price fade-in">
                            <span class="original-price">
                                <span class="transparent-empty">.</span>$40
                            </span>
                            <span class="discounted-price">$25</span>
                        </div>
                        <button class="cards__buy fade-in">
                            Buy Now
                        </button>
                    </div>
                    <div class="cards__card">
                        <img src="../images/dog-to-card3.png" alt="">
                        <div class="cards__price fade-in">
                            <span class="original-price">
                                <span class="transparent-empty">.</span>$45
                            </span>
                            <span class="discounted-price">$20</span>
                        </div>
                        <button class="cards__buy fade-in">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>

        </section>

        <section class="fifth">
            <div class="fifth-content">
                <div class="fifth-text-wrapper">
                    <h2 class="fifth-text-wrapper__fifth-title fade-in sub-title">The vetcare team</h2>
                    <div class="body-text-wrapper">
                        <p class="body-text-wrapper__fifth-body-text body-text fade-in">
                            Lorem ipsum available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>

                <div class="doctor-cards">
                    <div class="cards__card">
                        <img src="../images/doc1.png" alt="" class="doctor-card">
                        <div class="doctors-text-block fade-in">
                            <span class="doctors-text-block__card-title3">Jennifer Mullen</span>
                            <p class="doctors-text-block__card-text3">
                                VETERINARY
                            </p>
                        </div>
                        <div class="contact-links fade-in">
                            <a href="#">
                                <img src="../images/instagram.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/facebook.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/twitter.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/whatsapp.png" alt="" class="contact-links__link">
                            </a>
                        </div>
                    </div>
                    <div class="cards__card">
                        <img src="../images/doc2.png" alt="">
                        <div class="doctors-text-block fade-in">
                            <span class="doctors-text-block__card-title3">Sheeren Collins</span>
                            <p class="doctors-text-block__card-text3">
                                ADMINISTRATION
                            </p>
                        </div>
                        <div class="contact-links fade-in">
                            <a href="#">
                                <img src="../images/instagram.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/facebook.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/twitter.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/whatsapp.png" alt="" class="contact-links__link">
                            </a>
                        </div>
                    </div>
                    <div class="cards__card">
                        <img src="../images/doc3.png" alt="">
                        <div class="doctors-text-block fade-in">
                            <span class="doctors-text-block__card-title3">Jennifer Mullen</span>
                            <p class="doctors-text-block__card-text3">
                                VETERINARY
                            </p>
                        </div>
                        <div class="contact-links fade-in">
                            <a href="#">
                                <img src="../images/instagram.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/facebook.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/twitter.png" alt="" class="contact-links__link">
                            </a>
                            <a href="#">
                                <img src="../images/whatsapp.png" alt="" class="contact-links__link">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sixth">
            <div class="sixth-content">
                <div class="sixth-sections-wrapper">
                    <div class="sixth-section">
                        <div class="section-wrapper">
                            <img src="../images/heart.png" alt="">
                            <span class="sixth-section__statistic fade-in">+34793</span>
                            <span class="sixth-section__mark fade-in">Happy Clients</span>
                        </div>
                    </div>

                    <div class="sixth-section">
                        <div class="section-wrapper">
                            <img src="../images/stetoscop.png" alt="">
                            <span class="sixth-section__statistic fade-in">+45382</span>
                            <span class="sixth-section__mark fade-in">Departament</span>
                        </div>
                    </div>

                    <div class="sixth-section">
                        <div class="section-wrapper">
                            <img src="../images/igla.png" alt="">
                            <span class="sixth-section__statistic fade-in">+54762</span>
                            <span class="sixth-section__mark fade-in">Vaccinations</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="eight">
            <div class="eight-content">
                <div class="eight-text-wrapper">
                    <h2 class="eight-text-wrapper__eight-title fade-in sub-title">Recent Posts</h2>
                    <div class="body-text-wrapper">
                        <p class="body-text-wrapper__eight-body-text body-text fade-in">
                            Lorem ipsum available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>

                <div class="eight-cards">
                    <div class="eight-cards__eight-card border-enable-style">
                        <img src="../images/med1.png" alt="">
                        <div class="text-block fade-in">
                            <h2 class="text-block__eight-card-title">As a veterinarian and lovers of animals</h2>
                            <a href="#" class="text-block__calendar">FEBRUARY 09.2020</a>
                            <p class="text-block__eight-card-text">
                                Lorem ipsum available, but the majority have suffered alteration in some words which look.
                            </p>
                        </div>

                        <div class="collapse fade-in">
                            <input type="checkbox" id="collapse-head">
                            <label for="collapse-head">Read More</label>
                            <div class="col-content">
                                <p>
                                    Я не знаю, что должно быть здесь, поэтому я сделал коллап :)
                                    UPD: Это было больно...
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="eight-cards__eight-card">
                        <img src="../images/med2.png" alt="">
                        <div class="text-block fade-in">
                            <h2 class="text-block__eight-card-title">As a veterinarian and lovers of animals</h2>
                            <a href="#" class="text-block__calendar">FEBRUARY 09.2020</a>
                            <p class="text-block__eight-card-text">
                                Lorem ipsum available, but the majority have suffered alteration in some words which look.
                            </p>
                        </div>

                        <div class="collapse fade-in">
                            <input type="checkbox" id="collapse-head1">
                            <label for="collapse-head1">Read More</label>
                            <div class="col-content">
                                <p>
                                    Я не знаю, что должно быть здесь, поэтому я сделал второй коллапс :)
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="eight-cards__eight-card border-enable-style">
                        <img src="../images/med3.png" alt="">
                        <div class="text-block fade-in">
                            <h2 class="text-block__eight-card-title">As a veterinarian and lovers of animals</h2>
                            <a href="#" class="text-block__calendar">FEBRUARY 09.2020</a>
                            <p class="text-block__eight-card-text">
                                Lorem ipsum available, but the majority have suffered alteration in some words which look.
                            </p>
                        </div>

                        <div class="collapse fade-in">
                            <input type="checkbox" id="collapse-head2">
                            <label for="collapse-head2">Read More</label>
                            <div class="col-content">
                                <p>
                                    Я не знаю, что должно быть здесь, поэтому я сделал и третий коллапс таким же, оригинальности не занимать, правда? :)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="footer-content">
            <div class="links-wrapper fade-in">
                <h2 class="about-title">About</h2>
                <ul class="links-list">
                    <li class="links-list__link">
                        <a href="#">History</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Our Team</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Brand Guidelines</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Terms & Condition</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div class="links-wrapper fade-in">
                <h2 class="services-title">Services</h2>
                <ul class="links-list">
                    <li class="links-list__link">
                        <a href="#">How to Order</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Our Product</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Order Status</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Promo</a>
                    </li>
                    <li class="links-list__link">
                        <a href="#">Payment Method</a>
                    </li>
                </ul>
            </div>
            <div class="support">
                <div class="support-text-wrapper fade-in">
                    <h2 class="support-text-wrapper__title">Title Here</h2>
                    <p class="support-text-wrapper__notation">Lorem ipsum availalble, but the majorit</p>
                </div>
                <div class="support-input-wrapper">
                    <input class="support-input-wrapper__input" type="text">
                    <button type="submit" class="support-input-wrapper__button">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </button>
                </div>
                <ul class="support-contacts-wrapper">
                    <li class="support-contacts-wrapper__link">
                        <a href="https://www.instagram.com/">
                            <img src="../images/instagram.png" height="44" width="44"/>
                        </a>
                    </li>
                    <li class="support-contacts-wrapper__link">
                        <a href="https://uk-ua.facebook.com/">
                            <img src="../images/facebook.png" height="44" width="44"/>
                        </a>
                    </li>
                    <li class="support-contacts-wrapper__link">
                        <a href="https://twitter.com/?lang=ru">
                            <img src="../images/twitter.png" height="44" width="44"/>
                        </a>
                    </li>
                    <li class="support-contacts-wrapper__link">
                        <a href="https://www.whatsapp.com/?lang=ru">
                            <img src="../images/whatsapp.png" height="44" width="44"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
`;

// Функция для проверки наличия отличительных классов
function checkDistinctClasses(htmlCode) {
    const distinctClasses = new Set();
}
const distinctClasses = checkDistinctClasses(htmlCode);

console.log(distinctClasses);
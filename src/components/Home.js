import React, { useState } from 'react';
import "./home.css";
import Carousel from './Carousel';

export default function Home() {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const toggleEnlarge = () => {
        setIsEnlarged(!isEnlarged);
    };
    const FeatureBlock = ({ icon, title, subTitle, description }) => {
        return (
            <div className="feature">
                <i className={`fa ${icon} feature-icon`}></i>
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
                <p>{description}</p>
            </div>
        );
    }
    const toggleFaq = (e) => {
        const question = e.currentTarget;
        const answer = question.nextElementSibling;
        const arrowIcon = question.querySelector('.arrow-icon');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)';
            question.style.fontWeight = '400';
        } else {
            // Hide all answers before displaying the selected one: adjust selector as needed
            document.querySelectorAll('.faq__answer').forEach(ans => ans.style.display = 'none');
            document.querySelectorAll('.arrow-icon').forEach(icon => icon.style.transform = 'rotate(0deg)');

            answer.style.display = 'block';
            arrowIcon.style.transform = 'rotate(180deg)';
            question.style.fontWeight = '700';
        }
    }

    return (
        <>
            <div className="image-poster">
                <img src="https://www.wticabs.com/images/Banner1.webp" alt="Cab Services" />
                <div className="poster-text">
                    Best Cab Services for Airport, Railway Station, and Outstation | AKcabs
                </div>
            </div>

            <div className="info-flex-container bg-teal-100">
                <div className="car-container" onClick={toggleEnlarge}>
                    <img
                        src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png"
                        alt="Car"
                        className={`flex-car-image ${isEnlarged ? 'enlarged' : ''}`}
                    />
                </div>
                <div className="info-content">
                    <div className="info-header">
                        <h1>
                            <span>Discover New Horizons,</span>
                            <span>Travel Beyond Limits</span>
                            <span>with Us</span>
                        </h1>
                    </div>
                    <div className="info-description">
                        <p><span>We are</span> changing the way you view transport, making it more individual oriented, eco-friendly, and convenient.</p>
                    </div>
                    <div className="info-stats">
                        <div className="stat">
                            <h2>1500<span className="stat-highlight">+</span></h2>
                            <p className='text-black'>Passengers Covered</p>
                        </div>
                        <div className="stat">
                            <h2>1002<span className="stat-highlight">+</span></h2>
                            <p className='text-black'>Drivers</p>
                        </div>
                        <div className="stat">
                            <h2>50<span className="stat-highlight">+</span></h2>
                            <p className='text-black'>Cities Covered</p>
                        </div>
                    </div>
                </div>
            </div>

            {isEnlarged && (
                <div className="backdrop" onClick={toggleEnlarge}>
                    <img
                        src="https://pngimg.com/uploads/mercedes/mercedes_PNG80135.png"
                        alt="Enlarged Car"
                        className="enlarged-image"
                    />
                </div>
            )}

            <center><h1 class="text-4xl font-bold  pt-5 pb-8">Affordable & On Time Cabs</h1>
            </center>

            {/* Affordable & On Time Cabs */}

            <section className="card-section">
                <div class="heading-container">
                </div>
                <div className="card-container">

                    {/* Card: City */}
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--city">
                                        <svg version="1.1" id="Layer_1" viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }} xmlSpace="preserve" className="card-front__icon">
                                            {/* <!-- SVG Path Data --> */}
                                        </svg>
                                        <h2 className="card-front__heading">Airport Cab Services</h2>
                                        <p className="card-front__text-price">From ₹ 400</p>
                                    </div>
                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--city">View me</p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <video className="video__container" autoPlay muted loop>
                                        <source className="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--city">For urban lovers</h3>
                                <p className="inside-page__text">
                                    As cities never sleep, there are always something going on, no matter what time!
                                </p>
                                <a href="#" className="inside-page__btn inside-page__btn--city">View deals</a>
                            </div>
                        </div>
                    </div>

                    {/* Card: Ski */}
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--ski">
                                        <svg version="1.1" id="Layer_1" viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }} xmlSpace="preserve" className="card-front__icon">
                                            {/* <!-- SVG Path Data --> */}
                                        </svg>
                                        <h2 className="card-front__heading">Outstation Cab </h2>
                                        <p className="card-front__text-price">From ₹ 4000</p>
                                    </div>
                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--ski">View me</p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <video className="video__container" autoPlay muted loop>
                                        <source className="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--ski">For snow lovers</h3>
                                <p className="inside-page__text">Love snow? Why not take up exciting ski-in sessions and hit the slope?</p>
                                <a href="#" className="inside-page__btn inside-page__btn--ski">View deals</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--city">
                                        <svg version="1.1" id="Layer_1" viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }} xmlSpace="preserve" className="card-front__icon">
                                            {/* <!-- SVG Path Data --> */}
                                        </svg>
                                        <h2 className="card-front__heading">Workplace Outing</h2>
                                        <p className="card-front__text-price">From ₹ 3000</p>
                                    </div>
                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--city">View me</p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <video className="video__container" autoPlay muted loop>
                                        <source className="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--city">For Workplace Outing</h3>
                                <p className="inside-page__text">
                                    Must try community Outing with teammates !</p>
                                <a href="#" className="inside-page__btn inside-page__btn--city">View deals</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="features-container bg-teal-100">
                <FeatureBlock
                    icon="fa-headset"
                    title="24x7 Customer Support"
                    subTitle="A dedicated 24x7 customer support team always at your service to help solve any problem"
                    description=""
                />
                <FeatureBlock
                    icon="fa-shield-alt"
                    title="Your Safety First"
                    subTitle="Keep your loved ones informed about your travel routes or call emergency services when in need"
                    description=""
                />
                <FeatureBlock
                    icon="fa-star"
                    title="Top Rated Driver-Partners"
                    subTitle="All our driver-partners are background verified and trained to deliver only the best experience"
                    description=""
                />
            </div>
            <Carousel />
            {/* FAQ */}
            <center>
                <div className='pt-10'>
                    <article className="faq-card">
                        <div className="faq__content">
                            <h1 className="faq__title">FAQ</h1>
                            {[...Array(5)].map((_, i) => (
                                <div className="faq__item" key={i}>
                                    <h2 className="faq__question" onClick={toggleFaq}>
                                        Example Question {i + 1}?
                                        <img className="arrow-icon" src="images/icon-arrow-down.svg" alt="" aria-hidden="true" />
                                    </h2>
                                    <p className="faq__answer">
                                        Answer for question {i + 1}.
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="imgs__container">
                            <picture>
                                <source media="(min-width: 900px)" srcSet="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/bg-pattern-desktop.svg" />
                                <source media="(min-width: 0px)" srcSet="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/bg-pattern-mobile.svg" />
                                <img className="img-bg" src="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/bg-pattern-desktop.svg" alt="" aria-hidden="true" />
                            </picture>
                            <picture>
                                <source media="(min-width: 900px)" srcSet="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/illustration-woman-online-desktop.svg" />
                                <source media="(min-width: 0px)" srcSet="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/illustration-woman-online-mobile.svg" />
                                <img className="img-woman" src="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/illustration-woman-online-desktop.svg" alt="" aria-hidden="true" />
                            </picture>
                        </div>
                    </article>
                </div>
            </center>



            




        </>
    );
}
// Core
import React, { FC } from 'react';

// Component
import { Slide } from './Slide';

// React Slick
import Slider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

// Style
import { AbfrageSliderContainer, SliderRight } from './style';

// Images
import spaceship from '../../../assets/images/icons/spaceship-icon.png';
import slider1 from '../../../assets/images/slider/slider-1.jpg';

// Types
import { DotsType, SettingsType } from './types';


export const AbfrageSlider: FC = () => {
    const settings: SettingsType = {
        dots:           true,
        infinite:       true,
        speed:          500,
        slidesToShow:   1,
        slidesToScroll: 1,
        arrows:         false,
        dotsClass:      'custome-dots',
        appendDots:     (dots) => (
            <div>
                <ul className = 'custome-dots'>{ dots }</ul>
                <SliderRight>
                    <div className = 'slide-right-container' >
                        <div
                            className = { dots[0].props.className }
                            onClick = { () => onSliderRightClick(dots, 0) } >
                            <img
                                alt = 'spaceship'
                                src = { spaceship }
                            />
                            <div className = 'slider-right-text'>
                                <h4>Für Unternehmen</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div
                            className = { dots[1].props.className }
                            onClick = { () => onSliderRightClick(dots, 1) } >
                            <img
                                alt = 'spaceship'
                                src = { spaceship }
                            />
                            <div className = 'slider-right-text' >
                                <h4>Für Unternehmen</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div
                            className = { dots[2].props.className }
                            onClick = { () => onSliderRightClick(dots, 2) } >
                            <img
                                alt = 'spaceship'
                                src = { spaceship }
                            />
                            <div className = 'slider-right-text'>
                                <h4>Für Unternehmen</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </div>
                </SliderRight>
            </div>
        ),
    };

    let slider: any = null;

    const onSliderRightClick = (dots: DotsType, index: number):any => {
        slider.slickGoTo(dots[ index ].key);
    };

    return (
        <AbfrageSliderContainer>
            <Slider
                { ...settings }
                ref = { (slide) => {
                    return (
                        slider = slide
                    );
                } }>
                <Slide
                    imageAlt = 'Für-Unternehmen'
                    imagePath = { slider1 }
                    slideDescription = 'Starten Sie jetzt den Fragebogen und Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.'
                    slideTitle = 'Finde kostenlos innerhalb von 5 Minuten heraus, ob sich eine Unternehmensgründung in Deutschland für dich lohnt '
                />
                <Slide
                    imageAlt = 'Für-Privatpersonen'
                    imagePath = 'https://i.pinimg.com/736x/0b/18/fb/0b18fbf1bde2f5ae29d1f896f2025b56.jpg'
                    slideDescription = 'Starten Sie jetzt den Fragebogen und Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.'
                    slideTitle = 'Finde kostenlos innerhalb von 5 Minuten heraus, ob sich eine Unternehmensgründung in Deutschland für dich lohnt '
                />
                <Slide
                    imageAlt = 'Für-Existenzgründer'
                    imagePath = 'https://kartinki-cvetov.ru/images/po-cvetam/sinie/siniy_20.jpg'
                    slideDescription = 'Starten Sie jetzt den Fragebogen und Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.'
                    slideTitle = 'Finde kostenlos innerhalb von 5 Minuten heraus, ob sich eine Unternehmensgründung in Deutschland für dich lohnt '
                />
            </Slider>
        </AbfrageSliderContainer>
    );
};

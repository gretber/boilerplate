// Core
import React, { FC } from 'react';

// Styles
import { SliderLeft } from './style';

// Elements
import { Button } from '../../elements/Button';

export const Slide: FC<{    imagePath: string, imageAlt: string,
                            slideTitle: string, slideDescription: string }> = ({ imagePath, imageAlt, slideTitle, slideDescription }): JSX.Element => {
    return (
        <div>
            <SliderLeft>
                <div className = 'slide-left-container'>
                    <h2>{slideTitle}</h2>
                    <p>{slideDescription}</p>
                    <Button>Fragebogen starten</Button>
                </div>
            </SliderLeft>
            <div style = {{ backgroundColor: '#000' }}>
                <img
                    alt = { imageAlt }
                    src = { imagePath }
                    style = {{ height: '46vw', width: '100%', opacity: '0.6' }}
                />
            </div>
        </div>
    );
};

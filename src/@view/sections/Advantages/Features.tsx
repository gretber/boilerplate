// Core
import React, { FC } from 'react';

// Types
import { FeaturesPropTypes } from './types';

// Bootstrap
import { Col } from '@bootstrap-styled/v4';

export const Features: FC<FeaturesPropTypes> = ({ title, description, icon }) => {
    return (
        <Col sm = '4'>
            <div className = 'features-container'>
                <img
                    alt = 'icon'
                    src = { icon }
                />
                <div className = 'slider-right-text'>
                    <h4>{ title }</h4>
                    <p>{ description }</p>
                </div>
            </div>
        </Col>
    );
};

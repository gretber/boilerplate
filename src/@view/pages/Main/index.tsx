// Core
import React, { FC, useRef, useState } from 'react';

// Components
import { ErrorBoundary, Todo } from '../../components';

// Component
import { AbfrageSlider } from '../../components/AbfrageSlider';

// Sections
import { Advantages } from '../../sections';

// Styles
//import { Container } from './styles';

const Main: FC = () => {

    return (
        <>
            <AbfrageSlider />
            <Advantages />
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

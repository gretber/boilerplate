// Core
import React, { FC } from 'react';

// Components
import { LanguageDetector } from './LanguageDetector';

// Images
import logo from '../../../assets/images/logo.png';

// Styles
import { TopbarContainer, Logo, TopbarLeft, TopbarRight } from './styles';

// Elements
import { Button } from '../../elements/Button';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <TopbarLeft>
                <Logo src = { logo } />
                <p>Abfrage Software</p>
            </TopbarLeft>
            <TopbarRight>
                <LanguageDetector />
                <Button>JETZT STARTEN</Button>
            </TopbarRight>
        </TopbarContainer>
    );
};

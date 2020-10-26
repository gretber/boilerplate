// Core
import React, { FC } from 'react';

// Style
import { Language } from './styles';

export const LanguageDetector: FC = () => {
    const changeLanguage = 'Sprache ändern';

    return (
        <Language>
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0H0V18H30V0Z" fill="black"/>
                <path d="M30 6H0V18H30V6Z" fill="#DD0000"/>
                <path d="M30 12H0V18H30V12Z" fill="#FFCE00"/>
            </svg>
            <p>{ changeLanguage }</p>
        </Language>
    )
}

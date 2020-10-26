// Core
import React, { FC } from 'react';

// Types
import { OrganizationsPropTypes } from './types';

export const Organizations: FC<OrganizationsPropTypes> = ({ name, marked, onMarked, id }) => {
    return (
        <button
            className = { marked ? 'marked' : '' }
            onClick = { () => onMarked(id) } >
            { name }
        </button>
    );
};

// Core
import React, { useState } from 'react';

// Bootstrap
import { Container, Row, Col } from '@bootstrap-styled/v4';

//Styles
import { AdvantagesContainer, OrganizationsContainer, FeaturesContainer } from './style';

// Components
import { Organizations } from './Organizations';
import { Features } from './Features';

// Instruments
import { initialOrganizations, initialAdvantages } from './instruments';

export const Advantages = () => {
    const [ organizations, setOrganizations ] = useState(initialOrganizations);

    const onMarked = (id: number) => {
        const array = [ ...organizations ];
        const newArray = array.map((item) => {
            return (
                Object.assign(item, item.marked = false)
            )
        });
        const organization = newArray.find((organization) => organization.id === id);
        if (organization) {
            organization.marked = true;
            setOrganizations(newArray);
        }
    };

    return (
        <AdvantagesContainer>
            <Container>
                <Row>
                    <Col sm = '12'>
                        <h3>Deine Vorteile durch “Abfrage Software”</h3>
                    </Col>
                </Row>
                <OrganizationsContainer>
                    <Row>
                        <Col sm = '12'>
                            {
                                organizations.map((organization) => {
                                    return (
                                        <Organizations
                                            id = { organization.id }
                                            key = { organization.id }
                                            marked = { organization.marked }
                                            name = { organization.name }
                                            onMarked = { onMarked }
                                        />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </OrganizationsContainer>
                <FeaturesContainer>
                    <Row>
                        {
                            initialAdvantages.map((advantages) => {
                                return (
                                    <Features
                                        description = { advantages.description }
                                        icon = { advantages.icon }
                                        key = { advantages.id }
                                        title = { advantages.title }
                                    />
                                );
                            })
                        }
                    </Row>
                </FeaturesContainer>
            </Container>
        </AdvantagesContainer>
    );
};

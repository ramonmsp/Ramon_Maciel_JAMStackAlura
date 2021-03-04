import React from 'react';
import {CardArea, Card} from './styles';
import card from '../../../../public/images/card.png';

export default function CustomCard() {

    return(
        <CardArea>
            <Card>
                <Card.Image src={card} />
            </Card>
        </CardArea>

    );


}
import React from 'react';
import {CardArea, Card} from './styles';
import Text from '../../foundation/Text';
// import card from '../../../../public/images/card_svg.svg'

export default function CustomCard() {

    return(
        <Card>
            <Card.Image src='https://image.freepik.com/fotos-gratis/plano-de-fundo-texturizado-de-cores-de-pintura-multicolorida_23-2147836354.jpg' />
            <Card.Text>
                Project Report
            </Card.Text>
        </Card>

    );


}
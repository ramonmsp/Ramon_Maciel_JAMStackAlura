import React from 'react';
import { Card} from './styles';
import PropTypes from 'prop-types';

export default function CustomCard({title, src}) {

    return(
        <Card>
            <Card.Image src={src} />
            <Card.Text>
                {title}
            </Card.Text>
        </Card>

    );
}

CustomCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
};
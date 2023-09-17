import PropTypes from 'prop-types'
import { HiBadgeCheck } from 'react-icons/hi';
const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-3'>
            <HiBadgeCheck/>
            <p>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;
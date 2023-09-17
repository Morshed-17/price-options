import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='p-12 shadow-lg rounded-lg space-y-4 border-2'>
            <h2>
                <span className='text-4xl font-bold'>{price}</span>
                <span className=' text-gray-700'> /mon</span>
            </h2>
            <h4 className='text-2xl font-bold text-gray-700'>{name}</h4>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}/>)
            }
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
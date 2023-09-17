import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='p-12 shadow-lg rounded-lg border-2 flex flex-col'>
            <h2 className='mb-6'>
                <span className='text-4xl font-bold'>{price}</span>
                <span className=' text-gray-700'> /mon</span>
            </h2>
            <h4 className='text-2xl font-bold text-gray-700 mb-4'>{name}</h4>
            <div className='flex-grow mb-6'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}/>)
            }
            </div>
            <button className='bg-gray-700 font-semibold text-white py-3 w-full rounded-lg text-xl'>
                Buy Now
            </button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
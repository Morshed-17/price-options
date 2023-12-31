import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    return (
        <li>
            <a className='text-xl font-semibold' href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Link;
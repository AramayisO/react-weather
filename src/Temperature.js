import PropTypes from 'prop-types';

const Temperature = ({ temp }) => <span>{temp}&deg;</span>;

Temperature.propTypes = {
    temp: PropTypes.number.isRequired
};

export default Temperature;
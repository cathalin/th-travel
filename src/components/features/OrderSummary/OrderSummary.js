import React from 'react'; 
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = props => {
  return(
    <h2 className={styles.component}>Total: <strong>{calculateTotal(formatPrice(props.tripCost), props.options)}</strong></h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
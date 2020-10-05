import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icons}>
    {required ? '' : (
      <div
        onClick={() => setOptionValue('times-circle')}
      >
        <Icon name={''} />
      none
      </div>
    )}
    {values.map(value => (
      <div
        key={value.id}
        className={value.id == currentValue ? styles.iconActive : styles.icon}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name}
      ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  required: PropTypes.bool,
};

export default OrderOptionIcons;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Entry.module.scss';

class Entry extends React.Component {

  render() {
    const { name, address, area, price, image_url, tabIndex } = this.props;
    return (
      <div className="card" tabIndex={tabIndex}>
        <img src={image_url} className="card-img-top" alt={name} />
        <div className={styles.price}>
          ${price.toFixed(2)}
        </div>
        <div className="card-body">
          {name && <h2 className="card-title h4">{name}</h2>}
          <div className="card-text">
            {address && <p>{address}</p>}
            {area && <p>{area}</p>}
          </div>
        </div>
      </div>
    );
  }
}

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  image_url: PropTypes.string
};

export default Entry;

import React from 'react';
import Input from '../Input';
import styles from './Search.module.scss';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getRestaurants, setLoading, unsetLoading, refine } from '../../actions';
import {debounce} from 'lodash';
import cx from 'classnames';
import uuid from 'uuid';

export class Search extends React.Component {
  state = {
    city: '',
    refine: ''
  }

  handleChange = (e) => {
    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value
    }, () => {
      if (name === 'city' && value) {
        this.handleGetRestaurants();
      }

      if (name === 'refine' && value) {
        this.handleRefinements();
      }
    });
  }

  handleGetRestaurants = debounce(() => {
    this.props.actions.setLoading();
    this.props.actions.getRestaurants(this.state.city);
  }, 300);

  handleRefinements = debounce(() => {
    this.props.actions.setLoading();
    this.props.actions.refine(this.state.refine);
  }, 300);

  render() {
    const { city, refine } = this.state;
    return (
      <div className={cx(styles.search, !city && styles.fullPage)}>
        <div className={cx('container', styles.container)}>
          <div className={styles.fieldsWrapper}>
            <div className="row">
              <div className="col-sm-6">
                <Input id={uuid()} tabIndex={city ? 1 : 0} className={styles.city} name="city" value={city} onChange={this.handleChange} placeholder="Enter the city" />
              </div>
              <div className="col-sm-6">
                <Input id={uuid()} tabIndex={city ? 2 : 0} className={cx(styles.dinerName, !city && 'disabled')} disabled={!city} name="refine" value={refine} onChange={this.handleChange} placeholder="Refine the results by diner, address or area" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getRestaurants,
      setLoading,
      unsetLoading,
      refine
    }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Search);

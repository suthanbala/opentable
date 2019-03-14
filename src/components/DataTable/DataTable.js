import React from 'react';
import PropTypes from 'prop-types';
import Entry from '../Entry';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoreRestaurants, setLoading } from '../../actions';
import { BarLoader } from 'react-spinners';

import styles from './DataTable.module.scss';

export class DataTable extends React.Component {

  handleLoadMore = e => {
    this.props.actions.setLoading();
    this.props.actions.getMoreRestaurants(this.props.city, parseInt(this.props.page) + 1);
  }

  render() {
    const { city, entries, refine, totalEntries, perPage, page, loading } = this.props;
    

    let data;
    if (refine) {
      data = entries.filter(entry => {
        return entry.get('name').toLowerCase().includes(refine.toLowerCase()) ||
        entry.get('address').toLowerCase().includes(refine.toLowerCase()) ||
        entry.get('area').toLowerCase().includes(refine.toLowerCase());
      });
    } else {
      data = entries;
    }

    const currentCount = page * perPage;

    const containerWidth = document.querySelector('.container') ? document.querySelector('.container').offsetWidth : 400;
    return (
      <div className="container">
        {city && <h2 className="h1 my-5">Showing results for <em>{city}</em></h2>}

        <div className="entries row">
          {data.map((entry, i) => <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Entry tabIndex={i + 2} name={entry.get('name')} address={entry.get('address')} area={entry.get('area')} price={entry.get('price')} image_url={entry.get('image_url')} />
          </div>)}
          { (!data.size && city) && <div className="alert alert-danger mt-5">No restaurants found. Please adjust your search criteria and try again.</div>}
        </div>

        { currentCount < totalEntries && <button tabIndex={10000} onClick={this.handleLoadMore} className="btn btn-primary btn-block my-4">Load More</button>}
        { loading && <div className={styles.loadingBar}><BarLoader width={containerWidth} /></div>}
      </div>
    );
  }
}

DataTable.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    'actions': bindActionCreators({
      getMoreRestaurants,
      setLoading
    }, dispatch)
  }
}

function mapDispatchToState(state) {
  return {
    entries: state.get('entries'),
    city: state.get('city'),
    refine: state.get('refine'),
    totalEntries: state.get('totalEntries'),
    perPage: state.get('perPage'),
    page: state.get('page'),
    loading: state.get('loading')
  }
}

export default connect(mapDispatchToState, mapDispatchToProps)(DataTable);

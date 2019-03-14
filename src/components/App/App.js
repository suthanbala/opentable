import React, { Component } from 'react';
import styles from './App.module.scss';
import Search from '../Search';
import DataTable from '../DataTable';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <div className="container">
            <h1>OpenTable</h1>
          </div>
        </header>

        <div className={styles.searchContainer}>
          <Search />
        </div>

        <div className={styles.resultsContainer}>
          <DataTable />
        </div>
      </div>
    );
  }
}

export default App;

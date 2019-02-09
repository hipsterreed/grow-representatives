import React from 'react';
import './App.scss';
import HeaderBar from './components/header-bar/header-bar';
import RepresentativesList from './representatives/representatives-list/representatives-list';
import Divider from './components/divider/divider';
import RepresentativeSearch from './representatives/representatives-search/representatives-search';
import RepresentativeDetails from './representatives/representative-details/representative-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      representativeType: 'Representative',
      selectedRepresentative: {},
    }
    this.searchReps = this.searchReps.bind(this);
    this.setRepresentative = this.setRepresentative.bind(this);
  }

  searchReps(params) {
    const repType = params.repType || '';
    // const repState = params.state || '';
    this.setState({'representativeType': repType});
  }

  setRepresentative(rep) {
    this.setState({'selectedRepresentative': rep});
  }

  render() {
    return (
      <div className="App-container">
        <div className="App-main">
          <div className="header">
            <HeaderBar title="Who's My Representative?"></HeaderBar>
            <Divider></Divider>
          </div>
          <div className="rep-search">
            <RepresentativeSearch selectedType={this.state.representativeType} search={this.searchReps}></RepresentativeSearch>
            <Divider></Divider>
          </div>
          <div className="rep-list">
            <RepresentativesList setRepresentative={this.setRepresentative} representativeType={this.state.representativeType}></RepresentativesList>
          </div>
          <div className="rep-details">
            <RepresentativeDetails representative={this.state.selectedRepresentative}></RepresentativeDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

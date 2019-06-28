import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setPhrase, search } from './../../actions/search';

import "./style.scss";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.setPhrase(value);
  }

  hanldeSubmit(e) {
    e.preventDefault();
    this.setState({redirect: true});
    this.props.search();
  }

  render() {
    const { searchPhrase } = this.props.searchData;
    
    if (this.state.redirect) {
      this.setState({redirect: false});
      return <Redirect to="/" />
    }
    
    return (
      <div className="search-form">
        <form action="#" className="search-form__form" onSubmit={this.hanldeSubmit}>
          <input name="s" type="text" value={searchPhrase} placeholder="Nunca dejes de buscar" onChange={this.handleChange}/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchData: state.search,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setPhrase: (phrase) => dispatch(setPhrase(phrase)),
  search: () => dispatch(search()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import 'react-select/dist/react-select.css';

class FilterFilm extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: 1,
      selectedOption2: 1,
      selectedOption3: 1,
      selectedOption4: 1,
      selectedOption5: 1,
      selectedOption6: 1,
    };
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  render() {
    return (
      <div>
        <div className="fiter-panel fiter-panel-mod-2">
          <div className="filter-panel-right">
            <div className="filter-select-option">
              <span className="filter-text">Фильм:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedOption3}
                onChange={this.handleChange}
                options={[
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                ]}
              />
            </div>
            <div className="filter-select-option">
              <span className="filter-text">Формат:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedOption4}
                onChange={this.handleChange}
                options={[
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                ]}
              />
            </div>
            <div className="filter-select-option">
              <span className="filter-text">Зал:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedOption4}
                onChange={this.handleChange}
                options={[
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                ]}
              />
            </div>
            <div className="filter-select-option">
              <span className="filter-text">Время:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedOption5}
                onChange={this.handleChange}
                options={[
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                ]}
              />
            </div>
          </div>
          <div className="filter-open-hide-btn">
            фильтры <i className="fa fa-angle-down"></i>
          </div>
        </div>
        <div className="row selection-results-category-list">
          <div className="col-md-9 col-sm-8 col-xs-12">
            <div className="reset-filter-btn">
              <i className="fa fa-close"></i>
              <Link to="">Отменить фильтры</Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <ul className="category-list-switch">
              <li className={this.props.activePanel === "list"  ? "category-view-list active" : "category-view-list"}>
                <Link to="/cinemalist" className="fa fa-th-list"></Link>
              </li>
              <li className={this.props.activePanel === "table" ? "category-view-table active" : "category-view-table"}>
                <Link to="/cinematable" className="fa fa-th"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterFilm;
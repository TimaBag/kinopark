import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

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
        <div class="fiter-panel fiter-panel-mod-2">
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
        <div class="row selection-results-category-list">
          <div class="col-md-9 col-sm-8 col-xs-12">
            <div class="reset-filter-btn">
              <i class="fa fa-close"></i>
              <a href="">Отменить фильтры</a>
            </div>
          </div>
          <div class="col-md-3 col-sm-4 col-xs-12">
            <ul class="category-list-switch">
              <li class="category-view-list active"><a href="" class="fa fa-th-list"></a></li>
              <li class="category-view-table "><a href="" class="fa fa-th"></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterFilm;
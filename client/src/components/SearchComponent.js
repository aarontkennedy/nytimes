import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchComponent.css';

const dateFormat = "YYYY/MM/DD";

const SearchComponent = (props) => (
    <form onSubmit={props.onSubmit}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Search</h2>
                </div>
            </div>
            <div className="form-row">
                <div className="col form-group row">
                    <div className="col-3 col-md-2 text-right">
                        <label className="SearchComponent" htmlFor="query">Topic</label></div>
                    <div className="col-9 col-md-8">
                        <input
                            className="form-control form-control-lg "
                            id="query"
                            type="text"
                            placeholder="Congress"
                            name="query"
                            value={props.query}
                            onChange={props.onChange} />
                    </div>

                    <div className="col-12 col-md-2 text-center">
                        <button className="btn btn-primary btn-lg" type="submit">Search</button>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-12 col-md-6 form-group text-right">
                    <DatePicker
                            className="SearchComponent-Date"
                            placeholderText={"Start " + dateFormat}
                            dateFormat={dateFormat}
                            selected={props.start}
                            onChange={props.onStartChange}
                            startDate={moment("1851/09/18", dateFormat)}
                            endDate={moment()}
                            onChangeRaw={(event) => event.target.value = ""}
                            yearDropdownItemNumber={15}
                            isClearable={true}
                        />
                </div>

                <div className="col-12 col-md-6 text-left">
                    <DatePicker
                            className="SearchComponent-Date"
                            dateFormat={dateFormat}
                            placeholderText={"End " + dateFormat}
                            selected={props.end}
                            onChange={props.onEndChange}
                            startDate={moment("1851/09/18", dateFormat)}
                            endDate={moment()}
                            onChangeRaw={(event) => event.target.value = ""}
                            yearDropdownItemNumber={15}
                            isClearable={true}
                        />
                </div>
            </div>
        </div>
    </form>
);

export default SearchComponent;
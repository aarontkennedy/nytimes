import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchComponent.css';

const dateFormat = "YYYY/MM/DD";

const SearchComponent = (props) => (
    <form onSubmit={props.onSubmit}>
        <div className="container mb-4">
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Article Search</h2>
                </div>
            </div>
            <div className="row">
                <div className="d-none d-md-block col-2 text-right">
                    <label className="SearchComponent" htmlFor="query">Keywords</label></div>
                <div className="col-9 col-md-8">
                    <input
                        className="form-control form-control-lg "
                        id="query"
                        type="text"
                        placeholder="keyword"
                        name="query"
                        value={props.query}
                        onChange={props.onChange} />
                </div>
                <div className="col-3 col-md-2">
                    <button className="btn btn-primary btn-lg" type="submit">Search</button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6 text-right">
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
                <div className="col-6 text-left">
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
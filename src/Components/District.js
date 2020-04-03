import React from 'react';

import { FetchDistricts } from '../Actions/index';

import { connect } from 'react-redux';


class District extends React.Component {

    componentDidMount() {
        this.props.FetchDistricts();
    }

    render() {

        let x,data;
        for ( x in this.props.DistrictsList) {
            for ( x in this.props.DistrictsList[this.props.StatesName]) {
                data = this.props.DistrictsList[this.props.StatesName][x]
            }
        }
        // console.log(x);

        const render = data ? Object.keys(data).filter(key => this.props.search === "" || key.toLowerCase().includes(this.props.search)).map(function (key,index) {
            return <tr key={index}>
                <th scope="row">{key}</th>
                <td>{data[key].confirmed}</td>
            </tr>
        }) : null

        // console.log(data);



        return (
            <div> <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">DISTRICT</th>
                        <th scope="col">CONFIRMED</th>
                    </tr>
                </thead>
                <tbody>
                    {render}
                </tbody>
            </table></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        StatesName: state.SelectedState,
        DistrictsList: state.DistrictList
    }
}

export default connect(mapStateToProps, { FetchDistricts })(District);
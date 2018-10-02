import React from 'react';
import PropTypes from 'prop-types'
import UILabel from './UILabel'
import _ from 'lodash'



export default class UISelect extends React.Component {

    static propTypes ={
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.func.isRequired,
    };

    //PureComponent
    //Lodash синтаксис
    // shouldComponentUpdate(nextProps, nextState){
    //     return _.isEqual(nextProps, this.props)
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('this.props', this.props);
    //     console.log('next.props', nextProps);
    //
    //     if(  _.isEqual(nextProps, this.props) ){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    render() {
        const {id, name, value, onChange, label} = this.props;
        return (
            <div className="form-group">
                <UILabel id={id}>
                    {label}
                </UILabel>
                <select
                    id={id}
                    className="form-control"
                    value={value}
                    name={name}
                    onChange={onChange}
                >
                    {this.props.children}
                </select>
            </div>
        );
    }
}

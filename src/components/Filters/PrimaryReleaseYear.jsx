import React from 'react';
import PropTypes from 'prop-types'
import UISelect from '../UIComponents/UISelect'


export default class PrimaryReleaseYear extends React.PureComponent {

//     static propTypes = {
//         primary_release_year: PropTypes.string.isRequired,
//         onFilterChange: PropTypes.func.isRequired
// };
    static defaultProps = {
        options : [
            {
                label: '2018',
                value: '2018'
            },
            {
                label: '2017',
                value: '2017'
            },
            {
                label: '2016',
                value: '2016'
            },
            {
                label: '2015',
                value: '2015'
            },
            {
                label: '2014',
                value: '2014'
            }

        ]
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

    render () {
        const {primary_release_year ,options, onChangeFilters} = this.props;
        console.log('primary_release_year render');
        return (
        <UISelect
            name="primary_release_year"
            onChange={onChangeFilters}
            id="primary_release_year"
            value={primary_release_year}
            label={() => <p>Год релиза:</p>}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.value}
                </option>
            ))}
        </UISelect>
        )
    }
}
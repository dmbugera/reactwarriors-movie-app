import React from 'react';

class UILabel extends React.Component {

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('this.props', this.props);
    //     console.log('next.props', nextProps);
    //
    //     if( nextProps.id !== this.props.id ){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    render() {
        const {id, children} = this.props;
        return (<label htmlFor={id}>{children()}</label>
        );
    }
}



export default UILabel;

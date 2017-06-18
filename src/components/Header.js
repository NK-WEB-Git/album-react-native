// Import library for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component and make the component available to others parts of the app
/*export default class Header extends React.Component {
    render() {
        const { textStyle, viewStyle } = style;
        // You can remove parenthesis because we have one line
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}*/

const Header= (props) => {
    const { textStyle, viewStyle } = style;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

export default Header;

const style = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle : {
        fontSize: 25
    }
};

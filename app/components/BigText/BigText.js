import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './BigTextStyle';	
import { Fonts, Colors } from 'beep/app/styles';

export default function BigText (props) {
	const textColor = {color: Colors[props.color]};
	const weight = {fontWeight: Fonts.weight[props.weight] };
	const align = {textAlign: props.align };

	return (
		<View>
			<Text style={[styles.text, textColor, weight, align]}>{props.text}</Text>
		</View>
	);
}


BigText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
}

BigText.defaultProps = {
	text: "",
	color: "dark",
	weight: "regular",
	align: "left"
}








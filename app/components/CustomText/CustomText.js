import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CustomTextStyle';
import { Colors, Fonts } from 'beep/app/styles';

export default function CustomText (props) {
	const textColor = { color: Colors[props.color] };
	const weight = { fontWeight: Fonts.weight[props.weight] };
	const align = { textAlign: props.align };
	const size = { fontSize: Fonts.size[props.size]}

	return (
		<View>
			<Text style={[styles.text, textColor, weight, align, size]}>{props.text}</Text>
		</View>
	);
}


CustomText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
	size: PropTypes.string,
}

CustomText.defaultProps = {
	text: "",
	color: "dark",
	weight: "regular",
	align: "left",
	size: 'body'
}
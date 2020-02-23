import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PrimaryBtnStyle';
import CustomText from 'beep/app/components/CustomText';

export default function PrimaryBtn (props) {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			activeOpacity={0.8}
		>
			<View style={[styles.button, styles.centerObjects]}>
				<CustomText 
					text={props.text}
					color='white'
					weight='bold'
					align='center'
					size='body'
				/>
			</View>
		</TouchableOpacity>
	);
}


PrimaryBtn.propTypes = {
	text: PropTypes.string,
	// data: PropTypes.array
}

PrimaryBtn.defaultProps = {
	text: 'Press me!',

}








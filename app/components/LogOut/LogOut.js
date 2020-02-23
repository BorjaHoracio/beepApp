import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LogOutStyle';
import { Feather } from '@expo/vector-icons';
export default function LogOut (props) {
	return (
		<TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
			<View style={styles.icon}>
				<Feather size={24} color='black' name='log-out' />
			</View>
		</TouchableOpacity>
	);
}


LogOut.propTypes = {
	// data: PropTypes.array
}

LogOut.defaultProps = {
	// data: []
}








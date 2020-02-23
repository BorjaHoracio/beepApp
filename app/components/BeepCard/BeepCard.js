import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './BeepCardStyle';
import CustomText from 'beep/app/components/CustomText';

export default function BeepCard ({title, subtitle}) {
	return (
		<View style={styles.card}>
			<CustomText 
				text={title}
				size='subtitle'
			/>
			<CustomText 
				text={subtitle}
				color='gray'
				size='subtitle'
			/>
		</View>
	);
}


BeepCard.propTypes = {
	// data: PropTypes.array
}

BeepCard.defaultProps = {
	// data: []
}








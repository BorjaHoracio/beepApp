import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './WelcomeScreenStyle';
import CustomText from 'beep/app/components/CustomText';
import PrimaryBtn from 'beep/app/components/PrimaryBtn';

export default function WelcomeScreen (props) {
	return (
		<View style={[styles.container, styles.flex]}>
			<View style={styles.circleLeft}/>
			<View style={styles.circleRight}/>
			<View style={[styles.baseHorizontalMargin, styles.content, styles.flex]}>
				<View style={styles.icon}>
					<Feather name='anchor' size={24} color='#FFF'/>
				</View>
				<Text style={styles.header}>
					Beeper ipsum dolor sit <Text style={styles.purpleText}>amet</Text>
				</Text>
				<CustomText 
					text='Proident, sunt in culpa qui officia doserunt, mollit anim id est laborium'
					size='big'
				/>
			</View>
			<View style={[styles.buttonBottom, styles.baseHorizontalMargin]}>
				<PrimaryBtn
					onPress={() => props.navigation.navigate('SignInScreen')}
					text='COMENZAR'
				/>
			</View>
			
		</View>
	);
}

WelcomeScreen.navigationOptions = {
	headerShown: false,
	headerMode: 'none'
}
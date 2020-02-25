import React, { 
	// useEffect, 
	useState 
} from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, TextInput } from 'react-native';

import styles from './SignInScreenStyle';
import CustomText from 'beep/app/components/CustomText';
import PrimaryBtn from 'beep/app/components/PrimaryBtn';

export default function SignInScreen (props) {
	const [username, setUsername] = useState('');

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView behavior='padding' style={[styles.baseHorizontalMargin, styles.main, styles.justifyContentSpaceBetween]}>
				<View style={styles.column}>
					<CustomText
						text='Dinos tu nombre'
						weight='bold'
						size='huge'
					/>
					<View style={styles.baseTopMargin}>
						<CustomText
							text='Proident, sunt in culpa qui officia doserunt, mollit anim id est laborium'
							weight='regular'
							size='big'
						/>
					</View>
					<View style={styles.baseTopMargin}>
						<CustomText
							text= {'Tu nombre de usuario'}
							weight='bold'
							size='subtitle'
						/>
					</View>
					<TextInput
						value={username}
						onChangeText={(username) => setUsername(username)}
						placeholder='Escribe tu nombre'
						style={[styles.textInput, (username.length > 0 ? styles.enabledInput : styles.disabledInput)]} 
						onSubmitEditing={() =>props.navigation.navigate('HomeScreen', {username})}
					/>
				</View>
				<View style={[styles.buttonBottom]}>
					<PrimaryBtn
						disabled={!username.length>0}
						onPress={() => props.navigation.navigate('HomeScreen', {username})}
						text='COMENZAR'
					/>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}





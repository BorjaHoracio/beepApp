import { StyleSheet } from 'react-native';
import { Colors } from 'beep/app/styles';
import { ApplicationStyles } from 'beep/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	button: {
		backgroundColor: Colors.purple,
		borderRadius: 28,
		height: 56,
	}
});

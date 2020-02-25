import { StyleSheet } from 'react-native';
import { Colors } from 'beep/app/styles';
import { ApplicationStyles } from 'beep/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	button: {
		borderRadius: 28,
		height: 56,
	},
	enabled: {
		backgroundColor: Colors.purple,
	},
	disabled: {
		backgroundColor: Colors.gray,
	}
});

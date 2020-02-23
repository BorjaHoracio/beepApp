import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'beep/app/styles';
import { ApplicationStyles } from 'beep/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	main: {
		flex: 1,
		marginTop: Metrics.doubleBaseMargin * 3,
		height: '100%',
	},
	textInput:{
		borderWidth: 1,
		height: 46,
		borderRadius: 5,
		borderColor: Colors.gray,
		marginTop: 10,
		paddingHorizontal: Metrics.smallMargin,
		fontSize: Fonts.size.subtitle
	}
});

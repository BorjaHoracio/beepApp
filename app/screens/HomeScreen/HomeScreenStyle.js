import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'beep/app/styles';
import { ApplicationStyles } from 'beep/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	main: {
		flex: 1,
		paddingTop: Metrics.statusBarHeight + Metrics.baseMargin,
		backgroundColor: 'white',
		height: '100%',
	},
	buttonBottomStyle: {
		bottom: 20,
		position: 'absolute',
		marginLeft: Metrics.baseMargin,
		width: '100%',
		zIndex: 99999
	}
});

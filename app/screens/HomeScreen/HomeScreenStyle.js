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
	},
	tutorial: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 9,
	},
	tutorialText: {
		position: 'absolute',
		color: Colors.white,
		fontFamily: 'sniglet',
		fontSize: 36,
		width: Metrics.screenWidth * 0.6,
		bottom: 150,
		left: 50,
		transform: [{rotate: '-30deg'}],
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 100,
		right: Metrics.screenWidth * 0.2,
		transform: [{rotate: '-30deg'}],

	}
});

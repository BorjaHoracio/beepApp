import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'beep/app/styles';
import { ApplicationStyles } from 'beep/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	circleLeft: {
		width: Metrics.screenWidth * 1.2,
		height: Metrics.screenWidth * 1.2,
		backgroundColor: Colors.lightPurple,
		borderRadius: Metrics.screenWidth * 0.6,
		left: -Metrics.screenWidth * 0.4,
		top: -Metrics.screenWidth * 0.35,
		position: 'absolute'
	},
	circleRight: {
		width: Metrics.screenWidth * 1.1,
		height: Metrics.screenWidth * 1.1,
		backgroundColor: Colors.lightPurple,
		borderRadius: Metrics.screenWidth * 0.55,
		top: -Metrics.screenWidth * 0.4,
		right: -Metrics.screenWidth * 0.6,
		position: 'absolute'
	},
	icon: {
		width: 40,
		height: 40,
		backgroundColor: Colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	header: {
		fontSize: Fonts.size.big * 2,
		fontWeight: Fonts.weight.bold
	},
	purpleText: {
		color: Colors.purple,
	},
	content: {
		marginTop: Metrics.screenWidth * 0.8
	}
});

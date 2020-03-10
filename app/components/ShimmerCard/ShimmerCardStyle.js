import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'beep/app/styles';
import { ApplicationStyles, Metrics } from 'beep/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	circle: {
		width:70, 
		height:70,
		borderRadius:50
	},
	icon: {
		width:24, 
		height:24,
	},
	card: {
		...ApplicationStyles.screen.card,
		paddingVertical: Metrics.smallMargin,
		paddingHorizontal: Metrics.baseMargin
	}
});

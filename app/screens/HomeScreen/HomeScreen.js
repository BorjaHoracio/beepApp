import React, { 
	useEffect, 
	useState 
} from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

import styles from './HomeScreenStyle';
import CustomText from 'beep/app/components/CustomText';
import LogOut from 'beep/app/components/LogOut';
import PrimaryBtn from 'beep/app/components/PrimaryBtn';
import BeepsContainer from 'beep/app/containers/BeepsContainer';

export default function HomeScreen ({route, navigation}) {
	let [user, setUser] = useState('asd');
	let [data, setData] = useState([{
		id: 1,
		title: 'me',
		subtitle: '2020-02-22T21:21:35-06:00' }
	]);

	function addItem(){
		setData(data=> [...data, {
			id: '_' + Math.random().toString(36).substr(2, 9),
			title: user,
			date: moment().format()

		}]);
	}



	useEffect(() => {
		if(route.params?.text){
			setUser(route.params.text)
		}
	}, [route.params?.text]);

	return (
		<View style={[styles.main, styles.baseHorizontalPadding]}>
			<View style={[styles.row, styles.justifyContentSpaceBetween, styles.alignItemsCenter]}>
				<CustomText
					text='Todos los beeps'
					weight= 'bold'
					size='big'
				/>
				<LogOut onPress={() => navigation.navigate('WelcomeScreen')}/>
			</View>
			<BeepsContainer data={data} 
				footer={<View style={styles.bottomViewHeight}/>}
			/>
			<View style={[styles.buttonBottomStyle]}>
				<PrimaryBtn
					onPress={() => addItem()}
					text='BEEP'
				/>
			</View>
		</View>
	);
}





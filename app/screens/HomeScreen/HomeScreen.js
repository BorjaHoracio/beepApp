import React, { 
	useEffect, 
	useState 
} from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './HomeScreenStyle';
import CustomText from 'beep/app/components/CustomText';
import LogOut from 'beep/app/components/LogOut';
import PrimaryBtn from 'beep/app/components/PrimaryBtn';
import BeepsContainer from 'beep/app/containers/BeepsContainer';
import { logout, addBeep } from 'beep/app/actions/BeepActions';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen ({route, navigation}) {
	const dispatch = useDispatch();
	let [user, setUser] = useState({});
	let [showTuturial, setShowTutorial] = useState(true); 
	useEffect(() => {
		if(route.params?.user){
			setUser(route.params.user)
		}
	}, [route.params?.user.username]);
	

	function addItem(){
		if(showTuturial) setShowTutorial(false);
		dispatch(addBeep(user));
	}

	function logOut(){
		dispatch(logout);
		navigation.navigate('WelcomeScreen')
	}
	
	return (
		<View style={[styles.main, styles.baseHorizontalPadding]}>
			{ showTuturial &&
				<View style={[styles.imageFill, styles.tutorial]}>
					<Text style={styles.tutorialText}>¡Toca aquí para hacer un Beep!</Text>
					<View style={styles.icon}>
						<Feather size={65} color='white' name='corner-down-left'/>
					</View>
				</View>
			}
			<View style={[styles.row, styles.justifyContentSpaceBetween, styles.alignItemsCenter]}>
				<CustomText
					text='Todos los beeps'
					weight= 'bold'
					size='big'
				/>
				<LogOut onPress={() => logOut()}/>
			</View>
			
			<BeepsContainer  
				userId={user.userId}
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





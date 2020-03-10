import React, { 
	useEffect,
	useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import BeepCard from 'beep/app/components/BeepCard';
import ShimmerCard from 'beep/app/components/ShimmerCard';

import { fetchBeeps, reloadBeeps } from 'beep/app/actions/BeepActions';
import { getBeeps, getIsLoadingBeep } from 'beep/app/reducers';

export default function BeepsContainer ({footer, userId}) {
	const dispatch = useDispatch();
	//const [isLoading, setIsLoading] = useState(true);
	const isLoading = useSelector(getIsLoadingBeep);
	
	useEffect(() => {
		dispatch(fetchBeeps());
		const interval = setInterval(() => {
			dispatch(fetchBeeps());
		}, 3000);
		return () => clearInterval(interval);
	  }, []);

	let allBeeps = useSelector(getBeeps);

	function renderItem({item}){
		return	<BeepCard
				title={item.userId === userId ? 'Hiciste un beep' : item.username}
				subtitle={moment(item.date).fromNow()}
			/>
	}
	return (
		<FlatList
			data={allBeeps}
			renderItem={renderItem}
			keyExtractor={b => String(b._id)}
			isReloading={isLoading}
			isLoading={isLoading}
			onRefresh={() => dispatch(reloadBeeps())}
			refreshing={isLoading}
			showsVerticalScrollIndicator={false}
			ListFooterComponent={footer}
			ListEmptyComponent={() => {
				if(isLoading){
					return [1,2,3,4,5,6].map((x)=> <View key={x}><ShimmerCard /></View>) 
				} else {
					return null;
				}
			}}
			//onEndReached={() => dispatch(fetchBeeps())}
			onEndReachedThreshold={1}
		/>
	);
}


BeepsContainer.propTypes = {
	footer: PropTypes.object,
	userId: PropTypes.string,
}

BeepsContainer.defaultProps = {
	footer: null,
	userId: '',
}



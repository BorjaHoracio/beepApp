import React, { 
	useEffect
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import BeepCard from 'beep/app/components/BeepCard';
import { fetchBeeps, reloadBeeps } from 'beep/app/actions/BeepActions';
import { getBeeps, getIsLoadingBeep } from 'beep/app/reducers';

export default function BeepsContainer ({footer, userId}) {
	const dispatch = useDispatch();
	const isLoading = useSelector(getIsLoadingBeep);
	
	useEffect(() => {
		dispatch(fetchBeeps());
		const interval = setInterval(() => {
			dispatch(fetchBeeps());
		}, 1000);
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



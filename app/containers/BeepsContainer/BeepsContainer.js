import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import BeepCard from 'beep/app/components/BeepCard';

export default function BeepsContainer ({data, footer}) {
	
	function renderItem({item}){
		return	<BeepCard
				title={item.title}
				subtitle={moment(item.subtitle).fromNow()}
			/>
	}

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={b => String(b.id)}
			showsVerticalScrollIndicator={false}
			ListFooterComponent={footer}
		/>
	);
}


BeepsContainer.propTypes = {
	// data: PropTypes.array
}

BeepsContainer.defaultProps = {
	// data: []
}



import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ShimmerCardStyle';

import ShimmerPlaceholder from 'beep/app/components/ShimmerPlaceholder';
import { Colors } from 'beep/app/styles';

export default class ShimmerCard extends Component {
	render() {
		let bg = {backgroundColor: Colors.light}
		let shimmerColors = ['#F0F0F0','#DEDEDE','#EDEDED']
		return (
			<View style={[styles.row, styles.card, styles.alignItemsCenter, styles.justifyContentSpaceBetween, styles.tinyHorizontalMargin]}>
				<View style={styles.flex1}>	
					<View style={{paddingBottom: 5}}>	
						<ShimmerPlaceholder
							colorShimmer={shimmerColors}
							duration={1000}
							autoRun={true}
							style={[{height:20, width: '60%'}]}
						/>
					</View>
					<View style={[styles. row, styles.alignItemsCenter]}>
						<ShimmerPlaceholder
							colorShimmer={shimmerColors}
							duration={1000}
							autoRun={true}
							style={[{height:20, width: '40%'}]}
						/>
					</View>
				</View>
			</View>
		);
	}
}

	ShimmerCard.propTypes = {
		// data: PropTypes.array
	}

	ShimmerCard.defaultProps = {
		// data: []
	}

import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import ImageScalable from 'react-native-scalable-image';
const Splash = (props) => (
	<Container>
		<ImageScalable
			source={require('ToDoList/assets/images/splash.png')}
			width={Dimensions.get('window').width - 200}
		/>
	</Container>
);
const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
export default Splash;

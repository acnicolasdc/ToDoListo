import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Title from 'ToDoList/src/components/TitleGlobal';
import Plus from 'ToDoList/src/components/MoreItemsGlobal';
import SeeMore from './components/SeeMoreList';
import SummaryList from './components/SummaryList';
import EmptyPage from 'ToDoList/src/components/EmptyPageGlobal';
import {connect} from "react-redux";
class SummaryListHome extends PureComponent {
	
	even=(element)=> {
	return element.check === true;
	};
	noChecksTask() {
		const data = this.props.dataTask.data;
		var array = [];
		if (Number(data.length) > 0) {
			Object.keys(data).forEach(key => data[key].check?array.push(data[key]):null);
		}
		return String(array.length);
	}

	render() {
		const value = this.noChecksTask();
		return (
			<Card>
				<Wrapper>
					<Div height="20%" flexFlow="row">
						<Div width="75%">
							<Title text={value+" Actividades"} color="#FFF" size="25px" />
						</Div>
						<Div width="25%" align="flex-end">
							<Plus color="#F73E81" />
						</Div>
					</Div>
					<Div height="80%" fondo="red">
						{this.props.dataTask.data.some(this.even)?(
            				<SummaryList></SummaryList>
						):(
							<EmptyPage src={require('ToDoList/assets/images/empty01.png')}
							text='No hay actividades finalizadas!'/>
						)}
					</Div>
				</Wrapper>
				<FooterCard>
					<SeeMore navigation={this.props.navigation}/>
				</FooterCard>
			</Card>
		);
	}
}

const Card = styled.View`
	width: 100%;
	height: 85%;
	background-color: #fa356e;
	flex-flow: column;
	border-radius: 25px;
	box-shadow: 5px 5px 5px rgba(204, 204, 204, 0.5);
`;
const Wrapper = styled.View`
	width: 100%;
	height: 85%;
	padding: 20px 20px 20px 20px;
	flex-flow: column;
	border-radius: 25px;
`;

const Div = styled.View`
	width: ${(props) => (!!props.width ? props.width : '100%')};
	height: ${(props) => (!!props.height ? props.height : '100%')};
	padding-top: ${(props) => (!!props.paddingTop ? props.paddingTop : 0)};
	padding-left: ${(props) => (!!props.paddingLeft ? props.paddingLeft : 0)};
	padding-bottom: ${(props) => (!!props.paddingBottom ? props.paddingBottom : 0)};
	padding-right: ${(props) => (!!props.paddingRight ? props.paddingRight : 0)};
	flex-flow: ${(props) => (!!props.flexFlow ? props.flexFlow : 'column')};
	justify-content: ${(props) => (!!props.justify ? props.justify : 'center')};
	align-items: ${(props) => (!!props.align ? props.align : 'flex-start')};
	border-style: solid;
	border-top-color: #fff;
	border-top-width: ${(props) => (!!props.underline ? props.underline : '0')};
`;
const FooterCard = styled.View`
	width: 100%;
	height: 15%;
	padding-left: ${(props) => (!!props.paddingLeft ? props.paddingLeft : 0)};
	padding-right: ${(props) => (!!props.paddingRight ? props.paddingRight : 0)};
	flex-flow: row;
	border-style: solid;
	border-top-color: #fff;
	border-top-width: 1px;
	padding: 0px 20px 0px 20px;
`;

const mapStateToProps = state => {
	return{
	  dataTask: state.task,
	}
  }

  export default connect(mapStateToProps,null)(SummaryListHome);
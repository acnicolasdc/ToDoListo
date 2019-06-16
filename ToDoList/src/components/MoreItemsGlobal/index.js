import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/Feather';
import {connect} from "react-redux";
import { open_modal} from 'ToDoList/src/actions/modalActions';
class MoreItemsGlobal extends Component {
  openModal=()=>{
		this.props.open_modal();
	}
  render() {
    return (
      <Button width={this.props.size} height={this.props.size} radius={this.props.radius}
      color={this.props.color} onPress = { ()=>this.openModal() }>
         <Icon name={"plus"} size={20} style={{color:'#FFF'}}/>
      </Button>
    );
  }
}
const Button = styled.TouchableOpacity`
width: ${props => !!props.width?props.width:'50px'};
height:${props => !!props.height?props.height:'50px'};
border-radius: ${props => !!props.radius?props.radius:'25px'};
background-color:${props => !!props.color?props.color:'#FFF'};
justify-content:center;
align-items:center;
`;
const mapDispatchToProps = dispatch => {
  return {
    open_modal: () => dispatch(open_modal()),
  }
}

export default connect (null,mapDispatchToProps)(MoreItemsGlobal);
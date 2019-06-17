import React, { Component } from 'react';
import styled from 'styled-components';
import Text from 'ToDoList/src/components/TextGlobal';
import {DatePickerIOS, DatePickerAndroid,Platform} from 'react-native';
import {connect} from "react-redux";
import {create_task} from 'ToDoList/src/actions/taskActions';
import {close_modal} from 'ToDoList/src/actions/modalActions';

const uuidv1 = require('uuid/v1');
class ModalForm extends Component {
  state={
    key:0,
    title:'',
    date: new Date(),
  }
  setDate = (newDate) => {
    this.setState({date: newDate});
  }
  createTask(){
    const key = uuidv1();
    const obj ={
      key:key,
      name:this.state.title,
      date: this._formatDate(new Date(this.state.date)),
      check:false
    }
    const data = this.props.dataTask.data.concat(obj);
    this.props.create_task(data);
    setTimeout(() => {
      this.props.close_modal();
    }, 100);
  }
  _formatDate(value) {
    var mm = value.getMonth() + 1;
    var dd = value.getDate();
    var yyyy = value.getFullYear();
    var date = yyyy + "-" + mm + "-" + dd;
    return date;
  }

  async openAndroidDatePicker() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      this.setDate({action, year, month, day})
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
  render() {
    return (
      <Form>
        <Text text='Crea tu actividad!'/>
        <Input placeholder='Titulo' value={this.state.title}  onChangeText={(title) => this.setState({title})}/>
        {Platform.OS === 'ios' ?
        <DatePickerIOS
                  date={this.state.date}
                  onDateChange={this.setDate}
          />
          :
          this.openAndroidDatePicker
          }
        <Submit onPress = { ()=>this.createTask() }>
          <Text text='Crear actividad' color='#FFF'></Text>
        </Submit>
      </Form>
    );
  }
}

const Form = styled.View`
    padding: 10px 20px 10px 20px;
    flex-direction:column;
    width:100%;
    height:auto;
`;
const Input = styled.TextInput`
    width:100%;
    height: 50px;
    margin-top:10px;
    border-radius:5px;
    background-color: #F9F9F9;
    font-size:15px;
    padding-left:10px;
`;
const Submit = styled.TouchableOpacity`
    width:100%;
    height: 60px;
    justify-content:center;
    align-items:center;
    border-radius:15px;
    background-color: #F73E81;
`;
const mapStateToProps = state => {
	return{
	  dataTask: state.task,
	}
  }
const mapDispatchToProps = dispatch => {
  return {
    create_task: (data) => dispatch(create_task(data)),
    close_modal: () => dispatch(close_modal()),
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(ModalForm);
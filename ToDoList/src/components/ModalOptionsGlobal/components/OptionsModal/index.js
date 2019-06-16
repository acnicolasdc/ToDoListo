import React, { Component } from 'react';
import styled from 'styled-components';
import Text from 'ToDoList/src/components/TextGlobal';
import Title from 'ToDoList/src/components/TitleGlobal';
import { connect } from 'react-redux';
import { delete_task, chack_task } from 'ToDoList/src/actions/taskActions';
import { close_modal_op } from 'ToDoList/src/actions/modalActions';

class OptionsModal extends Component {
    checkItem(){
        const data = this.props.dataTask.data.map((task) => {
            if (task.key === this.props.dataTask.taskid.key) {
              return Object.assign({}, task, {
                check: true,
              });
            } else {
              return task;
            }
          });
        this.props.chack_task(data);
		this.props.close_modal_op();
    }
    deleteItem(){
        const data = this.props.dataTask.data.filter(t => t.key !== this.props.dataTask.taskid.key);
        this.props.delete_task(data);
	    this.props.close_modal_op();
	}
	render() {
		return (
				<Form>
					<Div height="auto">
						<Title text="¿Que deseas hacer?" />
						<Text text="Puedes hacer check de tus actividades o eliminarlas si asi lo deseas" size='18px'/>
					</Div>
                    <Div height="auto" marginTop="10px" marginBottom="10px">
					<Text text={'Actividad: '+this.props.dataTask.taskid.name} size='15px' color='#f73e81' />                  
                    </Div>
					<Div flexFlow="row" justify="center" align="center" height="auto" marginTop="15px">
						<Div width="50%" height="auto" paddingRight="5px">
							<Submit onPress={() => this.deleteItem()} backgroundColor="#F9F9F9">
								<Text text="Eliminar" color="#CCC" />
							</Submit>
						</Div>

						<Div width="50%" height="auto" paddingBottom="5px">
							<Submit onPress={() => this.checkItem()}>
								<Text text="Finalizar" color="#FFF" />
							</Submit>
						</Div>
					</Div>
				</Form>
		);
	}
}

const Form = styled.View`
	padding: 10px 20px 10px 20px;
	flex-direction: column;
	width: 100%;
	height: auto;
	background-color: #fff;
	border-radius: 15px;
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
	margin-top: ${(props) => (!!props.marginTop ? props.marginTop : 0)};
	margin-left: ${(props) => (!!props.marginLeft ? props.marginLeft : 0)};
	margin-bottom: ${(props) => (!!props.marginBottom ? props.marginBottom : 0)};
	margin-right: ${(props) => (!!props.marginRight ? props.marginRight : 0)};
`;
const Submit = styled.TouchableOpacity`
	width: 100%;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: ${(props) => (!!props.backgroundColor ? props.backgroundColor : '#f73e81')};
`;
const mapStateToProps = (state) => {
	return {
		dataTask: state.task,
		modal: state.modalHandle,
		
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
        delete_task: (data) => dispatch(delete_task(data)),
		chack_task: (data) => dispatch(chack_task(data)),        
		close_modal_op: () => dispatch(close_modal_op())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsModal);

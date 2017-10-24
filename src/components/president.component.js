import React from 'react';
import '../index.css';
import '../App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/Userlink.actionjson';

// import { Content } from '../components';

class Presider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
    console.log(this.props)
  }

  onChange(e) {
    const data = e.target.value;
    this.setState({name: data});
  }

  onSubmit(e) {
    this.setState({submit: this.state.name});
    this.props.setName(this.state.name);
    e.preventDefault();
  }
  
  render() {
    if(this.props.a.id!=undefined){
      return (
      <div className="col1">
        <div> ชื่อ-สกุล: {this.props.a.nm}</div>
        <div> สังกัดพรรค: {this.props.a.pp}</div>
        <div> ปีที่ดำรงตำแหน่ง: {this.props.a.tm}</div>
        <hr/>
      </div>
    );
    }else{
      return (
      <div >
        
      </div>
      );
    }
    
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    count: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getName: () => {
      dispatch(getName());
    },
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Presider));


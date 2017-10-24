import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData, setName,cleData } from '../actions/Userlink.actionjson';
import { Presider} from './'



// import { Content } from '../components';

class Routingdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
    
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
    return (
        <div>
            <div>

                <Presider a={this.props.user.data0} />
                <Presider a={this.props.user.data1} />
                <Presider a={this.props.user.data2} />
                <Presider a={this.props.user.data3} />
                <Presider a={this.props.user.data4} />
                <Presider a={this.props.user.data5} />
                <Presider a={this.props.user.data6} />
                <Presider a={this.props.user.data7} />
                <Presider a={this.props.user.data8} />
                <Presider a={this.props.user.data9} />
                <Presider a={this.props.user.data10} />
                <Presider a={this.props.user.data11} />
                <Presider a={this.props.user.data12} />
                <Presider a={this.props.user.data13} />
                <Presider a={this.props.user.data14} />
                <Presider a={this.props.user.data15} />
                <Presider a={this.props.user.data16} />
                <Presider a={this.props.user.data17} />
                <Presider a={this.props.user.data18} />
                <Presider a={this.props.user.data19} />
                <Presider a={this.props.user.data20} />
                <Presider a={this.props.user.data21} />
                <Presider a={this.props.user.data22} />
                <Presider a={this.props.user.data23} />
                <Presider a={this.props.user.data24} />
                <Presider a={this.props.user.data25} />
                <Presider a={this.props.user.data26} />
                <Presider a={this.props.user.data27} />
                <Presider a={this.props.user.data28} />
                <Presider a={this.props.user.data29} />
                <Presider a={this.props.user.data30} />
                <Presider a={this.props.user.data31} />
                <Presider a={this.props.user.data32} />
                <Presider a={this.props.user.data33} />
                <Presider a={this.props.user.data34} />
                <Presider a={this.props.user.data35} />
                <Presider a={this.props.user.data36} />
                <Presider a={this.props.user.data37} />
                <Presider a={this.props.user.data38} />
                <Presider a={this.props.user.data39} />
                <Presider a={this.props.user.data40} />
                <Presider a={this.props.user.data41} />
                <Presider a={this.props.user.data42} />
                <Presider a={this.props.user.data43} />

            </div>
            <button onClick={() => {this.props.getData()}}>Get Data</button>
            <button onClick={() => {this.props.cleData()}}>Clear</button>
        </div>

    );
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
    getData: () => {
      dispatch(getData());
    },
    cleData: () => {
      dispatch(cleData());
    },
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routingdata));

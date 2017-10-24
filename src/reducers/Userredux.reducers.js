import { createStore } from 'redux'
const initialState = {
  name:"",
        data0: [], data1: [], data2: [], data3: [],
        data4: [], data5: [], data6: [], data7: [],
        data8: [], data9: [], data10: [], data11: [],
        data12: [], data13: [], data14: [], data15: [],
        data16: [], data17: [], data18: [], data19: [],
        data20: [], data21: [], data22: [], data23: [],
        data24: [], data25: [], data26: [], data27: [],
        data28: [], data29: [], data30: [], data31: [],
        data32: [], data33: [], data34: [], data35: [],
        data36: [], data37: [], data38: [], data39: [],
        data40: [], data41: [], data42: [], data43: [],
  pending: false,
  err: '',
  completed: false
}
    function todos(state = [], action) {
      switch (action.type) {
        case 'ADD_TODO':
          return state.concat([action.text])
        default:
          return state
      }
    }

const userReducers = (state = initialState, action) => {
  switch(action.type){
    case "SET_NAME_PENDING":
      break;
    case "SET_NAME_REJECTED":
      break;
    case "SET_NAME_FULFILLED":
      break;

    case "GET_NAME_PENDING":
      break;
    case "GET_NAME_FULFILLED":
      state = {
        ...state,
        name: action.payload.name,
        pending: false,
        err: '',
        completed: true
      }
      break;
      case "CLE_DATA_FULFILLED": 
      state = {
        ...state,
          data0: [], data1: [], data2: [], data3: [],
          data4: [], data5: [], data6: [], data7: [],
          data8: [], data9: [], data10: [], data11: [],
          data12: [], data13: [], data14: [], data15: [],
          data16: [], data17: [], data18: [], data19: [],
          data20: [], data21: [], data22: [], data23: [],
          data24: [], data25: [], data26: [], data27: [],
          data28: [], data29: [], data30: [], data31: [],
          data32: [], data33: [], data34: [], data35: [],
          data36: [], data37: [], data38: [], data39: [],
          data40: [], data41: [], data42: [], data43: [],
        pending: false,
        err: '',
        completed: true
      }
      break;
    case "GET_DATA_FULFILLED": 
    state = {
        ...state,
        data0: action.payload.data[0], data1: action.payload.data[1], data2: action.payload.data[2], data3: action.payload.data[3],
        data4: action.payload.data[4], data5: action.payload.data[5], data6: action.payload.data[6], data7: action.payload.data[7],
        data8: action.payload.data[8], data9: action.payload.data[9], data10: action.payload.data[10], data11: action.payload.data[11],
        data12: action.payload.data[12], data13: action.payload.data[13], data14: action.payload.data[14], data15: action.payload.data[15],
        data16: action.payload.data[16], data17: action.payload.data[17], data18: action.payload.data[18], data19: action.payload.data[19],
        data20: action.payload.data[20], data21: action.payload.data[21], data22: action.payload.data[22], data23: action.payload.data[23],
        data24: action.payload.data[24], data25: action.payload.data[25], data26: action.payload.data[26], data27: action.payload.data[27],
        data28: action.payload.data[28], data29: action.payload.data[29], data30: action.payload.data[30], data31: action.payload.data[31],
        data32: action.payload.data[32], data33: action.payload.data[33], data34: action.payload.data[34], data35: action.payload.data[35],
        data36: action.payload.data[36], data37: action.payload.data[37], data38: action.payload.data[38], data39: action.payload.data[39],
        data40: action.payload.data[40], data41: action.payload.data[41], data42: action.payload.data[42], data43: action.payload.data[43],
        pending: false,
        err: '',
        completed: true
      } 
      let store = createStore(todos , window.STATE_FROM_SERVER)
    store.dispatch({
      type: 'ADD_TODO',
      data: action.payload.data[0],
    })
      break;
    case "GET_NAME_REJECTED":
      console.log(action);
      state = {
        ...state,
        pending: false,
        err: action.error,
        completed: false
      }
      break;
    default:
      break;
  }
  return state;
}

var users = {
    'Active User': {
        'config': {
            'status': 'active',
        }
    },
    'Paused User': {
        'config': {
            'status': 'paused',
        }
    }
};

var usersWithName = Object.keys(users).map(function(key) {
    var user = users[key];
    user.name = key;
    return user;
});

export default userReducers;

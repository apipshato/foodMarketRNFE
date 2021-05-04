const initStateRegister={
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address:'',
    houseNumber:'',
    phoneNumber:''
}
const registerReducer = (state, action) =>{
    if(action.type === 'SET_REGISTER'){
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password: action.value.password,
            password_confirmation: action.value.password, //klo misalnya tidak adda di skema pake password

        }
    }
    if(action.type === 'SET_ADDRESS'){
        return{
            ...state,
            adddress: action.value.address,
        }
    }
    return state
}
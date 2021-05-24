const initStateRegister={
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}
export const registerReducer = (state=initStateRegister, action) =>{
    if(action.type === 'SET_REGISTER'){
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password: action.value.password,
            password_confirmation: action.value.password, //klo misalnya tidak adda di skema pake password

        }
    }

    return state
}
const loginReducer = (
    state ={
        userName: "",
        password: ""
    },
    action
) => {
    switch (action.type){
        case 'SAVE_LOGIN_INFO': {
            // const novaNiza = [...state.niza, 'novaVrednost']
            // const newObject = {...state.object}

            const { username, password } = action.payload
            return {
                ...state,
                username: username,
                password: password,
                // niza: []
            }
        }
        default : {
            return state
        }
    }
}

const saveLoginInfo = (username, password) => {
    return {
        type: 'SAVE_LOGIN_INFO',
        payload: { username, password}
    }
}

export {
    saveLoginInfo,
    loginReducer
}
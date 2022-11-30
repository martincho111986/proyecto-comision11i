import React, { useReducer } from 'react';
import { UserContext, initialState } from "./UserContext"
import { UserReducer } from "./UserReducer"


const UserStore = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    //dispatchWrapper es una funcion que recibe una promesa, una vez resuelta la promesa la envia al dispatch
    const dispatchWrapper = (actionPromise) => {
        actionPromise.then(response => {
            dispatch(response)
        })
    }

    //dispatchSelector es una funcion que recibe un action(ejecucion de una funcion) y verifica si el action tiene una promesa
    // llama al dispatchWrapper caso contrario envia el dispatch con la action
    const dispatchSelector = (action) => {
        if(action.then) {
            dispatchWrapper(action)
        } else {
            dispatch(action)
        }
    }

 return (
    <UserContext.Provider value={{ state, dispatch: dispatchSelector }}>
        {children}
    </UserContext.Provider>
 )
}

export default UserStore;
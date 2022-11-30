import  React, {  useState, useEffect } from "react"
import getState from "./flux.js"

//Context Initializing
export const Context = React.createContext(null)

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: { ...state.actions }
                })
            })
        )

        useEffect(() => {
            //To use whenever the page load, its like an OnLoad for ContextAPI
        },[])

        return(
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )
    }
    return StoreWrapper
}

export default injectContext
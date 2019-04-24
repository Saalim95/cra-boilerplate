const initialState = {
    count: 1
}


export default (state=initialState, action) => {
    switch(action.type){
        case "ADD":{
            return{
                ...state,
                count: state.count + 1
            }
        }

        default:
        return {
            ...state
        }
        
    }
}
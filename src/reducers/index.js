const reducer = (state,action) => {

    switch (action.type) {
        case 'SET_FAVORITE':
            console.log(state.trends);
            return {
                ...state,
                myList:[...state.myList, action.payload],
                trends: state.trends.filter(items => items.id !== action.payload.id)
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user : action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user : action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing : state.trends.find(item => item.id === Number(action.payload)) ||
                    state.originals.find(item => item.id === Number(action.payload)) ||
                    []
            }
        default:
            console.log("Accion no definida");
            return state;
    }
}
export default reducer;
export const initialState = 0;

export const ADD_ = 'ADD_';
export const SUB_ = 'SUB_';

export const addAction = () => ({
    type: ADD_
})
export const subAction = () => ({
    type: SUB_
})

const reducer = (state = initialState, action) => {
    if (action.type === ADD_) {
        return state + 1
    } else {
        return state - 1
    }
}

export default reducer
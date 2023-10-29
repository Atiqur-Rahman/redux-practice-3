import { COLORCHANGED, STATUSCHANGED } from './actionTypes';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload,
            };

        case COLORCHANGED:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [...state.color, color],
                    };

                case 'removed':
                    return {
                        ...state,
                        colors: state.color.filter((existingColor) => existingColor !== color),
                    };

                default:
                    return state;
            }
        default:
            return state;
    }
};

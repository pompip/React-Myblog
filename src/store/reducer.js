

const defaultState = {
    test: "111111111",
    articleList: [],
    total: 0,
    current: 0,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case "hello":
            return {
                ...state,
                test: state.test + "22222"
            }
        case "list":
            return {
                ...state,
                articleList: action.articleList,
                total: action.total,
                current: action.current,
            }

        default: return state;
    }
}


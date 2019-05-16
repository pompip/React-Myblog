import axios from '../Http'

export const hello = () => ({
        type: "hello"
    }
)

export const list =(data)=>({
    type :"list",
    articleList:data.content,
    total:data.total,
    current:data.current
})

export const getArticleList = (page) => {
    return (dispatch) => {
    
        axios.get("/article/page/" + page)
            .then(res => {
                dispatch(list( res.data))
            }).catch(err => {
                console.log(err)
            });
    }
}
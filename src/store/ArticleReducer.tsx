// import { stat } from "fs";
import { ADD_ARTICLE, DELETE_ARTICLE, GET_ALL } from "./constants";
import { IArticleAction, IArticleState } from "./types";

const initlaState: IArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body: "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
};
export const ArticleReducer = (state: IArticleState = initlaState, action: IArticleAction) => {
    switch (action.type) {
        case GET_ALL:
            return { ...state, articles: state.articles };
        case ADD_ARTICLE:
            return { ...state, articles: state?.articles.concat([action.article]) };
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state?.articles.filter((article) => article.id !== action.article.id),
            };
        default:
            return state;
    }
};

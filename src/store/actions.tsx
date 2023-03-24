import { ADD_ARTICLE, DELETE_ARTICLE, GET_ALL } from "./constants";
import { IArticle } from "./types";

export const getAll = () => ({
    type: GET_ALL,
});

export const addArticle = (article: IArticle) => ({
    type: ADD_ARTICLE,
    article: article,
});

export const deleteArticle = (article: IArticle) => ({
    type: DELETE_ARTICLE,
    article: article,
});

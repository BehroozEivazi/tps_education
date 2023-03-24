export interface IArticle {
    id: number;
    title: string;
    body: string;
}

export interface IArticleState {
    articles: IArticle[];
}

export interface IArticleAction {
    type: string;
    article: IArticle;
}

export interface IBaseState {
    ArticleState: IArticleState;
}

export type DispatchType = (args: IArticleAction) => IArticleAction;

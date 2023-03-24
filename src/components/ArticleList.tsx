import React from "react";
import { IArticle } from "../store/types";
import Article from "./Article";
import ListGroup from "react-bootstrap/ListGroup";

interface IProps {
    articles: IArticle[];
}

function ArticleList({ articles }: IProps) {
    return (
        <ListGroup>
            {articles.map((article) => {
                return <Article article={article} key={article.id} />;
            })}
        </ListGroup>
    );
}

export default ArticleList;

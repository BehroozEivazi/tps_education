import React from "react";
import { IArticle } from "../store/types";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../store/actions";
import ListGroup from "react-bootstrap/ListGroup";

interface IProps {
    article: IArticle;
}
function Article({ article }: IProps) {
    const dispatch: React.Dispatch<any> = useDispatch();

    return (
        <>
            <ListGroup.Item className="mr-16">
                <div className="Article">
                    <div>
                        <h1>{article.title}</h1>
                        <p>{article.body}</p>
                    </div>
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteArticle(article))}
                    >
                        Delete
                    </button>
                </div>
            </ListGroup.Item>
        </>
    );
}

export default Article;

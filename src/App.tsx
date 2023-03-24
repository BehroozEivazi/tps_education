import React from "react";
import ArticleList from "./components/ArticleList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { IArticle, IArticleState, IBaseState } from "./store/types";
import { addArticle } from "./store/actions";

function App() {
    // const articles: IArticle[] = useSelector((state: IArticleState) => state.articles);
    const articles: IArticle[] = useSelector((state: IBaseState) => state.ArticleState.articles);
    const dispatch: React.Dispatch<any> = useDispatch();

    function onFinish(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        let id = Math.floor(Math.random() * 200) + 1;
        let title = e.currentTarget.Title.value;
        let body = e.currentTarget.Body.value;
        dispatch(addArticle({ id, title, body }));
    }

    return (
        <div className="container rtl" dir="rlt">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <ArticleList articles={articles && articles.length > 0 ? articles : []} />
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-md-3 border-form">
                    <Form onSubmit={onFinish}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>عنوان</Form.Label>
                            <Form.Control type="text" name="Title" placeholder="Title" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>توضیحات</Form.Label>
                            <Form.Control type="text" name="Body" placeholder="body" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import { useParams } from 'react-router-dom';

import articleContent from '../components/article-content';
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
    const { name } = useParams();

    const article = articleContent.find(article => article.name == name);
    const otherArticles = articleContent.filter(article => article.name != name);
    
    if(!article) return <NotFoundPage />
    
    return(
        <>
            <h1>{ article.name }</h1>
            {article?.content.map((paragraph, key) => {
                return <p key={key}>{ paragraph }</p>
            })}
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;
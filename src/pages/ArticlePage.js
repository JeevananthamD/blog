import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import articleContent from '../components/article-content';
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFoundPage";
import CommentList from "../components/CommentList";
import UpvoteSection from "../components/UpvoteSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = () => {
    const { name } = useParams();
    const [ articleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [] });
    
    const article = articleContent.find(article => article.name == name);
    const otherArticles = articleContent.filter(article => article.name != name);

    useEffect(() => {
        fetchData();
    }, [name]);

    const fetchData = async() => {
        const response = await (await fetch(`/api/articles/${ name }`)).json();
        
        setArticleInfo(response);
    }

    if(!article) return <NotFoundPage />
    
    return(
        <>
            <h1>{ article.name }</h1>
            <UpvoteSection 
                name={name}
                upvotes={articleInfo.upvotes}
                setArticleInfo={setArticleInfo}
            />
            {article?.content.map((paragraph, key) => {
                return <p key={key}>{ paragraph }</p>
            })}
            <CommentList comments={ articleInfo.comments } />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;
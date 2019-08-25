import React, {useState, useEffect} from 'react';
import styles from './Article.module.scss';
import {fetchApi, URL_PATH} from '../api';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Spinner, MainHeader, BreadcrumbsContainer} from '../components/shared';
import {ArticleModal} from '../components/modals';
import defaultImage from '../assets/images/article.jpg';

const Article = props => {
    const {id} = props.match.params;
    const [article, setArticle] = useState(null);
    
    useEffect(() => {
        fetchArticle();
    }, [id]);

    const fetchArticle = async () => {
        const response = await fetchApi.get(`${URL_PATH.ARTICLES}/${id}`);
        setArticle(response.data);
    };
    
    const onDeleteHandler = async () => {
        try {
            await fetchApi.delete(`${URL_PATH.ARTICLES}/${article._id}`);
            props.history.push(`/categories/${article.category}`)
        } catch (error) {
            console.log(error)
        }
    }

    const onUpdateHandler = (updatedArticle) => {
        setArticle(updatedArticle);
    }

    if (!article) return <Spinner />;
    return (
        <div className={styles.root}>
            <MainHeader />
            <div className={styles.content}>
                <BreadcrumbsContainer type='articles' id={article._id}/>
                <Typography variant="h3" align="center" gutterBottom>
                    {article.title}
                </Typography>
                <Typography variant="h4" color="textSecondary" align="center" gutterBottom>
                    {article.subTitle}
                </Typography>
                <img className={styles.image} src={article.imageUrl || defaultImage} />
                <Typography variant="body1" align="center" gutterBottom className={styles.text}>
                    {article.text}
                </Typography>
                <div className={styles.controls}>
                    <ArticleModal article={article} category={article.category} update={onUpdateHandler}/>
                    <Button color="secondary" variant="contained" onClick={onDeleteHandler}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Article;

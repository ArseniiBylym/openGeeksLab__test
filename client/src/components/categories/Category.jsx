import React, {useState, useEffect} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';
import styles from './Category.module.scss';
import {BreadcrumbsContainer} from '../shared';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {fetchApi, URL_PATH} from '../../api';
import {Spinner} from './../shared';
import {ArticleModal, RecipeModal, CategoryModal} from './../modals';
import ArticleCard from './../articles/ArticleCard';
import RecipeCard from './../recipes/RecipeCard';

const Category = props => {
    const {id} = props.match.params;
    const [articles, setArticles] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [tab, setTab] = useState(0);
    const {name, parent, _id} = useStoreState(state => state.categories.list.find(item => item._id === id));
    const categories = useStoreState(state => state.categories.list.map(({name, _id, parent}) => ({name, _id, parent})))

    useEffect(() => {
        fetchArticles();
        fetchRecipes();
    }, [id]);

    const fetchArticles = async () => {
        const response = await fetchApi.get(`${URL_PATH.ARTICLES}?category=${id}`);
        setArticles(response.data);
    };

    const fetchRecipes = async () => {
        const response = await fetchApi.get(`${URL_PATH.RECIPES}?category=${id}`);
        setRecipes(response.data);
    };

    const onDeleteHandler = async () => {
        
    } 

    const addNewArticle = (newArticle) => {
        setArticles((articles) => [...articles, newArticle])
    }

    const addNewRecipe = (newRecipe) => {
        setRecipes((recipes) => [...recipes, newRecipe])
    }

    const getArticles = () => {
        if (!articles) {
            return <Spinner />;
        }
        if (!articles.length) {
            return (
                <>
                    <Typography className={styles.empty} variant="h6" align="center">
                        Articles list is empty now
                    </Typography>
                    <ArticleModal category={_id} add={addNewArticle}/>
                </>
            );
        }
        return (
            <>
                <Grid container style={{padding: '1rem'}} spacing={2}>
                    {articles.map(item => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ArticleCard key={item._id} {...item} />
                        </Grid>
                    ))}
                </Grid>
                <ArticleModal category={_id} add={addNewArticle}/>
            </>
        );
    };

    const getRecipes = () => {
        if (!recipes) {
            return <Spinner />;
        }
        if (!recipes.length) {
            return (
                <>
                    <Typography className={styles.empty} variant="h6" align="center">
                        Recipes list is empty now
                    </Typography>
                    <RecipeModal category={_id} add={addNewRecipe}/>
                </>
            );
        }
        return (
            <>
                <Grid container style={{padding: '1rem'}} spacing={2}>
                    {recipes.map(item => (
                        <Grid item xs={12} sm={6} md={4}>
                            <RecipeCard key={item._id} {...item} />
                        </Grid>
                    ))}
                </Grid>
                <RecipeModal category={_id} add={addNewRecipe}/>
            </>
        );
    };

    return (
        <div className={styles.root}>
            <BreadcrumbsContainer type="categories" id={id} />
            <div className={styles.header}>
                <Typography variant="h3" className={styles.header__name}>
                    {name}
                </Typography>
                <div className={styles.controls}>
                    <CategoryModal id={_id} categories={categories}/>
                    <Button className={styles.controls__delete} color='secondary' variant='contained' onClick={onDeleteHandler}>Delete</Button>
                </div>
            </div>
            <div className={styles.content}>
                <AppBar position="static">
                    <Tabs value={tab} onChange={(e, index) => setTab(index)} variant="fullWidth">
                        <Tab label="Articles" id="tab-0" aria-controls="tab-panel-0" />
                        <Tab label="Recipes" id="tab-1" aria-controls="tab-panel-1" />
                    </Tabs>
                </AppBar>
                <div
                    className={styles.content__articles}
                    value={tab}
                    index={0}
                    id="tab-panel-0"
                    aria-labelledby="tab-0"
                    role="tabpanel"
                    hidden={tab !== 0}
                >
                    {getArticles()}
                </div>
                <div
                    className={styles.content__recipes}
                    value={tab}
                    index={1}
                    id="tab-panel-1"
                    aria-labelledby="tab-1"
                    role="tabpanel"
                    hidden={tab !== 1}
                >
                    {getRecipes()}
                </div>
            </div>
        </div>
    );
};

export default Category;

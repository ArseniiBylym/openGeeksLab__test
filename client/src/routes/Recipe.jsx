import React, {useState, useEffect} from 'react';
import styles from './Recipe.module.scss';
import {fetchApi, URL_PATH} from '../api';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Spinner, MainHeader, BreadcrumbsContainer} from '../components/shared';
import {RecipeModal} from '../components/modals';
import defaultImage from '../assets/images/recipe.jpg';

const Recipe = props => {
    const {id} = props.match.params;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    const fetchRecipe = async () => {
        try {
            const response = await fetchApi.get(`${URL_PATH.RECIPES}/${id}`);
            setRecipe(response.data);
        } catch (error) {
            console.log(error);
            props.history.push('/page-not-found')
        }
    };

    const onDeleteHandler = async () => {
        try {
            await fetchApi.delete(`${URL_PATH.RECIPES}/${recipe._id}`);
            props.history.push(`/categories/${recipe.category}`)
        } catch (error) {
            console.log(error)
        }
    };

    const onUpdateHandler = (updatedRecipe) => {
        setRecipe(updatedRecipe);
    }

    if (!recipe) return <Spinner />;
    return (
        <div className={styles.root}>
            <MainHeader />
            <div className={styles.content}>
                <BreadcrumbsContainer type='recipes' id={recipe._id}/>
                <Typography variant="h3" align="center" gutterBottom>
                    {recipe.title}
                </Typography>
                <img className={styles.image} src={recipe.imageUrl || defaultImage} />
                <Typography variant="body1" align="center" gutterBottom className={styles.text}>
                    {recipe.text}
                </Typography>
                <div className={styles.controls}>
                    <RecipeModal recipe={recipe} category={recipe.category} update={onUpdateHandler}/>
                    <Button color="secondary" variant="contained" onClick={onDeleteHandler}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;

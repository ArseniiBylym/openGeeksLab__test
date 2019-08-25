import React, {useState, useEffect} from 'react';
import styles from './Recipe.module.scss';
import {fetchApi, URL_PATH} from '../api';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Spinner, MainHeader} from '../components/shared';
import {RecipeModal} from '../components/modals';
import defaultImage from '../assets/images/recipe.jpg';

const Recipe = props => {
    const {id} = props.match.params;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    const fetchRecipe = async () => {
        const response = await fetchApi.get(`${URL_PATH.RECIPES}/${id}`);
        setRecipe(response.data);
    };

    const onDeleteHandler = async () => {};

    if (!recipe) return <Spinner />;
    return (
        <div className={styles.root}>
            <MainHeader />
            <div className={styles.content}>
                <Typography variant="h3" align="center" gutterBottom>
                    {recipe.title}
                </Typography>
                <img className={styles.image} src={recipe.imageUrl || defaultImage} />
                <Typography variant="body1" align="center" gutterBottom className={styles.text}>
                    {recipe.text}
                </Typography>
                <div className={styles.controls}>
                    <RecipeModal id={recipe._id} />
                    <Button color="secondary" variant="contained" onClick={onDeleteHandler}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;

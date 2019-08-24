import React, {useState, useEffect} from 'react';
import styles from './CategoriesTree.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {Spinner} from '../Spinner/Spinner';
import Tree from './Tree';
import CreateCategoryModal from '../../modals/CreateCategoryModal';

export const CategoriesTree = props => {
    const categoriesArray = useStoreState(state => state.categories.list);
    const categoriesTree = useStoreState(state => state.categories.tree);

    const getCategoriesTree = () => {
        return (
            <div className={styles.tree__content}>
                {categoriesArray.length ? (
                    <Tree tree={categoriesTree}/>
                ) : (
                    <Typography variant='h6' gutterBottom>Category list is empty now</Typography> 
                )}
                <CreateCategoryModal />
            </div> 
        )
    }

    return (
        <div className={styles.root}>
            <Grid container justify="center" >
                <Typography color='primary' variant="h6">Shoose a category</Typography>
                <div className={styles.tree}>
                    {categoriesArray ? getCategoriesTree() : <Spinner />}
                </div>
            </Grid>
        </div>
    );
};

import React from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {Spinner} from '../Spinner/Spinner';
import Tree from './Tree';
import {CategoryModal} from '../../modals';
import styles from './CategoriesTree.module.scss';

export const CategoriesTree = props => {
    const categoriesArray = useStoreState(state => state.categories.list);
    const categoriesTree = useStoreState(state => state.categories.tree);
    const addCategory = useStoreActions(state => state.categories.addCategory);

    const onAddCategoryHandler = category => {
        addCategory(category);
    };

    const getCategoriesTree = () => {
        return (
            <div className={styles.tree__content}>
                <div className={styles.tree__content__body}>
                    {categoriesArray.length ? (
                        <Tree tree={categoriesTree} />
                    ) : (
                        <Typography variant="h6" gutterBottom>
                            Category list is empty now
                        </Typography>
                    )}
                </div>
                <CategoryModal list={categoriesArray} add={onAddCategoryHandler} />
            </div>
        );
    };

    return (
        <div className={styles.root}>
            <Grid container justify="center">
                <Typography color="primary" variant="h6">
                    Shoose a category
                </Typography>
                <div className={styles.tree}>{categoriesArray ? getCategoriesTree() : <Spinner />}</div>
            </Grid>
        </div>
    );
};

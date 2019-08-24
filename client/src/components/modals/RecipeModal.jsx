import React, {useState, useEffect} from 'react';
import styles from './RecipeModal.module.scss';
import Button from '@material-ui/core/Button';

export const RecipeModal = ({id}) => {
    return (
        <div className={styles.root}>
            <Button color="primary" variant="contained" >
                {id ? 'Edit recipe' : 'Add new recipe'}
            </Button>
        </div>
    );
};

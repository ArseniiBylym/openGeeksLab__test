import React, {useState, useEffect} from 'react';
import styles from './ArticleModal.module.scss';
import Button from '@material-ui/core/Button';

export const ArticleModal = ({id}) => {
    return (
        <div className={styles.root}>
            <Button color="primary" variant="contained" >
                {id ? 'Edit article' : 'Add new article'}
            </Button>
        </div>
    );
};

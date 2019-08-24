import React, {useState, useEffect} from 'react';
import styles from './CategoryModal.module.scss';
import Button from '@material-ui/core/Button';


export const CategoryModal = ({id}) => {


    return (
        <div className={styles.root}>
             <Button color='primary' variant='contained' >
                 {id ? 'Edit category' : 'Add new category'}
             </Button>
        </div>
    )
};

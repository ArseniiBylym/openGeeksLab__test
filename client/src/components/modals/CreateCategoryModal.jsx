import React, {useState, useEffect} from 'react';
import styles from './CreateCategoryModal.module.scss';
import Button from '@material-ui/core/Button';

const CreateCategoryModal = props => {

    return (
        <div className={styles.root}>
            <Button color='primary' variant='contained' fullWidth>Add new category</Button>
        </div>
    )
};

export default CreateCategoryModal
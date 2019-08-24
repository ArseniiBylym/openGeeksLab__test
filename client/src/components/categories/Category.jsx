import React, {useState, useEffect} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';
import styles from './Category.module.scss';
import {BreadcrumbsContainer} from '../shared'
import Typography from '@material-ui/core/Typography';

const Category = props => {
    const {id} = props.match.params;
    const {name, parent, _id} = useStoreState(state => state.categories.list.find(item => item._id === id))

    return (
        <div className={styles.root}>
            <BreadcrumbsContainer type='categories' id={id}/>
            <div className={styles.header}>
                <Typography variant='h3' className={styles.header__name}>{name}</Typography> 
            </div>
            <div className={styles.content}></div>
        </div>
    )
};

export default Category
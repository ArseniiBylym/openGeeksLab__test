import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {CategoriesTree} from '../components/shared/';
import styles from './Home.module.scss';

const Home = props => {
    return (
        <div className={styles.root}>
            <div className={styles.image} />
            <div className={styles.content}>
                <Typography color='primary' variant='h2' align='center' gutterBottom>Recipes and Articles</Typography>
                <Typography variant='h5' align='center' gutterBottom>
                    Read our fascinating articles, cook with our delicious recipes and share you own with us!
                </Typography>
                <Link to='/categories'><Button color='primary' variant='contained'>Choose a category</Button></Link>
            </div>
        </div>
    )
};

export default Home
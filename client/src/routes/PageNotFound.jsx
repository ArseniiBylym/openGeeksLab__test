import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './PageNotFound.module.scss';
import {Link} from 'react-router-dom';

const PageNotFound = props => {

    return (
        <div className={styles.root}>
            <Typography variant='h2' gutterBottom>404 Page Not Found</Typography>
            <Link to='/' >Return to home page</Link>
        </div>
    )
};

export default PageNotFound
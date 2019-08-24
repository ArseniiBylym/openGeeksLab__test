import React, {useState, useEffect} from 'react';
import styles from './MainHeader.module.scss';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

export const MainHeader = props => {

    return (
        <div className={styles.root}>
            <Link to='/' className={styles.icon} />
            <Typography variant='h6' color='textPrimary'>Eat and Read</Typography>
        </div>
    )
};

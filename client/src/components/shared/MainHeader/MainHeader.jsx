import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import styles from './MainHeader.module.scss';

export const MainHeader = props => {
    return (
        <div className={styles.root}>
            <Link to="/" className={styles.icon} />
            <Typography variant="h6" color="textPrimary">
                Eat and Read
            </Typography>
        </div>
    );
};

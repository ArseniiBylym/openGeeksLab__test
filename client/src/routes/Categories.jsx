import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Category from '../components/categories/Category';
import { CategoriesTree, MainHeader } from '../components/shared';

import Grid from '@material-ui/core/Grid';
import styles from './Categories.module.scss';

const Categories = props => {

    return (
        <div className={styles.root}>
            <Grid container>
                <Grid item xs={12}>
                    <MainHeader />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CategoriesTree />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Route path="/categories/:id" component={Category} />
                </Grid>
            </Grid>
        </div>
    )
};

export default Categories
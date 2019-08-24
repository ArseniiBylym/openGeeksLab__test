import React, {useState, useEffect} from 'react';
import styles from './Category.module.scss';

const Category = props => {

    return (
        <div className={styles.root}>
            {props.match.params.id}
        </div>
    )
};

export default Category
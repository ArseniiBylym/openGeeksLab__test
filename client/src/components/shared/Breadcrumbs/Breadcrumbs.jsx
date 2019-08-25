import React, {useState, useEffect} from 'react';
import {useStoreState} from 'easy-peasy';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import {fetchApi} from '../../../api';
import styles from './Breadcrumbs.module.scss';

export const BreadcrumbsContainer = ({type, id}) => {
    const [parents, setParents] = useState(null);
    const breadcrumbsUpdateTrigger = useStoreState(store => store.categories.breadcrumbsUpdateTrigger);

    useEffect(() => {
        getParents(id);
    }, [id, breadcrumbsUpdateTrigger]);

    const getParents = async id => {
        const parents = await fetchApi.get(`/api/${type}/${id}?getParents=true`);
        setParents(parents.data);
    };

    const createBreadcrumbs = () => {
        if (!parents.length) return null;
        return (
            <Breadcrumbs aria-label="breadcrumb">
                {parents.map(item => (
                    <Link to={`/categories/${item._id}`} key={item._id}>
                        <Typography variant="h6">{item.name}</Typography>
                    </Link>
                ))}
            </Breadcrumbs>
        );
    };

    return <div className={styles.root}>{parents ? createBreadcrumbs() : null}</div>;
};

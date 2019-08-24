import React, {useState, useEffect} from 'react';
import styles from './Breadcrumbs.module.scss';
import {Link} from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {fetchApi, URL_PATH} from '../../../api'
import { Spinner } from '../';
import Typography from '@material-ui/core/Typography';

export const BreadcrumbsContainer = ({type, id}) => {
    const [parents, setParents] = useState(null);

    useEffect(() => {
        getParents(id)
    }, [id])

    const getParents = async id => {
        const parents = await fetchApi.get(`/api/${type}/${id}?getParents=true`);
        setParents(parents.data)
    }

    const createBreadcrumbs = () => {
        if (!parents.length) return null;
        
        return (
            <Breadcrumbs aria-label="breadcrumb">\
                {parents.map(item => (
                    <Link to={`/categories/${item._id}`}>
                        <Typography variant='h6'>{item.name}</Typography>
                    </Link>
                ))}
            </Breadcrumbs>
        ) 
    }


    return (
        <div className={styles.root}>
            {parents ? createBreadcrumbs() : <Spinner />}
        </div>
    )
};

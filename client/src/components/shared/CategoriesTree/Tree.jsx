import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import TreeView from '@material-ui/lab/TreeView';

import TreeItem from '@material-ui/lab/TreeItem';
import {MdChevronRight, MdExpandMore} from 'react-icons/md';
import styles from './Tree.module.scss';

const Tree = ({tree}) => {

    const createMenuItems = (list) => {
        if (list.length === 0) {
            return null;
        } 
        return list.map(item => (
            <NavLink to={`/categories/${item._id}`} className={styles.link}>
                <TreeItem nodeId={item._id} label={item.name} classes={{label: styles.label}} key={item._id}>
                    {createMenuItems(item.children)}
                </TreeItem>
            </NavLink>
        ))
    }


    return (
        <TreeView
            className={styles.root}
            defaultCollapseIcon={<MdExpandMore />}
            defaultExpandIcon={<MdChevronRight />}
        >
            {createMenuItems(tree)}
        </TreeView>
    );
};

export default Tree;

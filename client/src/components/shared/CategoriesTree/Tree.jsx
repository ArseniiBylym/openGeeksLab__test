import React from 'react';
import {withRouter} from 'react-router';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import {MdChevronRight, MdExpandMore} from 'react-icons/md';

import styles from './Tree.module.scss';

const Tree = ({tree, history}) => {
    const onRedirectHandler = id => e => {
        history.push(`/categories/${id}`);
    };

    const createMenuItems = list => {
        if (!list.length) return null;
        return list.map(item => (
            <TreeItem
                nodeId={item._id}
                label={item.name}
                classes={{label: styles.label}}
                key={item._id}
                onClick={onRedirectHandler(item._id)}
            >
                {createMenuItems(item.children)}
            </TreeItem>
        ));
    };

    return (
        <TreeView className={styles.root} defaultCollapseIcon={<MdExpandMore />} defaultExpandIcon={<MdChevronRight />}>
            {createMenuItems(tree)}
        </TreeView>
    );
};

export default withRouter(Tree);

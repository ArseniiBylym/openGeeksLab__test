import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './CategoryModal.module.scss';
import {fetchApi, URL_PATH} from '../../api';
import Typography from '@material-ui/core/Typography';
import {Spinner} from '../shared';


export const CategoryModal = ({category, list, add, update}) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [parent, setParent] = useState('');
    const [sending, setSending] = useState(false);

    useEffect(() => {
        isEditMode() && initForm();   
    }, [category])

    const isEditMode = () => !!category

    const isDisabled = () => {
        return !name;
    }

    const initForm = () => {
        setName(category.name);
        setParent(category.parent || '');
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        const body = {name, parent: parent || null};
        setSending(true);
        let response;
        if (isEditMode()) {
            response = await fetchApi.put(`${URL_PATH.CATEGORIES}/${category._id}`, body);
        } else {
            response = await fetchApi.post(URL_PATH.CATEGORIES, body);
        }
        setSending(false);
        resetForm();
        setOpen(false);
        isEditMode() ? update(response.data) : add(response.data);
    };

    const resetForm = () => {
        if (isEditMode()) {
            setName(category.name);
            setParent(category.parent);
        } else {
            setName('');
            setParent('');
        }
    }

    const onCloseHandler = () => {
        resetForm();
        setOpen(false);
    };


    return (
        <div className={styles.root}>
             <Button color='primary' variant='contained' onClick={() => setOpen(true)}>
                 {isEditMode() ? 'Edit category' : 'Add new category'}
             </Button>
             <Dialog
                open={open}
                onClose={onCloseHandler}
                aria-labelledby="form-dialog-title"
                className={styles.dialog}
                classes={{paper: styles.paper}}
            >
                <form onSubmit={onSubmitHandler}>
                    {sending && <Spinner bgColor="#efefefa4" />}
                    <div className={styles.header}>
                        <Typography color="primary" variant="h5" align="center">
                            {isEditMode() ? 'Edit category' : 'Create new category'}
                        </Typography>
                    </div>
                    <DialogContent className={styles.form}>
                        <TextField
                            autoFocus
                            margin="normal"
                            name="name"
                            label="Category name"
                            type="text"
                            fullWidth
                            required
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        {list && (
                            <TextField
                                margin="normal"
                                name="parent"
                                label="Parent category"
                                select
                                fullWidth
                                onChange={e => setParent(e.target.value)}
                                value={parent}
                            >
                                {list.map(item => (
                                    <MenuItem key={item._id} value={item._id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            disabled={isDisabled()}
                            onClick={onSubmitHandler}
                            color="primary"
                        >
                            {isEditMode() ? 'Update' : 'Create'}
                        </Button>
                        <Button
                            disabled={sending}
                            onClick={onCloseHandler}
                            color="primary"
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
};

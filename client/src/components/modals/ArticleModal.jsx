import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './ArticleModal.module.scss';
import {fetchApi, URL_PATH} from '../../api';
import Typography from '@material-ui/core/Typography';
import {Spinner} from '../shared';

export const ArticleModal = ({article, category, add, update}) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sending, setSending] = useState(false);

    useEffect(() => {
        if (article) {
            const {title, subTitle, text, imageUrl} = article;
            setTitle(title);
            setSubTitle(subTitle);
            setText(text);
            setImageUrl(imageUrl);
        }
    }, [])

    const isEditMode = () => !!article;

    const isDisabled = () => {
        return !title || !subTitle || !text || sending;
    };

    const onSubmitHandler = async e => {
        e.preventDefault();
        const body = {title, subTitle, text, category, imageUrl: imageUrl || null};
        // if (!imageUrl) delete body.imageUrl;
        setSending(true);
        let response;
        if (isEditMode()) {
            response = await fetchApi.put(`${URL_PATH.ARTICLES}/${article._id}`, body);
        } else {
            response = await fetchApi.post(URL_PATH.ARTICLES, body);
        }
        setSending(false);
        clearForm();
        setOpen(false);
        isEditMode() ? update(response.data) : add(response.data);
    };

    const onCloseHandler = () => {
        clearForm();
        setOpen(false);
    };

    const clearForm = () => {
        if (isEditMode()) {
            const {title, subTitle, text, imageUrl} = article;
            setTitle(title);
            setSubTitle(subTitle);
            setText(text);
            setImageUrl(imageUrl);
        } else {
            setTitle('');
            setSubTitle('');
            setText('');
            setImageUrl('');
        }
    };

    return (
        <div className={styles.root}>
            <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
                {isEditMode() ? 'Edit article' : 'Add new article'}
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
                            {isEditMode() ? 'Edit article' : 'Create new article'}
                        </Typography>
                    </div>
                    <DialogContent className={styles.form}>
                        <TextField
                            autoFocus
                            margin="normal"
                            name="title"
                            label="Title"
                            type="text"
                            fullWidth
                            required
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                        <TextField
                            margin="normal"
                            name="subTitle"
                            label="Subtitle"
                            type="text"
                            fullWidth
                            required
                            onChange={e => setSubTitle(e.target.value)}
                            value={subTitle}
                        />
                        {/* {categories && (
                            <TextField
                                margin="normal"
                                name="category"
                                label="Category"
                                select
                                fullWidth
                                required
                                onChange={e => setCategory(e.target.value)}
                                value={category}
                            >
                                {categories.map(item => (
                                    <MenuItem key={item._id} value={item._id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )} */}
                        <TextField
                            margin="normal"
                            name="text"
                            label="Text"
                            type="text"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            onChange={e => setText(e.target.value)}
                            value={text}
                        />
                        <TextField
                            margin="normal"
                            name="imageUrl"
                            label="Image URL"
                            type="text"
                            fullWidth
                            onChange={e => setImageUrl(e.target.value)}
                            value={imageUrl}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            className={styles.buttonConfirm}
                            disabled={isDisabled()}
                            onClick={onSubmitHandler}
                            color="primary"
                        >
                            {isEditMode() ? 'Update' : 'Create'}
                        </Button>
                        <Button
                            className={styles.buttonCancel}
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
    );
};

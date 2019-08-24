import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './ArticleCard.module.scss';
import defaultImage from '../../assets/images/article.jpg'
import { getShortString } from './../../utils/helpers';

const ArticleCard = props => {
    const {title, subTitle, _id, imageUrl} = props;

    return (
        <Card className={styles.root}>
            <CardActionArea>
                <CardMedia
                    className={styles.media}
                    image={imageUrl || defaultImage}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {getShortString(subTitle, 50)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/articles/${_id}`}>
                        Read more
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ArticleCard;

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = {
    container: {
        display: 'flex'
    },
    card: {
        maxWidth: 345,
        margin: 15
    },
    media: {
        height: 'auto'
    },
};

function Items(props) {
    const { classes, items } = props;
    return (
        <div className={classes.container}>
            {items && items.length > 0 ?
                items.map((item) => 
                <Card key={item.id} className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="No image"
                            className={classes.media}
                            height="140"
                            image={item.image_versions2.candidates[1].url}
                        />
                    </CardActionArea>
                    {item && item.media_type == 2 ? <CardActions>
                        <Button size="small" color="primary" onClick={()=>{window.open(item.video_versions[0].url)}}>
                            Download
                        </Button>
                    </CardActions>: null}
                </Card>) : null}
        </div>
    );
}

export default withStyles(styles)(Items);
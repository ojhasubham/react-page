import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  loader: {
    'margin': '20% 50%'
  },
  card: {
    display: 'flex',
    width: '100%',
    padding: '0% 20%',
    margin: 15
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  bigAvatar: {
    margin: 5,
    width: 200,
    height: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px 0px 25px'
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  followerStyle: {
    marginRight: 20
  },
  bioStyle: {
    margin: '20px 0px 0px 25px'
  }
})

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  render() {
    let { user, classes, status } = this.props;
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Card className={classes.card}>
             {user && status == 'ok' && 
               <Avatar alt="Remy Sharp" src={user && user.profile_pic_url ? user.profile_pic_url:null}
                className={classes.bigAvatar}
              />}
              {user && status == 'ok' && <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {user && user.full_name ? user.full_name: null}</Typography>

                  <div className={classes.controls}>
                    <div className={classes.followerStyle}>
                      <Typography component="h6" variant="h6">
                        Followers</Typography>
                      <Typography component="h6" variant="h6">
                        {user.follower_count}</Typography>
                    </div>
                    <div>
                      <Typography component="h6" variant="h6">
                        Following</Typography>
                      <Typography component="h6" variant="h6">
                        {user.following_count}</Typography>
                    </div>
                  </div>
                  <div className={classes.bioStyle}>
                    <Typography component="p">
                      {user.biography}</Typography>
                  </div>
                </CardContent>
              </div>
             }             
              {!user && status && status !== 'ok' ? <h3 className="loading-indicator">No data found</h3> : null}  
          </Card>
        </Grid>
         {/* {!user && status !== 'ok' ? <CircularProgress className={classes.loader} /> : null}  */}
      </div>
    )
  }
};


export default withStyles(styles)(User);
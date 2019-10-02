import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './mealCardStyle';


export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title="Pizza" //get data from db 
      />
      <CardMedia
        className={classes.media}
        image="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-salami-close-up.jpg"
        title="Pizza"
      />
      <CardContent>
        <Typography variant="subtitle1" color="textPrimary" component="sub">
          Cuisine : Vegetarian {/*comes from database*/}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

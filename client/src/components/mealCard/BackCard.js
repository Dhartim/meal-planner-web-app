import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import './mealCard.css';
import { Card, Table, TableCell,TableBody } from "@material-ui/core";
// import Divider from '@material-ui/core/Divider';

export class BackCard extends Component{
    render(){
        const meal = this.props.meal;
        return(
            <Card>
                <CardContent>
                    <Typography variant="subtitle1" color="textPrimary" component="p">
                        {meal.dishName}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary" component="p">
                        Prep time: {meal.prepTime}
                    </Typography>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Calories</TableCell>
                                <TableCell>90</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Carbs</TableCell>
                                <TableCell>20</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Protein</TableCell>
                                <TableCell>50</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Fat</TableCell>
                                <TableCell>20</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Typography>
                        Recipe 
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
export default BackCard;
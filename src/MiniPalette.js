import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles"
import styles from "./styles/MiniPaletteStyles"
import DeleteIcon from "@material-ui/icons/Delete";
import { render } from 'react-dom';


class MiniPalette extends Component {
    constructor(props) {
        super(props);

        this.deletePalette = this.deletePalette.bind(this);
    }
    deletePalette(e){
        e.stopPropagation();
        this.props.handleDelete(this.props.palette.id)
    }
    render(){
    const { classes, paletteName, emoji, colors, handleClick  } = this.props;
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} 
        style={{backgroundColor: color.color}} 
        key={color.name}/>

        
    ))
    console.log(classes)
    return (
        <div className={classes.root} onClick={handleClick}>
        <DeleteIcon 
        className={classes.DeleteIcon}
         style={{transition: "all 0.3s ease-in-out"}}
         onClick={this.deletePalette}
         />
            <div className={classes.colors}>{miniColorBoxes}</div>
            {/* MINI COLOR BOX */}
    <h5 className={classes.title}> {paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    );
    }
}


export default withStyles(styles)(MiniPalette);
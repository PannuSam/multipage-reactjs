import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import PicList from '@material-ui/core/GridList';
import PicListT from '@material-ui/core/GridListTile';
import PicListTBar from '@material-ui/core/GridListTileBar';
import PicListSubHead from '@material-ui/core/ListSubheader';
import '../style.css';
const imgdata = [{
        heading: 'Austrian Alps',
        image: require('../img/a.jpg'),
    },
    {
        heading: 'Rocky Mountains View',
        image: require('../img/b.jpg'),
    },
    {
        heading: 'Kapas biru waterfall ,Indonesian',
        image: require('../img/c.jpg'),
    },
    {
        heading: 'Murren brige, Switzerland',
        image: require('../img/d.jpg'),
    },
	{
        heading: 'Grampians National park, Australia',
        image: require('../img/f.jpg'),
    },
    {
        heading: 'Adventurous Mountain Hike',
        image: require('../img/e.jpg'),
    },
];
const picStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'space-around',
    },
    galleryList: {
        width: 1300,
        height: 1300
    },
});

class Gallery extends React.Component {
    render() {
        const { classes } = this.props;
        return ( 
		<div className = { classes.root } >
			
            <PicList cols={3} cellHeight = { 353 } spacing = { 30 } className = { classes.galleryList } >
            <PicListT image = "Subheader" cols = { 3 } style = {{ height: 'auto'}} >
            <PicListSubHead component = "div"> <h1>My Gallery</h1></PicListSubHead> </PicListT> {
                imgdata.map((data) => ( 
			
				<PicListT image = { data.image }>
                    <img src = { data.image }
                    alt = { data.heading }/> 
					<PicListTBar title = { data.heading }/> 
				</PicListT>
				
                ))}
			</PicList> 
		</div>
        )
    }
}

export default withStyles(picStyles, { withTheme: true })(Gallery);
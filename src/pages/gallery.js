import React from 'react';
import '../style.css';
import Card from '../component/Cards';

class gallery extends React.Component {
    
	render() {


        const data=[
            {
                name: 'Austrian Alps',
                image: require('../img/a.jpg'),
            },
            {
                name: 'Rocky Mountains View',
                image: require('../img/b.jpg'),
            },
            {
                name: 'Kapas biru waterfall ,Indonesian',
                image: require('../img/c.jpg'),
            },
            {
                name: 'Murren brige, Switzerland',
                image: require('../img/d.jpg'),
            },
            {
                name: 'Grampians National park, Australia',
                image: require('../img/f.jpg'),
            },
            {
                name: 'Adventurous Mountain Hike',
                image: require('../img/e.jpg'),
            },
        ];


        return ( 
        
		<Card data={data}/>
    );
}
}

export default gallery;
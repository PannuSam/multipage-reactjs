import React from 'react';
import  Card  from './Card';
import '../style.css';

class Cards extends React.Component {
  
	render() {
		return (
      <div className="subHead"><h3>My Gallery</h3>
			<div className="cards">
        
				{this.props.data.map((data) => {
        return <Card data={data} key={data.name} />
				})}
			</div>
      </div>
		);
	}
}
export default Cards;
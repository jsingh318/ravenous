import React from 'react';
import './BuinessList.css';
import Business from '../Business/Business';

class BuinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
              <Business />
              <Business />
              <Business />
              <Business />
              <Business />  
            </div>   
        )
    }
}

export default BuinessList;
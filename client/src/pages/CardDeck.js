import React from 'react';
import ItemCard from './Cards.js';
// import data from the data route

let Application = React.createClass({
  createItemCard: function (card) {
    return <ItemCard source={card} key={card} />;
  },

  createItemCard: function (card) {
    return card.map(this.createItemCard);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">

            {this.createItemCard(data.card)}

          </div>
        </div>
      </div>
    );
  }
});

export default Application;
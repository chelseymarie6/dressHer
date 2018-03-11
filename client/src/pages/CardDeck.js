import React from 'react';
import ItemCard from './Cards.js';


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

            {this.createItemCard(card)}

          </div>
        </div>
      </div>
    );
  }
});

export default Application;
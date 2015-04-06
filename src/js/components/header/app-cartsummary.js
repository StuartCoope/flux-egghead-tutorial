/* @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');
var AppStore = require('../../stores/app-store.js');

function cartTotals() {
  return AppStore.getCartTotals();
}

var CartSummary = React.createClass({
    mixins: [new StoreWatchMixin(cartTotals)],
    render: function() {
      return (
        <div>
          <Link href="/cart" className="btn btn-success">
            Cart Items: {this.state.qty} / £{this.state.total}
          </Link>
        </div>
      )
    }
});

module.exports = CartSummary;

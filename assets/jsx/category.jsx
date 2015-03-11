var React = require("react");

var Category = React.createClass({
  propTypes: {
    category: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired
  },
  onClick: function () {
    this.props.onClick(this.state.category.id);
  },
  render: function () {
    var className = "category " + this.props.category.className;
    return (
      <li className={className}><a onClick={this.onClick}></a></li>
    )
  }
});

var Categories = React.creatClass({
  getInitialState: function () {
    return {
      "categories": [
        {
          "id": 0,
          "name": "all",
          "className": "all"
        },
        {
          "id": 1,
          "name": "red",
          "className": "red"
        },
         {
          "id": 2,
          "name": "orange",
          "className": "orange"
        },
         {
          "id": 3,
          "name": "yellow",
          "className": "yellow"
        },
         {
          "id": 4,
          "name": "green",
          "className": "green"
        },
        {
          "id": 5,
          "name": "blue",
          "className": "blue"
        },
      ]
    }
  },
  propTypes: {
    onSelect: React.PropTypes.func.isRequired
  },
  onSelect: function (categoryId) {
    this.props.onSelect(categoryId);
  },
  render: function () {
    var categories = this.state.categories.map((category) => {
      return <Category category={category} onClick={this.onSelect} />
    });
    return (
      <ul className="categories">
        {categories}
      </ul>
    )
  }
});

module.exports = Categories;

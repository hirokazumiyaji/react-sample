var React = require("react");

var Article = React.createClass({
  propTypes: {
    article: React.PropTypes.object.isRequired,
    isDetail: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
  },
  onClick: function () {
    this.props.onClick(this.props.article.id);
  },
  render: function () {
    if (this.props.isDetail) {
      return (
        <section className="white-container">
          <header style="height:50px;">{this.props.article.title}</header>
          <article style="height:2000px;">{this.props.article.content}</article>
        </section>
      )
    } else {
      className = "article " + this.props.article.category.className;
      return <li className={className}><a onClick={this.onClick}>{this.props.article.title}</a></li>
    }
  }
});

var Articles = React.createClass({
  propTypes: {
    articles: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func.isRequired
  },
  onSelect: function (articleId) {
    this.props.onSelect(articleId);
  },
  render: function () {
    var articles = this.props.articles.map((article) => {
      return <Article article={article} isDetail={false} onClick={this.onSelect} />
    });

    return (
      <section className="white-container">
        <ul className="articles">
          {articles}
        </ul>
      </section>
    )
  }
});

module.exports = {
  Article: Article,
  Articles: Articles
};

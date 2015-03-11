var React = require("react"),
    Articles = require("article").Articles,
    Article = require("article").Article,
    Categories = require("category");


var App = React.createClass({
  getInitialState: function () {
    return {
      isList: true,
      articles: window._strings,
      selectArticle: null,
      selectCateory: 0
  },
  onSelectCategory: function (categoryId) {
    this.setState({
      isList: true,
      articles: window._strings.filter((article) => {
        return article.category.id == categoryId;
      })
    });
  },
  onSelectArticle: function (articleId) {
    this.setState({
      isList: false,
      selectArticle: this.state.articles.filter((article) => {
        return article.id == articleId;
      })[0];
    });
  },
  render: function () {
    var content;
    if (isList) {
      content = <Articles articles={this.state.articles} onSelect={this.onSelectArticle} />
    } else {
      var isDetail = true;
      content = <Article article={this.state.selectArticle} isDetail={isDetail} />
    }

    return (
      <div>
        <Categories onSelect={this.onSelectCategory} />
        {content}
      </div>
    );
  }
});

React.render(<App />, document.getElementById("content");

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gsub = {};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      shape: 'Current Shapes'
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "root" },
        React.createElement(
          "header",
          null,
          React.createElement(
            "h1",
            null,
            "Geometric shapes"
          ),
          React.createElement(Subheading, null)
        ),
        React.createElement(
          "div",
          { className: "buttons" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-xs-6" },
                React.createElement(
                  "div",
                  {
                    role: "button",
                    className: "button square-button",
                    onClick: function onClick() {
                      return _this2.setState({ shape: 'Square' });
                    },
                    style: { fontWeight: this.state.shape === 'Square' ? 'bold' : null }
                  },
                  "Square"
                )
              ),
              React.createElement(
                "div",
                { className: "col-xs-6" },
                React.createElement(
                  "div",
                  {
                    role: "button",
                    className: "button diamond-button",
                    onClick: function onClick() {
                      return _this2.setState({ shape: 'Diamond' });
                    },
                    style: { fontWeight: this.state.shape === 'Diamond' ? 'bold' : null }
                  },
                  "Diamond"
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "shapes" },
          function () {
            if (_this2.state.shape === 'Square') return React.createElement(Square, null);else if (_this2.state.shape === 'Diamond') return React.createElement(Diamond, null);
          }()
        )
      );
    }
  }]);

  return App;
}(React.Component);

var Diamond = function (_React$Component2) {
  _inherits(Diamond, _React$Component2);

  function Diamond(props) {
    _classCallCheck(this, Diamond);

    var _this3 = _possibleConstructorReturn(this, (Diamond.__proto__ || Object.getPrototypeOf(Diamond)).call(this, props));

    _this3.state = {
      size: props.size || 5
    };
    return _this3;
  }

  _createClass(Diamond, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        { className: "shape diamond" },
        function () {
          var rows = [];
          var delay;
          for (var row = 0; row < 2 * _this4.state.size - 1; row++) {
            rows.push(React.createElement(
              "div",
              { className: "shape-row", key: 'r' + row },
              function () {
                var items = [];
                var limit = row > _this4.state.size - 1 ? 2 * _this4.state.size - row - 1 : row + 1;
                for (var item = 0; item < limit; item++) {
                  items.push(React.createElement("div", { style: {
                      animationDelay: (delay = row * 0.1 + item * 0.1) + 's'
                    }, className: "item", key: item }));
                }
                return items;
              }()
            ));
          }
          var id = gsub.id = Date.now();
          gsub.text = 'Diamond';
          setTimeout(function () {
            if (gsub.id === id) {
              gsub.setState({ text: gsub.text });
            }
          }, delay * 1000 + 1000);
          return rows;
        }()
      );
    }
  }]);

  return Diamond;
}(React.Component);

var Square = function (_React$Component3) {
  _inherits(Square, _React$Component3);

  function Square(props) {
    _classCallCheck(this, Square);

    var _this5 = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props));

    _this5.state = {
      size: props.size || 5
    };
    return _this5;
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      return React.createElement(
        "div",
        { className: "shape square" },
        function () {
          var rows = [];
          var delay;
          for (var row = 0; row < _this6.state.size; row++) {
            rows.push(React.createElement(
              "div",
              { className: "shape-row", key: 'r' + row },
              function () {
                var items = [];
                for (var item = 0; item < _this6.state.size; item++) {
                  items.push(React.createElement("div", { style: {
                      animationDelay: (delay = row * 0.1 + item * 0.1) + 's'
                    }, className: "item", key: item }));
                }
                return items;
              }()
            ));
          }
          var id = gsub.id = Date.now();
          gsub.text = 'Square';
          setTimeout(function () {
            if (gsub.id === id) {
              gsub.setState({ text: gsub.text });
            }
          }, delay * 1000 + 1000);
          return rows;
        }()
      );
    }
  }]);

  return Square;
}(React.Component);

var Subheading = function (_React$Component4) {
  _inherits(Subheading, _React$Component4);

  function Subheading(props) {
    _classCallCheck(this, Subheading);

    var _this7 = _possibleConstructorReturn(this, (Subheading.__proto__ || Object.getPrototypeOf(Subheading)).call(this, props));

    _this7.state = {
      text: ''
    };
    return _this7;
  }

  _createClass(Subheading, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this8 = this;

      gsub.setState = function (s) {
        _this8.setState(s);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var text = this.state.text || 'Current Shapes';
      return React.createElement(
        "h2",
        { className: this.state.text ? 'white' : null },
        text
      );
    }
  }]);

  return Subheading;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

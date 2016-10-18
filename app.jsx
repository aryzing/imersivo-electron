var gsub = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: 'Current Shapes'
    }
  }
  render() {
    return (
      <div className="root">
        <header>
          <h1>Geometric shapes</h1>
          <Subheading />
        </header>
        <div className="buttons">
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <div
                  role="button"
                  className="button square-button"
                  onClick={() => (this.setState({shape: 'Square'}))}
                  style={{fontWeight: this.state.shape === 'Square' ? 'bold' : null}}
                  >Square
                </div>

              </div>
              <div className="col-xs-6">
                <div
                  role="button"
                  className="button diamond-button"
                  onClick={() => (this.setState({shape: 'Diamond'}))}
                  style={{fontWeight: this.state.shape === 'Diamond' ? 'bold' : null}}
                  >Diamond
                </div>

              </div>

            </div>

          </div>
        </div>
        <div className="shapes">
          {(() => {
            if (this.state.shape === 'Square') return <Square />;
            else if (this.state.shape === 'Diamond') return <Diamond />;
          })()}
        </div>
      </div>
    );
  }
}

class Diamond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size || 5
    }
  }
  render() {
    return (
      <div className="shape diamond">
        {(() => {
          var rows = [];
          var delay;
          for (var row = 0; row < 2 * this.state.size - 1; row++) {
            rows.push(<div className="shape-row" key={'r' + row}>
              {(() => {
                var items = [];
                var limit = row > this.state.size - 1 ? 2 * this.state.size - row - 1 : row + 1;
                for (var item = 0; item < limit; item++) {
                  items.push(<div style={{
                    animationDelay: (delay = (row * 0.1 + item * 0.1)) + 's'
                  }} className="item" key={item}></div>);
                }
                return items;
              })()}
            </div>);
          }
          var id = gsub.id = Date.now();
          gsub.text = 'Diamond';
          setTimeout(() => {
            if (gsub.id === id) {
              gsub.setState({text: gsub.text});
            }
          }, delay * 1000 + 1000);
          return rows;
        })()}
      </div>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size || 5
    }
  }
  render() {
    return (
      <div className="shape square">
        {(() => {
          var rows = [];
          var delay;
          for (var row = 0; row < this.state.size; row++) {
            rows.push(<div className="shape-row" key={'r' + row}>
              {(() => {
                var items = [];
                for (var item = 0; item < this.state.size; item++) {
                  items.push(<div style={{
                    animationDelay: (delay = (row * 0.1 + item * 0.1)) + 's'
                  }} className="item" key={item}></div>);
                }
                return items;
              })()}
            </div>);
          }
          var id = gsub.id = Date.now();
          gsub.text = 'Square';
          setTimeout(() => {
            if (gsub.id === id) {
              gsub.setState({text: gsub.text});
            }
          }, delay * 1000 + 1000);
          return rows;
        })()}
      </div>
    );
  }
}

class Subheading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  componentDidMount() {
    gsub.setState = (s) => {
      this.setState(s);
    }
  }
  render() {
    var text = this.state.text || 'Current Shapes';
    return <h2 className={this.state.text ? 'white' : null}>{text}</h2>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

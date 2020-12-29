import { Component } from 'react';

class Tea extends Component {
  constructor(props) {
    super(props);

    const localStorageKey = "tea-" + props.tea_id
    this.state = {
      localStorageKey: localStorageKey,
      tea: JSON.parse(localStorage.getItem(localStorageKey))
    }
  }

  render() {
    let img_style = {
      width: "7rem",
      maxWidth: "100%",
    };

    // const shop = JSON.parse(localStorage.getItem("shop-" + this.state.tea.shop_id));
    const default_url = "https://en.wikipedia.org/wiki/Tea";
    const default_img = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tea_bags.jpg/220px-Tea_bags.jpg";

    return (
      <div>
        <div className="card" data-toggle="modal" data-target={"#teaModal-" + this.state.tea.tea_id}>
          <div className="d-flex flex-row">
            <div className="p-1">
              <img src={this.state.tea.img || default_img}  alt={this.state.tea.name} style={img_style} />
            </div>

            <div className="card-body p-1">
              <h5 className="card-title">{this.state.tea.name}</h5>
              <p className="card-text">
                Temps d'infusion : {this.state.tea.infuse_times} secondes
              </p>
            </div>
          </div>
        </div>

        <div className="modal fade" id={"teaModal-" + this.state.tea.tea_id} tabIndex="-1" role="dialog" aria-labelledby="teaModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="teaModalLabel">{this.state.tea.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <img src={this.state.tea.img || default_img} alt={this.state.tea.name} style={{width: "100%"}} />

                <dl className="row m-1">
                  <dt className="col">Magasin:</dt>
                  <dd className="col">
                    <a href={this.state.tea.url || default_url } rel="external">{this.state.tea.shop}</a>
                  </dd>
                </dl>
                <dl className="row m-1">
                  <dt className="col">Type:</dt>
                  <dd className="col">{this.state.tea.type}</dd>
                </dl>
                <dl className="row m-1">
                  <dt className="col">Origine:</dt>
                  <dd className="col">{this.state.tea.origin}</dd>
                </dl>
                <dl className="row m-1">
                  <dt className="col">Remarques:</dt>
                  <dd className="col">{this.state.tea.note}</dd>
                </dl>
                <dl className="row m-1">
                  <dt className="col">Temps d'infusion:</dt>
                  <dd className="col">
                    {this.state.tea.infuse_times} secondes
                  </dd>
                </dl>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tea;


/*
      <div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.updateHabit.bind(this)} data-toggle="modal" data-target="#checkModal">
          Check
        </button>
        <div className="modal fade" id="checkModal" tabIndex="-1" role="dialog" aria-labelledby="checkModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="checkModalLabel">Check some stuff</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.habits.length > 0 ? this.state.habits : "All sets, GG !"}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
*/

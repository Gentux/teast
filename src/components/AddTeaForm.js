import { Component } from 'react';

class AddTeaForm extends Component {

  addTeaSubmit() {
      /*
    1: {
      name: "Muse d'or",
      tea_id: 1,
      shop_id: 1,
      img: "https://gouttedethe.com/wp-content/uploads/2020/07/Goutte-de-The%CC%81-513-MUSE-DOR-jin-jun-mei.jpg",
      url: "https://gouttedethe.com/produits/thes/the-noir/n513-muse-dor/",
      temp: "90 degrée",
      infuse_times: [40, 60, 90],
      note: "Miellé, caramel, fruité",
      type: "Thé Noir",
      origin: "Fujian, Chine"
    },
      */
  }

  render() {
    const shops = JSON.parse(localStorage.getItem('shop_index', "[]")).map((index) => {
      return (
        <option key={"optionShop-" + index}>{JSON.parse(localStorage.getItem('shop-' + index)).name}</option>
      );
    });

    return (
      <form>
        <div className="form-group">
          <label htmlFor="teaName">Nom du thé</label>
          <input type="text" className="form-control" id="teaName" aria-describedby="teaNameHelp" placeholder="ex: Nuit à versaille" />
          <small id="teaNameHelp" className="form-text text-muted">
            Le nom du thé, on le trouve généralement sur la boîte, sauf si vous avez changé de boîte... là, bah faut s'en souvenir
          </small>
        </div>
        <div className="form-group">
          <select className="form-control form-control">
            { shops }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="teaType">Type:</label>
          <input type="text" className="form-control" id="teaType" placeholder="ex: Thé Noir" />
        </div>
        <div className="form-group">
          <label htmlFor="teaNote">Note</label>
          <input type="text" className="form-control" id="teaNote" placeholder="ex: Fruité, goût de caramel" />
        </div>
        <div className="form-group">
          <label htmlFor="teaOrigin">Origine:</label>
          <input type="text" className="form-control" id="teaOrigin" placeholder="ex: Yunnan, Chine" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddTeaForm;

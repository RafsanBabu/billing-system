import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import InvoiceInfo from './component/InvoiceInfo';
import CompanyInfo from './component/CompanyInfo';
import ClientInfo from './component/ClientInfo';

function App() {
  const [inputList, setInputList] = useState([{ serialNo: "", productDetails: "", quantity: "", unitPrice: "", totalPrice: "" }]);
  const handleAddClick = () => {
    setInputList([...inputList, { serialNo: "", productDetails: "", quantity: "", unitPrice: "", totalPrice: "" }]);
  };
  return (
    <div className="container">
      <InvoiceInfo/>
      
      <CompanyInfo />

      <ClientInfo />
      <div className="page-header">
        <h1 className="">Product Info</h1>
      </div>
      <div className="labels">
        <div className="row">
          <div className="col-md-1">
            <p>Serial No.</p>
          </div>
          <div className="col-md-6">
            <p>Product Details</p>
          </div>
          <div className="col-md-1">
            <p>Quantity</p>
          </div>
          <div className="col-md-1">
            <p>Unit Price</p>
          </div>
          <div className="col-md-2">
            <p>Total Price</p>
          </div>
          <div className="col-md-1">
            <p>Actions</p>
          </div>

        </div>

      </div>
      <form>
        {inputList.map((x, i) => {
          return (
            <div className="form-row">
              <div className="form-group col-md-1">

                <input name="serialNo" type="text" className="form-control" id="inputZip" />
              </div>
              <div className="form-group col-md-6">

                <input name="productDetails" type="text" className="form-control" id="inputZip" />
              </div>
              <div className="form-group col-md-1">

                <input name="quantity" type="text" className="form-control" id="inputZip" />
              </div>
              <div className="form-group col-md-1">

                <input name="unitPrice" type="text" className="form-control" id="inputZip" />
              </div>
              <div className="form-group col-md-2">

                <input name="totalPrice" type="text" className="form-control" id="inputZip" />
              </div>
              <div className="form-group col-md-1">

                <button type="button" class="btn btn-outline-danger">Delete</button>
              </div>

            </div>
          );
        })}

      </form>
      <button type="button" class="btn btn-primary" onClick={handleAddClick}>Add Item</button>
      <hr className="rounded"></hr>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Additional Notes</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" class="btn btn-success">Preview Invoice</button>

    </div>
  );
}

export default App;

function ClientInfo() {
    return (
        <div>
            <div className="page-header">
                <h1 className="">Client Information</h1>
            </div>
            <form>
                <div className="form-group">
                    <label for="inputAddress">Client Name</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Company name ...." />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Client Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email...." />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Client Website</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Web Address...." />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Client Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Company Address...." />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Client Phone No.</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Company Phn No...." />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <hr className="rounded"></hr>



            </form>
        </div>)
}
export default ClientInfo;
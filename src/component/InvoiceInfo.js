function InvoiceInfo() {
    return (
        <div>
            <div className="page-header">
                <h1>Invoice Info</h1>
            </div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputAddress">Invoice Number</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Invoice Number ...." />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputAddress">Date</label>
                        <input type="date" className="form-control" id="inputAddress" placeholder="Company name ...." />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default InvoiceInfo;
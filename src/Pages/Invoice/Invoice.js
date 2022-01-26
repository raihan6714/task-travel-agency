import React from 'react';
import './Invoice.css';
const Invoice = () => {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="invoice-title add_top_30">
                            <h2>Invoice</h2>
                            <h3 className="float-right">Order # 12345</h3>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <address>
                                    <strong>Billed To:</strong><br />
                                    John Smith<br />
                                    1234 Main<br />
                                    Apt. 4B<br />
                                    Springfield, ST 54321
                                </address>
                            </div>
                            <div className="col-6 text-right">
                                <address>
                                    <strong>Shipped To:</strong><br />
                                    Jane Smith<br />
                                    1234 Main<br />
                                    Apt. 4B<br />
                                    Springfield, ST 54321
                                </address>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <address>
                                    <strong>Payment Method:</strong><br />
                                    Visa ending **** 4242<br />
                                    jsmith@email.com
                                </address>
                            </div>
                            <div className="col-6 text-right">
                                <address>
                                    <strong>Order Date:</strong><br />
                                    March 7, 2014<br /><br />
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="add_top_15">
                            <h3><strong>Order summary</strong></h3>
                            <div className="table-responsive">
                                <table className="table table-condensed">
                                    <thead>
                                        <tr>
                                            <td><strong>Item</strong></td>
                                            <td className="text-center"><strong>Price</strong></td>
                                            <td className="text-center"><strong>Quantity</strong></td>
                                            <td className="text-right"><strong>Totals</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>BS-200</td>
                                            <td className="text-center">$10.99</td>
                                            <td className="text-center">1</td>
                                            <td className="text-right">$10.99</td>
                                        </tr>
                                        <tr>
                                            <td>BS-400</td>
                                            <td className="text-center">$20.00</td>
                                            <td className="text-center">3</td>
                                            <td className="text-right">$60.00</td>
                                        </tr>
                                        <tr>
                                            <td>BS-1000</td>
                                            <td className="text-center">$600.00</td>
                                            <td className="text-center">1</td>
                                            <td className="text-right">$600.00</td>
                                        </tr>
                                        <tr>
                                            <td className="thick-line"></td>
                                            <td className="thick-line"></td>
                                            <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                            <td className="thick-line text-right">$670.99</td>
                                        </tr>
                                        <tr>
                                            <td className="no-line"></td>
                                            <td className="no-line"></td>
                                            <td className="no-line text-center"><strong>Shipping</strong></td>
                                            <td className="no-line text-right">$15</td>
                                        </tr>
                                        <tr>
                                            <td className="no-line"></td>
                                            <td className="no-line"></td>
                                            <td className="no-line text-center"><strong>Total</strong></td>
                                            <td className="no-line text-right">$685.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Invoice;
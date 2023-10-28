import React, { Component } from "react";
import '../App.css';

export class Demographics extends Component {

    render() {
        console.log(this.props.patient)
        return (
            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-1">
            //             <div className="input-group mb-3">
            //                 <span className="input-group-text">Last Name:</span>
            //             </div>
            //         </div>
            //         <div className="col-md-4">
            //             <input type="text" className="form-control" readOnly value={this.props.patient.name[0].family} />
            //         </div>
            //         <div className="col-md-1">
            //             <div className="input-group mb-3">
            //                 <span className="input-group-text">First Name:</span>
            //             </div>
            //         </div>
            //         <div className="col-md-4">
            //             <input type="text" className="form-control" readOnly value={this.props.patient.name[0].given} />
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div className="col-md-2">
            //             <div className="input-group mb-3">
            //                 <span className="input-group-text">Middle Name:</span>
            //             </div>
            //         </div>
            //         <div className="col-md-4">
            //             <input type="text" className="form-control" readOnly />
            //         </div>

            //         <div className="col-md-2">
            //             <div className="input-group mb-3">
            //                 <span className="input-group-text">Last Name at Birth:</span>
            //             </div>
            //         </div>
            //         <div className="col-md-3">
            //             <input type="text" className="form-control" readOnly />
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div className="col-md-4">
            //             <div className="input-group mb-3">
            //                 <div className="input-group-prepend">
            //                     <span className="input-group-text">Last 4 digits of SSN:</span>
            //                 </div>
            //                 <input type="text" className="form-control" readOnly />
            //             </div>
            //         </div>
            //         <div className="col-md-4">
            //             <div className="input-group mb-3">
            //                 <div className="input-group-prepend">
            //                     <span className="input-group-text">Date of Birth:</span>
            //                 </div>
            //                 <input type="text" className="form-control" readOnly value={this.props.patient.birthDate} />
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="w-75 mt-3 mx-0 mx-sm-auto">
                <div className="card">
                    <div className="card-header bg-primary">
                        <h5 className="card-title text-white mt-2" id="exampleModalLabel">Demographics</h5>
                    </div>
                    <div className="modal-body mt-3">
                        <form className="px-4 row" action="">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Last Name:</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.name[0].family} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">First Name:</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.name[0].given} />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Middle Name:</label>
                                <input type="text" className="form-control" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Last Name at Birth (if different):</label>
                                <input type="text" className="form-control" readOnly />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Last 4 digits of SSN:</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.identifier[2].value} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Date Of Birth:</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.birthDate} />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">State of Birth:</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.name[0].family} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Gender:</label>                                
                                <div>
                                    <input className="form-check-input me-1" type="radio" name="male" id="radio3" readOnly checked={this.props.patient.gender == "male"} />
                                    <label className="form-check-label me-3" htmlFor="radio3Example2">Male</label>
                                    <input className="form-check-input me-1" type="radio" name="female" id="radio4" readOnly checked={this.props.patient.gender == "female"} />
                                    <label className="form-check-label" htmlFor="radio3Example2">Female</label>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Current Zip:</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.address[0].postalCode} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Emergency Phone (###-###-####):</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.telecom[0].value} />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Is patient residing in the US permanently?</label>
                                <div>
                                    <input className="form-check-input me-1" type="radio" name="usPermanently" id="radio3" />
                                    <label className="form-check-label me-3" htmlFor="radio3Example2">Yes</label>
                                    <input className="form-check-input me-1" type="radio" name="usPermanently" id="radio4" />
                                    <label className="form-check-label" htmlFor="radio3Example2">No</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Email:</label>
                                <input type="text" className="form-control" readOnly value={this.props.patient.name[0].family} />
                            </div>

                            {/* <div className="col-sm-4">
                                    
                                </div> */}
                            {/* <div className="col-md-1">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">First Name:</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" readOnly value={this.props.patient.name[0].given} />
                                </div> */}




                            {/* <p className="text-center"><strong>Your rating:</strong></p>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
                                <label className="form-check-label" for="radio3Example1">
                                    Very good
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
                                <label className="form-check-label" for="radio3Example2">
                                    Good
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
                                <label className="form-check-label" for="radio3Example3">
                                    Medicore
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
                                <label className="form-check-label" for="radio3Example4">
                                    Bad
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
                                <label className="form-check-label" for="radio3Example5">
                                    Very bad
                                </label>
                            </div>

                            <p className="text-center"><strong>What could we improve?</strong></p>

                            <div className="form-outline mb-4">
                                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                <label className="form-label" for="form4Example3">Your feedback</label>
                            </div> */}
                        </form>
                    </div>
                    <div className="card-footer text-end">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

import React from 'react';

export default function CreditApplication() {
    return (
        <div className="container">
            <div className="jumbotron">

                <div class="accordion" id="accordionExample">
                    <div class="card">
                        {/* personal info section */}
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#personalInformation" aria-expanded="true" aria-controls="collapseOne">
                                    Personal Information
                                </button>
                            </h2>
                        </div>

                        <div id="personalInformation" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="name1">Name</label>
                                            <input type="text" class="form-control" id="name1" placeholder="Name" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="LastName1">LastName</label>
                                            <input type="text" class="form-control" id="LastName1" placeholder="LastName" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Password</label>
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity">City</label>
                                            <input type="text" class="form-control" id="inputCity" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputState">State</label>
                                            <select id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                <option></option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputZip">Zip</label>
                                            <input type="text" class="form-control" id="inputZip" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>


                        {/* Income information */}
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#incomeInfo" aria-expanded="true" aria-controls="collapseOne">
                                    Financial Information
                                </button>
                            </h2>
                        </div>

                        <div id="incomeInfo" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputState">Employment Status</label>
                                            <select id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                <option>Self Employed</option>
                                                <option>Employed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="name1">Total Gross Income</label>
                                            <input type="text" class="form-control" id="name1" placeholder="Name" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input className="form-check-input position-static" 
                                                type="radio" name="blankRadio" 
                                                value="option1" aria-label="Yearly"/>

                                            <input className="form-check-input position-static" 
                                                type="radio" name="blankRadio" 
                                                value="option1" aria-label="Monthly"/>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-8">
                                            <label for="inputEmail4">Monthly housing payment</label>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Security info */}
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#secInfo" aria-expanded="true" aria-controls="collapseOne">
                                    Security Information
                                </button>
                            </h2>
                        </div>

                        <div id="secInfo" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="name1">Social Security</label>
                                            <input type="text" class="form-control" id="name1" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Date of Birth</label>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>


            </div>


        </div>
    );
}
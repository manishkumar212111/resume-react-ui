import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Footer = ( { loggedIn } ) => (
        <section id="footer" class="section bg-dark pt-5 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="footer-info mt-4">
                            <img src="images/logo-dark.png" alt="" height="22" />
                            <a href="#" class="btn btn-primary mt-5 d-block ">Create your resume for free</a>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="mt-4">
                                    <h5 class="f-15 text-white">Company Name</h5>
                                    <ul class="list-unstyled footer-link mt-3">
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Templates</a></li>
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="mt-4">
                                    <h5 class="f-15 text-white">Information</h5>
                                    <ul class="list-unstyled footer-link mt-3">
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Templates</a></li>
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="mt-4">
                                    <h5 class="f-15 text-white">Legal</h5>
                                    <ul class="list-unstyled footer-link mt-3">
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Templates</a></li>
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mt-4">
                                    <h5 class="f-15 text-white">Contact</h5>
                                    <ul class="list-unstyled footer-link mt-3">
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Templates</a></li>
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mt-4">
                                    <h5 class="f-15 text-white">Social</h5>
                                    <ul class="list-unstyled footer-link mt-3">
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Templates</a></li>
                                        <li><a href="">Articles</a></li>
                                        <li><a href="">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Footer );

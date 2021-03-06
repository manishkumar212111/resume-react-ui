import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from "react-redux";
  
import Header from "./Header";
import routes from "../routes";
import Footer from "./Footer";

import Auth from "../components/pages/Auth";

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to Resume Maker!",
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      this.setState({
        hashElement : window.location.hash
      })
      window.addEventListener('scroll', this.handleScroll);
    }
    createNotification(type, message) {
        console.log(type , message);
        let configs = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }
        switch (type) {
          case "info":
            return toast.info(message, configs);
          case "success":
            return toast.success(message, configs);
          case "warning":
            return toast.warn(message, configs);
          case "danger":
            return toast.error(message, configs);
        }
      }

    componentDidUpdate(){
        let alerts = this.props.alerts || [];
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert, idx) => {
          this.createNotification(`${alert.alertType}`, alert.msg);
        });
    }

    handleScroll(e) {
      let elem = document.querySelector(".navbar");
      if((document.getElementById('main') && document.getElementById('main').getBoundingClientRect().top) < -55){
        elem && elem.classList && elem.classList.add('nav-sticky')
      } else {
        elem && elem.classList && elem.classList.remove('nav-sticky')

      }

    }

    render() {
        console.log(this.props , "sdbhbjh");

        
        return (
            <div>
                <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss = {false}
                    draggable
                    pauseOnHover
                />
                {/* <h1>{ this.state.title }</h1> */}
                <Header />
                <div id="main" onScroll={(e) => this.handleScroll(e)}>
                  <Switch>
                      { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                  </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    alerts: state.alert,
  });
  
export default connect( mapStateToProps )( Layout );
  

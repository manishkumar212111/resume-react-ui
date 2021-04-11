import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/home";
import { checkLogin } from "../../utils/globals";
import TextEditor from "../../components/widgets/TextEditor"
class Home extends React.Component {
    constructor(props){
        super();
        this.logout = this.logout.bind(this);
    }
    componentDidMount( ) {
        if ( this.props.users && this.props.users.length <= 0 ) {
            this.props.fetchData();
        }
    }

    logout(){
        if(typeof window !== 'undefined'){
            window.localStorage.removeItem('userDetail');
            window.location.href = '/';
        }
    }
    render( ) {
        const userDetails = checkLogin();
        const { users } = this.props;

        const getMyAccount = (userDetails) => {
            return (
                <div>
                    <TextEditor />
                    <a href="/my-account">My Account ({userDetails.user.first_name} {userDetails.user.last_name}) </a>
                    <span className="link" onClick={() => this.logout()}> Logout</span>
                </div>
            )
        }

        return (
            <div className="wrapper">
                {userDetails ? getMyAccount(userDetails) : <a href="/auth">Get started</a>}
                {users && users.length && <h2>User List</h2>}
                <ul>
                    { users && users.length && users.map( (item ) => (
                        <li key={ item.first_name } >{ item.first_name } { item.email }</li>
                    ) ) }
                </ul>
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    users: state.Home.users.results,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );

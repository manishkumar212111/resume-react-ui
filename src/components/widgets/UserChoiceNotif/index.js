import React, { useEffect, useState } from 'react';
const notificationTypes = ['RECIEVE_OFFER' , 'UPDATES', 'CARRIERS' , 'JOB_NOTIFICATIONS'];

const defaultProps = {
    notifications : {CARRIERS: false,
        JOB_NOTIFICATIONS: false,
        RECIEVE_OFFER: false,
        UPDATES: false }
}
const UserChoiceNotif = (props) => {
    const [notifications , setNotifications] = useState(props.notifications ? props.notifications : defaultProps.notifications);

    useEffect(()=>{
        setNotifications(props.notifications);
    }, [props.notifications]);

    const handleChange= (e, name) => {
        let notif = notifications;
        notif[name] = e.target.checked;
        console.log(e.target.checked ,notif, notif[name] , name);
        setNotifications(fieldOb => ({...fieldOb , ...notif}))

    // props.updateNotification()
        updateNotifications();
    }

    const updateNotifications = () => {
        props.submitCb({notification : notifications})
    }
    console.log(props.notifications , "dfdfv")

    const notification = () => {
        let h = [];
        Object.keys(notifications).map( (item) => {
            h.push(
                <div className="row">
                    <div className="col-md-12">
                        <div className="row mb-3">
                            <div className="col-md-9">
                                <h6 className="mb-0">{item}</h6>
                                {/* <label className="text-muted f-14">{item}</label> */}

                            </div>
                            <div className="col-md-3 pt-2 text-right">  <label className="switch" for="checkbox1">
                                <input type="checkbox" onChange={(e) => handleChange(e , item)} checked={notifications[item]} />
                                <div className="slider round"></div>
                            </label></div>
                        </div>
                
                    </div>
                </div>


            // <li><input type="checkbox" onChange={(e) => handleChange(e , item)} checked={notifications[item]}></input>{item}</li>
            
            
            )
        
        });
        return h;
    }
    
    return (
        <div className="col-md-6">
            <h6 className="mt-3"><span className="mdi mdi-email-open"></span> Email notification</h6>
            <div className="bg-light p-4">
                {notification()}
            </div>
        </div>
        // <div>
        //     {notification()}
        //     <input type="button" onClick={() => updateNotifications()}/> update
        // </div>
    )
}

UserChoiceNotif.defaultProps = defaultProps;
export default UserChoiceNotif;
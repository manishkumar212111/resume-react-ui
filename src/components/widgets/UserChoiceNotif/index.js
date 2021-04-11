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
    }

    const updateNotifications = () => {
        props.submitCb({notification : notifications})
    }
    console.log(props.notifications , "dfdfv")

    const notification = () => {
        let h = [];
        Object.keys(notifications).map( (item) => {
            h.push(<li><input type="checkbox" onChange={(e) => handleChange(e , item)} checked={notifications[item]}></input>{item}</li>)
        
        });
        return h;
    }
    
    return (
        <div>
            {notification()}
            <input type="button" onClick={() => updateNotifications()}/> update
        </div>
    )
}

UserChoiceNotif.defaultProps = defaultProps;
export default UserChoiceNotif;
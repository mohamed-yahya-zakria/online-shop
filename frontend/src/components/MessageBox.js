import React from 'react'

function MessageBox(props) {
    return (
        /* alert-${props.variant   we compare props if it variant if it is then expliemt it. otherwise the default variant   */
        <div className={`alert alert-${props.variant || 'info' }`}>
            {/* {props.children} = means MessageBox component and .children is property from props that if i write anything inside the <MessageBox > <MessageBox /> in another component it will recived here in {props.children} ..like HomeScreen For example for ex the message from backend*/}
            {props.children}
        </div>
    )
}

export default MessageBox;
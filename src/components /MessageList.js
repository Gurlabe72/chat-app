import React from 'react';

const DUMMY_DATA =[
{
    senderId: 'Gurlabe',
    text: 'Hey Whaddup'
},
{
    senderId: 'Ana',
    text: 'Hey'
},
{
    senderId: 'Raman',
    text: 'whats gucci'
}]

class MessageList extends React.Component { 
    render () {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index)=> {
                    return ( 
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                            </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList;
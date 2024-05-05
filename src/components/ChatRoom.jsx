import { useState } from "react"
import ChatBox from "./ChatBox";

function ChatRoom() {
    const[messages,setMessages] = useState([{
        id:1,
        sender:'Person1',
        senderAvatar:'https://i.pravatar.cc/150?img=12',
        message:"Hey"
    }]);

    const[isTyping,setIsTyping] = useState({});

    const users = {
        Person2:'https://i.pravatar.cc/150?img=5',
       Person1:'https://i.pravatar.cc/150?img=12'
    };

    const sendMessage =(sender,senderAvatar,message)=>{
        setTimeout(()=>{
            let newMessageItem = {
                id:message.length + 1,
                sender:sender,
                senderAvatar:senderAvatar,
                message:message
            };

            setMessages([...messages,newMessageItem]);
            resetTyping(sender);

        },400);
    };

    const typing = (writer) =>{
        if(!isTyping[writer]){
            setIsTyping((prev)=>({...prev, [writer]:true}));
        }
    }

    const resetTyping = (writer)=>{
        setIsTyping((prev)=>({...prev, [writer]:false}))
    }

  return (
    <div className="chatApp__room">
        {
            Object.entries(users).map(([user,avatar])=>(
                <ChatBox
                    key={user}
                    owner={user}
                    ownerAvatar={avatar}
                    sendMessage={sendMessage}
                    typing={typing}
                    messages={messages}
                    isTyping={isTyping}
                    resetTyping={resetTyping}
                />
            ))
        }
    </div>
  )
}

export default ChatRoom

import React, {useContext} from 'react';
import Call from "../img/phone.png";
import Cam from "../img/video.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import  Messages from './Messages';
import  Input  from './Input';
import { ChatContext } from '../context/ChatContext';

export const Chat = () => {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user?.Username}</span>
            <div className="chatIcons">
                <img src={Call} alt= ""/>
                <img src={Cam} alt= ""/>
                <img src={Add} alt= ""/>
                <img src={More} alt= ""/>
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

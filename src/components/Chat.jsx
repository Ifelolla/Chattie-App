import React from 'react';
import Call from "../img/phone.png";
import Cam from "../img/video.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { Messages } from './Messages';
import { Input } from './Input';

export const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Evelyn</span>
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

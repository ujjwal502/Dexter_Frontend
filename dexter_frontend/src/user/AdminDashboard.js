import React from "react";
import { DAILYAPI } from "../config";
import Layout from "../core/Layout";
import DailyIframe from '@daily-co/daily-js';
import { addLiveRoom } from "../auth";


//Layout of the dashboard strictly for Admin 
class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: '',
        }
        this.createRoom = this.createRoom.bind(this);
        this.createVideo = this.createVideo.bind(this);
    }

    createVideo = (roomurl) => {
        let callFrame = DailyIframe.createFrame(document.getElementById('video'));
        console.log(roomurl)
        callFrame.join({ url: roomurl });

        const roomDetails = {
            educatorname: 'Thomson',
            streamlink: roomurl,
            topic: 'react',
            about: 'components'
        }
        
        addLiveRoom(roomDetails)
        .then(res => console.log(res))
    }


    createRoom = (e) => {
        const url = "https://api.daily.co/v1/rooms";
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer 2bd2f54b5622d07b584c375d39c46a24fe570c3554669f15ab6d37fc4e0e1f4f`
            }
        })
        .then(response => response.json())
        .then(final => this.createVideo(final.url))
    }

    render() {
        const mystyle= {
            height: '80vh',
            width: '60vw'
        }
    return (
        <React.Fragment>
        <Layout title='Dashboard' description='Your Educator Dashboard'>
            ....
        </Layout>
        <div id="video" style={mystyle}></div>
        <button value="Create room" onClick={this.createRoom}>ROOM</button>
        </React.Fragment>
    )}
}

export default AdminDashboard;
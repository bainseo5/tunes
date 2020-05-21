
import React, { Component } from 'react'


import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'static/music/the-limerick-lasses.m4a'
            width='100%'
            height='100%'
            controls = {true}
	    playbackRate = '0.8'

            />
        </div>
        )
    }
}
export default Video;


import React, { Component } from 'react'


import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'tunes/the_limerick_lasses.m4a'
            width='100%'
            height='100%'
            controls = {true}
	    playbackRate = '1.5'

            />
        </div>
        )
    }
}
export default Video;

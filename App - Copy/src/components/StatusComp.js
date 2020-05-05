import React, { Component } from 'react'
import seconds from './timer/seconds'
import minutes from './timer/minutes'

export default class Timer extends Component {
    state = {
        minutesn: minutes,
        secondsn: seconds,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { secondsn, minutesn } = this.state

            if (secondsn > 0) {
                seconds--;
                this.setState(({ secondsn }) => ({
                    secondsn: secondsn - 1,
                }))
            }
            if (secondsn === 0) {
                if (minutesn === 0) {
                    clearInterval(this.myInterval)
                } else {
                    minutes--;
                    seconds = 59;
                    this.setState(({ minutesn }) => ({
                        minutesn: minutesn - 1,
                        secondsn: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutesn, secondsn } = this.state
        return (
            <div>
                { minutesn === 0 && secondsn === 0
                    ? <h1>Busted!</h1>
                    : <span>{minutesn}:{secondsn < 10 ? `0${secondsn}` : secondsn}</span>
                }
            </div>
        )
    }
}
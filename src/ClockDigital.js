import { useState } from 'react'

const ClockDigital = () => {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
    let todayDate = new Date()

    const getWeekDay = (date) => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()]

    }

    let today = getWeekDay(todayDate)

    const getTimeZone = () => {
        var offset = todayDate.getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
    }

    return (
        <div>
            <div>
                <h3>{today} {todayDate.getDate()}/{todayDate.getMonth() + 1}/{todayDate.getFullYear()}</h3>
            </div>
            <div><h1>{currentTime}</h1></div>
            <div>
                <h4>
                    <span>Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</span> |
                    <span> UTC {getTimeZone()}</span>
                </h4>
            </div>


        </div>
    )
}

export default ClockDigital
import React, { useEffect, useState } from 'react'

const NavClock = () => {
    // const [dateTime, setDateTime] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        // Function to update the time and date
        function updateTime() {
            const now = new Date();
            const dateOptions = {
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
            };
            const timeOptions = { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            };

            const dateString = now.toLocaleDateString(undefined, dateOptions);
            const timeString = now.toLocaleTimeString(undefined, timeOptions);

            // Update your state or DOM elements with the new date and time strings
            setDate(dateString)
            setTime(timeString)
        };

        // Update the time every second
        const intervalId = setInterval(updateTime, 1000);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div>

            <section id='clock'>
                <div className="date">{date}</div>
                {/* <div className="time">{time}</div> */}
            </section>

        </div>
    )
};

export default NavClock
const timer = (selector, deadline) => {
    function addZero (val) {
        if (val < 10) {
            return val = '0' + val
        }
        else return val;
    }

    function getTimeRemaining(end) {
        const time = Date.parse(end) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }

    }
    function initializeClock(id, end) {
        const clock = document.querySelector(id);
        const daysSpan = clock.querySelector('#days');
        const hoursSpan = clock.querySelector('#hours');
        const minutesSpan = clock.querySelector('#minutes');
        const secondsSpan = clock.querySelector('#seconds');

        const timeinterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(end);

            daysSpan.innerHTML = addZero(t.days);
            hoursSpan.innerHTML = addZero(t.hours);
            minutesSpan.innerHTML = addZero(t.minutes);
            secondsSpan.innerHTML = addZero(t.seconds);

            if (t.total <= 0) {
                daysSpan.innerHTML = '00';
                hoursSpan.innerHTML = '00';
                minutesSpan.innerHTML = '00';
                secondsSpan.innerHTML = '00';
                clearInterval(timeinterval);
            }
        }  
    }
    initializeClock(selector, deadline);
}

export default timer;
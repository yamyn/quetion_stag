const link = document.getElementById('default-tooltip');
const tooltipWave = link.querySelector('.tooltip-wave > span');
const waveInterval = {from: 1, to: 8};
const tweenWave = TweenMax.to(tooltipWave, 15, {
    ease: 'Linear.easeNone',
    repeat: -1,
    yoyo: false,
    x: '50%',
    paused: true
});

let stateWave= 'paused';

new Nearby(link, {
    onProgress: (distance) => {
        const time = lineEq(waveInterval.from, waveInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
        tweenWave.timeScale(Math.min(Math.max(time,waveInterval.from),waveInterval.to));
        
        if ( distance < distanceThreshold.max && distance >= distanceThreshold.min && stateWave !== 'running' ) {
            tweenWave.play();
            stateWave = 'running';
        }
        else if ( (distance > distanceThreshold.max || distance < distanceThreshold.min) && stateWave !== 'paused' ) {
            tweenWave.pause();
            stateWave = 'paused';
        }
    }
});
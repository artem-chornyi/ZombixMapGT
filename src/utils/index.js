function formatDuration (s) {
    if(s === 0) {
        return 'now';
    }
    const getResult = (t, d) => Math.floor(t%d);

    const years = getResult((s / 60 / 60 / 24 / 365), 365);
    const days=getResult((s / 60 / 60 / 24), 365);
    const hours=getResult((s / 60 / 60), 24);
    const minutes=getResult((s / 60), 60);
    const seconds=getResult(s, 60);

    let result=[
        [years, years > 1 ? 'years' : 'year'],
        [days, days > 1 ? 'days' : 'day'],
        [hours, hours > 1 ? 'hours' : 'hour'],
        [minutes > 9 ? minutes : '0' + minutes ],
        [seconds > 9 ? seconds : '0' + seconds]
    ]
    
    result=result.filter(a => a[0] !== 0);
    
    // result=result.map(a => a.join(' ') );

    if (result.length > 1) {
        result[result.length - 2] = result[result.length - 2] + ' : ' +result[result.length - 1];
        result.pop()
    }
    return result.join(', ').trim()
}


export {
    formatDuration
}
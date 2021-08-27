const TimeStamp = (unix: number) => {
    const date: any = new Date(unix * 1000)
    const intervals = [
        { label: 'ano', seconds: 31536000 },
        { label: 'mês', seconds: 2592000 },
        { label: 'dia', seconds: 86400 },
        { label: 'hora', seconds: 3600 },
        { label: 'minuto', seconds: 60 },
        { label: 'segundo', seconds: 1 },
    ]
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    const interval: any = intervals.find(i => i.seconds < seconds)
    const count = Math.floor(seconds / interval.seconds)
    return `${count} ${interval.label}${count !== 1 ? 's' : ''}`
}

export default TimeStamp

const fetch = require('node-fetch')

module.exports = {
    twitch: {
        accountage: (user) => {
            let accountage = fetch(`http://decapi.me/twitch/accountage/${user}`).then(res => res.text()).then(accountage => accountage)
            return accountage
        },
        avatar: (user) => {
            let avatar = fetch(`http://decapi.me/twitch/avatar/${user}`).then(res => res.text()).then(avatar => avatar)
            return avatar
        },
        creation: (user) => {
            let creation = fetch(`http://decapi.me/twitch/creation/${user}`).then(res => res.text()).then(creation => creation)
            return creation
        },
        followage: (channel, user) => {
            let followage = fetch(`http://decapi.me/twitch/followage/${channel}/${user}`).then(res => res.text()).then(followage => followage)
            return followage
        },
        followcount: (channel) => {
            let followcount = fetch(`https://decapi.me/twitch/followcount/${channel}`).then(res => res.text()).then(followcount => followcount)
            return followcount
        },
        followed: (channel, user) => {
            let followed = fetch(`http://decapi.me/twitch/followed/${channel}/${user}`).then(res => res.text()).then(followed => followed)
            return followed
        },
        lastfollower: (channel) => {
            let lastfollower = fetch(`https://decapi.me/twitch/followers/${channel}`).then(res => res.text()).then(lastfollower => lastfollower)
            return lastfollower
        },
        latestfollowers: (channel, amount) => {
            let latestfollowers = fetch(`https://decapi.me/twitch/followers/${channel}?count=${amount}`).then(res => res.text()).then(latestfollowers => latestfollowers)
            return latestfollowers
        },
        following: (user, amount) => {
            let following = fetch(`https://decapi.me/twitch/following/${user}?limit=${amount}`).then(res => res.text()).then(following => following)
            return following
        },
        game: (channel) => {
            let game = fetch(`https://decapi.me/twitch/game/${channel}`).then(res => res.text()).then(game => game)
            return game
        },
        highlight: (channel) => {
            let highlight = fetch(`https://decapi.me/twitch/highlight/${channel}`).then(res => res.text()).then(highlight => highlight)
            return highlight
        },
        id: (user) => {
            let id = fetch(`http://decapi.me/twitch/id/${user}`).then(res => res).then(id => id)
            return id
        },
        lastsub: (channel) => {
            let lastsub = fetch(`https://decapi.me/twitch/lastest_sub/${channel}`).then(res => res.text()).then(lastsub => lastsub)
            return lastsub
        },
        latestsubs: (channel, amount) => {
            let latestsubs = fetch(`https://decapi.me/twitch/latest_sub/${channel}?count=${amount}`).then(res => res.text).then(latestsubs => latestsubs)
            return latestsubs
        },
        multi: (streams) => {
            let link = 'https://decapi.me/twitch/multi/'
            for (let i = 0; i < streams.length; i++) {
                link += `${streams[i]}/`
            }
            let multi = fetch(link).then(res => res.text()).then(multi => multi)
            return multi
        },
        randomsub: (channel) => {   
            let randomsub = fetch(`https://decapi.me/twitch/random_sub/${channel}`).then(res => res.text()).then(randomsub => randomsub)
            return randomsub
        },
        randomsubs: (channel, amount) => {
            let randomsubs = fetch(`https://decapi.me/twitch/random_sub/${channel}?count=${amount}`).then(res => res.text()).then(randomsubs => randomsubs)
            return randomsubs
        },
        randomuser: (channel) => {
            let randomuser = fetch(`https://decapi.me/twitch/random_sub/${channel}`).then(res => res.text()).then(randomuser => randomuser)
            return randomuser
        },
        randomusers: (channel, amount) => {
            let randomusers = fetch(`https://decapi.me/twitch/random_user/${channel}?count=${amount}`).then(res => res.text()).then(randomusers => randomusers)
            return randomusers
        },
        subage: (channel, user) => {
            let subage = fetch(`http://decapi.me/twitch/subage/${channel}/${user}`).then(res => res.text()).then(subage => subage)
            return subage
        },
        subcount: (channel) => {
            let subcount = fetch(`https://decapi.me/twitch/subcount/${channel}`).then(res => res.text()).then()
            return subcount
        },
        subpoints: (channel) => {
            let subpoints = fetch(`https://decapi.me/twitch/subpoints/${channel}`).then(res => res.text()).then(subpoints => subpoints)
            return subpoints
        },
        suscriberemotes: (channel) => {
            let suscriberemotes = fetch(`https://decapi.me/twitch/subscriber_emotes/${channel}`).then(res => res.text()).then(suscriberemotes => suscriberemotes)
            return suscriberemotes
        },
        status: (channel) => {
            let status = fetch(`https://decapi.me/twitch/status/${channel}`).then(res => res.text()).then(status => status)
            return status
        },
        teammembers: (teamid) => {
            let teammembers = fetch(`https://decapi.me/twitch/${channel}`).then(res => res.text()).then()
        },
        title: (channel) => {
            let = fetch(`https://decapi.me/twitch/title//${channel}`).then(res => res.text()).then()
        },
        totalviews: (channel) => {
            let = fetch(`https://decapi.me/twitch/${channel}`).then(res => res.text()).then()
        },
        upload: (channel) => {
            let upload = fetch(`https://decapi.me/twitch/upload/${channel}`).then(res => res.text()).then(upload => upload)
        },
        uptime: (channel) => {
            let = fetch(`https://decapi.me/twitch/${channel}`).then(res => res.text()).then(uptime => uptime)
        },
        viewercount: (channel) => {
            let = fetch(`https://decapi.me/twitch/${channel}`).then(res => res.text()).then(viewercount => viewercount)
        },
        videos: (channel) => {
            let videos = fetch(`https://decapi.me/twitch/videos/${channel}`).then(res => res.text()).then(videos => videos)
            return videos
        },
        vodreplay: (channel) => {
            let vodreplay = fetch(`https://decapi.me/twitch/vod_replay/${channel}`).then(res => res.text()).then(vodreplay => vodreplay)
            return vodreplay
        },
    }
  }
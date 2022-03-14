export const validateCredentials = async (creds) => {

    const response = await fetch('http://localhost:3001/credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user: creds.user, password: creds.password})
    })

    let result = await response.json()
    console.log(result)

    if (result.length > 0) {
        sessionStorage.setItem('userInfo', JSON.stringify(result[0]))
        window.location = '/'
    } else {
        window.location.reload()
    }    
}

export const getJournalEntryByUserID = async (userid) => {

    const response = await fetch('http://localhost:3001/journal-entry/' + userid, {
        method: 'GET',
       // headers: { 'Content-Type': 'application/json' },
    })

     let result = await response.json()
    console.log(result)

    return result
}

export const addJournalEntryByUserID = async (title, text, userid) => {

    const response = await fetch('http://localhost:3001/journal-entry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            text: text,
            userid: userid
        })
    })

     let result = await response.json()
    console.log(result)

    return result
}


export const insertMatches = async (title,text,userid) => {

    const response = await fetch('http://localhost:3001/match/', {
        method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
        title: title,
        text: text,
        userid: userid
    })
    })

     let result = await response.json()
    console.log(result)

    return result
}

export const addMatchByUserID = async (title, text, userid) => {

    const response = await fetch('http://localhost:3001/matches/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            text: text,
            userid: userid
        })
    })

     let result = await response.json()
    console.log(result)

    return result
}

export const getAllMatches = async () => {

    const response = await fetch('http://localhost:3001/allMatches', {
        method: 'GET'
    })

     let result = await response.json()
    console.log(result)

    return result
}
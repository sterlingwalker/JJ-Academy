export const getJournalEntryByUserID = async (userid) => {

    const response = await fetch('http://localhost:3001/journal-entry/' + userid, {
        method: 'GET',
       // headers: { 'Content-Type': 'application/json' },
    })

     let result = await response.json()
    console.log(result)

    return result
}
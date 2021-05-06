/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML +=`
            <h3>Topic:${entry.concept}</h3>
            <div>Subject:${entry.entry}<div>
            <div>Mood:${entry.mood}<div>
            <div>${entry.date}<div>
        `
    }

    return allEntriesAsHTML
}
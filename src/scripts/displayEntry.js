import basicHTML from "./basicHTML"
import apiManager from "./apiManager"

export default {
    displayEntries () {
        let entryFragment = document.createDocumentFragment()
        let outerDiv = basicHTML.createElement("div", "outerDivId")

        apiManager.getEntries()
        .then(entry => {
            entry.forEach(entry => {
                let loopDiv = basicHTML.createElement("div", `loopDiv--${entry.id}`)
                let conceptCovered = basicHTML.createElement("h2", undefined, entry.concepts)
                let entryDate = basicHTML.createElement("p", undefined, entry.date)
                let mainEntry = basicHTML.createElement("p", undefined, entry.entry)
                let entryMood = basicHTML.createElement("p", undefined, entry.mood.label)

                let editEntryButton = basicHTML.createElement("button", `edit--${entry.id}`, "Edit")
                editEntryButton.addEventListener("click", () => {
                    console.log("edit works")
                })
                let deleteEntryButton = basicHTML.createElement("button", `delete--${entry.id}`, "Delete")
                deleteEntryButton.addEventListener("click", () => {
                    console.log("delete works")
                })

                loopDiv.appendChild(conceptCovered)
                loopDiv.appendChild(entryDate)
                loopDiv.appendChild(mainEntry)
                loopDiv.appendChild(entryMood)
                loopDiv.appendChild(editEntryButton)
                loopDiv.appendChild(deleteEntryButton)
                outerDiv.appendChild(loopDiv)
            })
        })

        entryFragment.appendChild(outerDiv)
        return entryFragment
    }
}
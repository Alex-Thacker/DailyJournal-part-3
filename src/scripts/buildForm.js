import basicHTML from "./basicHTML"
import apiManager from "./apiManager"
import eventHandler from "./eventHandler"

export default {
    createForm() {
        let formFragment = document.createDocumentFragment()
        let title = basicHTML.createElement("h1", undefined, "Daily Journal")
        formFragment.appendChild(title)

        let mainForm = basicHTML.createElement("form", "formId")
        //date input field
        let fieldset1 = basicHTML.createElement("fieldset")
        let div1 = basicHTML.createElement("div")
        let dateLabel = basicHTML.createElement("label", undefined, "Date of entry: ")
        let dateInput = basicHTML.createElement("input", "dateInputId")
        dateInput.type = "date"
        dateInput.setAttribute("required", "")

        div1.appendChild(dateLabel)
        div1.appendChild(dateInput)
        fieldset1.appendChild(div1)
        mainForm.appendChild(fieldset1)
        //concepts covered input field
        let fieldset2 = basicHTML.createElement("fieldset")
        let div2 = basicHTML.createElement("div")
        let conceptsLabel = basicHTML.createElement("label", undefined, "Concepts covered: ")
        let conceptsInput = basicHTML.createElement("input", "conceptsInputId")
        conceptsInput.setAttribute("required", "")

        div2.appendChild(conceptsLabel)
        div2.appendChild(conceptsInput)
        fieldset2.appendChild(div2)
        mainForm.appendChild(fieldset2)

        //journal entry input field
        let fieldset3 = basicHTML.createElement("fieldset")
        let div3 = basicHTML.createElement("div")
        let journalEntryLabel = basicHTML.createElement("label", undefined, "Journal entry: ")
        let journalEntryInput = basicHTML.createElement("textarea", "journalEntryInputId")
        journalEntryInput.maxLength = 200
        journalEntryInput.cols = 30
        journalEntryInput.rows = 5
        journalEntryInput.setAttribute("required", "")

        div3.appendChild(journalEntryLabel)
        div3.appendChild(journalEntryInput)
        fieldset3.appendChild(div3)
        mainForm.appendChild(fieldset3)

        let fieldset4 = basicHTML.createElement("fieldset")
        let div4 = basicHTML.createElement("div")
        let moodLabel = basicHTML.createElement("label", undefined, "Mood for the day: ")
        let moodSelect = basicHTML.createElement("select", "moodSelectId")

        apiManager.getMood()
        .then(mood => {
            mood.forEach(mood => {
                let option = basicHTML.createElement("option", mood.id, mood.label)
                option.value = mood.id
                moodSelect.appendChild(option)
            })
        })

        div4.appendChild(moodLabel)
        div4.appendChild(moodSelect)
        fieldset4.appendChild(div4)
        mainForm.appendChild(fieldset4)

        let recordJournalEntryButton = basicHTML.createElement("button", "recordJournalEntryButtonId", "Record Journal Entry")
        recordJournalEntryButton.addEventListener("click", () => {
            eventHandler.handleRecordJournalEntryButton()
        })

        mainForm.appendChild(recordJournalEntryButton)

        formFragment.appendChild(mainForm)

        return formFragment
    }
}
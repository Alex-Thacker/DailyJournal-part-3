import apiManager from "./apiManager"

export default {
    handleRecordJournalEntryButton () {
        let formId = document.querySelector("#formId")
        let dateEntryValue = document.querySelector("#dateInputId").value
        let conceptsValue = document.querySelector("#conceptsInputId").value
        let journalEntryValue = document.querySelector("#journalEntryInputId").value
        let moodSelectValue = document.querySelector("#moodSelectId").value

        const validity = formId.checkValidity()
        formId.reportValidity()

        let entryObject = () => {
            return {
                date: dateEntryValue,
                concepts: conceptsValue,
                entry: journalEntryValue,
                moodId: Number(moodSelectValue)
            }
        }

        if(validity) {
            apiManager.postEntry(entryObject())
        }
    }
}
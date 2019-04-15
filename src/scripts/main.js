import buildForm from "./buildForm"
import displayEntry from "./displayEntry"

let container = document.querySelector("#display-container")

container.appendChild(buildForm.createForm())

container.appendChild(displayEntry.displayEntries())
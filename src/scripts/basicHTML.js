

export default {
    createElement (newElement, id, textContent) {
        let element = document.createElement(newElement)
        if (id) {
            element.id = id 
        }
        element.textContent = textContent

        return element 
    },
    clearContainer (newElement) {
        while (newElement.firstChild) {
            newElement.removeChild(newElement.firstChild);
        }
    }
}
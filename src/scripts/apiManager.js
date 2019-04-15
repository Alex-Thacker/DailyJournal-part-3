

export default {
    getMood () {
        return fetch ("http://localhost:8088/moods")
        .then (r => r.json())
    },
    getEntries () {
        return fetch ("http://localhost:8088/entries?_expand=mood")
        .then(r => r.json())
    },
    postEntry (object) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(r => r.json())
    }
}
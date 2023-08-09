
function submitData (username, email) {

    fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: username,
            email: email,
        })
    })
    .then (response => response.json())
    .then (objectData => {
        document.body.innerHTML = `<h1>${objectData.id}</h1>`
    })
    .catch (error => error.message)
}

submitData ('Onyechefu Owen','owen.chosen@gmail.com');

    
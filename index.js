const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
}

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response){
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    });


function submitData(name, email) {
    const userData = {
        name,
        email
    }
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(userData),
    })
    .then(resp => resp.json())
    .then(object => document.body.innerHtml = object["id"])
    .catch(err => document.body.innerHTML = err.message)
}
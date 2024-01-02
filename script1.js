// let favNumber = 7;

// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//     console.log(data);
// });

// let favNumber = [7,11,12]
// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//     console.log(data);
// });

let baseURL = "http://numbersapi.com";
let favNumber = [7,11,12,2]
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
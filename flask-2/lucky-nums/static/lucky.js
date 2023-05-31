/** processForm: get data from form and make AJAX call to our API. */

numOfNums = 10

function processForm(evt) {
    const form = document.querySelector('#lucky-form');
    const nameInput = document.getElementById('#name')
    const yearInput = document.getElementById('#year')
    const emailInput = document.getElementById('#email')
    const colorInput = document.getElementById('#color')
    const results = document.querySelector('#lucky-result');



    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value
        const year = yearInput.value
        const email = emailInput.value
        const color = colorInput.value


    })
}
/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse() {
    const year = document.getElementById('year').value
    const splitYear = year.split('-')
    const justYear = Number(splitYear[2])
    const resp = await axios.get(`http://numberapi.com/${justYear}/year`)
    response = resp.data



    for(let i = 0; i < numOfNums; i++){
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const div = getElementById('#lucky-results')

        div.append(ul)
        ul.append(li)
        li.append(response)
    }

}

handleResponse()


$("#lucky-form").on("submit", processForm);

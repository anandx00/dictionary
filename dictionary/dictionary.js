console.log("working");

const search_button = document.querySelector(".search_button");
const search_input = document.querySelector(".word");
const results_container = document.querySelector(".results_container");


search_input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        gen();
    }
})
search_button.addEventListener("click", gen);
function gen() {
    const word = search_input.value.trim();

    if (!word) {
        results_container.innerHTML = `<p class="error">Please enter a word to search.</p>`;
        return;
    }

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;


    results_container.innerHTML = `<p>Searching...</p>`;


    fetch(url)
        .then(response => {
            if (!response.ok) {

                throw new Error("Sorry, no definition found for that word.");
            }
            return response.json();
        })
        .then(data => {

            displayResults(data);
        })
        .catch(error => {

            results_container.innerHTML = `<p class="error">${error.message}</p>`;
        });
}


function displayResults(data) {
    const entry = data[0];
    let meaningsHtml = '';

    const phonetic = entry.phonetics.find(p => p.text)?.text || "";


    entry.meanings.forEach(meaning => {
        meaningsHtml += `
            <div class="section">
                <div class="part">
                    <span class="part_s">${meaning.partOfSpeech}</span>
                    <img class="line" src="assests/line.png">
                </div>
                <p class="meaning_header">&nbsp&nbspMeaning</p>
                <ul>
        `;
        meaning.definitions.forEach(def => {
            meaningsHtml += `<li>${def.definition}</li>`;
        });
        meaningsHtml += `</ul></div>`;
    });

    const finalHtml = `
        <div class="play">
            <div>
                <h1 class="word_title">${entry.word}</h1>
                <div class="word_">${phonetic}</div>
            </div>
            <button class="audio_img_button"><img class="audio_img" src="assests/play.png"></button>
        </div>
        ${meaningsHtml}
        <footer>
            <img class="line" src="assests/line.png">
            <span>Source&nbsp--</span>
            <a href="${entry.sourceUrls[0]}" target="_blank">${entry.sourceUrls[0]}</a>
        </footer>
    `;


    results_container.innerHTML = finalHtml;
}
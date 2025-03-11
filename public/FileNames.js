// Functie om de bestandsnamen op te halen van de API
async function fetchFileNames() {
    try {
        // Maak een GET-aanroep naar de API om de bestandsnamen op te halen
        const response = await fetch('http://localhost:3000/api/v1/document-store/store/c2ae8571-f74a-47e6-a1ab-f78ae8c1a92e', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer LHKaTv8U9IrIyifEzeryTfjiKRxsO26dL-1P6Cj70hE',
                'Content-Type': 'application/json',
            }
        });

        // Controleer of de response succesvol was
        if (response.ok) {
            const data = await response.json();

            // Haal de bestandsnamen op uit de response
            const fileNames = [];
            data.loaders.forEach(loader => {
                if (loader.files && Array.isArray(loader.files)) {
                    loader.files.forEach(file => {
                        fileNames.push(file.name);
                    });
                }
            });

            // Toon de bestandsnamen in de HTML
            displayFileNames(fileNames);
        } else {
            console.error('Er is iets mis met de API-aanroep:', response.statusText);
        }
    } catch (error) {
        console.error('Fout bij het ophalen van gegevens:', error);
    }
}

// Functie om de bestandsnamen weer te geven in de frontend
function displayFileNames(fileNames) {
    const fileContainer = document.getElementById("fileNamesList");

    // Controleer of er bestandsnamen zijn
    if (fileNames.length > 0) {
        fileNames.forEach(fileName => {
            const li = document.createElement("li");
            li.textContent = fileName; // Zet de bestandsnaam als de tekst van het <li>-element
            fileContainer.appendChild(li); // Voeg het <li>-element toe aan de lijst
        });
    } else {
        const li = document.createElement("li");
        li.textContent = 'Geen bestanden gevonden.';
        fileContainer.appendChild(li);
    }
}

// Roep de functie aan om de bestandsnamen op te halen bij het laden van de pagina
fetchFileNames();

// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

    /*
    * STAPPEN:
    * We moeten tellen hoeveel mensen er Cum Laude slagen dus we maken een counter aan en zetten deze op 0
    * We lopen door de array en checken bij elk cijfer of het 8 of hoger is.
    * Als dat zo is dan tellen we 1 op bij de counter.
    * */

let cumLaudeCount = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeCount++;
    }
}

console.log(cumLaudeCount);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function countCumLaudeGraduates(gradeList) {
    let cumLaudeCount = 0;
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] >= 8) {
            cumLaudeCount++;
        }
    }

    return cumLaudeCount;
}

console.log(countCumLaudeGraduates(grades));
console.log(countCumLaudeGraduates([6, 4, 5]));
console.log(countCumLaudeGraduates([8, 9, 4, 6, 10]));


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

    /*
    * STAPPEN:
    * De gemiddelde waarde berekenen we door alle cijfers bij elkaar op te tellen en te delen door het aantal cijfers.
    * De cijfers en het aantal cijfers moeten verzameld worden.
    * We lopen. We checken de lengte van de loop met array.lenght property.
    * */

let gradeSum = 0;

for (let i = 0; i < grades.length; i++) {
    gradeSum += grades[i];
}

let average = gradeSum / grades.length;

console.log(average);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function getAverageGrade(gradeList) {
    let gradeSum = 0;
    for (let i = 0; i < gradeList.length; i++) {
        gradeSum += gradeList[i];
    }

    return (gradeSum / gradeList.length).toFixed(2);
}

console.log(getAverageGrade(grades));
console.log(getAverageGrade([6, 4, 5]));
console.log(getAverageGrade([8, 9, 4, 6, 10]));


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

/*
* de functie .toFixed(2) gebruikt op de return value in de getAverageGrade functie.
* */

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

    /*
    * STAPPEN:
    * We maken een variable aan genaamd highestGrade en geven deze de waarde 0.
    * We doorlopen de lijst dmv een for-loop.
    * Bij iedere waarde die we langslopen checken we of deze groter of kleiner is dan de variable highestGrade.
    * Als de waarde in de lijst hoger is dan highestGrade dan wijzen we deze toe aan highestGrade.
    * */

let highestGrade = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
        highestGrade = grades[i];
    }
}

console.log(highestGrade);

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function getHighestGrade(gradeList) {
    let highestGrade = 0;
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] > highestGrade) {
            highestGrade = gradeList[i];
        }
    }

    return highestGrade;
}

console.log(getHighestGrade(grades));
console.log(getHighestGrade([6, 4, 5]));
console.log(getHighestGrade([8, 9, 4, 6, 10]));

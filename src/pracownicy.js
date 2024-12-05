import pracownicy from '../dane/pracownicy.json' assert { type: "json" };
import { listaPracowników } from "./index.js";
import { STANOWISKO, WALUTA } from "./types/pracownikTypes.js";
const isPracownik = (obj) => {
    return ("id" in obj &&
        "imie" in obj &&
        "stanowisko" in obj &&
        Object.values(STANOWISKO).includes(obj.stanowisko) &&
        "pseudonim" in obj &&
        "opis" in obj &&
        "pensja" in obj &&
        Array.isArray(obj.pensja) &&
        typeof obj.pensja[0] === "number" &&
        Object.values(WALUTA).includes(obj.pensja[1]));
};
const mapToPracownik = (obj) => {
    if ("id" in obj &&
        "imie" in obj &&
        "stanowisko" in obj &&
        "pseudonim" in obj &&
        "opis" in obj &&
        "pensja" in obj &&
        Array.isArray(obj.pensja) &&
        typeof obj.pensja[0] === "number" &&
        typeof obj.pensja[1] === "number") {
        return {
            id: obj.id,
            imie: obj.imie,
            stanowisko: obj.stanowisko,
            pseudonim: obj.pseudonim,
            opis: obj.opis,
            pensja: [obj.pensja[0], obj.pensja[1]],
            zwolnij: obj.zwolnij
        };
    }
    return null;
};
export const dodajPracownikówZListy = () => {
    pracownicy
        .map(mapToPracownik) // Przekształcamy dane na typ Pracownik
        .filter((pracownik) => pracownik !== null) // Usuwamy null-e
        .forEach((pracownik) => {
        dodajPracownika(pracownik);
    });
};
export const dodajNowegoPracownika = (imie, nazwisko, stanowisko, pensja, zwolnij) => {
    listaPracowników.push({
        id: listaPracowników.length + 1,
        imie,
        stanowisko,
        pensja,
        pseudonim: "",
        opis: "",
        zwolnij
    });
};
export const dodajPracownika = (pracownik) => {
    listaPracowników.push(pracownik);
};
export const zwolnijPracownika = (id, powód) => {
    const pracownik = listaPracowników.find(pracownik => pracownik.id === id);
    if (pracownik && pracownik.zwolnij) {
        pracownik.zwolnij(powód);
    }
    else {
        console.log(`Pracownik o ID ${id} nie został znaleziony lub nie można go zwolnić.`);
    }
};
const zwolnijGo = (...powody) => {
    powody.forEach(powód => {
        console.log("Zwolniono z powodu numer: " + powód);
        console.log("Zwolniono z powodu: " + powód);
        console.log("NIE UDAŁO SIĘ ZWOLNIĆ, ZOSTAJĘ W TYM GRAJDOŁKU!");
    });
};

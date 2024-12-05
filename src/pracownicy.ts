import pracownicy from "../dane/pracownicy.json" assert { type: "json" };
import { listaPracowników } from "./index.js";
import { Pracownik, STANOWISKO, WALUTA } from "./types/pracownikTypes.js";

const isPracownik = (obj: any): obj is Pracownik => {
    return (
        "id" in obj &&
        "imie" in obj &&
        "stanowisko" in obj &&
        Object.values(STANOWISKO).includes(obj.stanowisko) &&
        "pseudonim" in obj &&
        "opis" in obj &&
        "pensja" in obj &&
        Array.isArray(obj.pensja) &&
        typeof obj.pensja[0] === "number" &&
        Object.values(WALUTA).includes(obj.pensja[1])
    );
};

const mapToPracownik = (obj: any): Pracownik | null => {
    if (isPracownik(obj)) {
        return {
            id: obj.id,
            imie: obj.imie,
            stanowisko: obj.stanowisko as STANOWISKO,
            pseudonim: obj.pseudonim,
            opis: obj.opis,
            pensja: [obj.pensja[0], obj.pensja[1] as WALUTA],
            zwolnij: zwolnijGo
        };
    }
    return null;
};

export const dodajPracownikówZListy = () => {
    pracownicy
        .map(mapToPracownik)
        .filter((pracownik): pracownik is Pracownik => pracownik !== null)
        .forEach((pracownik: Pracownik) => {
            dodajPracownika(pracownik);
        });
};

export const dodajNowegoPracownika = (
    imie: string,
    nazwisko: string,
    stanowisko: STANOWISKO,
    pensja: [number, WALUTA],
) => {
    listaPracowników.push({
        id: listaPracowników.length + 1,
        imie,
        stanowisko,
        pensja,
        pseudonim: "",
        opis: "",
        zwolnij: zwolnijGo
    });
};

export const dodajPracownika = (pracownik: Pracownik) => {
    pracownik.id = listaPracowników.length + 1;
    listaPracowników.push(pracownik);
    console.log("Dodano pracownika:", pracownik);
};

export const zwolnijPracownika = (id: number, powód: string) => {
    const index = listaPracowników.findIndex(pracownik => pracownik.id === id);
    if (index !== -1) {
        const pracownik = listaPracowników[index];
        if (pracownik.zwolnij) {
            pracownik.zwolnij(powód);
        }
        listaPracowników.splice(index, 1);
        console.log(`Pracownik o ID ${id} został usunięty z listy.`);
    } else {
        console.log(`Pracownik o ID ${id} nie został znaleziony lub nie można go zwolnić.`);
    }
};

const zwolnijGo = (...powody: (string | number | unknown)[]) => {
    powody.forEach(powód => {
        if (typeof powód === "number") {
            console.log(`Zwolniono z powodu numer: ${powód}`);
        } else if (typeof powód === "string") {
            console.log(`Zwolniono z powodu: ${powód}`);
        } else {
            console.log("NIE UDAŁO SIĘ ZWOLNIĆ, ZOSTAJĘ W TYM GRAJDOŁKU!");
        }
    });
};

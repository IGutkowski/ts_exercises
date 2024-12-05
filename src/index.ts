import { dodajNowegoPracownika, dodajPracownika, dodajPracownikówZListy, zwolnijPracownika } from "./pracownicy.js";
import { generujRaport } from "./raporty.js";
import { PaniBasia } from "./types/otherTypes.js";
import { PRIORYTET } from "./types/raportTypes.js";
import { Pracownik, STANOWISKO, WALUTA } from "./types/pracownikTypes.js";

export const listaPracowników: Pracownik[] = [];

const paniBasia: PaniBasia = {
    id: 0,
    imie: "Basia",
    stanowisko: STANOWISKO.pani_basia,
    pseudonim: "SuperBasia",
    opis: "Niezastąpiona",
    pensja: [5000, WALUTA.Złoty_Polski_Peelen],
    graNaSkrzypcach: "pięknie",
    bezNiejTenZakładUpadnie: true
};

const uruchomDzieńPracy = async () => {
    console.log("Dodawanie nowego pracownika Jan Kowalski...");
    dodajNowegoPracownika("Jan", "Kowalski", STANOWISKO.podbutnik, [3000, WALUTA.Złoty_Polski_Peelen]);

    console.log("Dodawanie pracowników z listy JSON...");
    dodajPracownikówZListy();

    console.log("Dodawanie pracownika Basia...");
    dodajPracownika(paniBasia);

    console.log("Próba zwolnienia pracownika o ID 1...");
    zwolnijPracownika(1, "Redukcja etatów");

    console.log("Próba zwolnienia pracownika o ID 1...");
    zwolnijPracownika(6, "Redukcja etatów");

    const efektyPracy = {
        efektywność: 70,
        priorytet: PRIORYTET.brak,
        obnizonaEfektywnosc: true,
        spadekPensji: 1000
    };

    console.log("Generowanie raportu dla pracownika...");
    const raportPracownika = await generujRaport(efektyPracy, 70, PRIORYTET.brak);
    console.log("Raport pracownika:", raportPracownika);
};

console.log("Lista pracowników przed uruchomieniem dnia pracy:", listaPracowników);
await uruchomDzieńPracy();
console.log("Lista pracowników po uruchomieniu dnia pracy:", listaPracowników);

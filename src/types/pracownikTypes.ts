export enum STANOWISKO {
    szef = "szef",
    anetka = "anetka",
    pani_basia = "pani_basia",
    podbutnik = "podbutnik"
}

export enum WALUTA {
    Złoty_Polski_Peelen,
    Erło_jedne_niemieckie,
    Dolar_fajny_taki_amerykanski,
}

type Pracownik = {
    id: number;
    imie: string;
    stanowisko : STANOWISKO;
    pseudonim: string;
    opis: string;
    pensja: [number, WALUTA];
    zwolnij?: (...powody: (string | number)[]) => void;

}


export type { Pracownik };
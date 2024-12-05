export enum PRIORYTET {
    "brak",
    "na kiedyś",
    "jak się upomną"
}

export type Raport = {
    efektywność: number;
    priorytet: PRIORYTET;
}

export type RaportPracownika = {
    efektywność: number;
    priorytet: PRIORYTET;
    obnizonaEfektywnosc: boolean;
    spadekPensji: number;
};

export type RaportPracowników = {
    [id: number]: RaportPracownika;
};

export type RaportPieseczka = {
    szczekanie: true;
    isPies: true;
    aKtoToJestTakimSłodkimPieseczkiem: true;
};


import { RaportPracownika, PRIORYTET } from "./types/raportTypes.js";

export const generujRaport = (
    daneRaportu: RaportPracownika,
    efektywność: number,
    priorytet: PRIORYTET
): Promise<RaportPracownika> => {
    return new Promise((resolve) => {
        resolve(daneRaportu);
    });
};

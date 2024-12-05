import {Pracownik} from "./pracownikTypes.js";

type PaniBasia = Pracownik & {
    graNaSkrzypcach: string;
    bezNiejTenZakładUpadnie: boolean;
}

type Pies = {
    szczekanie: boolean;
    isPies: boolean;
    aKtoToJestTakimSłodkimPieseczkiem: boolean;
}

export type {PaniBasia, Pies};
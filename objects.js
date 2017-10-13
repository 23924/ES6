// dag 1
let mobiel = { merk: "", type: "", kleur: "" };
let iPhone = Object.create(mobiel); mobiel.merk = 'Apple'; mobiel.type = 'iPhone 6s'; mobiel.kleur = 'rozegold';

let laptop = { merk: "", type: "", kleur: "" };
let Macbook = Object.create(laptop); laptop.merk = 'Aple'; laptop.type = 'MacBook Pro'; laptop.kleur = 'grijs';

let kleding = { merk: "", kleur: "", maat: 0 };
let vest = Object.create(kleding); kleding.merk = 'primark'; kleding.kleur = 'grijs'; kleding.maat = 'M';

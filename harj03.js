// Ülesanne 10
// 1. Toote objekt
// Loo toote jaoks objekt ‘toode‘, mis sisaldab vähemalt 3 omadust (nimetus, hind, kogus)


// Kuva objekti omadused konsoolis
// Lisa meetodid ja kuva konsoolis:
// toote koguhind
// muudab toote kogust
// kuvab objekti sisu, kasutades sõne malli

let toode = {
  nimetus: "sai",
  hind: 3,
  kogus: 2022,

  koguhind: function () {
    return this.hind * this.kogus;
  }
};

console.log(toode)
console.log(toode.nimetus)
console.log(toode.koguhind())
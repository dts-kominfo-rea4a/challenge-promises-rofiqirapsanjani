const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");


// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    var countMarah = 0;
    var countTidakMarah = 0; 
    promiseTheaterVGC()
    .then(
      (data) => {

        for (let i = 0; i < data.length; i++) {
          if (data[i].hasil == "marah"){
            countMarah = countMarah + 1;
          } else if (data[i].hasil == "tidak marah"){
            countTidakMarah = countTidakMarah + 1;
          };
        }
      }
    )
    promiseTheaterIXX()
    .then(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].hasil == "marah"){
            countMarah = countMarah + 1;
          } else if (data[i].hasil == "tidak marah"){
            countTidakMarah = countTidakMarah + 1;
          };
        }
        if (emosi === "marah"){
          resolve(countMarah);
        } else if (emosi === "tidak marah"){
          resolve(countTidakMarah);
        } else {
          reject("error")
        }
      });
    });
}



module.exports = {
  promiseOutput,
};

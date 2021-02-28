"use strict";
let key;
let content;
const btnSumbit = document.querySelector(".sumbit-btn");
const btnReset = document.querySelector(".reset-btn");
const search = document.querySelector(".search-form");
const info = document.querySelector(".info");

btnReset.addEventListener("click", function () {
  search.value = "";
  info.innerHTML = "";
});
btnSumbit.addEventListener("click", function getInfo() {
  if (search.value != "") {
    return fetch("http://universities.hipolabs.com/search?")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        content = data;
        content.forEach((element, i) => {
          // console.log(i);
          let infoUniversity = {
            "№": i,
            alpha_two_code: `${element.alpha_two_code}`,
            country: `${element.country}`,
            name: `${element.name}`,
            domains: `${element.domains}`,
            web_pages: `${element.web_pages}`,
          };
          
          if (
            infoUniversity.country.toLowerCase() == search.value ||
            infoUniversity.country.toUpperCase() == search.value
          ) {
            info.innerHTML += `<ul><li><strong>№${i}</strong></li><li><strong> alpha_two_code :</strong>  ${element.alpha_two_code}</li><li><strong>country :</strong>  ${element.country}</li><li><strong> name</strong>  ${element.name}</li><li><strong> domains:  </strong>${element.domains}</li><li><strong> web_pages :</strong>  <a href = #>   ${element.web_pages}</a></li></ul>`;
          }
        });
      });
  }
});

// console.log(infoUniversity);
//         });
//       });
//   } else {
//     search.value = "Заполните поле";
//   }
// });

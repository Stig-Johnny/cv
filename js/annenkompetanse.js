Vue.component('annenkompetanse', {
    template: '#annenkompetanse-template',
    data() {
        return {
          data: [
            {
              name: "Språk",
              nameEn: "Languages",
              comp: [
                {
                  name: "Norsk (morsmål)",
                  nameEn: "Norwegian (native language)"
                },
                {
                  name: "Engelsk (flytende skriftlig og muntlig)",
                  nameEn: "English (fluently written and oral)"
                }
              ]
            },
            {
              name: "Førerkort",
              nameEn: "Driver license",
              comp: [
                {
                  name: "Klasse B",
                  nameEn: "Class B (Norwegian)"
                }
              ]
            }
          ]
        };
      }
  });
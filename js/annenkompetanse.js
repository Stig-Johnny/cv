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
                  nameEn: "English (fluent, written and spoken)"
                }
              ]
            },
            {
              name: "Førerkort",
              nameEn: "Driver's license",
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
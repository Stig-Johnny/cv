Vue.component('personopplysninger', {
    template: '#personopplysninger-template',
    data() {
        return {
          data: [
            {
              name: "Navn",
              nameEn: "Name",
              value : "Stig-Johnny Støbakk",
              valueEn: "Stig-Johnny Stoebakk"
            },
            {
              name: "E-post",
              nameEn: "E-mail",
              value : "post@stigjohnny.no",
              valueEn : "post@stigjohnny.no"
            },
            {
              name: "Mobil",
              nameEn: "Mobile",
              value : "+47 966 29 919",
              valueEn : "+47 966 29 919"
            },
            {
              name: "Web",
              nameEn: "Web",
              value : "www.stigjohnny.no",
              valueEn : "www.stigjohnny.no"
            },
            {
              name: "Sted",
              nameEn: "Location",
              value : "Remote i EØS, Norge etter avtale",
              valueEn : "Remote within the EEA, Norway on request"
            }
          ]
        };
      }
  });
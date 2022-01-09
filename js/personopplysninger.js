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
              name: "Født",
              nameEn: "Born",
              value : "31/03/1983",
              valueEn : "31/03/1983"
            },
            {
              name: "Adresse",
              nameEn: "Address",
              value : "Bjørndalsjordet 59, 1270 Oslo, Norway",
              valueEn : "Bjoerndalsjordet 59, 1270 Oslo, Norway"
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
            }
          ]
        };
      }
  });
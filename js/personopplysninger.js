Vue.component('personopplysninger', {
    template: '#personopplysninger-template',
    data() {
        return {
          data: [
            {
              name: "Navn",
              nameEn: "Name",
              value : "Stig-Johnny Stoebakk"
            },
            {
              name: "Født",
              nameEn: "Born",
              value : "31/03/1983"
            },
            {
              name: "Adresse",
              nameEn: "Address",
              value : "Bjorndalsjordet 59, 1270 Oslo, Norway"
            },
            {
              name: "E-post",
              nameEn: "E-mail",
              value : "post@stigjohnny.no"
            },
            {
              name: "Mobil",
              nameEn: "Mobile",
              value : "+47 966 29 919"
            }
          ]
        };
      }
  });
let talablar = [
  { nomi: "forEach", vazifasi: "Har bir elementni ko‘rish" },
  { nomi: "map", vazifasi: "Elementni o‘zgartirish" },
  { nomi: "filter", vazifasi: "Keraklisini ajratish" },
  { nomi: "find", vazifasi: "Bitta elementni topish" },
  { nomi: "some", vazifasi: "Kamida bittasi bormi?" },
  { nomi: "every", vazifasi: "Hammasi to‘g‘rimi?" },
  { nomi: "reduce", vazifasi: "Hisoblash (yig‘indi)" },
  { nomi: "sort", vazifasi: "Tartiblash" },
  { nomi: "reverse", vazifasi: "Teskari qilish" }
];
talablar.forEach(function(talablar, index){
    console.log(`${index + 1}. ${talablar.nomi} - ${talablar.vazifasi}`);
})
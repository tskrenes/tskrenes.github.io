const dataStore = [
  {
    title: 'Adventures with Mario Starter Course',
    code: 71360,
    link: 'https://www.lego.com/en-ca/product/adventures-with-mario-starter-course-71360',
  },
  {
    title: 'Adventures with Luigi Starter Course',
    code: 71387,
    link: 'https://www.lego.com/en-ca/product/adventures-with-luigi-starter-course-71387',
  },
  {
    title: 'Piranha Plant Power Slide',
    code: 71365,
    link: 'https://www.lego.com/en-ca/product/piranha-plant-power-slide-expansion-set-71365',
  },
  {
    title: 'Boomer Bill Barrage',
    code: 71366,
    link: 'https://www.lego.com/en-ca/product/boomer-bill-barrage-expansion-set-71366',
  },
  {
    title: 'Desert Pokey',
    code: 71363,
    link: 'https://www.lego.com/en-ca/product/desert-pokey-expansion-set-71363',
  },
  {
    title: 'Whomps Lava Trouble',
    code: 71364,
    link: 'https://www.lego.com/en-ca/product/whomps-lava-trouble-expansion-set-71364',
  },
  {
    title: 'Guarded Fortress',
    code: 71362,
    link: 'https://www.lego.com/en-ca/product/guarded-fortress-expansion-set-71362',
  },
  {
    title: 'Nintendo Entertainment System',
    code: 71374,
    link: 'https://www.lego.com/en-ca/product/nintendo-entertainment-system-71374',
  },
  {
    title: "Mario's House & Yoshi",
    code: 71367,
    link: 'https://www.lego.com/en-ca/product/mario-s-house-yoshi-expansion-set-71367',
  },
  {
    title: 'Chain Chomp Jungle Encounter',
    code: 71381,
    link: 'https://www.lego.com/en-ca/product/chain-chomp-jungle-encounter-expansion-set-71381',
  },
  {
    title: 'Wigglers Poison Swamp',
    code: 71383,
    link: 'https://www.lego.com/en-ca/product/wigglers-poison-swamp-expansion-set-71383',
  },
  {
    title: 'Piranha Plant Puzzling Challenge',
    code: 71382,
    link: 'https://www.lego.com/en-ca/product/piranha-plant-puzzling-chalenge-expansion-set-71382',
  },
  {
    title: 'Master Your Adventure Maker',
    code: 71380,
    link: 'https://www.lego.com/en-ca/product/master-your-adventure-maker-expansion-set-71380',
  },
  {
    title: 'King Boo and the Haunted Yard',
    code: 71377,
    link: 'https://www.lego.com/en-ca/product/king-boo-and-the-haunted-yard-expansion-set-71377',
  },
  {
    title: 'Thwomp Drop',
    code: 71376,
    link: 'https://www.lego.com/en-ca/product/thwomp-drop-expansion-set-71376',
  },
  {
    title: "Bowser's Castle Boss Battle",
    code: 71369,
    link: 'https://www.lego.com/en-ca/product/Bowser-s-castle-boss-battle-expansion-set-71369',
  },
  {
    title: "Toad's Treasure Hunt",
    code: 71368,
    link: 'https://www.lego.com/en-ca/product/toad-s-treasure-hunt-expansion-set-71368',
  },
  {
    title: 'Monty Mole and Super Mushroom',
    code: 40414,
    link: 'https://www.lego.com/en-ca/product/monty-mole-and-super-mushroom-expansion-set-40414',
  },
  {
    title: "Toad's Special Hideaway",
    code: 77907,
    link: 'https://www.lego.com/en-us/product/toad-s-special-hideaway-expansion-set-77907',
  },
  {
    title: 'Super Mushroom Surprise',
    code: 30385,
    link: 'https://www.lego.com/en-ie/product/super-mushroom-surprise-expansion-set-30385',
  },
  {
    title: 'Boss Sumo Bro Topple Tower',
    code: 71388,
    link: 'https://www.lego.com/en-ca/product/boss-sumo-bro-topple-tower-expansion-set-71388',
  },
  {
    title: 'Reznor Knockdown',
    code: 71390,
    link: 'https://www.lego.com/en-ca/product/reznor-knockdown-expansion-set-71390',
  },
  {
    title: "Bowser's Airship",
    code: 71391,
    link: 'https://www.lego.com/en-ca/product/bowser-s-airship-expansion-set-71391',
  },
  {
    title: 'Lakitu Sky World',
    code: 71389,
    link: 'https://www.lego.com/en-ca/product/lakitu-sky-world-expansion-set-71389',
  },
  {
    title: 'Tanooki Mario Power-Up Pack',
    code: 71385,
    link: 'https://www.lego.com/en-ca/product/tanooki-mario-power-up-pack-71385',
  },
  {
    title: 'Bee Mario Power-Up Pack',
    code: 71393,
    link: 'https://www.lego.com/en-ca/product/bee-mario-power-up-pack-71393',
  },
  {
    title: 'Character Pack - Series 4',
    code: 71402,
    link: 'https://www.lego.com/en-ca/product/character-packs-series-4-71402',
  },
  {
    title: "Dorrie's Beachfront",
    code: 71398,
    link: 'https://www.lego.com/en-ca/product/dorrie-s-beachfront-expansion-set-71398',
  },
  {
    title: "Bowser Jr.'s Clown Car",
    code: 71396,
    link: 'https://www.lego.com/en-ca/product/bowser-jr-s-clown-car-expansion-set-71396',
  },
  {
    title: "Luigi's Mansion Entryway",
    code: 71399,
    link: 'https://www.lego.com/en-ca/product/luigi-s-mansion-entryway-expansion-set-71399',
  },
  {
    title: "Luigi's Mansion Haunt-and-Seek",
    code: 71401,
    link: 'https://www.lego.com/en-ca/product/luigi-s-mansion-haunt-and-seek-expansion-set-71401',
  },
  {
    title: "Luigi's Mansion Lab and Poltergust",
    code: 71397,
    link: 'https://www.lego.com/en-ca/product/luigi-s-mansion-lab-and-poltergust-expansion-set-71397',
  },
];

function searchCode(code) {
  return (result = dataStore.filter((set) => set.code === code));
}

function searchTitle(title) {
  return dataStore.filter(
    (set) => set.title.search(new RegExp(title, 'i')) >= 0
  );
}

function onSearch() {
  const input = $('#input')[0].value;
  if (input.length < 1) {
    $('#results').html('');
    return;
  }

  result = parseInt(input, 10)
    ? searchCode(parseInt(input, 10))
    : searchTitle(input);

  if (!Object.keys(result).length) {
    $('#results').html(`The search "${input}" yielded no results.`);
    return;
  }

  let resultHTML = '<ul>';
  result.map((item) => {
    resultHTML += `<li><a href=${item.link} target='_blank'>${item.title}</a></li>`;
  });
  resultHTML += '</ul>';

  $('#results').html(resultHTML);
}

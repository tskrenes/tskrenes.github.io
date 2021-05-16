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

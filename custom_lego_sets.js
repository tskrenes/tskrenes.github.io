const dataStore = [
  {
    title: 'Mario Kart',
    code: 71598,
    link: 'https://www.lego.com/en-ca/product/adventures-with-mario-starter-course-71360',
  },
  {
    title: "Mario Kart Bowser's Castle",
    code: 71482,
    link: 'https://www.lego.com/en-ca/product/adventures-with-luigi-starter-course-71387',
  },
  {
    title: 'Mario Kart Mario Circuit (coming soon)',
    code: 71834,
    link: 'https://www.lego.com/en-ca/product/piranha-plant-power-slide-expansion-set-71365',
  },
  {
    title: 'Mario Kart Donut Plains 3',
    code: 71784,
    link: 'https://www.lego.com/en-ca/product/boomer-bill-barrage-expansion-set-71366',
  },
  {
    title: 'Mario Kart Moo Moo Meadows (coming soon)',
    code: 71867,
    link: 'https://www.lego.com/en-ca/product/desert-pokey-expansion-set-71363',
  },
  {
    title: 'Mario Kart Dry, Dry Desert(coming soon)',
    code: 71693,
    link: 'https://www.lego.com/en-ca/product/whomps-lava-trouble-expansion-set-71364',
  },
  {
    title: 'Nintendo Switch Lite',
    code: 71952,
    link: 'https://www.lego.com/en-ca/product/guarded-fortress-expansion-set-71362',
  },
  {
    title: 'Nintendo Switch(coming soon)',
    code: 71496,
    link: 'https://www.lego.com/en-ca/product/nintendo-entertainment-system-71374',
  },
  {
    title: 'Rock-Candy Mines',
    code: 71536,
    link: 'https://www.lego.com/en-ca/product/mario-s-house-yoshi-expansion-set-71367',
  },
  {
    title: 'Frozen World',
    code: 71472,
    link: 'https://www.lego.com/en-ca/product/chain-chomp-jungle-encounter-expansion-set-71381',
  },
  {
    title: 'Character Pack - Series 1',
    code: 71383,
    link: 'https://www.lego.com/en-ca/product/wigglers-poison-swamp-expansion-set-71383',
  },
  {
    title: 'Super Mario Odyssey The Odyssey(coming soon)',
    code: 71980,
    link: 'https://www.lego.com/en-ca/product/piranha-plant-puzzling-chalenge-expansion-set-71382',
  },
  {
    title: 'Super Mario Odyssey Cappy Power-Up Pack(coming soon)',
    code: 71865,
    link: 'https://www.lego.com/en-ca/product/master-your-adventure-maker-expansion-set-71380',
  },
  {
    title: 'Super Mario Odyssey Sand Kingdom(coming soon)',
    code: 71694,
    link: 'https://www.lego.com/en-ca/product/king-boo-and-the-haunted-yard-expansion-set-71377',
  },
  {
    title: 'Super Mario Odyssey Cap Kingdom(coming soon)',
    code: 71692,
    link: 'https://www.lego.com/en-ca/product/thwomp-drop-expansion-set-71376',
  },
  {
    title: 'Super Mario Odyssey Luncheon Kingdom',
    code: 71974,
    link: 'https://www.lego.com/en-ca/product/Bowser-s-castle-boss-battle-expansion-set-71369',
  },
  {
    title: "Mario Party Bounce 'n' Trounce",
    code: 71693,
    link: 'https://www.lego.com/en-ca/product/toad-s-treasure-hunt-expansion-set-71368',
  },
  {
    title: 'Mario Party Chip Shot Challenge',
    code: 71480,
    link: 'https://www.lego.com/en-ca/product/monty-mole-and-super-mushroom-expansion-set-40414',
  },
  {
    title: 'Mario Party The Beat Goes On',
    code: 71730,
    link: 'https://www.lego.com/en-us/product/toad-s-special-hideaway-expansion-set-77907',
  },
  {
    title: "Mario Party Game Guy's Lucky 7",
    code: 30385,
    link: 'https://www.lego.com/en-ie/product/super-mushroom-surprise-expansion-set-30385',
  },
  {
    title: 'Mario Party Mini-Game Melee',
    code: 71388,
    link: 'https://www.lego.com/en-ca/product/boss-sumo-bro-topple-tower-expansion-set-71388',
  },
  {
    title: 'Mario Party Pushy Penguins',
    code: 71390,
    link: 'https://www.lego.com/en-ca/product/reznor-knockdown-expansion-set-71390',
  },
  {
    title: 'Mario Party Roll Call',
    code: 71391,
    link: 'https://www.lego.com/en-ca/product/bowser-s-airship-expansion-set-71391',
  },
  {
    title: 'Mario Party Night Light Fright',
    code: 71389,
    link: 'https://www.lego.com/en-ca/product/lakitu-sky-world-expansion-set-71389',
  },
  {
    title: 'Mario Party At The Chomp Wash(coming soon)',
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

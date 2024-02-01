require('dotenv').config();
require('./server/config/database');

const Card = require('./server/models/card');

(async function() {
  await Card.deleteMany({});
  const cards = await Card.create([
    {"cardType": "Resource", "name": "Mana", "art": "/card-art/mana.jpeg"},
    {"cardType": "Monster", "name": "Goblin Grunt", "strength": 1, "defense": 1, "cost": 1, "art": "/card-art/goblin_grunt.jpeg"},
    {"cardType": "Monster", "name": "Elven Archer", "strength": 2, "defense": 1, "cost": 2, "text": "Ranged attack", "art": "/card-art/elven_archer.jpeg"},
    {"cardType": "Monster", "name": "Dwarven Defender", "strength": 1, "defense": 3, "cost": 2, "art": "/card-art/dwarven_defender.jpeg"},
    {"cardType": "Monster", "name": "Spectral Wolf", "strength": 3, "defense": 2, "cost": 3, "text": "Ghostly: Can't be blocked the turn it is played", "art": "/card-art/spectral_wolf.jpeg"},
    {"cardType": "Monster", "name": "Forest Giant", "strength": 4, "defense": 4, "cost": 4, "art": "/card-art/forest_giant.jpeg"},
    {"cardType": "Monster", "name": "Shadow Assassin", "strength": 3, "defense": 1, "cost": 3, "text": "Assassinate: Destroys any monster it damages", "art": "/card-art/shadow_assassin.jpeg"},
    {"cardType": "Monster", "name": "Fire Elemental", "strength": 5, "defense": 3, "cost": 5, "text": "Blaze: Deals 1 damage to all other monsters when played", "art": "/card-art/fire_elemental.jpeg"},
    {"cardType": "Monster", "name": "Water Sprite", "strength": 2, "defense": 5, "cost": 4, "text": "Heal: Restore 1 defense to all friendly monsters when played", "art": "/card-art/water_sprite.jpeg"},
    {"cardType": "Monster", "name": "Stone Golem", "strength": 3, "defense": 5, "cost": 5, "art": "/card-art/stone_golem.jpeg"},
    {"cardType": "Monster", "name": "Air Elemental", "strength": 4, "defense": 3, "cost": 4, "text": "Wind Rush: Can attack immediately when played", "art": "/card-art/air_elemental.jpeg"},
    {"cardType": "Spell", "name": "Lightning Bolt", "text": "Deals 3 damage to any target", "cost": 3, "art": "/card-art/lightning_bolt.jpeg"},
    {"cardType": "Spell", "name": "Healing Breeze", "text": "Restore 2 defense to all your monsters", "cost": 2, "art": "/card-art/healing_breeze.jpeg"},
    {"cardType": "Spell", "name": "Mana Surge", "text": "Gain an extra resource this turn only", "cost": 1, "art": "/card-art/mana_surge.jpeg"},
    {"cardType": "Monster", "name": "Knight of Valor", "strength": 3, "defense": 4, "cost": 4, "text": "Valor: Gains +1/+1 when attacking", "art": "/card-art/knight_of_valor.jpeg"},
    {"cardType": "Monster", "name": "Mystic Sage", "strength": 1, "defense": 2, "cost": 3, "text": "Wisdom: Draw a card when played", "art": "/card-art/mystic_sage.jpeg"},
    {"cardType": "Monster", "name": "Necromancer", "strength": 2, "defense": 3, "cost": 4, "text": "Raise Dead: Return a monster from your graveyard to your hand when played", "art": "/card-art/necromancer.jpeg"},
    {"cardType": "Monster", "name": "Orc Berserker", "strength": 4, "defense": 2, "cost": 3, "text": "Berserk: Gains +2 strength when attacking alone", "art": "/card-art/orc_berserker.jpeg"},
    {"cardType": "Monster", "name": "Celestial Dragon", "strength": 6, "defense": 6, "cost": 7, "text": "Majestic: Can't be targeted by spells or texts", "art": "/card-art/celestial_dragon.jpeg"},
    {"cardType": "Monster", "name": "Rogue Thief", "strength": 2, "defense": 1, "cost": 2, "text": "Steal: Gain 1 resource when it deals damage", "art": "/card-art/rogue_thief.jpeg"},
    {"cardType": "Monster", "name": "Guardian Angel", "strength": 3, "defense": 4, "cost": 5, "text": "Protect: Absorbs the first damage dealt to your monsters each turn", "art": "/card-art/guardian_angel.jpeg"},
    {"cardType": "Monster", "name": "Frost Bear", "strength": 4, "defense": 3, "cost": 4, "text": "Freeze: The monster damaged by Frost Bear can't attack next turn", "art": "/card-art/frost_bear.jpeg"},
    {"cardType": "Monster", "name": "Lava Troll", "strength": 5, "defense": 4, "cost": 5, "text": "Regenerate: Restores 1 defense at the start of your turn", "art": "/card-art/lava_troll.jpeg"},
    {"cardType": "Spell", "name": "Eternal Rest", "text": "Destroys all monsters with 2 or less strength", "cost": 4, "art": "/card-art/eternal_rest.jpeg"},
    {"cardType": "Spell", "name": "Wild Growth", "text": "Your monsters gain +1/+1 until end of turn", "cost": 3, "art": "/card-art/wild_growth.jpeg"},
    {"cardType": "Spell", "name": "Dimensional Rift", "text": "Return a monster to its owner's hand", "cost": 2, "art": "/card-art/dimensional_rift.jpeg"},
    {"cardType": "Monster", "name": "Venomous Spider", "strength": 2, "defense": 3, "cost": 3, "text": "Poison: Destroys any monster it damages over time", "art": "/card-art/venomous_spider.jpeg"},
    {"cardType": "Monster", "name": "Pyromancer", "strength": 2, "defense": 2, "cost": 3, "text": "Ignite: Deals 2 damage divided as you choose among up to two targets", "art": "/card-art/pyromancer.jpeg"}
  ]);

  console.log(cards);

  process.exit();
})();

const Member = require("./models");
const pretty = require("pretty-ms");
const shop = require("./shop");
const exlusive = require("./Hitem");


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


async function getMember(member) {
  const memberData = await Member.findOne({ id: member.id });
  return memberData; 
}

async function createMember(member) {{
  const newMember = new Member({ id: member.id, guildId: member.guild.id });
  newMember.save().then(u => console.log(` nouveau joueur -> ${u.id}`));}
}

async function updateMember(member, settings) {
  let memberData = await getMember(member);
  if (typeof memberData != "object") memberData = {};
  for (const key in settings) {
    if (memberData[key] != settings[key]) memberData[key] = settings[key];
  }
  return memberData.updateOne(settings);
}


async function getMemberMoney(member) {
  member = await getMember(member);
  return member.coins;
}

async function getMemberInventory(member) {
  member = await getMember(member);
  return member.inventory;
}


async function addMoney(member, amount) {
  member = await getMember(member);
  member.coins += amount;
  updateMember(member, { coins: member.coins });
}

async function removeMoney(member, amount) {
  member = await getMember(member);
  member.coins -= amount;
  updateMember(member, { coins: member.coins });
}

async function leaderboard(guildId) {
  const guildLeaderboard = await Member.find({ guildId: guildId }).sort({ coins: -1 }).limit(10);
  return guildLeaderboard;
}

async function daily(member, amount) {
  member = await getMember(member);
  const now = new Date();
  if (member.daily.getDate() != now.getDate()) {
    member.coins += amount;
    member.daily = now;
    updateMember(member, { coins: member.coins, daily: member.daily });
    return "vous avez recuper vos 500 coins journaliere";
  } else {
    return "vous avez deja recuper votre paye revenez demain";
  }
}


async function give(member, oMember, amount) {
  member = await getMember(member);
  oMember = await getMember(oMember);
  if (member.id === oMember.id) return "espece de rat, ta pas le droit de te donner a toi meme. en gros fait circulé la moula";
  if (member.coins < amount) return "tu es pas la banque tu peux donner de l'argent que tu n'as pas";
  member.coins -= amount;
  oMember.coins += amount;
  updateMember(member, { coins: member.coins });
  updateMember(oMember, { coins: oMember.coins });
  return `vous avez donner ${amount} a <@${oMember.id}>`;
}

async function buyItemFromShop(member, item) {
  member = await getMember(member);
  if (item.price == 0) return "tu ne peux pas acheter cet item, cela veux dire qu'il est rare^^";
  member.coins -= item.price;
  member.inventory.push(item.name);
  updateMember(member, { coins: member.coins, inventory: member.inventory });
}

async function sellItemFromShop(member, item) {
  member = await getMember(member);
  if (item.price == 0) return "tu ne peux pas vendre cet item, cela veux dire qu'il est rare^^";
  member.coins += item.price;
  member.inventory.splice(member.inventory.indexOf(item.name), 1);
  updateMember(member, { coins: member.coins, inventory: member.inventory });
}

async function removeItem(member, item) {
  member = await getMember(member);
  member.inventory.splice(member.inventory.indexOf(item.name), 1);
  updateMember(member, { inventory: member.inventory });
}

async function addItem(member, item) {
  const itemi = shop[item];
  member = await getMember(member);
  member.inventory.push(itemi.name);
  updateMember(member, { inventory: member.inventory });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

async function work(member, amount) {
  member = await getMember(member)
  const now = new Date();
  if (member.work.getHours() != now.getHours()) {
    member.coins += amount;
    member.work = now;
    updateMember(member, { coins: member.coins, work: member.work });
    return `voici ta paye de ${amount} coins :D`;
  } else {
    return "tu as deja travailler.";
  }
}
async function mine(member, item) {
  const itemi = shop[item]
  member = await getMember(member)
  const now = new Date();
  if (member.mine.getHours() != now.getHours()) {
    member.inventory.push(itemi.name);
    member.mine = now;
    updateMember(member, { inventory: member.inventory, mine: member.mine });
    return `bravo tu as remporter ${itemi.name}`;
  } else {
    return "tu as deja travailler.";
  }
}

  async function hpup (member, item) {
    const itemi = shop[item]
    member = await getMember(member);
    member.health += itemi.sanction;
    updateMember(member, { health: member.health });
  }

  async function getMemberhp(member) {
    member = await getMember(member);
    return member.health;
  }


module.exports = { getMember, createMember, updateMember, getMemberMoney, getMemberInventory, addMoney, removeMoney, buyItemFromShop, sellItemFromShop, capitalizeFirstLetter, leaderboard, daily, getRandomInt, give, removeItem, addItem, work, mine, hpup, getMemberhp };
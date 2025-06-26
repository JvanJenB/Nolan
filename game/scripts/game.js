import { startCombat } from './combat.js';
import { openPack } from './packs.js';
import { getMission } from './missions.js';

class Player {
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.xp = 0;
        this.squad = [];
        this.chakra = 0;
    }
}

async function loadData(url) {
    const res = await fetch(url);
    return res.json();
}

async function initGame() {
    const avatars = await loadData('data/avatars.json');
    const packs = await loadData('data/packs.json');
    const missions = await loadData('data/missions.json');

    const player = new Player('Hero');
    player.squad.push(avatars[0]);

    document.getElementById('game-container').innerText = `Welcome, ${player.name}!`;
    // Placeholder for combat
    console.log('Start mission', missions[0]);
    startCombat(player.squad, [avatars[1]]);
}

document.addEventListener('DOMContentLoaded', initGame);

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
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load ${url}`);
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
}

async function initGame() {
    const avatars = await loadData('data/avatars.json');
    const packs = await loadData('data/packs.json');
    const missions = await loadData('data/missions.json');

    const player = new Player('Hero');
    player.squad.push(avatars[0]);

    // Open the first available pack for demonstration
    const reward = openPack(packs[0]);
    player.chakra += reward.chakra;

    // Grab the first mission using the helper
    const mission = getMission(1, missions);

    const messageEl = document.getElementById('message');
    messageEl.innerText = `Welcome, ${player.name}!`;
    console.log('Start mission', mission);

    const startBtn = document.getElementById('start-battle-btn');
    startBtn.addEventListener('click', () => {
        startCombat(player.squad[0], avatars[1]);
    });
}

document.addEventListener('DOMContentLoaded', initGame);

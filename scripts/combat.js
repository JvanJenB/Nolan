export function startCombat(playerSquad, enemySquad) {
    // Very basic turn simulation
    const playerAttack = playerSquad[0].stats.attack;
    const enemyAttack = enemySquad[0].stats.attack;

    let winner = 'Enemy';
    if (playerAttack >= enemyAttack) {
        winner = 'Player';
    }

    const resultEl = document.getElementById('combat-result') || document.getElementById('game-container');
    if (resultEl) {
        resultEl.innerText = `${winner} wins!`;
    }

    return winner;
}

export function startCombat(playerSquad, enemySquad) {
    console.log('Combat start');
    // Very basic turn simulation
    let playerAttack = playerSquad[0].stats.attack;
    let enemyAttack = enemySquad[0].stats.attack;

    if (playerAttack >= enemyAttack) {
        console.log('Player wins!');
    } else {
        console.log('Enemy wins!');
    }
}

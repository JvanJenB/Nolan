export function startCombat(player, enemy) {
    const resultEl = document.getElementById('combat-result');
    const playerStatsEl = document.getElementById('player-stats');
    const enemyStatsEl = document.getElementById('enemy-stats');
    const playerEl = document.getElementById('player');
    const enemyEl = document.getElementById('enemy');

    let playerHp = player.stats.hp;
    let enemyHp = enemy.stats.hp;

    playerEl.innerText = player.name;
    enemyEl.innerText = enemy.name;
    updateStats();

    function updateStats() {
        playerStatsEl.innerText = `HP: ${playerHp}`;
        enemyStatsEl.innerText = `HP: ${enemyHp}`;
    }

    function endCombat(winner) {
        resultEl.innerText = `${winner} wins!`;
        document.removeEventListener('keydown', onKey);
        enemyEl.removeEventListener('click', onClick);
    }

    function playerAttack() {
        enemyHp -= player.stats.attack;
        updateStats();
        if (enemyHp <= 0) {
            endCombat('Player');
        } else {
            setTimeout(enemyAttack, 500);
        }
    }

    function enemyAttack() {
        playerHp -= enemy.stats.attack;
        updateStats();
        if (playerHp <= 0) {
            endCombat('Enemy');
        }
    }

    function onKey(e) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            playerAttack();
        }
    }

    function onClick() {
        playerAttack();
    }

    document.addEventListener('keydown', onKey);
    enemyEl.addEventListener('click', onClick);
}

// Game state with increased values for faster gameplay
const gameState = {
    players: [
        { id: 1, name: "Jogador 1", balance: 1500, position: 0, color: "red", properties: [], inJail: false },
        { id: 2, name: "Jogador 2", balance: 1500, position: 0, color: "blue", properties: [], inJail: false },
        { id: 3, name: "Jogador 3", balance: 1500, position: 0, color: "green", properties: [], inJail: false },
        { id: 4, name: "Jogador 4", balance: 1500, position: 0, color: "yellow", properties: [], inJail: false }
    ],
    currentPlayerIndex: 0,
    properties: [
        { id: 0, name: "Início", price: 0, group: "corner", type: "start" },
        { id: 1, name: "Chácara Santa Aurora", price: 200, group: 1, rent: [40, 200, 600, 1800, 3200, 5000], owner: null, houses: 0 },
        { id: 2, name: "Horto AgroVida", price: 200, group: 1, rent: [40, 200, 600, 1800, 3200, 5000], owner: null, houses: 0 },
        { id: 3, name: "Sorte ou Azar", price: 0, group: "chance", type: "chance" },
        { id: 4, name: "Residência Industrial Vila BRF", price: 240, group: 2, rent: [60, 300, 900, 2000, 3600, 6000], owner: null, houses: 0 },
        { id: 5, name: "Posto de Distribuição Agrícola", price: 400, group: "railroad", rent: [100, 200, 400, 800], owner: null },
        { id: 6, name: "Centro de Pesquisa em Alimentos BRFTech", price: 280, group: 2, rent: [80, 400, 1200, 2800, 4400, 7000], owner: null, houses: 0 },
        { id: 7, name: "Instituto de Inovação Agroindustrial", price: 320, group: 2, rent: [100, 500, 1500, 3200, 5000, 8000], owner: null, houses: 0 },
        { id: 8, name: "Granja da Dona Lúcia", price: 360, group: 3, rent: [120, 600, 1800, 4000, 6000, 9000], owner: null, houses: 0 },
        { id: 9, name: "Auditoria Operacional", price: 0, group: "corner", type: "jail" },
        { id: 10, name: "Horta Orgânica VerdeVida", price: 360, group: 3, rent: [120, 600, 1800, 4000, 6000, 9000], owner: null, houses: 0 },
        { id: 11, name: "Sindicato dos Trabalhadores Rurais", price: 300, group: "utility", rent: [20, 100], owner: null },
        { id: 12, name: "Sítio Vale do Frango", price: 400, group: 3, rent: [160, 800, 2000, 4400, 7000, 10000], owner: null, houses: 0 },
        { id: 13, name: "Laticínios Boa Aurora", price: 440, group: 4, rent: [180, 900, 2400, 5600, 8000, 11000], owner: null, houses: 0 },
        { id: 14, name: "Posto de Distribuição Agrícola", price: 400, group: "railroad", rent: [100, 200, 400, 800], owner: null },
        { id: 15, name: "Chácara Leiteira do Zé", price: 480, group: 4, rent: [200, 1000, 3000, 7000, 10000, 12000], owner: null, houses: 0 },
        { id: 16, name: "Moinho São Jorge", price: 520, group: 4, rent: [220, 1100, 3200, 8000, 11000, 14000], owner: null, houses: 0 },
        { id: 17, name: "Parada Livre", price: 0, group: "corner", type: "free" },
        { id: 18, name: "Parque Frigorífico Nacional", price: 560, group: 5, rent: [240, 1200, 3600, 9000, 12000, 15000], owner: null, houses: 0 },
        { id: 19, name: "Sorte ou Azar", price: 0, group: "chance", type: "chance" },
        { id: 20, name: "Centro de Congelamento BRF Master", price: 600, group: 5, rent: [260, 1300, 4000, 10000, 13000, 16000], owner: null, houses: 0 },
        { id: 21, name: "CooperFrango Ltda", price: 640, group: 5, rent: [280, 1500, 4400, 11000, 14000, 18000], owner: null, houses: 0 },
        { id: 22, name: "Posto de Distribuição Agrícola", price: 400, group: "railroad", rent: [100, 200, 400, 800], owner: null },
        { id: 23, name: "Sítio Por do Sol", price: 700, group: 6, rent: [350, 1750, 5000, 11000, 14000, 19000], owner: null, houses: 0 },
        { id: 24, name: "Feira Nacional do Agronegócio", price: 0, group: "tax", type: "tax", amount: 200 },
        { id: 25, name: "Granja Esperança", price: 800, group: 6, rent: [400, 2000, 6000, 14000, 18000, 24000], owner: null, houses: 0 },
        { id: 26, name: "Terminal Logístico Integrado", price: 700, group: 7, rent: [350, 1750, 5000, 11000, 14000, 19000], owner: null, houses: 0 },
        { id: 27, name: "Unidade de Processamento Aurora Norte", price: 640, group: 7, rent: [280, 1500, 4400, 11000, 14000, 18000], owner: null, houses: 0 },
        { id: 28, name: "Posto de Distribuição Agrícola", price: 400, group: "railroad", rent: [100, 200, 400, 800], owner: null },
        { id: 29, name: "Centro de Tecnologia Agro 5G", price: 600, group: 7, rent: [260, 1300, 4000, 10000, 13000, 16000], owner: null, houses: 0 },
        { id: 30, name: "Sindicato dos Trabalhadores Rurais", price: 300, group: "utility", rent: [20, 100], owner: null },
        { id: 31, name: "Cooperativa de Construção Rural", price: 560, group: 8, rent: [240, 1200, 3600, 9000, 12000, 15000], owner: null, houses: 0 },
        { id: 32, name: "Sorte ou Azar", price: 0, group: "chance", type: "chance" }
    ],
    diceRolled: false,
    gameStarted: false,
    startTime: null,
    gameDuration: 3 * 60 * 1000 // 3 minutes in milliseconds
    
};

// DOM elements
const currentPlayerEl = document.getElementById('current-player');
const currentBalanceEl = document.getElementById('current-balance');
const rollDiceBtn = document.getElementById('roll-dice');
const endTurnBtn = document.getElementById('end-turn');
const gameLogEl = document.getElementById('game-log');
const actionModal = document.getElementById('action-modal');
const diceModal = document.getElementById('dice-modal');
const winnerModal = document.getElementById('winner-modal');
const winnerNameEl = document.getElementById('winner-name');
const playAgainBtn = document.getElementById('play-again');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalActions = document.getElementById('modal-actions');
const closeModalBtn = document.getElementById('close-modal');
const diceResult = document.getElementById('dice-result');
const diceTotal = document.getElementById('dice-total');
const diceDisplay = document.getElementById('dice-display');
const diceTotalDisplay = document.getElementById('dice-total-display');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Initialize game
function initGame() {
    updatePlayerInfo();
    positionTokens();
    updateHealthBars();
    updatePlayerProperties();
    
    // Event listeners
    rollDiceBtn.addEventListener('click', rollDice);
    endTurnBtn.addEventListener('click', endTurn);
    closeModalBtn.addEventListener('click', closeModal);
    playAgainBtn.addEventListener('click', resetGame);
    
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active tab content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    addToGameLog("Jogo iniciado! O primeiro jogador é " + gameState.players[0].name);
    
    // Start game timer
    gameState.startTime = Date.now();
    gameState.gameStarted = true;
    
    // Check for game end periodically
    setInterval(checkGameTime, 1000);
}

// Check if game time has elapsed
function checkGameTime() {
    if (!gameState.gameStarted) return;
    
    const elapsed = Date.now() - gameState.startTime;
    if (elapsed >= gameState.gameDuration) {
        endGameByTime();
    }
}

// End game when time is up
function endGameByTime() {
    gameState.gameStarted = false;
    
    // Find player with highest balance
    let winner = gameState.players[0];
    gameState.players.forEach(player => {
        if (player.balance > winner.balance) {
            winner = player;
        }
    });
    
    showWinner(winner);
}

// Show winner with animation
function showWinner(winner) {
    winnerNameEl.textContent = winner.name;
    winnerNameEl.style.color = winner.color;
    winnerModal.style.display = "flex";
    
    // Create confetti effect
    createConfetti();
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        const animationDuration = Math.random() * 3 + 2;
        
        confetti.style.transition = `top ${animationDuration}s linear, left ${animationDuration}s ease-in-out, opacity ${animationDuration}s linear`;
        confetti.style.opacity = '1';
        
        setTimeout(() => {
            confetti.style.top = Math.random() * 100 + 'vh';
            confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() - 0.5) * 200) + 'px';
            confetti.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Reset game
function resetGame() {
    winnerModal.style.display = "none";
    
    // Reset game state
    gameState.players = [
        { id: 1, name: "Jogador 1", balance: 1500, position: 0, color: "red", properties: [], inJail: false },
        { id: 2, name: "Jogador 2", balance: 1500, position: 0, color: "blue", properties: [], inJail: false },
        { id: 3, name: "Jogador 3", balance: 1500, position: 0, color: "green", properties: [], inJail: false },
        { id: 4, name: "Jogador 4", balance: 1500, position: 0, color: "yellow", properties: [], inJail: false }
    ];
    
    gameState.currentPlayerIndex = 0;
    gameState.diceRolled = false;
    gameState.gameStarted = true;
    gameState.startTime = Date.now();
    
    // Reset properties
    gameState.properties.forEach(prop => {
        prop.owner = null;
        prop.houses = 0;
    });
    
    // Clear game log
    gameLogEl.innerHTML = '';
    
    // Update UI
    updatePlayerInfo();
    positionTokens();
    updateHealthBars();
    updatePlayerProperties();
    
    addToGameLog("Novo jogo iniciado! O primeiro jogador é " + gameState.players[0].name);
}

// Update player info display
function updatePlayerInfo() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    currentPlayerEl.textContent = currentPlayer.name;
    currentPlayerEl.className = `font-bold text-${currentPlayer.color}-600 current-player-pulse`;
    currentBalanceEl.textContent = currentPlayer.balance;
    
    // Update all player balances
    gameState.players.forEach(player => {
        document.getElementById(`balance-${player.id}`).textContent = player.balance;
    });
    
    updateHealthBars();
    updatePlayerProperties();
}

// Update player health bars based on balance
function updateHealthBars() {
    gameState.players.forEach(player => {
        const healthBar = document.getElementById(`health-${player.id}`);
        const percentage = Math.min(100, (player.balance / 3000) * 100); // Adjusted for higher values
        healthBar.style.width = `${percentage}%`;
    });
}

// Update player properties display
function updatePlayerProperties() {
    gameState.players.forEach(player => {
        const propertiesContainer = document.getElementById(`properties-${player.id}`);
        const detailedContainer = document.getElementById(`detailed-properties-${player.id}`);
        
        propertiesContainer.innerHTML = '';
        detailedContainer.innerHTML = '';
        
        
        
        // Count properties by group
        const groupCounts = {};
        player.properties.forEach(propId => {
            const prop = gameState.properties[propId];
            if (!groupCounts[prop.group]) {
                groupCounts[prop.group] = 0;
            }
            groupCounts[prop.group]++;
        });
        
        // Show summary in player card
        Object.entries(groupCounts).forEach(([group, count]) => {
            const groupItem = document.createElement('div');
            groupItem.className = 'property-item';
            
            const groupIndicator = document.createElement('span');
            groupIndicator.className = 'property-group-indicator';
            groupIndicator.style.backgroundColor = getGroupColor(group);
            
            const groupName = document.createElement('span');
            groupName.textContent = getGroupName(group) + ': ';
            
            const groupCount = document.createElement('span');
            groupCount.textContent = count;
            groupCount.className = 'font-bold';
            
            groupItem.appendChild(groupIndicator);
            groupItem.appendChild(groupName);
            groupItem.appendChild(groupCount);
            
            propertiesContainer.appendChild(groupItem);
        });
        
        // Show detailed list in properties tab
        player.properties.forEach(propId => {
            const prop = gameState.properties[propId];
            const propItem = document.createElement('div');
            
            const propName = document.createElement('span');
            propName.textContent = prop.name;
            
            const propDetails = document.createElement('span');
            propDetails.className = 'text-gray-600';
            
            if (prop.group === 'railroad' || prop.group === 'utility') {
                propDetails.textContent = `$${prop.price}`;
            } else {
                propDetails.textContent = `$${prop.price} - ${prop.houses > 0 ? (prop.houses === 5 ? 'Hotel' : `${prop.houses} casas`) : 'Sem casas'}`;
            }
            
            propItem.appendChild(propName);
            propItem.appendChild(propDetails);
            
            detailedContainer.appendChild(propItem);
        });
    });
}

// Get group color
function getGroupColor(group) {
    const colors = {
        '1': '#a7d8ff',
        '2': '#ffb6c1',
        '3': '#98fb98',
        '4': '#ffd700',
        '5': '#ff6347',
        '6': '#9370db',
        '7': '#ffa500',
        '8': '#ff0000',
        'railroad': '#e6e6fa',
        'utility': '#e6f7ff'
    };
    return colors[group] || '#cccccc';
}

// Get group name
function getGroupName(group) {
    const names = {
        '1': 'Azul Claro',
        '2': 'Rosa',
        '3': 'Verde',
        '4': 'Amarelo',
        '5': 'Vermelho',
        '6': 'Roxo',
        '7': 'Laranja',
        '8': 'Vermelho Escuro',
        'railroad': 'Estações',
        'utility': 'Sindicato dos Trabalhadores Rurais'
    };
    return names[group] || 'Outros';
}

// Position player tokens on the board
function positionTokens() {
    gameState.players.forEach(player => {
        const token = document.getElementById(`token-${player.id}`);
        const position = player.position;
        
        // Calculate position on board (simplified for this example)
        // In a real implementation, you'd need more complex logic to position tokens
        // based on the actual board layout
        let row, col;
        
        if (position <= 8) {
            // Top row
            row = 1;
            col = position + 2;
        } else if (position <= 16) {
            // Right column
            row = position - 7;
            col = 11;
        } else if (position <= 24) {
            // Bottom row
            row = 11;
            col = 26 - position;
        } else {
            // Left column
            row = 33 - position;
            col = 1;
        }
        
        token.style.gridRow = row;
        token.style.gridColumn = col;
    });
}

// Roll dice
function rollDice() {
    if (gameState.diceRolled) {
        showModal("Ação inválida", "Você já lançou os dados neste turno.");
        return;
    }
    
    // Disable roll button during animation
    rollDiceBtn.disabled = true;
    
    // Show rolling animation
    diceModal.style.display = "block";
    diceResult.innerHTML = '<i class="fas fa-dice fa-spin text-5xl dice-rolling"></i><i class="fas fa-dice fa-spin text-5xl dice-rolling"></i>';
    diceTotal.textContent = "";
    
    // Simulate dice roll with delay
    setTimeout(() => {
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        const total = die1 + die2;
        
        // Stop spinning animation
        diceResult.innerHTML = `<i class="fas fa-dice-${die1} text-5xl"></i> <i class="fas fa-dice-${die2} text-5xl"></i>`;
        diceTotal.textContent = `Total: ${total}`;
        
        // Update center dice display
        diceDisplay.innerHTML = `<i class="fas fa-dice-${die1}"></i><i class="fas fa-dice-${die2}"></i>`;
        diceTotalDisplay.textContent = total;
        
        // Close dice modal after a delay
        setTimeout(() => {
            diceModal.style.display = "none";
            movePlayer(total);
        }, 1500);
        
        gameState.diceRolled = true;
        endTurnBtn.disabled = false;
        rollDiceBtn.disabled = false;
        
        addToGameLog(`${gameState.players[gameState.currentPlayerIndex].name} lançou os dados e obteve ${total}.`);
    }, 1000);
}

// Move player
function movePlayer(spaces) {
    const player = gameState.players[gameState.currentPlayerIndex];
    player.position = (player.position + spaces) % 32;
    
    // Check if passed start
    if (player.position < spaces) {
        player.balance += 400; // Increased from 200 to 400
        addToGameLog(`${player.name} passou pelo Início e recebeu $400.`);
        updatePlayerInfo();
    }
    
    positionTokens();
    checkLandingPosition();
}

// Check what happens when player lands on a position
function checkLandingPosition() {
    const player = gameState.players[gameState.currentPlayerIndex];
    const property = gameState.properties[player.position];
    
    switch (property.type) {
        case "start":
            // Nothing happens
            break;
        case "jail":
            // Just visiting
            showModal("Auditoria Operacional", "Você está apenas visitando a Auditoria Operacional.");
            break;
        case "free":
            // Free parking
            showModal("Parada Livre", "Aproveite para descansar!");
            break;
        case "tax":
            // Pay tax
            payTax(property.amount);
            break;
        case "chance":
            // Chance card
            drawChanceCard();
            break;
        default:
            // Property
            if (property.owner === null) {
                // Unowned property - offer to buy
                offerPurchase(property);
            } else if (property.owner !== player.id) {
                // Owned by another player - pay rent
                payRent(property);
            } else {
                // Owned by current player
                showModal("Propriedade", `Você já é dono de ${property.name}.`);
            }
    }
}

// Offer property purchase
function offerPurchase(property) {
    const player = gameState.players[gameState.currentPlayerIndex];
    
    if (player.balance >= property.price) {
        modalTitle.textContent = "Comprar Propriedade";
        modalMessage.textContent = `Deseja comprar ${property.name} por $${property.price}?`;
        
        modalActions.innerHTML = `
            <button style="font-size: 20px;" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg" id="buy-property">
                <i class="fas fa-check mr-2"> C o m p r a r</i>
            </button>
            <button style="font-size: 20px;" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" id="decline-property">
                <i class="fas fa-times mr-2"> R e c u s ar</i>
            </button>
        `;
        
        document.getElementById('buy-property').addEventListener('click', () => {
            buyProperty(property);
            closeModal();
        });
        
        document.getElementById('decline-property').addEventListener('click', () => {
            addToGameLog(`${player.name} recusou comprar ${property.name}.`);
            closeModal();
        });
        
        actionModal.style.display = "block";
    } else {
        showModal("Sem dinheiro", `Você não tem dinheiro suficiente para comprar ${property.name}.`);
    }
}

// Buy property
function buyProperty(property) {
    const player = gameState.players[gameState.currentPlayerIndex];
    
    player.balance -= property.price;
    property.owner = player.id;
    player.properties.push(property.id);
    
    updatePlayerInfo();
    addToGameLog(`${player.name} comprou ${property.name} por $${property.price}.`);
    
    // Update property display (in a real game, you'd show ownership visually)
}

// Pay rent
function payRent(property) {
    const player = gameState.players[gameState.currentPlayerIndex];
    const owner = gameState.players.find(p => p.id === property.owner);
    
    let rentAmount;
    
    if (property.group === "railroad") {
        // Rent for railroads depends on number owned
        const ownedRailroads = owner.properties.filter(propId => 
            gameState.properties[propId].group === "railroad").length;
        rentAmount = property.rent[ownedRailroads - 1];
    } else if (property.group === "utility") {
        // Utility rent depends on dice roll (simplified here)
        const diceRoll = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
        const ownedUtilities = owner.properties.filter(propId => 
            gameState.properties[propId].group === "utility").length;
        rentAmount = diceRoll * property.rent[ownedUtilities - 1];
    } else {
        // Regular property rent
        rentAmount = property.houses === 0 ? property.rent[0] : 
                        property.houses === 5 ? property.rent[5] : // Hotel
                        property.rent[property.houses];
    }
    
    player.balance -= rentAmount;
    owner.balance += rentAmount;
    
    updatePlayerInfo();
    addToGameLog(`${player.name} pagou $${rentAmount} de aluguel para ${owner.name} por ${property.name}.`);
    
    showModal("Pagamento de Aluguel", `Você pagou $${rentAmount} de aluguel para ${owner.name}.`);
    
    // Check if player is bankrupt
    if (player.balance < 0) {
        handleBankruptcy(player, owner);
    }
}

// Pay tax
function payTax(amount) {
    const player = gameState.players[gameState.currentPlayerIndex];
    
    player.balance -= amount;
    updatePlayerInfo();
    addToGameLog(`${player.name} pagou $${amount} de Feira Nacional do Agronegócio.`);
    
    showModal("Feira Nacional do Agronegócio", `Você pagou $${amount} de Feira Nacional do Agronegócio.`);
    
    // Check if player is bankrupt
    if (player.balance < 0) {
        handleBankruptcy(player, null);
    }
}

// Draw chance card
function drawChanceCard() {
    const cards = [
        { text: "Avance até o Início e receba $400.", action: () => moveToStart() },
        { text: "Você ganhou um concurso de belleza! Receba $200.", action: () => receiveMoney(200) },
        { text: "Pague $100 para cada jogador.", action: () => payEachPlayer(100) },
        { text: "Você foi eleito presidente do conselho. Pague $100 para cada jogador.", action: () => payEachPlayer(100) },
        { text: "Sua construção e empréstimo maturam. Receba $300.", action: () => receiveMoney(300) },
        { text: "Vá para a Auditoria Operacional. Não passe pelo Início.", action: () => goToJail() },
        { text: "Receba $50 de cada jogador.", action: () => receiveFromEachPlayer(50) },
        { text: "Pague $200 de Feira Nacional do Agronegócios.", action: () => payTax(200) },
        { text: "Avance até a Moinho São Jorge.", action: () => moveToProperty(16) },
        { text: "Avance até a Horto AgroVida.", action: () => moveToProperty(2) }
    ];
    
    const card = cards[Math.floor(Math.random() * cards.length)];
    showModal("Sorte ou Azar", card.text);
    addToGameLog(`${gameState.players[gameState.currentPlayerIndex].name} tirou a carta: ${card.text}`);
    
    // Execute card action
    card.action();
}

// Move to start
function moveToStart() {
    const player = gameState.players[gameState.currentPlayerIndex];
    player.position = 0;
    player.balance += 400;
    positionTokens();
    updatePlayerInfo();
    addToGameLog(`${player.name} avançou para o Início e recebeu $400.`);
}

// Receive money
function receiveMoney(amount) {
    const player = gameState.players[gameState.currentPlayerIndex];
    player.balance += amount;
    updatePlayerInfo();
    addToGameLog(`${player.name} recebeu $${amount}.`);
}

// Pay each player
function payEachPlayer(amount) {
    const player = gameState.players[gameState.currentPlayerIndex];
    const otherPlayers = gameState.players.filter(p => p.id !== player.id);
    
    otherPlayers.forEach(other => {
        player.balance -= amount;
        other.balance += amount;
    });
    
    updatePlayerInfo();
    addToGameLog(`${player.name} pagou $${amount} para cada jogador.`);
    
    if (player.balance < 0) {
        handleBankruptcy(player, null);
    }
}

// Receive from each player
function receiveFromEachPlayer(amount) {
    const player = gameState.players[gameState.currentPlayerIndex];
    const otherPlayers = gameState.players.filter(p => p.id !== player.id);
    
    otherPlayers.forEach(other => {
        if (other.balance >= amount) {
            other.balance -= amount;
            player.balance += amount;
        } else {
            // If other player can't pay, they go bankrupt
            handleBankruptcy(other, player);
        }
    });
    
    updatePlayerInfo();
    addToGameLog(`${player.name} recebeu $${amount} de cada jogador.`);
}

// Move to specific property
function moveToProperty(propertyId) {
    const player = gameState.players[gameState.currentPlayerIndex];
    player.position = propertyId;
    positionTokens();
    checkLandingPosition();
}

// Go to jail
function goToJail() {
    const player = gameState.players[gameState.currentPlayerIndex];
    player.position = 9; // Jail position
    player.inJail = true;
    positionTokens();
    addToGameLog(`${player.name} foi para a Auditoria Operacional!`);
}

// Handle bankruptcy
function handleBankruptcy(player, creditor) {
    showModal("Falência", `${player.name} faliu!`);
    addToGameLog(`${player.name} faliu e está fora do jogo!`);
    
    // Transfer properties to creditor (if any)
    if (creditor) {
        player.properties.forEach(propId => {
            const prop = gameState.properties[propId];
            prop.owner = creditor.id;
            creditor.properties.push(propId);
        });
        
        addToGameLog(`Todas as propriedades de ${player.name} foram transferidas para ${creditor.name}.`);
    }
    
    // Remove player from game
    gameState.players = gameState.players.filter(p => p.id !== player.id);
    
    // Check if game is over
    if (gameState.players.length === 1) {
        endGame(gameState.players[0]);
        return;
    }
    
    // Adjust current player index if needed
    if (gameState.currentPlayerIndex >= gameState.players.length) {
        gameState.currentPlayerIndex = 0;
    }
    
    endTurn();
}

// End game
function endGame(winner) {
    gameState.gameStarted = false;
    showWinner(winner);
    addToGameLog(`FIM DE JOGO! ${winner.name} é o vencedor!`);
    
    rollDiceBtn.disabled = true;
    endTurnBtn.disabled = true;
}

// End turn
function endTurn() {
    gameState.diceRolled = false;
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    endTurnBtn.disabled = true;
    
    updatePlayerInfo();
    addToGameLog(`Turno de ${gameState.players[gameState.currentPlayerIndex].name}.`);
}

// Show modal
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalActions.innerHTML = "";
    
    const okBtn = document.createElement("button");
    okBtn.className = "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg";
    okBtn.innerHTML = '<i class="fas fa-check mr-2"></i>OK';
    okBtn.addEventListener('click', closeModal);
    
    modalActions.appendChild(okBtn);
    actionModal.style.display = "block";
}

// Close modal
function closeModal() {
    actionModal.style.display = "none";
    diceModal.style.display = "none";
}

// Add message to game log
function addToGameLog(message) {
    const logEntry = document.createElement("div");
    logEntry.className = "mb-1";
    
    
    
}

// Start the game
initGame();
import icons from "./iconsStyle";

const generateAiPick = function () {
    const rndNb = Math.floor(Math.random() * 5 + 1);
    let aiPick = '';

    switch (rndNb) {
        case 1:
            return (aiPick = 'lizard');
        case 2:
            return (aiPick = 'rock');
        case 3:
            return (aiPick = 'paper');
        case 4:
            return (aiPick = 'scissors');
        case 5:
            return (aiPick = 'spock');
    }
};

const determineWinner = function (gameState) {
    const { playerPick, AiPick } = gameState[0];
    let result = 1;

    if (playerPick === '' || AiPick === '') {
        return (result = 1);

    } else if (playerPick === AiPick) {
        return (result = 1);
        
    } else {
        const playerBeats = icons.find((power) => power.name === playerPick).beats;

        const isInBeats = playerBeats.includes(AiPick);

        result = isInBeats ? 0 : 2;
        return result;
    }
};

export {generateAiPick, determineWinner}
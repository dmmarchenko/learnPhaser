import "phaser";
import {GameScene} from "./gameScene";
import GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
    title: "Starfall",
    width: 800,
    height: 600,
    parent: "game",
    scene: [GameScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#287494"
};

export class MyGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new MyGame(config);
};
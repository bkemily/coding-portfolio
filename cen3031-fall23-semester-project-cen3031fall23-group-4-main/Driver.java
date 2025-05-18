/**
 * File Name: Driver.java
 * Purpose:
 * 	The purpose of the Driver class file is to handle
 * the running of game sessions. The distinction between
 * the Driver and GameSession classes is because a single
 * run of the program will be able to run multiple sessions
 * of the game. The class allows for the player to play
 * multiple sessions of the game given they chose to
 * restart/replay.
 */
public class Driver {
	public static void main(String[] args) {
		GameSession newGame;
		boolean isRestarting = true;

		do {
			newGame = new GameSession();
			newGame.startGame();
			isRestarting = newGame.checkRestartStatus();
			newGame.dispose();
		} while (isRestarting);
	}
}

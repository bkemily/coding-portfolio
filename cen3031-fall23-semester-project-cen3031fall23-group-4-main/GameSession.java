import javax.swing.JFrame;

/**
 * File Name: GameSession.java
 * Purpose:
 * The purpose of the GameSession class file is to
 * handle the game session for the player. Currently,
 * this includes creating a player object and an
 * encounter object. The file allows for the cycling
 * through multiple encounters alongside the transition
 * and death states between levels as needed.
 */
public class GameSession {
	private Player newPlayer;
	private Encounter currentEncounter;
	private Enemy currentEnemy;

	private JFrame nextScreen;

	private boolean isRestarting;

	public GameSession() {
		newPlayer = new Player();
	}

	public void startGame() {
		// allows for spot on intro screen
		introScreenHandler();
		while (newPlayer.getEncounterLevel() < 5) {
			createEnemy(newPlayer.getEncounterLevel());
			currentEncounter = new Encounter(newPlayer, currentEnemy);
			currentEncounter.runInitiative();
			if (newPlayer.getCurrentHealth() > 0 && newPlayer.getEncounterLevel() < 4) {
				transitionScreenHandler();
				newPlayer.addPotion(currentEnemy.getValuePotions());
				newPlayer.gainXP(currentEnemy.getValueXP());
				while (((TransitionScreen) nextScreen).getPlayerInput() == -1) {
					// Waits until player presses continue
				}
				nextScreen.dispose();
			} else {
				if (newPlayer.getCurrentHealth() <= 0) {
					winLoseScreenHandler(false);
				} else {
					winLoseScreenHandler(true);
				}
				while (((WinLoseScreen) nextScreen).getPlayerInput() == -1) {
					// waits until player presses the restart button
				}
				isRestarting = ((WinLoseScreen) nextScreen).getIsRestarting();
				break;
			}
			newPlayer.encounterLevelUp();
			newPlayer.levelUp(); // FIXME 3: Will work differently based on XP, for now, always level up
		}
	}

	public void dispose() {
		nextScreen.dispose();
	}

	private void introScreenHandler() {
		nextScreen = new IntroScreen();
		nextScreen.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		nextScreen.setTitle("Transition Frame");
		nextScreen.setVisible(true);
		try {
			while (nextScreen.isVisible()) {
				Thread.sleep(1000);
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	}

	private void transitionScreenHandler() {
		nextScreen = new TransitionScreen(true, currentEnemy.getValueXP(), newPlayer.getEncounterLevel(),
				currentEnemy.getValuePotions());
		currentEncounter.disposeScreen();

		nextScreen.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		nextScreen.setTitle("Transition Frame");
		nextScreen.setVisible(true);
	}

	private void winLoseScreenHandler(boolean playerWon) {
		nextScreen = new WinLoseScreen(playerWon, newPlayer.getTotalXP(), newPlayer.getEncounterLevel(),
				newPlayer.getNumOfPotions());
		currentEncounter.disposeScreen();

		nextScreen.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		nextScreen.setTitle("Game Over Frame");
		nextScreen.setVisible(true);
	}

	// rewrite to multiply the player level / game level to determine the roll
	// value?????

	private void createEnemy(int currentLevel) {
		int[] rolls = { newPlayer.getPlayerLevel(), 2 + 2 * newPlayer.getEncounterLevel() };
		// determine roll value here before and pass in???
		// create chances variable before so you can pass in
		if (newPlayer.getEncounterLevel() == 1) {
			int[] chances = { 50, 50, 50, 100 }; // Either Attack or Defend ---Tweak this to 25/50/75/100 to have even
													// chances, or 0/0/100/100 if you want it to only potion, for
													// example
			// int[] rolls = {1, 4};
			currentEnemy = new Enemy(chances, rolls, "Land Crab", "game-sprites/crab-sprite-1.png", 0, 0, 15, 1, 15,
					currentLevel);
		} else if (newPlayer.getEncounterLevel() == 2) {
			int[] chances = { 34, 67, 67, 100 }; // Attack, Potion, Defend
			// int[] rolls = {1, 6};
			currentEnemy = new Enemy(chances, rolls, "Argodillo", "game-sprites/armadillo-sprite-1.png", 1, 0, 20, 2,
					25, currentLevel);
		} else if (newPlayer.getEncounterLevel() == 3) {
			int[] chances = {25, 50, 75, 100}; //Attack, Potion, Magic, Defend
			//int[] rolls = {2, 8};
			currentEnemy = new Enemy(chances, rolls, "Bear", "game-sprites/bear-sprite-1.png", 2, 1, 30, 3, 40, currentLevel);
		} else if (newPlayer.getEncounterLevel() == 4) {
			int[] chances = {20, 50, 90, 100}; // Attack, Magic, Potion, Defend, with a low chance to defend 
			//int[] rolls = {3, 8};
			currentEnemy = new Enemy(chances, rolls, "Campus Croc", "game-sprites/croc-sprite-1.png", 3, 1, 50, 1, 50, currentLevel);
		}
		System.out.println("The enemy " + currentEnemy.getEntityName() + " has num dice equal "
				+ currentEnemy.getDamageRoll()[0] + " with value of " + currentEnemy.getDamageRoll()[1]);
	}

	public boolean checkRestartStatus() {
		return isRestarting;
	}
}

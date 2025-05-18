import java.util.Random;
import javax.swing.JFrame;

/**
 * File Name: Encounter.java
 * Purpose:
 * 	The purpose of the Encounter class file is to handle
 * the running of a single game encounter (or level). The
 * file works closely with the EncounterScreen class to
 * handle the "back-end" parts of the encounter including
 * dealing damage, handling initative, and checking for death.
 * The file handles both the player and enemy turns alongside
 * the actions they are able to do.
 */

public class Encounter {
	private Enemy newEnemy;
	private Player newPlayer;
	private JFrame encounterFrame;

	private int[] enemyActionPercentages;

	public Encounter(Player playerInfo, Enemy enemyInfo) {
		newPlayer = playerInfo;
		newEnemy = enemyInfo;
		encounterFrame = new EncounterScreen(newPlayer, newEnemy);
		encounterFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		encounterFrame.setTitle("Encounter Frame");
		encounterFrame.setVisible(true);
	}

	public void runInitiative() {
		int turnOrder = 1;
		boolean bothAlive = true;
		String currentOutput; 

		if(newPlayer.getEncounterLevel() == 1) {
			currentOutput = "Welcome to Argie's Adventure!";
			((EncounterScreen) encounterFrame).editStoryPanel(currentOutput);
		}

		currentOutput = "Now entering level " + newPlayer.getEncounterLevel();
		((EncounterScreen) encounterFrame).editStoryPanel(currentOutput);

		while (bothAlive) {
			if (turnOrder % 2 == 1) {
				currentOutput = "Argie's Turn... \nClick a button.";
				((EncounterScreen) encounterFrame).editStoryPanel(currentOutput);
				playerAction(((EncounterScreen) encounterFrame).getPlayerInput());
			} else {
				enemyAction();
			}
			((EncounterScreen) encounterFrame).editStatsPanel();

			turnOrder++;
			bothAlive = areBothAlive();
		}
	}

	private boolean areBothAlive() {
		if (newEnemy.getCurrentHealth() <= 0 || newPlayer.getCurrentHealth() <= 0) {
			return false;
		}
		return true;
	}

	public void disposeScreen() {
		encounterFrame.dispose();
	}

	// Handles the logic of the player's action, based on the input collected from
	// the setup.getPlayerInput() function
	private void playerAction(int action) {
		switch (action) {
			case 0:
				attackAction(newPlayer, newEnemy);
				break;
			case 1:
				potionAction(newPlayer);
				break;
			case 2:
				magicAction(newPlayer, newEnemy);
				break;
			case 3:
				defendAction(newPlayer);
				break;
			default:
				System.out.println("Something went wrong...");
				break;
		}
	}

	private void enemyAction() {
		String action = newEnemy.getEntityName() + "'s Turn... ";
		((EncounterScreen) encounterFrame).editStoryPanel(action);

		enemyActionPercentages = newEnemy.getActionChance();

		Random rand = new Random();
		int currNum = rand.nextInt(100);
		//enemy action check for potions and mana before entering loop and reassign through method
		checkEnemyPotionAndMana();

		if (currNum < enemyActionPercentages[0]) {
			attackAction(newEnemy, newPlayer);
		} else if (currNum < enemyActionPercentages[1]) {
			potionAction(newEnemy);
		} else if (currNum < enemyActionPercentages[2]) {
			magicAction(newEnemy, newPlayer);
		} else if (currNum < enemyActionPercentages[3]) {
			defendAction(newEnemy);
		}
	}

	private void checkEnemyPotionAndMana() {
		if(newEnemy.getNumOfPotions() == 0) {
			enemyActionPercentages[0] = enemyActionPercentages[1];
		}
		if(newEnemy.getCurrentMana() == 0) {
			enemyActionPercentages[2] = enemyActionPercentages[1];
		}
	}

	private void attackAction(Entity actorEntity, Entity receivingEntity) {
		int[] damages = receivingEntity.loseHealth(actorEntity.rollDamage());
		int[] damageRoll = actorEntity.getDamageRoll();
		String actionDone;
		if(damages[0] == damages[1]){
			actionDone = actorEntity.getEntityName() + " attacked " + receivingEntity.getEntityName() + " for "
					+ damages[1] + " damage(" + damageRoll[0] + "d" + damageRoll[1] + ").";
		}else {
			actionDone = actorEntity.getEntityName() + " attacked " + receivingEntity.getEntityName() + " for "
					+ damages[0] + " damage(" + damageRoll[0] + "d" + damageRoll[1] + "), \nbut " 
					+ receivingEntity.getEntityName() + " had their defense raised, and only took " + damages[1] + " damage!";
		}
		
		((EncounterScreen) encounterFrame).editStoryPanel(actionDone);
	}

	private void potionAction(Entity actorEntity) {
		actorEntity.usePotion();
		String actionDone = actorEntity.getEntityName() + " used a potion to restore " + actorEntity.getHealAmount() + " health and full mana.";
		((EncounterScreen) encounterFrame).editStoryPanel(actionDone);
		((EncounterScreen) encounterFrame).updateButtons();
	}

	private void magicAction(Entity actorEntity, Entity receivingEntity) {
		actorEntity.useMana();
		int[] damages = receivingEntity.loseHealth((int)(actorEntity.rollDamage() * 1.5));
		int[] damageRoll = actorEntity.getDamageRoll();
		String actionDone;
		if(damages[0] == damages[1]){
			actionDone = actorEntity.getEntityName() + " attacked " + receivingEntity.getEntityName() + " for "
					+ damages[1] + " damage(" + damageRoll[0] + "d" + damageRoll[1] + ")*1.5.";
		}else {
			actionDone = actorEntity.getEntityName() + " attacked " + receivingEntity.getEntityName() + " for "
					+ damages[0] + " damage(" + damageRoll[0] + "d" + damageRoll[1] + ")*1.5, \nbut " 
					+ receivingEntity.getEntityName() + " had their defense raised, and only took " + damages[1] + " damage!";
		}
		
		//String actionDone = actorEntity.getEntityName() + " used magic on " + recievingEntity.getEntityName() + " for "
		//		+ finalDamage + " damage.";
		((EncounterScreen) encounterFrame).editStoryPanel(actionDone);
		((EncounterScreen) encounterFrame).updateButtons();
	}

	private void defendAction(Entity actorEntity) {
		actorEntity.setDefenseFactor(.5);
		String actionDone = actorEntity.getEntityName() + " Defended";
		((EncounterScreen) encounterFrame).editStoryPanel(actionDone);
	}
}
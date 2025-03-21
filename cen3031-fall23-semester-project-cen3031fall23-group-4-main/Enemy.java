/**
 * File Name: Enemy.java
 * Purpose:
 * 	The purpose of the Enemy class file is to handle
 * information about the enemy. This class is a subclass 
 * to the Entity class which handles overlapping stats 
 * and effects between the Player and Enemy class. 
 * The class handles the enemy XP value and potion
 * value of the Enemy.
 */
public class Enemy extends Entity {
	private int valueXP;
	private int valuePotions;
	private int[] actionChance;
	
	public Enemy(int[] newActionChance, int[] rolls, String entityName, String imagePath, int numOfPotions, int manaAmount, int healthValue, int potionsDropped, int xpAmount, int currentLevel) {
		super(rolls, entityName, imagePath, numOfPotions, manaAmount, healthValue, currentLevel);
		actionChance = newActionChance;
		setValuePotions(potionsDropped);
		setValueXP(xpAmount);
	}

	public int[] getActionChance() {
		return actionChance;
	}

	public int getValueXP() {
        return valueXP;
    }

	public int getValuePotions() {
        return valuePotions;
    }

	public void setValueXP(int valueXP) {
        this.valueXP = valueXP;
    }

	public void setValuePotions(int valuePotions) {
        this.valuePotions = valuePotions;
    }
	
}

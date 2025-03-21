/**
 * File Name: Player.java
 * Purpose:
 * 	The purpose of the Player class file is to handle
 * information about the player. This class is a 
 * subclass to the Entity class which handles overlapping 
 * stats and effects between the Player and Enemy class. 
 * The class handles the Player's XP, XP level up, and 
 * encounter level up.
 */
public class Player extends Entity{
	private int totalXP = 0;
	private int encounterLevel = 1;
	private int playerLevel = 1; //FIXME 3: Player level up depending on XP will occur next sprint

	public Player() {
		super();
		setMaxHealth(rand.nextInt(10) + 20);
		setCurrentHealth(getMaxHealth());
		setEntityName("Argie");
		setImagePath("game-sprites/player-sprite-1.png");
		
		int[] rolls = {1, 6};
		setDamageRoll(rolls);
	}

	public int getTotalXP() {
        return totalXP;
    }

	public int getEncounterLevel() {
        return encounterLevel;
    }

	public int getPlayerLevel() {
		return playerLevel;
	}

	//Possibly have the gainXP run to see if level up occurs too?
	public void gainXP(int gainXP) {
        this.totalXP += gainXP;
    }

	public void levelUp() { //FIXME 3: Player level up will be expanded later to be dependent on XP and such
		if (getTotalXP() - (20 * playerLevel) > 0) {
			this.playerLevel++;
			int[] rolls = getDamageRoll();
			rolls[0] = playerLevel;
			rolls[1] += 2;
			setDamageRoll(rolls);
			int healthIncrease = 3 + rand.nextInt(4) * playerLevel;
			setMaxHealth(getMaxHealth() + healthIncrease);
			setCurrentHealth(getCurrentHealth() + healthIncrease);
			setHealAmount(getHealAmount() * playerLevel);
			if (playerLevel == 3) {
				setMaxMana(2);
			}
		}
    }

	public void encounterLevelUp() {
		encounterLevel++;
		if(encounterLevel == 3) {
			setMaxMana(1);
			setCurrentMana(1);
		}
	}
}

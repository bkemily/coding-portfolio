import java.util.Random;

/**
 * File Name: Entity.java
 * Purpose:
 *  The purpose of the abstract Entity class file
 * is the handle the shared variables between the Enemy
 * and Player task. This includes, health, name, image,
 * mana, potions, defense factor, and heal amounts. The
 * class also includes all necessary getters and setters
 * for these values alongside damage, healing, and mana
 * related methods relating to action taken in the
 * Encounter class.
 */

public abstract class Entity {
    private int currentHealth, maxHealth;
    private String entityName;
    private String imagePath;
    private int currentMana, maxMana;
    private double defenseFactor;
    private int[] damageRoll;
    private int numOfDice;
    private int diceValue;
    private int numOfPotions;
    private int healAmount = 10;
    Random rand = new Random();

    public Entity() {
        setMaxMana(0);
        setCurrentMana(getCurrentMana());
        numOfPotions = 0;
        setDefenseFactor(1.0);
    }
    
    public Entity(int[] rolls, String entityName, String imagePath, int numOfPotions, int manaAmount, int healthValue, int currentLevel) {
        setDamageRoll(rolls);
        setEntityName(entityName);
        setImagePath(imagePath);
        setNumOfPotions(numOfPotions);
        setMaxMana(manaAmount);
        setCurrentMana(getMaxMana());
        int max = healthValue;
        int min = healthValue / 2;
        int trueHealth = (int) (Math.random() * (max - min) + min);
        setMaxHealth(trueHealth);
        setCurrentHealth(getMaxHealth());
        setDefenseFactor(1.0);
    }

    public int[] loseHealth(int damage) {
    	int[] damages = new int[2];
    	damages[0] = damage;
    	int finalDamage = (int) Math.round(damage * getDefenseFactor());
    	this.currentHealth -= finalDamage;
    	setDefenseFactor(1.0);
    	damages[1] = finalDamage;
    	
    	return damages;
	}
    
    public int rollDamage() {
        int damage = 0;
        for (int i = 0; i < numOfDice; i++) {
            damage += rand.nextInt(diceValue) + 1;
        }
    	return damage;
    }

    public void useMana() {
		if(hasMana() == true) {
			setCurrentMana(getCurrentMana() - 1);
		}
   }
	
    public boolean hasMana() {
		if(getCurrentMana() > 0) {
			return true;
		}else {
			return false;
		}
   }

    public void setHealAmount(int healAmount) {
        this.healAmount = healAmount;
    }

    public void addPotion(int addPotions) {
        numOfPotions += addPotions;
    }

    public void usePotion() {
        if(numOfPotions > 0) {
            if(getHealAmount() + getCurrentHealth() < getMaxHealth()) {
                setCurrentHealth(getHealAmount() + getCurrentHealth());
            }else {
                setCurrentHealth(getMaxHealth());
            }
            setCurrentMana(getMaxMana());
            numOfPotions--;
        }	
    }

    public int getCurrentHealth() {
        return currentHealth;
    }

    public int getMaxHealth() {
        return maxHealth;
    }

    public String getEntityName() {
        return entityName;
    }

    public String getImagePath() {
        return imagePath;
    }

    public int getCurrentMana() {
        return currentMana;
    }

    public int getMaxMana() {
        return maxMana;
    }

    public int getNumOfPotions() {
        return numOfPotions;
    }

    public double getDefenseFactor() {
    	return defenseFactor;
    }

    public int[] getDamageRoll() {
    	return damageRoll;
    }

    public int getHealAmount(){
        return healAmount;
    }

    public void setCurrentHealth(int currentHealth) {
        this.currentHealth = currentHealth;
    }

    public void setMaxHealth(int maxHealth) {
        this.maxHealth = maxHealth;
    }

    public void setEntityName(String entityName) {
        this.entityName = entityName;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public void setCurrentMana(int currentMana) {
        this.currentMana = currentMana;
    }

    public void setMaxMana(int maxMana) {
        this.maxMana = maxMana;
    }
    
    public void setDefenseFactor(double defense) {
    	defenseFactor = defense;
    }
    
    public void setDamageRoll(int[] rolls) {
    	damageRoll = rolls;
        numOfDice = rolls[0];
        diceValue = rolls[1];
    }

    public void setNumOfPotions(int numOfPotions) {
        this.numOfPotions = numOfPotions;
    }    
}
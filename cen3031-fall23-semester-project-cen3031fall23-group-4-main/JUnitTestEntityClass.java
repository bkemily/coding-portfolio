import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class JUnitEntityClassTest {
	
	private Player newPlayer;
	
	@BeforeEach
	void setUp() {
		newPlayer = new Player();
	}

	 @Test  
	    void testUseMana() {    	
	    	newPlayer.setCurrentHealth(25);
	    	newPlayer.setCurrentMana(5);
	    	
	    	int mana = newPlayer.getCurrentMana();
	    	int health = newPlayer.getCurrentHealth();
	    	
	    	assertTrue(newPlayer.hasMana()); //checks to see if player has sufficient mana
	    	
	    	int manaAttack = (int) (newPlayer.rollDamage() * 1.5);
	    	newPlayer.useMana();
	    	
	    	newPlayer.loseHealth(manaAttack);
	    	
	    	assertEquals(mana - 1, newPlayer.getCurrentMana()); //checks to see if mana was deducted
	    	assertEquals(health - manaAttack, newPlayer.getCurrentHealth()); //checks to see if mana does correct damage
	    }
	    
	    @Test
	    void testUsePotion() {  	
	    	newPlayer.setNumOfPotions(1);
	    	newPlayer.setCurrentHealth(10);
	    	newPlayer.setHealAmount(10);
	    	newPlayer.setMaxMana(1);
	    	newPlayer.setCurrentMana(0);
	    	
	    	int potions = newPlayer.getNumOfPotions();
	    	int healAmount = 10;
	    	int health = newPlayer.getCurrentHealth();
	    	int manaGain = newPlayer.getMaxMana();
	    	
	    	newPlayer.usePotion();
	    	
	    	assertEquals(potions - 1, newPlayer.getNumOfPotions());		//tests if potion is deducted
	    	assertEquals(health + healAmount, newPlayer.getCurrentHealth());	//tests if player properly healed
	    	assertEquals(manaGain, newPlayer.getCurrentMana()); //tests if mana is restored
	    }
	    
	    @Test
	    void testDefenseFactor() {
	    	int damage = 8;	
	    	
	    	newPlayer.setCurrentHealth(25);
	    	newPlayer.setDefenseFactor(.5);
	    	
	    	int health = newPlayer.getCurrentHealth();	
	    	double attack = damage * newPlayer.getDefenseFactor();
	    	
	    	newPlayer.loseHealth(damage);
	    	
	    	assertEquals(health - attack, newPlayer.getCurrentHealth());  		 	  
	    }
}

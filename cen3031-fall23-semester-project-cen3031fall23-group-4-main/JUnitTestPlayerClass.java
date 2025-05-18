import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class JUnitTestPlayerClass {

	private Player newPlayer;
	
	@BeforeEach
	void setUp() {	
		newPlayer = new Player();		
	}

    @Test
    void testPlayerDealDamage() {
    	int playerHealth = newPlayer.getCurrentHealth();

		int damage = newPlayer.rollDamage();
				
		newPlayer.loseHealth(damage);

		assertEquals(playerHealth - damage, newPlayer.getCurrentHealth());    }
    
    @Test
    void testPlayerXP() {	
    	int totalXP = newPlayer.getTotalXP();
    	int addXP = 10;
    	newPlayer.gainXP(addXP);
    	
    	assertEquals(totalXP + addXP, newPlayer.getTotalXP());
    }
    
    @Test 
    void testPlayerLevel() {
    	int level = 0;
    	int addLevel = 1;
    	newPlayer.levelUp();
    	
    	assertEquals(level + addLevel , newPlayer.getPlayerLevel());
    }
    
   @Test
    void testEncounterLevel() {
    	int encounterLevel = newPlayer.getEncounterLevel();
    	int encounterLevelUp = 1;
    	newPlayer.encounterLevelUp();
    	
    	assertEquals(encounterLevel + encounterLevelUp, newPlayer.getEncounterLevel());
    }
    
   

}
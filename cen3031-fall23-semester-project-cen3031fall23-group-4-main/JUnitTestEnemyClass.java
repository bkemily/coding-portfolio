import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class JUnitEnemyClass {
	
	private Enemy newEnemy;
	
	@BeforeEach
	void setUp() {	
		int [] rollDamage = {10, 15};
        int [] actionChance = {25, 40};
        int maxHealth = 25;

		newEnemy = new Enemy(actionChance,rollDamage,"Land Crab", "game-sprites/land-crab-sprite-1.png", 0, maxHealth, 0, 0, 0, 0);			
	}
	
	@Test
	void testEnemyDealDamage() {	
		int enemyHealth = newEnemy.getCurrentHealth();

		int damage = newEnemy.rollDamage();
				
		newEnemy.loseHealth(damage);

		assertEquals(enemyHealth - damage, newEnemy.getCurrentHealth());
	}
	
}

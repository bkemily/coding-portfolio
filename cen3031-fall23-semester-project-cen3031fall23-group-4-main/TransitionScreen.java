import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontFormatException;
import java.awt.GraphicsEnvironment;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.GridLayout;
import java.awt.Dimension;


import java.io.File;
import java.io.IOException;


import javax.swing.plaf.basic.BasicButtonUI;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 * File Name: TransitionScreen.java
 * Purpose:
 *  The purpose of the TransitionScreen class file is to
 * handle the visual components of the transition screen
 * for the player. It handles drawing the window and all
 * of its components. Currently, the screen states
 * if you win, what level you completed, an XP and items 
 * gained display alongside a next level and a quit button.
 */

public class TransitionScreen extends JFrame {
	private static final int FRAME_WIDTH = 1200;
	private static final int FRAME_HEIGHT = 1100;
	private static final Color BACKGROUND_COLOR = Color.black;
	private static final Color FOREGROUND_COLOR = Color.white;

	private Font pixelFont;
	
	private JPanel buttonPanel, statusPanel;
	private JButton nextButton;
    private JLabel statusLabel, potionsGained, xpGained, levelCompleted;

	private static boolean isPlayerTurn = false;
    private static int playerInput = -1;
    
	public TransitionScreen(boolean playerWon, int xp, int level, int potions) {
		
		setSize(FRAME_WIDTH, FRAME_HEIGHT);
		setLayout(new BorderLayout());
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		getContentPane().setBackground(BACKGROUND_COLOR);
		
		createCustomFont(); //this initializes pixelFont
		
		makeStatusPanel();
		makeButtonPanel();
		
		add(buttonPanel, BorderLayout.SOUTH);
		add(statusPanel, BorderLayout.CENTER);
		
		
		//this should ideally go into some sort of controller class eventually
		//trying to follow MVC architecture practices for ease of maintainability
		addNextButtonListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				playerInput = 0;
				isPlayerTurn = false;
				//System.exit(0); //dispose();
				//FIXME: Sprint 2: For now, allows for quit button to close all windows, may need to change.
			}
		});
		
		setStatusLabelText(playerWon);
		setPotionsGained(potions);
		setXpGainedText(xp);
		setLevelCompletedText(level);
		
		setVisible(true);   
	}

	private void makeButtonPanel() {
		buttonPanel = new JPanel();
		buttonPanel.setBackground(BACKGROUND_COLOR);
		
		nextButton = makePrettyButton("Next Level");
		
		buttonPanel.add(nextButton);
	}
	
	private JPanel makeStatusPanel() {
		statusPanel = new JPanel();
        statusPanel.setBackground(BACKGROUND_COLOR);
		statusPanel.setPreferredSize(new Dimension(1200, 200));
		GridLayout layout = new GridLayout(4,1);
      	layout.setHgap(5);
      	statusPanel.setLayout(layout);

		statusLabel = new JLabel();
		potionsGained = new JLabel();
		xpGained = new JLabel();
		levelCompleted = new JLabel();
		
		
		statusLabel.setHorizontalAlignment(JLabel.CENTER);
		statusLabel.setFont(pixelFont);
		statusLabel.setForeground(FOREGROUND_COLOR);

		potionsGained.setHorizontalAlignment(JLabel.CENTER);
		potionsGained.setFont(pixelFont);
		potionsGained.setForeground(FOREGROUND_COLOR);

		xpGained.setHorizontalAlignment(JLabel.CENTER);
		xpGained.setFont(pixelFont);
		xpGained.setForeground(FOREGROUND_COLOR);

		levelCompleted.setHorizontalAlignment(JLabel.CENTER);
		levelCompleted.setFont(pixelFont);
		levelCompleted.setForeground(FOREGROUND_COLOR);

		statusPanel.add(statusLabel);
		statusPanel.add(levelCompleted);
		statusPanel.add(xpGained);
		statusPanel.add(potionsGained);
		
		return statusPanel;
	}
	
	private void setStatusLabelText(boolean playerWon) {
		if(playerWon) {
			statusLabel.setText("You Win");
		}
		else {
			statusLabel.setText("You Lose");
		}
	};
	
	//assuming for now XP will be an integer
	private void setXpGainedText(int xp) {
		String output = String.format("XP Gained: %d", xp);
		
		if(xp <= 0) {
			xpGained.setText("No XP gained");
		}
		else {
			xpGained.setText(output);
		}
	};
	
	//assuming all levels are a positive integer (e.g. level 1, level2 ...)
	//assuming input will be <= 0 if player failed a level for now
	private void setLevelCompletedText(int level) {
		String output = String.format("Level %d Complete!", level);
		
		//inaccessible!
		if(level <= 0) {
			levelCompleted.setText("Level Failed");
		}
		else {
			levelCompleted.setText(output);
		}
	};
	
	//input is a string for now
	//will likely end up being some sort of list or vector
	//if a player can gain multiple items
	//assumes empty string "" means player gained no items 
	private void setPotionsGained(int potions) {
		String output = String.format("Potions Gained: %s", potions);
		
		if(potions == 0) {
			potionsGained.setText("No Potions Gained");
		}
		else {
			potionsGained.setText(output);
		}
	}
	
	public int getPlayerInput() {
        isPlayerTurn = true;
        int input = -1;
        int i = 0;
        
        while(isPlayerTurn) {  //The button click will change this value to false, terminating the loop
            if(i % 5 == 0) {
                System.out.println("Choose an action!");  //Reminds the player to do something
            }
            
            try{
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }  
            i++;
        }
        input = playerInput;
        playerInput = -1;
        return input;
    }
	
	//this could be a class, especially since EncounterScreen
	//does this a bunch as well
	//needs work, doesn't match rest of UI very well
	private JButton makePrettyButton(String buttonText) {
        JButton button = new JButton(buttonText);
        button.setFont(pixelFont);
        //button.addActionListener(buttonListeners[i]);
        button.setUI(new BasicButtonUI()); // Set BasicButtonUI to override look and feel
        button.setBorder(BorderFactory.createLineBorder(FOREGROUND_COLOR));
        
        return button;
	}
	
	private void addNextButtonListener(ActionListener listener) {
		nextButton.addActionListener(listener);
	}

	
	private void createCustomFont() {
        try {
            //create the font to use. Specify the size!
            pixelFont = Font.createFont(Font.TRUETYPE_FONT, new File("customFont.ttf")).deriveFont(30f);
            GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
            //register the font
            ge.registerFont(pixelFont);
        } catch (IOException e) {
            e.printStackTrace();
        } catch(FontFormatException e) {
            e.printStackTrace();
        }
    }

}

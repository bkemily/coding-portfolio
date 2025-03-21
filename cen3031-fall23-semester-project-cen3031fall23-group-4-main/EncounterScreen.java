import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.FontFormatException;
import java.awt.GraphicsEnvironment;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;

import javax.swing.UIManager;
import javax.swing.plaf.basic.BasicButtonUI;
import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;

/**
 * File Name: EncounterScreen.java
 * Purpose:
 *  The purpose of the EncounterScreen class file is
 * to handle the visual components of the main encounter
 * screen for the player. It handles drawing the window
 * and all its components. Additionally, the file uses
 * listeners for the buttons and actively updates an
 * output to the player. This class is responsible for
 * displaying players information through both the
 * story and stats panels.
 */
public class EncounterScreen extends JFrame {
	private static final int FRAME_WIDTH = 1200;
	private static final int FRAME_HEIGHT = 1100;

    private Font pixelFont;
	private ActionListener attackListener, magicListener, potionListener, defendListener;
    
    private JButton potionButton, manaButton;
    
    private static boolean isPlayerTurn = false;
    private static int playerInput = -1;

    private Player currentPlayer;
    private Enemy currentEnemy;

    private JTextArea mainOutput;
    private JLabel playerStats, enemyStats;

    private String playerTurnText = "Argie's Turn... \nClick a button.";

	public EncounterScreen(Player currentPlayer, Enemy currentEnemy) { 
        this.currentPlayer = currentPlayer;
        this.currentEnemy = currentEnemy;

		createButtonListeners();

        setLayout(new GridBagLayout());
        getContentPane().setBackground(Color.black);
        createCustomFont();
        createFullPanel();
		setSize(FRAME_WIDTH, FRAME_HEIGHT);
	}

	private void createFullPanel() {
		JPanel artPanel = createArtPanel();
		JPanel statsPanel = createStatsPanel();
		JPanel storyPanel = createStoryPanel();
		JPanel optionsPanel = createOptionsPanel();

		
		GridBagConstraints artPanelConstraints = new GridBagConstraints();
		artPanelConstraints.fill = GridBagConstraints.BOTH;
		artPanelConstraints.gridx = 0;
		artPanelConstraints.gridy = 0;
		artPanelConstraints.weightx = 1;
		artPanelConstraints.weighty = 1;
		artPanelConstraints.ipady = 150;
        add(artPanel, artPanelConstraints);
        
        GridBagConstraints statsPanelConstraints = new GridBagConstraints();
        statsPanelConstraints.fill = GridBagConstraints.HORIZONTAL;
        statsPanelConstraints.gridx = 0;
        statsPanelConstraints.gridy = 1;
        statsPanelConstraints.weightx = 1;
        statsPanelConstraints.weighty = 0;
        add(statsPanel, statsPanelConstraints);
        
        GridBagConstraints storyPanelConstraints = new GridBagConstraints();
        storyPanelConstraints.fill = GridBagConstraints.HORIZONTAL;
        storyPanelConstraints.gridx = 0;
        storyPanelConstraints.gridy = 3;
        storyPanelConstraints.weightx = 1;
        storyPanelConstraints.weighty = 0;
        add(storyPanel, storyPanelConstraints);
        
        GridBagConstraints optionsPanelConstraints = new GridBagConstraints();
        optionsPanelConstraints.fill = GridBagConstraints.HORIZONTAL;
        optionsPanelConstraints.gridx = 0;
        optionsPanelConstraints.gridy = 4;
        optionsPanelConstraints.weightx = 1;
        optionsPanelConstraints.weighty = 0;
        optionsPanelConstraints.ipady = 100;
        add(optionsPanel, optionsPanelConstraints);
	}

    private JPanel createArtPanel() {
		JPanel panel = new JPanel();
        panel.setBackground(Color.black); 
        
        panel.setBorder(BorderFactory.createCompoundBorder(new EmptyBorder(10, 20, 10, 20), new LineBorder(Color.white, 7)));
		panel.setLayout(new GridLayout(1, 2));
        panel.add(new JLabel(new ImageIcon(currentPlayer.getImagePath())));
        panel.add(new JLabel(new ImageIcon(currentEnemy.getImagePath())));

        
		return panel;
	}

	private JPanel createStatsPanel() {
		JPanel panel = new JPanel();
        panel.setBackground(Color.black);
        panel.setBorder(BorderFactory.createEmptyBorder(10,20,10,20));
        panel.setLayout(new GridLayout(1, 2));

        playerStats = new JLabel("");
        enemyStats = new JLabel("", SwingConstants.RIGHT);

        editStatsPanel();
        
        playerStats.setFont(pixelFont);
        enemyStats.setFont(pixelFont);
        playerStats.setForeground(Color.white);
        enemyStats.setForeground(Color.white);

        panel.add(playerStats);
        panel.add(enemyStats);

		return panel;
	}

    private JPanel createStoryPanel() {
		JPanel panel = new JPanel();
        panel.setBackground(Color.black);
        panel.setBorder(BorderFactory.createCompoundBorder(new EmptyBorder(10, 20, 10, 20), new LineBorder(Color.white, 7)));
        
        //this keeps the text area from resizing when its number of output rows changes
        panel.setMinimumSize(new Dimension(600, 150));
        panel.setMaximumSize(new Dimension(600, 150));
        
        panel.setLayout(new BoxLayout(panel, BoxLayout.X_AXIS));
        
        mainOutput = new JTextArea();
        mainOutput.setRows(9);
       
        mainOutput.setFont(pixelFont);
        mainOutput.setForeground(Color.white);
        mainOutput.setBackground(Color.black);

        panel.add(mainOutput);

		return panel;
	}

    private JPanel createOptionsPanel() {
        UIManager.put("Button.background", Color.BLACK);
        UIManager.put("Button.foreground", Color.WHITE);

        JPanel panel = new JPanel();
        panel.setBackground(Color.BLACK);
        panel.setBorder(BorderFactory.createCompoundBorder(new EmptyBorder(10, 20, 10, 20), new LineBorder(Color.white, 8)));
        panel.setLayout(new GridLayout(1, 4));

        JButton[] buttons = new JButton[4];
        String[] buttonNames = {"Attack", "Potion", "Magic", "Defend"};
        ActionListener[] buttonListeners = {attackListener, potionListener, magicListener, defendListener};

        for (int i = 0; i < 4; i++) {
            buttons[i] = new JButton(buttonNames[i]);
            buttons[i].setFont(pixelFont);
            buttons[i].addActionListener(buttonListeners[i]);
            buttons[i].setUI(new BasicButtonUI()); // Set BasicButtonUI to override look and feel
            buttons[i].setBorder(BorderFactory.createLineBorder(Color.WHITE));
            panel.add(buttons[i]);
        }
        
        potionButton = buttons[1];
        manaButton = buttons[2];

        updateButtons();

        return panel;
    }

    public void updateButtons() {
    	if(currentPlayer.getNumOfPotions() > 0) {
    		potionButton.setEnabled(true);
    		potionButton.addActionListener(potionListener);
    	}else {
    		potionButton.setEnabled(false);
    		potionButton.removeActionListener(potionListener);
    	}
    	
    	if(currentPlayer.hasMana()) {
    		manaButton.setEnabled(true);
    		manaButton.addActionListener(magicListener);
    	}else {
    		manaButton.setEnabled(false);
    		manaButton.removeActionListener(magicListener);
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

    private void createButtonListeners() {
        class AttackListener implements ActionListener {
			public void actionPerformed(ActionEvent event) {
				System.out.println("attack button was clicked");
				if(isPlayerTurn) {
					playerInput = 0;
				}else {
					System.out.println("It's not your turn!");
				}
				isPlayerTurn = false;
			}
		}

        class PotionListener implements ActionListener {
			public void actionPerformed(ActionEvent event) {
				System.out.println("potion button was clicked");
				if(isPlayerTurn) {
					playerInput = 1;
				}else {
					System.out.println("It's not your turn!");
				}
				isPlayerTurn = false;
				
				updateButtons();
			}
		}

        class MagicListener implements ActionListener {
			public void actionPerformed(ActionEvent event) {
				System.out.println("magic button was clicked");
				if(isPlayerTurn) {
					playerInput = 2;
				}else {
					System.out.println("It's not your turn!");
				}
				isPlayerTurn = false;
				
				updateButtons();
			}
		}

        class DefendListener implements ActionListener {
			public void actionPerformed(ActionEvent event) {
				System.out.println("defend button was clicked");
				if(isPlayerTurn) {
					playerInput = 3;
				}else {
					System.out.println("It's not your turn!");
				}
				isPlayerTurn = false;
			}
		}

        attackListener = new AttackListener();
        magicListener = new MagicListener();
        potionListener = new PotionListener();
        defendListener = new DefendListener();
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

    public void editStoryPanel(String newOutput) {
        mainOutput.setText(newOutput);
        if (!(newOutput.equals(playerTurnText))) {
            try{
                Thread.sleep(1750); 
            } catch (InterruptedException e) {
                e.printStackTrace();
            }  
        }  
    }
   
    public void editStatsPanel() {
    	playerStats.setText("HP: " + currentPlayer.getCurrentHealth() + "/" + currentPlayer.getMaxHealth()
							 + "\n  Mana: " + currentPlayer.getCurrentMana() + "/" + currentPlayer.getMaxMana() 
							 + "\n  Pot: " + currentPlayer.getNumOfPotions());
        enemyStats.setText(currentEnemy.getEntityName() + ": " + currentEnemy.getCurrentHealth() +"/" + currentEnemy.getMaxHealth() 
							+"\n  Mana: " + currentEnemy.getCurrentMana() + "/" + currentEnemy.getMaxMana());
    }
}
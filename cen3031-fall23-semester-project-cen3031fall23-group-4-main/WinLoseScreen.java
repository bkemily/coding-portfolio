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
 * File Name: WinLoseScreen.java
 * Purpose:
 *  The purpose of the WinLoseScreen class file is to
 * handle the visual components of the game over screen
 * for the player. It handles drawing the window and all
 * of its components. Currently, the screen states whether
 * the player won or lost, what levels the completed (or
 * failed to complete). If the player won, it shows how
 * much XP the player earned total. This class also
 * allows the player (whether they won or lost) to restart
 * the game or quit.
 */

public class WinLoseScreen extends JFrame {
    private static final int FRAME_WIDTH = 1200;
    private static final int FRAME_HEIGHT = 1100;
    private static final Color BACKGROUND_COLOR = Color.black;
    private static final Color FOREGROUND_COLOR = Color.white;

    private Font pixelFont;
    
    private JPanel buttonPanel, statusPanel;
    private JButton quitButton, restartButton;
    private JLabel statusLabel, replayLabel, xpGained, levelCompleted;

    private boolean isRestarting = false;
    private boolean isPlayerTurn, playerWon;
    private int playerInput = -1;
    
    public WinLoseScreen(boolean playerWon, int xp, int level, int items) {
        
        this.playerWon = playerWon;

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
        addQuitButtonListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });

        addRestartButtonListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                playerInput = 0;
                isPlayerTurn = false;
                isRestarting = true;
            }
        });
        
        setStatusLabelText();
        setReplayLabel();
        setXpGainedText(xp);
        setLevelCompletedText(level);
        
        setVisible(true);   
    }

    private void makeButtonPanel() {
        buttonPanel = new JPanel();
        buttonPanel.setBackground(BACKGROUND_COLOR);
        
        quitButton = makePrettyButton("Quit");
        restartButton = makePrettyButton("Restart");
        
        buttonPanel.add(quitButton);
        buttonPanel.add(restartButton);
    }
    
    private JPanel makeStatusPanel() {
        statusPanel = new JPanel();
        statusPanel.setBackground(BACKGROUND_COLOR);
        statusPanel.setPreferredSize(new Dimension(1200, 200));
        GridLayout layout = new GridLayout(4,1);
        layout.setHgap(5);
        statusPanel.setLayout(layout);

        statusLabel = new JLabel();
        replayLabel = new JLabel();
        xpGained = new JLabel();
        levelCompleted = new JLabel();
        
        
        statusLabel.setHorizontalAlignment(JLabel.CENTER);
        statusLabel.setFont(pixelFont);
        statusLabel.setForeground(FOREGROUND_COLOR);

        replayLabel.setHorizontalAlignment(JLabel.CENTER);
        replayLabel.setFont(pixelFont);
        replayLabel.setForeground(FOREGROUND_COLOR);

        xpGained.setHorizontalAlignment(JLabel.CENTER);
        xpGained.setFont(pixelFont);
        xpGained.setForeground(FOREGROUND_COLOR);

        levelCompleted.setHorizontalAlignment(JLabel.CENTER);
        levelCompleted.setFont(pixelFont);
        levelCompleted.setForeground(FOREGROUND_COLOR);

        statusPanel.add(statusLabel);
        statusPanel.add(levelCompleted);
        statusPanel.add(xpGained);
        statusPanel.add(replayLabel);
        
        return statusPanel;
    }
    
    private void setStatusLabelText() {
        if(playerWon) {
            statusLabel.setText("You Win");
        }
        else {
            statusLabel.setText("You Died");
        }
    };
    
    //assuming for now XP will be an integer
    private void setXpGainedText(int xp) {
        if(playerWon) {
            String output = String.format("You earned a total of %d XP", xp);
            xpGained.setText(output);
        }
    };
    
    //assuming all levels are a positive integer (e.g. level 1, level2 ...)
    //assuming input will be <= 0 if player failed a level for now
    private void setLevelCompletedText(int level) {
        String output;
        if(playerWon) {
            output = String.format("You beat all %d levels!", level);
        }
        else {
            output = String.format("You failed to beat level %d.", level);
        }
        levelCompleted.setText(output);
    };
    
    //input is a string for now
    //will likely end up being some sort of list or vector
    //if a player can gain multiple items
    //assumes empty string "" means player gained no items 
    private void setReplayLabel() {
        String output = "Would you like to play again? Press Restart.";
        replayLabel.setText(output);
    }
    
    public int getPlayerInput() {
        isPlayerTurn = true;
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
        return playerInput;
    }

    public boolean getIsRestarting() {
        return isRestarting;
    }
    
    //this could be a class, especially since EncounterScreen
    //does this a bunch as well
    //needs work, doesn't match rest of UI very well
    private JButton makePrettyButton(String buttonText) {
        JButton button = new JButton(buttonText);
        button.setFont(pixelFont);
        button.setUI(new BasicButtonUI()); // Set BasicButtonUI to override look and feel
        button.setBorder(BorderFactory.createLineBorder(FOREGROUND_COLOR));
        
        return button;
    }
    
    private void addQuitButtonListener(ActionListener listener) {
        quitButton.addActionListener(listener);
    }

    private void addRestartButtonListener(ActionListener listener) {
        restartButton.addActionListener(listener);
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



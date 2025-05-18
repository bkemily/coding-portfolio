import java.awt.CardLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontFormatException;
import java.awt.GraphicsEnvironment;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import java.io.File;
import java.io.IOException;

import javax.swing.plaf.basic.BasicButtonUI;
import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.UIManager;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;

/**
 * File Name: IntroScreen.java
 * Purpose:
 * The purpose of the TransitionScreen class file is to
 * handle the visual components of the transition screen
 * for the player. It handles drawing the window and all
 * of its components. Currently, the screen states
 * if you win, what level you completed, an XP and items
 * gained display alongside a next level and a quit button.
 */

public class IntroScreen extends JFrame {
	private static final int FRAME_WIDTH = 1200;
	private static final int FRAME_HEIGHT = 1100;
	private static final Color BACKGROUND_COLOR = Color.black;
	private static final Color FOREGROUND_COLOR = Color.white;

	private Font pixelFont;

	private JButton nextButton;
	private JButton startButton;
	private JLabel statusLabel;

	public IntroScreen() {

		setSize(FRAME_WIDTH, FRAME_HEIGHT);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		createCustomFont(); // this initializes pixelFont

		UIManager.put("Label.font", pixelFont);
		UIManager.put("Panel.background", BACKGROUND_COLOR);
		UIManager.put("Label.foreground", FOREGROUND_COLOR);
		UIManager.put("Button.background", BACKGROUND_COLOR);
		UIManager.put("Button.foreground", FOREGROUND_COLOR);

		CardLayout cardLayout = new CardLayout();
		setLayout(cardLayout);

		JPanel card1 = makeInstructionsCard();
		JPanel card2 = makeIntroductionCard();

		add(card2);
		add(card1);

		// this should ideally go into some sort of controller class eventually
		// trying to follow MVC architecture practices for ease of maintainability
		nextButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				cardLayout.next(getContentPane());
			}
		});

		setVisible(true);
	}

	private JPanel makeInstructionsCard() {
		JPanel panel = new JPanel();
		panel.setLayout(new GridBagLayout());
		statusLabel = new JLabel("Welcome to Argie's Adventure!");
		startButton = makePrettyButton("Start Game");
		JPanel instructionPanel = makeInstructionsPanel();

		GridBagConstraints titleConstraints = new GridBagConstraints();
		titleConstraints.gridwidth = 2;
		titleConstraints.gridx = 0;
		titleConstraints.gridy = 0;
		titleConstraints.weightx = .1;

		titleConstraints.weighty = .1;
		panel.add(statusLabel, titleConstraints);

		GridBagConstraints textConstraints = new GridBagConstraints();
		textConstraints.fill = GridBagConstraints.HORIZONTAL;
		textConstraints.gridwidth = 2;
		textConstraints.gridx = 0;
		textConstraints.gridy = 1;
		textConstraints.weightx = 1;
		textConstraints.weighty = 1;
		panel.add(instructionPanel, textConstraints);

		GridBagConstraints buttonConstraints = new GridBagConstraints();
		buttonConstraints.gridwidth = 1;
		buttonConstraints.gridx = 0;
		buttonConstraints.gridy = 2;
		buttonConstraints.weightx = .1;
		buttonConstraints.weighty = .1;
		panel.add(startButton, buttonConstraints);

		startButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				dispose();
			}
		});
		return panel;

	}

	private JPanel makeIntroductionCard() {
		JPanel panel = new JPanel();
		panel.setLayout(new GridBagLayout());

		statusLabel = new JLabel("Welcome to Argie's Adventure!");
		nextButton = makePrettyButton("Next");
		startButton = makePrettyButton("Skip");
		JPanel storyPanel = makeStoryPanel();

		GridBagConstraints titleConstraints = new GridBagConstraints();
		titleConstraints.gridwidth = 2;
		titleConstraints.gridx = 0;
		titleConstraints.gridy = 0;
		titleConstraints.weightx = .1;

		titleConstraints.weighty = .1;
		panel.add(statusLabel, titleConstraints);

		GridBagConstraints textConstraints = new GridBagConstraints();
		textConstraints.fill = GridBagConstraints.HORIZONTAL;
		textConstraints.gridwidth = 2;
		textConstraints.gridx = 0;
		textConstraints.gridy = 1;
		textConstraints.weightx = 1;
		textConstraints.weighty = 1;
		panel.add(storyPanel, textConstraints);

		GridBagConstraints buttonConstraints = new GridBagConstraints();
		buttonConstraints.gridwidth = 1;
		buttonConstraints.gridx = 0;
		buttonConstraints.gridy = 2;
		buttonConstraints.weightx = .1;
		buttonConstraints.weighty = .1;
		panel.add(nextButton, buttonConstraints);

		GridBagConstraints buttonConstraints2 = new GridBagConstraints();
		buttonConstraints2.gridwidth = 1;
		buttonConstraints2.gridx = 1;
		buttonConstraints2.gridy = 2;
		buttonConstraints2.weightx = .1;
		buttonConstraints2.weighty = .1;
		panel.add(startButton, buttonConstraints2);

		startButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				dispose();
			}
		});

		return panel;

	}

	private JPanel makeStoryPanel() {
		JPanel panel = new JPanel();
		panel.setBorder(
				BorderFactory.createCompoundBorder(new EmptyBorder(10, 20, 10, 20), new LineBorder(Color.white, 7)));

		panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

		JTextArea mainOutput = new JTextArea();

		mainOutput.setLineWrap(true);
		mainOutput.setWrapStyleWord(true);

		mainOutput.setFont(pixelFont);
		mainOutput.setForeground(Color.white);
		mainOutput.setBackground(Color.black);

		mainOutput.setText(
				"Harmony and peace were the status quo for the University of West Florida for decades. However, tranquility turns to turmoil as the campus’s fauna, driven by unknown forces, launch an unexpected assault on the university. The wildlife that once fascinated alumni now appear as adversaries, threatening to overrun the school's grounds. As the appointed guardian of the university, Argie shoulders the responsibility to defend this beacon of knowledge from the relentless onslaught of attacks suddenly wrought on by some of nature’s most cold-blooded killers.");

		panel.add(mainOutput);

		return panel;
	}

	private JPanel makeInstructionsPanel() {
		JPanel panel = new JPanel();
		panel.setBorder(
				BorderFactory.createCompoundBorder(new EmptyBorder(10, 20, 10, 20), new LineBorder(Color.white, 7)));

		panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

		JTextArea mainOutput = new JTextArea();

		mainOutput.setLineWrap(true);
		mainOutput.setWrapStyleWord(true);

		mainOutput.setFont(pixelFont);
		mainOutput.setForeground(Color.white);
		mainOutput.setBackground(Color.black);

		mainOutput.setText(
				"Click \"Attack\" to use a melee attack against an enemy\n\nClick \"Potion\" to use an available potion to restore your health and mana\n\nClick \"Magic\" to use mana to attack an enemy using magic\n\nClick \"Defend\" to block an enemy attack\n\nsome options may not appear until you reach a certain amount of xp");

		panel.add(mainOutput);

		return panel;
	}

	// this could be a class, especially since EncounterScreen
	// does this a bunch as well
	// needs work, doesn't match rest of UI very well
	private JButton makePrettyButton(String buttonText) {
		JButton button = new JButton(buttonText);
		button.setFont(pixelFont);
		// button.addActionListener(buttonListeners[i]);
		button.setUI(new BasicButtonUI()); // Set BasicButtonUI to override look and feel
		button.setBorder(BorderFactory.createLineBorder(FOREGROUND_COLOR));

		return button;
	}

	private void createCustomFont() {
		try {
			// create the font to use. Specify the size!
			pixelFont = Font.createFont(Font.TRUETYPE_FONT, new File("customFont.ttf")).deriveFont(30f);
			GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
			// register the font
			ge.registerFont(pixelFont);
		} catch (IOException e) {
			e.printStackTrace();
		} catch (FontFormatException e) {
			e.printStackTrace();
		}
	}

}

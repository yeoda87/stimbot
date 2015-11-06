// Description:
//   Get FAQ information on a card.
//
// Commands:
//   FAQ <card> - Output the rules for a card.
//
// Author:
//   yeoda87

module.exports = function (robot) {
	// Index of card names and FAQ values.
	var cards = {
		'noise': '• Cards trashed by Noise’s ability are placed facedown in Archives.',
		'demolition run': '• The Runner can trash an agenda accessed with Demolition Run, instead of stealing it.',
		'oversight ai': '• Playing Oversight AI does not give Haas-Bioroid: Engineering the Future 1< for an install.\n• Oversight AI is treated as a condition counter, and is no longer an operation, while it is active.\n• Oversight AI is trashed to the Archives if the host ice is uninstalled.',
		'djinn': '• The Runner cannot move other installed programs to Djinn when it is installed.\n• When the Runner installs a program, he has the choice of installing it directly into his rig or on Djinn. He cannot moveprograms onto Djinn at a later point.',
		'medium': '•	Before accessing cards from R&D at step 4.5 of a run, the Runner chooses how many cards he wants to access when using Medium.',		
		'parasite': '•	Parasite cannot be hosted on Djinn. A card or counter can only be hosted in one place at a time, and Parasite has the restriction that it must be installed on a piece of ice.\n• If a piece of ice hosting Parasite is derezzed, the Parasite continues to collect virus tokens, but the hosting ice has no strength while derezzed and therefore cannot be trashed by Parasite unless it is rezzed again.',
		'wyrm': '• The Runner can only use Wyrm to lower the strength of acurrently encountered piece of ice, and only if Wyrm is of equal or higher strength than that ice.',
		'account siphon': '• The Runner can choose to not use the ability on Account Siphon when the run is successful. If he does, he does not take any tags.\n• If the Runner ends up running successfully on another server than HQ, the “If successful...” effect on Account Siphon cannot be triggered.',
		'forged activation orders': '• The Corp cannot rez Akitaro Watanabe in response to a Forged Activation Orders being played. The effect of Forged Activation Orders is immediately resolved unless prevented or avoided.',
		'femme fatale': '•	Femme Fatale does not need to match the strength of a piece of ice in order to bypass it.\n•	The Runner can spend the credit from Cyberfeeder to pay for the bypass ability.\n• If Femme Fatale is uninstalled, the Runner cannot bypass the ice chosen by the Femme Fatale when it was installed; the ability is no longer active since the card is no longer active. Even if that copy of Femme Fatale is re-installed, it is treated as a ‘new’ copy and cannot bypass anything other than the ice chosen when it was just installed.',
		'sneakdoor beta': '•	If Sneakdoor Beta is trashed during a run it initiated, the run is still treated as a run on HQ if it is successful.',
		'bank job': '•	The Runner can take credits from Bank Job if he made a successful run on an empty server.',
		
	};
	
	// Define the FAQ handler function.
	var listenForFAQ = robot.hear(/^FAQ (.*)$/i, function (res) {
		// The "query" is whatever text came after the "FAQ ".
		var query = res.match[1];
		
		// Trim any whitespace from the beginning and end of the query.
		query = query.trim();
		// Convert the query to lowercase.
		query = query.toLowerCase();
		
		// If an entry for `query` exists in the `cards` object, then output the
		// value for that entry.
		if (cards[query]) {
			// Send the value for the card.
			// * Note: We'll prefix every bullet point with "> " since Slack will
			//   then format it to like a quote (and it'll look a little
			//   fancier). *
			res.send(cards[query].replace(/•/g, '> •'));
		}
		// If no entry exists, send the "not found" message.
		else {
			res.send('Sorry, no entry for a card named “' + query + '” was found.');
		}
	});
	
	// Return the FAQ handler function.
	return listenForFAQ;
};

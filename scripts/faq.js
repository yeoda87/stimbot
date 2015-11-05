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
		'oversight ai': '• Playing Oversight AI does not give Haas-Bioroid: Engineering the Future 1< for an install.\n• Oversight AI is treated as a condition counter, and is no longer an operation, while it is active.\n• Oversight AI is trashed to the Archives if the host ice is uninstalled.'
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
			// * Note: We'll prefix the value with "> " since Slack will format
			//   any message starting with ">" as a quote (and it'll look a little
			//   fancier). *
			res.send('> ' + cards[query]);
		}
		// If no entry exists, send the "not found" message.
		else {
			res.send('Sorry, no entry for a card named “' + query + '” was found.');
		}
	});
	
	// Return the FAQ handler function.
	return listenForFAQ;
};

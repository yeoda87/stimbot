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
		'djinn': '• The Runner cannot move other installed programs to Djinn when it is installed.\n• When the Runner installs a program, he has the choice of installing it directly into his rig or on Djinn. He cannot moveprograms onto Djinn at a later point.',
		'medium': '•	Before accessing cards from R&D at step 4.5 of a run, the Runner chooses how many cards he wants to access when using Medium.',		
		'parasite': '•	Parasite cannot be hosted on Djinn. A card or counter can only be hosted in one place at a time, and Parasite has the restriction that it must be installed on a piece of ice.\n•	If a piece of ice hosting Parasite is derezzed, the Parasite continues to collect virus tokens, but the hosting ice has no strength while derezzed and therefore cannot be trashed by Parasite unless it is rezzed again.',
		'wyrm': '• The Runner can only use Wyrm to lower the strength of acurrently encountered piece of ice, and only if Wyrm is of equal or higher strength than that ice.',
		'account siphon': '• The Runner can choose to not use the ability on Account Siphon when the run is successful. If he does, he does not take any tags.\n• If the Runner ends up running successfully on another server than HQ, the “If successful...” effect on Account Siphon cannot be triggered.',
		'forged activation orders': '• The Corp cannot rez Akitaro Watanabe in response to a Forged Activation Orders being played. The effect of Forged Activation Orders is immediately resolved unless prevented or avoided.',
		'femme fatale': '•	Femme Fatale does not need to match the strength of a piece of ice in order to bypass it.\n•	The Runner can spend the credit from Cyberfeeder to pay for the bypass ability.\n• If Femme Fatale is uninstalled, the Runner cannot bypass the ice chosen by the Femme Fatale when it was installed; the ability is no longer active since the card is no longer active. Even if that copy of Femme Fatale is re-installed, it is treated as a ‘new’ copy and cannot bypass anything other than the ice chosen when it was just installed.',
		'sneakdoor beta': '•	If Sneakdoor Beta is trashed during a run it initiated, the run is still treated as a run on HQ if it is successful.',
		'bank job': '•	The Runner can take credits from Bank Job if he made a successful run on an empty server.',
		'net shield': '•	 Net Shield can prevent a single point of net damage each turn. It does not prevent all net damage from a single source.\n•	 Multiple Net Shields cannot prevent more damage.',
		"aesop's pawnshop": '•	 Aesop’s Pawnshop can only trash a single card each turn.',
		'aggressive secrertary': '•	 The programs are trashed at the same time.\n•	 The Corporation cannot choose to trash the same program more than once.',
		'chum': '•	 If the Runner jacks out immediately after encountering a Chum and not breaking its subroutine, the Runner does not take any damage.\n•	 Chum deals its net damage the first time either of the following occur during an encounter with the next piece of ice:\n 1) a subroutine resolves\n 2) the encounter/run ends (includes bypassing) before all subroutines are broken',
		'tollbooth': '•	 If the Runner cannot pay 3< when encountering Tollbooth, then the run ends without the Runner paying any credits.\n•	 The Runner must pay 3< if he is able to do so, even by spending temporary credits (such as bad publicity credits)',
		'red herrings': '•	 If the Runner accesses an agenda from R&D and does not pay the additional cost to steal it, he does not reveal it to the Corp.',
		'aggressive negotiation': '•	 Aggressive Negotiation can be played if the Corp scores an agenda during step 1.1 of his draw phase.',
		'archer': '•	 If the Corp has an overadvanced Braintrust scored and rezzes Archer, forfeiting Braintrust, Archer gains the discounted rez cost.',
	
//Genesis Cycle

		'mandatory upgrades': '•	 If Mandatory Upgrades is forfeited, the Corp loses the additional click immediately. The Corp cannot choose to spend the additional click before the forfeit, except as part of his last action (at which point it has already been spent, and there is nothing left for the Corp to lose). Each player spends clicks from a pool of available clicks, and does not spend each click individually.',
		'tmi': '•	 TMI can be rezzed multiple times while the Runner approaches it. Timing structure of a run 2.3 is a window that allows the approached piece of ice to be rezzed. There is no limit to the number of times a Corp can rez an approached piece of ice if it is derezzed during this window.',
		'e3 feedback implants': '•	 e3 Feedback Implants triggers itself, so the Runner can break all subroutines on a bioroid ice by paying credits after spending a single click.\n•	 If multiple subroutines are broken at the same time, e3 Feedback Implants triggers once for each subroutine.',
		'fetal ai': '•	 The Runner must pay the 2:credits: to steal Fetal AI from Archives.',
		'trick of light': '•	 Trick of Light can only be used to move advancement tokens from an installed card to another installed card.',
		'sensei': '•	 Sensei only adds a single “End the run.” subroutine after all of the other subroutines on the next piece of ice, not a subroutine after each subroutine on the ice.',
		'nerve agent': '•	 Before accessing cards from HQ at step 4.5 of a run, the Runner chooses how many cards he wants to access when using Nerve Agent.',
		'snitch': '•	 If the outermost piece of ice on a server is unrezzed, the Runner can use Snitch to look at it and then decide to jack out before encountering it.\n•	 If the expose effect is prevented, the Runner can still jack out.',
		'dinosaurus': '•	 If there is an icebreaker already installed on Dinosaurus, the Runner can install a different icebreaker onto Dinosaurus, trashing the previously installed icebreaker.\n•	 If the Runner has no free MU but a Dinosaurus that is not currently hosting an icebreaker, he can install an icebreaker on Dinosaurus without trashing a program. Declaring where a program is hosted is part of the install action, and so the memory cost of the program does not need to be taken into account.',
		'personal workshop': '•	 The Runner may use the first ability on Personal Workshop to host a program or a piece of hardware on it. Cards hosted by this ability are not installed, and therefore are inactive.\n•	 The Runner can pay to remove a power counter from a card hosted on Personal Workshop as a paid ability. A program installed from Personal Workshop follows all the normal install rules; you must trash already installed programs to make room for the new one, if necessary.\n•	 When there are no power counters on a program or a piece of hardware that has a play restriction on it that cannot be met (such as a Parasite with no rezzed ice to be hosted on or a console when there is already a console installed), that program or piece of hardware is trashed instead of being installed.\n•	 If Personal Workshop is uninstalled, all cards hosted on it are trashed and all counters on those cards are removed.',
		'sunset': '•	 When resolving Sunset, the ice must be rearranged in such a way that the Runner knows which pieces of ice moved where. The Corp cannot conceal the rearrangement of the ice.',
		'oversight ai': '• Playing Oversight AI does not give Haas-Bioroid: Engineering the Future 1< for an install.\n• Oversight AI is treated as a condition counter, and is no longer an operation, while it is active.\n• Oversight AI is trashed to the Archives if the host ice is uninstalled.',

		
		
		
		
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

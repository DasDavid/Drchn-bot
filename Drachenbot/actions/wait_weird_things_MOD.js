module.exports = {

//---------------------------------------------------------------------
// Action Name
//
// This is the name of the action displayed in the editor.
//---------------------------------------------------------------------

name: "Wait Weird Things",

//---------------------------------------------------------------------
// Action Section
//
// This is the section the action will fall into.
//---------------------------------------------------------------------

section: "Other Stuff",

//---------------------------------------------------------------------
// Action Subtitle
//
// This function generates the subtitle displayed next to the name.
//---------------------------------------------------------------------

subtitle: function(data) {
	const measurements = ['Microfortnights', 'Millifortnights', 'Centifortnights', 'Mars-seconds', 'Mars-minutes', 'Mars-hours', 'Decimal Seconds', 'Decimal Minutes', 'Decimal Hours', 'TOS Stardates', 'TNG Stardates'];
	return `${data.time} ${measurements[parseInt(data.measurement)]}`;
},

//---------------------------------------------------------------------
// Action Fields
//
// These are the fields for the action. These fields are customized
// by creating elements with corresponding IDs in the HTML. These
// are also the names of the fields stored in the action's JSON data.
//---------------------------------------------------------------------

fields: ["time", "measurement"],

//---------------------------------------------------------------------
// Command HTML
//
// This function returns a string containing the HTML used for
// editting actions. 
//
// The "isEvent" parameter will be true if this action is being used
// for an event. Due to their nature, events lack certain information, 
// so edit the HTML to reflect this.
//
// The "data" parameter stores constants for select elements to use. 
// Each is an array: index 0 for commands, index 1 for events.
// The names are: sendTargets, members, roles, channels, 
//                messages, servers, variables
//---------------------------------------------------------------------

html: function(isEvent, data) {
	return `
	<div>
		<p>
			<u>Mod Info:</u><br>
			Created by manlethamlet<br>
			<b>Unit Conversions:</b><br>
			1 µFn = 1.2096 sec, 1 mFn = 20.16 min, 1 cFn = 3.36 hrs<br>
			Mars-units = 1.027 Earth counterparts (1 Mars-second = 1.027 Earth seconds, etc.)<br>
			1 Dsec = 86.4 ms, 1 Dmin = 86.4 sec, 1 Dhr = 2.4 hrs<br>
			1 TOS Stardate = ~3.3267 hrs, 1 TNG Stardate = ~9.5464 hrs<br>
			</p>
	</div><br>
<div>
	<div style="float: left; width: 45%;">
		Measurement:<br>
		<select id="measurement" class="round">
			<option value="0">Microfortnights</option>
			<option value="1">Millifortnights</option>
			<option value="2">Centifortnights</option>
			<option value="3">Mars-seconds</option>
			<option value="4">Mars-minutes</option>
			<option value="5">Mars-hours</option>
			<option value="6">Decimal Seconds</option>
			<option value="7">Decimal Minutes</option>
			<option value="8">Decimal Hours</option>
			<option value="9">TOS Stardate</option>
			<option value="10">TNG Stardate</option>
		</select>
	</div>
	<div style="float: right; width: 50%;">
		Amount:<br>
		<input id="time" class="round" type="text">
	</div>
</div>`
},

//---------------------------------------------------------------------
// Action Editor Init Code
//
// When the HTML is first applied to the action editor, this code
// is also run. This helps add modifications or setup reactionary
// functions for the DOM elements.
//---------------------------------------------------------------------

init: function() {
},

//---------------------------------------------------------------------
// Action Bot Function
//
// This is the function for the action within the Bot's Action class.
// Keep in mind event calls won't have access to the "msg" parameter, 
// so be sure to provide checks for variable existance.
//---------------------------------------------------------------------

action: function(cache) {
	const data = cache.actions[cache.index];
	const time = parseInt(this.evalMessage(data.time, cache));
	const type = parseInt(data.measurement);
	switch(type) {
		case 0:
			setTimeout(this.callNextAction.bind(this, cache), time * 1209.6);
			break;
		case 1:
			setTimeout(this.callNextAction.bind(this, cache), time * 1209.6 * 1000);
			break;
		case 2:
			setTimeout(this.callNextAction.bind(this, cache), time * 1209.6 * 1000 * 10);
			break;
		case 3:
			setTimeout(this.callNextAction.bind(this, cache), time * 1027);
			break;
		case 4:
			setTimeout(this.callNextAction.bind(this, cache), time * 1027 * 60);
			break;
		case 5:
			setTimeout(this.callNextAction.bind(this, cache), time * 1027 * 60 * 60);
			break;
		case 6:
			setTimeout(this.callNextAction.bind(this, cache), time * 86.4);
			break;
		case 7:
			setTimeout(this.callNextAction.bind(this, cache), time * 86.4 * 1000);
			break;
		case 8:
			setTimeout(this.callNextAction.bind(this, cache), time * 86.4 * 1000 * 100);
			break;
		case 9:
			setTimeout(this.callNextAction.bind(this, cache), time * 11975570.7);
			break;
		case 10:
			setTimeout(this.callNextAction.bind(this, cache), time * 1000 * 34367.0564);
			break;
		default:
			this.callNextAction(cache);
	}
},

//---------------------------------------------------------------------
// Action Bot Mod
//
// Upon initialization of the bot, this code is run. Using the bot's
// DBM namespace, one can add/modify existing functions if necessary.
// In order to reduce conflictions between mods, be sure to alias
// functions you wish to overwrite.
//---------------------------------------------------------------------

mod: function(DBM) {
}

}; // End of module
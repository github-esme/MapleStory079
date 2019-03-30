/*
	Violet Balloon - LudiPQ Crack on the Wall NPC
**/

var status;
var exp = 50000;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == -1 && cm.isLeader()) {
	var eim = cm.getEventInstance();

	if (eim.getProperty("crackLeaderPreamble") == null) {
	    eim.setProperty("crackLeaderPreamble", "done");
	    cm.sendNext("恭喜你们进入到最后阶段,请击退平台上的老鼠召唤#r阿丽莎乐#k,并且击败它。找回被偷走#b次元的钥匙#k交给我.");
	    cm.dispose();
	} else {
	    if (cm.haveItem(4001023)) {
		status = 0;
		cm.sendNext("恭喜你们打败了#r阿丽莎乐#k，是否要前往#b颁奖之地#k？");
	    } else {
		cm.sendNext("请击退平台上的老鼠召唤#r阿丽莎乐#k,并且击败它。找回被偷走#b次元的钥匙#k交给我.");
		cm.dispose();
	    }
	}
    } else if (status == -1 && !cm.isLeader()) {
	cm.sendNext("请击退平台上的老鼠召唤#r阿丽莎乐#k,并且击败它。找回被偷走#b次元的钥匙#k交给我.");
	cm.dispose();
    } else if (status == 0 && cm.isLeader()) {
	var eim = cm.getEventInstance();
	clear(9,eim,cm);
	cm.gainItem(4001023,-1);

	var players = eim.getPlayers();
	cm.givePartyExp(exp, players);
	cm.givePartyItems(4031854, 1);
	eim.setProperty("cleared", "true"); //set determine
	eim.restartEventTimer(30000);
	var bonusmap = cm.getMap(922011000);
	for (var i = 0; i < players.size(); i++) {
	    players.get(i).changeMap(bonusmap, bonusmap.getPortal(0));
	}
	cm.dispose();
    } else {
	cm.dispose();
    }
}

function clear(stage, eim) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}
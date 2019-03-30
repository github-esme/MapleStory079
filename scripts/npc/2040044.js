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
	    cm.sendNext("��ϲ���ǽ��뵽���׶�,�����ƽ̨�ϵ������ٻ�#r����ɯ��#k,���һ��������һر�͵��#b��Ԫ��Կ��#k������.");
	    cm.dispose();
	} else {
	    if (cm.haveItem(4001023)) {
		status = 0;
		cm.sendNext("��ϲ���Ǵ����#r����ɯ��#k���Ƿ�Ҫǰ��#b�佱֮��#k��");
	    } else {
		cm.sendNext("�����ƽ̨�ϵ������ٻ�#r����ɯ��#k,���һ��������һر�͵��#b��Ԫ��Կ��#k������.");
		cm.dispose();
	    }
	}
    } else if (status == -1 && !cm.isLeader()) {
	cm.sendNext("�����ƽ̨�ϵ������ٻ�#r����ɯ��#k,���һ��������һر�͵��#b��Ԫ��Կ��#k������.");
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
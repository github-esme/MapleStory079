/*
	Sky-Blue Balloon - LudiPQ 7th stage NPC
**/

var status;
var exp = 50000;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage7status = eim.getProperty("stage7status");

    if (stage7status == null) {
	if (cm.isLeader()) { // Leader
	    var stage7leader = eim.getProperty("stage7leader");
	    if (stage7leader == "done") {

		if (cm.haveItem(4001022,3)) { // Clear stage
		    cm.sendNext("恭喜你们已经通过了#b第7阶段#k。请通过我身边的传送门进入#r第8阶段#k.");
		    cm.removeAll(4001022);
		    clear(7, eim, cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("你确定你们有收集够#b3张#k#r#t4001022##k吗？");
		}
		cm.dispose();
	    } else {
		cm.sendOk("欢迎来到#b废弃的塔#k第7阶段,请收集3张#r#t4001022##k来找我即可完成任务.");
		eim.setProperty("stage7leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到#b废弃的塔#k第7阶段,请收集3张#r#t4001022##k给你的队长,然后叫队长来找我即可完成任务。");
	    cm.dispose();
	}
    } else {
	cm.sendNext("恭喜你们已经通过了#b第7阶段#k。请通过我身边的传送门进入#r第8阶段#k.");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
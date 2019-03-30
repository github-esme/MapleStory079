/*
	Green Balloon - LudiPQ 5th stage NPC
**/

var exp = 40000;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    
    var stage5status = eim != null ?  eim.getProperty("stage5status") : null;

    if (stage5status == null ) {
	if (cm.isLeader()) { // Leader
	    var stage5leader = eim.getProperty("stage5leader");
	    if (stage5leader == "done") {

		if (cm.haveItem(4001022,12)) { // Clear stage
		    cm.sendNext("恭喜你们已经通过了#b第5阶段#k。请通过我身边的传送门进入#r第6阶段#k.");
		    cm.removeAll(4001022);
		    clear(5,eim,cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		} else { // Not done yet
		    cm.sendNext("你确定你们有收集够#b12张#k#r#t4001022##k吗？");
		}
		cm.safeDispose();
	    } else {
		cm.sendOk("欢迎来到#b废弃的塔#k第5阶段,请收集12张#r#t4001022##k来找我即可完成任务.");
		eim.setProperty("stage5leader","done");
		cm.safeDispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到#b废弃的塔#k第5阶段,请收集12张#r#t4001022##k给你的队长,然后叫队长来找我即可完成任务。");
	    cm.safeDispose();
	}
    } else {
	cm.sendNext("恭喜你们已经通过了#b第5阶段#k。请通过我身边的传送门进入#r第6阶段#k.");
	cm.safeDispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}

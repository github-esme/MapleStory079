/*
	Lime Balloon - LudiPQ 4th stage NPC
*/

var exp = 35000;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage4status = eim.getProperty("stage4status");

    if (stage4status == null) {
		if (cm.isLeader()) { // Leader
			var stage4leader = eim.getProperty("stage4leader");
			if (stage4leader == "done") {
				if (cm.haveItem(4001022,3)) { // Clear stage
					cm.sendNext("恭喜你们已经通过了#b第4阶段#k。请通过我身边的传送门进入#r第5阶段#k.");
					cm.removeAll(4001022);
					clear(4,eim,cm);
					cm.givePartyExp(exp);
				} else { // Not done yet
					cm.sendNext("你确定你们有收集够#b3张#k#r#t4001022##k吗？");
				}
				cm.safeDispose();
			} else {
				cm.sendOk("欢迎来到#b废弃的塔#k第4阶段,请收集3张#r#t4001022##k来找我即可完成任务.");
				eim.setProperty("stage4leader","done");
				cm.safeDispose();
			}
		} else { // Members
			cm.sendNext("欢迎来到#b废弃的塔#k第4阶段,请收集3张#r#t4001022##k给你的队长,然后叫队长来找我即可完成任务。");
			cm.safeDispose();
		}
    } else {
		cm.sendNext("恭喜你们已经通过了#b第4阶段#k。请通过我身边的传送门进入#r第5阶段#k.");
		cm.safeDispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
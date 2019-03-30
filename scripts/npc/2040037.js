/**
	Orange Balloon - LudiPQ 2nd stage NPC
**/

var status;
var exp = 2520;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage2status = eim.getProperty("stage2status");
    
    if (stage2status == null) {
		if (cm.isLeader()) { // Leader
			var stage2leader = eim.getProperty("stage2leader");
			if (stage2leader == "done") {
				if (cm.haveItem(4001022, 15)) { // Clear stage
					cm.sendNext("恭喜你们已经通过了#b第2阶段#k。请通过我身边的传送门进入#r第3阶段#k.");
					cm.removeAll(4001022);
					clear(2, eim, cm);
					cm.givePartyExp(30000);
					cm.dispose();
				} else { // Not done yet
					cm.sendNext("你确定你们有收集够#b15张#k#r#t4001022##k吗？");
				}
				cm.dispose();
			} else {
				cm.sendOk("我来告诉你们第二关的内容。在这里到处都有箱子。在这里到处有箱子。破坏箱子以后你们会被传送到别的地方或者得到#b次元的通行证#k。你们收集#b15张次元的通行证#k后给队长吧。队长给我那些东西就行了。\n但要注意的是打箱子后如果被移动到别的地方也不要马上出来。因为那里也会有别的箱子。如果出去了你就不能再进去了。那你们就没办法进入下一关了。请加油！");
				eim.setProperty("stage2leader","done");
				cm.dispose();
			}
		} else { // Members
			cm.sendNext("我来告诉你们第二关的内容。在这里到处都有箱子。在这里到处有箱子。破坏箱子以后你们会被传送到别的地方或者得到#b次元的通行证#k。你们收集#b15张次元的通行证#k后给队长吧。队长给我那些东西就行了。\n但要注意的是打箱子后如果被移动到别的地方也不要马上出来。因为那里也会有别的箱子。如果出去了你就不能再进去了。那你们就没办法进入下一关了。请加油！");
			cm.dispose();
		}
	} else {
		cm.sendNext("恭喜你们已经通过了#b第2阶段#k。请通过我身边的传送门进入#r第3阶段#k.");
		cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
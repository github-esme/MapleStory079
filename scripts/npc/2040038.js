
/*
	Yellow Balloon - LudiPQ 3rd stage NPC
*/

var status = -1;
var exp = 35000;
			
function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage3status = eim.getProperty("stage3status");
    if (stage3status == null) {
		if (cm.isLeader()) { // Leader
			var stage3leader = eim.getProperty("stage3leader");
			if (stage3leader == "done") {
				if (cm.haveItem(4001022, 32)) { // Clear stage
					cm.sendNext("恭喜你们已经通过了#b第3阶段#k。请通过我身边的传送门进入#r第4阶段#k.");
					cm.removeAll(4001022);
					clear(3,eim,cm);
					cm.givePartyExp(exp, eim.getPlayers());
				} else { // Not done yet
					cm.sendNext("你确定你们有收集够#b32张#k#r#t4001022##k吗？");
				}
			} else {
			cm.sendOk("我来告诉你们第三关的内容。在这里有很多怪物和箱子。打退怪物以后你们会得到#b次元的通行证#k，而破坏箱子后会出来怪物，打退这个怪物时也会得到#b次元的通行证#k。最后再让你们队长把收集到的#b32张次元的通行证#k交给我才可以进入下一关，请加油！");
			eim.setProperty("stage3leader","done");
			}
		} else { // Members
			cm.sendNext("我来告诉你们第三关的内容。在这里有很多怪物和箱子。打退怪物以后你们会得到#b次元的通行证#k，而破坏箱子后会出来怪物，打退这个怪物时也会得到#b次元的通行证#k。最后再让你们队长把收集到的#b32张次元的通行证#k交给我才可以进入下一关，请加油！");
		}
    } else {
		cm.sendNext("恭喜你们已经通过了#b第3阶段#k。请通过我身边的传送门进入#r第4阶段#k.");
    }
	cm.safeDispose();
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}
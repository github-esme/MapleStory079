/*
	Red Balloon - LudiPQ 1st stage NPC
**/

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

	if( cm == null )
		return;
	
    var eim = cm.getEventInstance();

    if(eim == null)
    	return;

    var stage1status = eim.getProperty("stage1status");

    if (stage1status == null) {
		if (cm.isLeader()) { // Leader
			var stage1leader = eim.getProperty("stage1leader");
			if (stage1leader == "done") {
				if (cm.haveItem(4001022, 25)) { // Clear stage
					cm.sendNext("恭喜你们已经通过了#b第1阶段#k。请通过我身边的传送门进入#r第2阶段#k.");
					cm.removeAll(4001022);
					clear(1, eim, cm);
					cm.givePartyExp(25000, eim.getPlayers());
					cm.dispose();
				} else { // Not done yet
					cm.sendNext("你确定你们有收集够#b25张#k#r#t4001022##k吗？");
				}
				cm.dispose();
			} else {
				cm.sendOk("我来告诉你们第一关的内容。在这里到处都有各种怪物。这里的怪物都有#b次元的通行证#k，有这个你们就可以去次元空间。\r你打退怪物以后收集#b25张次元的通行证#k后给队长。队长带着#b次元的通行证#k来找我，我就送你们到下一关。请加油！");
				eim.setProperty("stage1leader","done");
				cm.dispose();
			}
		} else { // Members
			cm.sendNext("我来告诉你们第一关的内容。在这里到处都有各种怪物。这里的怪物都有#b次元的通行证#k，有这个你们就可以去次元空间。\r你打退怪物以后收集#b25张次元的通行证#k后给队长。队长带着#b次元的通行证#k来找我，我就送你们到下一关。请加油！");
			cm.dispose();
		}
    } else {
		cm.sendNext("恭喜你们已经通过了#b第1阶段#k。请通过我身边的传送门进入#r第2阶段#k.");
		cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
	
}
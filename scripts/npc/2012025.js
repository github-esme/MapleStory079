/*
	NPC Name: 		Geras
	Map(s): 		Orbis: Station<To Ariant> (200000151)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    geenie = cm.getEventManager("Geenie");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("#k#e等你考虑好再来找我。");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(geenie == null) {
	    cm.sendNext("找不到脚本请联系GM！");
	    cm.dispose();
	} else if (geenie.getProperty("entry").equals("false")) {
	    cm.sendYesNo("#k#e请问你是否想要乘坐#r#e开往阿里安特#k#e的船吗？");
	} else if(geenie.getProperty("entry").equals("false") && geenie.getProperty("docked").equals("true")) {
	    cm.sendNext("#k#e很抱歉本班船准备开走,乘坐时间表可以通过售票展台查看.");

	    cm.dispose();
	} else {
	    cm.sendNext("#k#e很抱歉本班船已经走了,乘坐时间表可以通过售票展台查看");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031576)) {
	    cm.sendNext("#k#e你没有船票,请先去售票员那里购买船票.");
	} else {
	    cm.gainItem(4031576, -1);
	    cm.warp(200000152, 0);
	}
	cm.dispose();
    }
}
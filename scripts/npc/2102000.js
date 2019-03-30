/* Author: Xterminator
	NPC Name: 		Asesson
	Map(s): 		Ariant: Ariant Station Platform (260000100)
	Description: 	Ariant Ticketing Usher
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
	cm.sendNext("#k#e好的，等你想坐船随时回来找我。");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(geenie == null) {
	    cm.sendNext("找不到脚本请联系GM！");
	    cm.dispose();
	} else if (geenie.getProperty("entry").equals("true")) {
	    cm.sendYesNo("#k#e请问你是否想要乘坐#r#e开往天空之城#k#e的船吗？");
	} else if(geenie.getProperty("entry").equals("false") && geenie.getProperty("docked").equals("true")) {
	    cm.sendNext("#k#e很抱歉本班船准备开走,乘坐时间表可以通过售票展台查看.");
	    cm.dispose();
	} else {
	    cm.sendNext("#k#e很抱歉本班船已经走了,乘坐时间表可以通过售票展台查看.");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031045)) {
	    cm.sendNext("#k#e很抱歉，你没有买票，我不能让你乘坐。");
	} else {
	    cm.gainItem(4031045, -1);
	    cm.warp(260000110, 0);
	}
	cm.dispose();
    }
}
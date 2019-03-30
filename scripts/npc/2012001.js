/*
	NPC Name: 		Rini
	Map(s): 		Orbis: Station<To Ellinia> (200000111)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    boat = cm.getEventManager("Boats");
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
	if(boat == null) {
	    cm.sendNext("#k#e找不到脚本请联系GM！");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendYesNo("#k#e船已经到达了，请问你是否要乘坐#b#e前往魔法密林#k#e的船？");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("#k#e很抱歉本班船准备开走,乘坐时间表可以通过售票展台查看");
	    cm.dispose();
	} else {
	    cm.sendNext("请耐心等待几分钟，船还没来.");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031047)) {
	    cm.sendNext("#k#e对不起，你没有船票，请先去售票员那里购买船票.");
	} else {
	    cm.gainItem(4031047, -1);
	    cm.warp(200000112, 0);
	}
	cm.dispose();
    }
}
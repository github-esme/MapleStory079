/* 
	NPC Name: 		Tommie
	Map(s): 		Leafre: Cabin<To Orbis> (240000110)
	Description: 		Leafre Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    flight = cm.getEventManager("Flight");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("#k#e你目前不想去是吧。");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(flight == null) {
	    cm.sendNext("#k#e找不到此脚本请回报GM");
	    cm.dispose();
	} else if(flight.getProperty("entry").equals("true")) {
        cm.sendYesNo("#k#e请问你是否确定要搭乘开往#r#e天空之城#k#e的船？");
	} else if(flight.getProperty("entry").equals("false") && flight.getProperty("docked").equals("true")) {
	    cm.sendNext("#k#e很抱歉本班船准备起飞了，请您耐心等候下一班船吧！");
	    cm.dispose();
	} else {
	    cm.sendNext("#k#e请耐心等待几分钟，船大概是5分钟一班。");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031045)) {
	    cm.sendNext("#k#e你没有船票,请先去售票员那里购买船票");
	} else {
	    cm.gainItem(4031045, -1);
	    cm.warp(240000111, 0);
	}
	cm.dispose();
    }
}
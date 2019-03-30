/* 
	NPC Name: 		Sunny
	Map(s): 		Orbis: Station<To Ludibrium> (200000121)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    train = cm.getEventManager("Trains");
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
	if(train == null) {
	    cm.sendNext("找不到脚本请联系GM！");
	    cm.dispose();
	} else if (train.getProperty("entry").equals("true")) {
	    cm.sendYesNo("#k#e船已经到达了，请问你是否要乘坐#b#e前往玩具城#k#e的船？");
	} else if (train.getProperty("entry").equals("false") && train.getProperty("docked").equals("true")) {
	    cm.sendNext("#k#e很抱歉本班船已经走了,乘坐时间表可以通过售票展台查看");
	    cm.dispose();
	} else {
	    cm.sendNext("#k#e请耐心等待几分钟，船还没来。");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031074)) {
	    cm.sendNext("#k#e你没有船票,请先去售票员那里购买船票.");
	} else {
	    cm.gainItem(4031074, -1);
	    cm.warp(200000122, 0);
	}
	cm.dispose();
    }
}
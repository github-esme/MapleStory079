/* 
	NPC Name: 		Cherry
	Map(s): 		Victoria Road : Ellinia Station (101000300)
	Description: 		Ellinia Ticketing Usher
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
	cm.sendNext("#k#e好的，如果你想坐船随时来找我。");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("#k#e找不到脚本请联系GM！");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendYesNo("#r#e船已经到达了，请问你是否现在要乘坐开往天空之城的船呢？");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("#d#e很抱歉本班船刚刚开走了，你现在需要乘坐下一班船，大概在三分钟左右的时间。还请您耐心等待。");
	    cm.dispose();
	} else {
	    cm.sendNext("#d#e很抱歉本班船刚刚开走了，你现在需要乘坐下一班船，大概在三分钟左右的时间。还请您耐心等待。");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031045)) {
	    cm.sendNext("#k#e你没有船票,请先去售票员那里购买船票吧");
	} else {
	    cm.gainItem(4031045, -1);
	    cm.warp(101000301, 0);
	}
	cm.dispose();
    }
}
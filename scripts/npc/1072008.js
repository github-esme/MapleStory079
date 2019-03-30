/**
	Author: xQuasar
	NPC: Kyrin - Pirate Job Advancer
	Inside Test Room
**/

var status;

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (status == -1) {
	if (cm.getMapId() == 108000500) {
	    if (!(cm.haveItem(4031857,15))) {
		cm.sendNext("#d#e快去收集15个#r#e强大的风力结晶#k#d#e给我.");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("#d#e不错，你带来了15个#k强大的风力结晶#d，恭喜你完成这次考验。");
	    }
	} else if (cm.getMapId() == 108000502) {
	    if (!(cm.haveItem(4031856,15))) {
		cm.sendNext("#d#e快去收集15个#r#e强大的力量结晶#k#d#e给我.");
		cm.dispose();
	    } else {
		status = 2;
		
		cm.sendNext("#d#e不错，你带来了15个#k强大的力量结晶#d，恭喜你完成这次考验。");
	    }
	} else {
	    cm.sendNext("错误请再尝试一次.");
	    cm.dispose();
	}
    } else if (status == 2) {
	cm.removeAll(4031857);
	cm.removeAll(4031856);
	cm.gainItem(4031012, 1);
	cm.warp(120000101,0);
	cm.dispose();
    }
}
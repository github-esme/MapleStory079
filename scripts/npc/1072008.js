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
		cm.sendNext("#d#e��ȥ�ռ�15��#r#eǿ��ķ����ᾧ#k#d#e����.");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("#d#e�����������15��#kǿ��ķ����ᾧ#d����ϲ�������ο��顣");
	    }
	} else if (cm.getMapId() == 108000502) {
	    if (!(cm.haveItem(4031856,15))) {
		cm.sendNext("#d#e��ȥ�ռ�15��#r#eǿ��������ᾧ#k#d#e����.");
		cm.dispose();
	    } else {
		status = 2;
		
		cm.sendNext("#d#e�����������15��#kǿ��������ᾧ#d����ϲ�������ο��顣");
	    }
	} else {
	    cm.sendNext("�������ٳ���һ��.");
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
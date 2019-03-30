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
	cm.sendNext("#k#e��Ŀǰ����ȥ�ǰɡ�");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(flight == null) {
	    cm.sendNext("#k#e�Ҳ����˽ű���ر�GM");
	    cm.dispose();
	} else if(flight.getProperty("entry").equals("true")) {
        cm.sendYesNo("#k#e�������Ƿ�ȷ��Ҫ��˿���#r#e���֮��#k#e�Ĵ���");
	} else if(flight.getProperty("entry").equals("false") && flight.getProperty("docked").equals("true")) {
	    cm.sendNext("#k#e�ܱ�Ǹ���ബ׼������ˣ��������ĵȺ���һ�ബ�ɣ�");
	    cm.dispose();
	} else {
	    cm.sendNext("#k#e�����ĵȴ������ӣ��������5����һ�ࡣ");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031045)) {
	    cm.sendNext("#k#e��û�д�Ʊ,����ȥ��ƱԱ���ﹺ��Ʊ");
	} else {
	    cm.gainItem(4031045, -1);
	    cm.warp(240000111, 0);
	}
	cm.dispose();
    }
}
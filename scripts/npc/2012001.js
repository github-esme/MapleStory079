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
	cm.sendNext("#k#e���㿼�Ǻ��������ҡ�");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("#k#e�Ҳ����ű�����ϵGM��");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendYesNo("#k#e���Ѿ������ˣ��������Ƿ�Ҫ����#b#eǰ��ħ������#k#e�Ĵ���");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("#k#e�ܱ�Ǹ���ബ׼������,����ʱ������ͨ����Ʊչ̨�鿴");
	    cm.dispose();
	} else {
	    cm.sendNext("�����ĵȴ������ӣ�����û��.");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031047)) {
	    cm.sendNext("#k#e�Բ�����û�д�Ʊ������ȥ��ƱԱ���ﹺ��Ʊ.");
	} else {
	    cm.gainItem(4031047, -1);
	    cm.warp(200000112, 0);
	}
	cm.dispose();
    }
}
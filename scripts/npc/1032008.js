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
	cm.sendNext("#k#e�õģ��������������ʱ�����ҡ�");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("#k#e�Ҳ����ű�����ϵGM��");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendYesNo("#r#e���Ѿ������ˣ��������Ƿ�����Ҫ�����������֮�ǵĴ��أ�");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("#d#e�ܱ�Ǹ���ബ�ոտ����ˣ���������Ҫ������һ�ബ����������������ҵ�ʱ�䡣���������ĵȴ���");
	    cm.dispose();
	} else {
	    cm.sendNext("#d#e�ܱ�Ǹ���ബ�ոտ����ˣ���������Ҫ������һ�ബ����������������ҵ�ʱ�䡣���������ĵȴ���");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031045)) {
	    cm.sendNext("#k#e��û�д�Ʊ,����ȥ��ƱԱ���ﹺ��Ʊ��");
	} else {
	    cm.gainItem(4031045, -1);
	    cm.warp(101000301, 0);
	}
	cm.dispose();
    }
}
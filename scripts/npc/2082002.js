function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("#k#e���������ĵȴ������ɡ�");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("#k#e��ȷ�������Ҫ�뿪��������");
    } else if(status == 1) {
	cm.warp(240000110, 0);
	cm.dispose();
    }
}

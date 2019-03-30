function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("#k#e好的，那请你耐心等待船出发。");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("#k#e你确定是否真的要回去了？");
    } else if(status == 1) {
	if (cm.getMapId() == 220000111) {
	    cm.warp(220000110, 0);
	} else {
	    cm.warp(200000121, 0);
	}
	cm.dispose();
    }
}

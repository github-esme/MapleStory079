function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("#k#e那请您耐心等待出发吧。");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("#k#e你确定你真的要离开船上了吗？");
    } else if(status == 1) {
	cm.warp(240000110, 0);
	cm.dispose();
    }
}

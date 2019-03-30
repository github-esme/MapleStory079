/*
	Erin - Before Takeoff To Ellinia(200000112)
*/

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
	cm.sendYesNo("#d#e你确定你要离开了吗？");
    } else if(status == 1) {
	cm.warp(200000111, 0);
	cm.dispose();
    }
}
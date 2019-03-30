var status = -1;

function action(mode, type, selection) {
    status++;
    if (mode == 0) {
	cm.sendOk("#k#e好的，那请你耐心等待一会，船马上出发了！");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("#r#e你确定要离开船上回去天空之城了吗？");
    } else if(status == 1) {
	cm.warp(200000131, 0);
	cm.dispose();
    }
}
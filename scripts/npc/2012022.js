var status = -1;

function action(mode, type, selection) {
    status++;
    if (mode == 0) {
	cm.sendOk("#k#e�õģ����������ĵȴ�һ�ᣬ�����ϳ����ˣ�");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("#r#e��ȷ��Ҫ�뿪���ϻ�ȥ���֮������");
    } else if(status == 1) {
	cm.warp(200000131, 0);
	cm.dispose();
    }
}
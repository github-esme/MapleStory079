/* Dawnveil
    To Rien
	Puro
    Made by Daenerys
*/
function start() {
    //cm.sendYesNo("你想要去瑞恩岛必须支付#b 80 枫币#k 到那边约一分钟.");
	cm.sendOk("里恩岛暂未开启，敬请期待！");
	cm.dispose();
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("等你考虑好再来找我吧!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 80) {
	cm.gainMeso(-80);
	cm.warpBack(200090060,140020300,80);
    }
    cm.dispose();
}
}
var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4768)==2){
			qm.sendOk("你已经领取过奖励，继续努力到70级可以获得更多奖励喔");
			qm.forceCompleteQuest(4768);
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b60#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你等级达到了#r60#k级，你的努力大家都看得见，群主大佬为你助力送你珍贵的黄金枫叶10张！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4000313# 5张");
			qm.gainItem(4000313, 5);
			qm.forceCompleteQuest(4768);
			qm.dispose();
		} 
	}
}

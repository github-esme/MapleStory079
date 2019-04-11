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
			if(qm.getQuestStatus(4769)==2){
			qm.sendOk("你已经领取过奖励，继续努力到71级可以获得更多奖励喔");
			qm.forceCompleteQuest(4769);
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b70#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你等级达到了#r70#k级，你已经正式算是怀旧冒险岛的一名大佬了，群主大佬特地为大佬递茶，送你点卷2000点，黄金枫叶10张，祝你在怀旧冒险岛走向属于你的人生巅峰！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4000313# x 10张、金币=100W、点卷=2000点");
			qm.gainItem(4000313, 10);
			qm.gainNX(2000);
			qm.gainMeso(1000000);
			qm.forceCompleteQuest(4769);
			qm.dispose();
		} 
	}
}

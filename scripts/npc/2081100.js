/*  NPC : 汉摩尼亚
	剑士 4转 任务脚本
	地图代码 (240010501)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (!(cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {
	    cm.sendOk("#k#e请问你找我有什么事情吗？");
	    cm.dispose();
	    return;
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("#e#k你还不够强大...不能进行第四次转职....");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 111) {  //4031343 4031344
		    cm.sendSimple("#d#e一路走来不容易,在你成长的过程中我有跟你的教官们都听说过你,你成长得速度真的很快.如今你已经拥有最后一次转职的机会.请你好好把握珍惜.当然你想转职,你必须先完成我交给你的任务,来证明你的实力.\r\n\r\n#r#L0#我想成为英雄#l\r\n#b#L1#让我再想一下#l");
		} else if(cm.getJob() == 121){
		    cm.sendSimple("#d#e一路走来不容易,在你成长的过程中我有跟你的教官们都听说过你,你成长得速度真的很快.如今你已经拥有最后一次转职的机会.请你好好把握珍惜.当然你想转职,你必须先完成我交给你的任务,来证明你的实力.\r\n\r\n#r#L0#我想成为圣骑士#l\r\n#b#L1#让我再想一下#l");
		}else if(cm.getJob() == 131){
		    cm.sendSimple("#d#e一路走来不容易,在你成长的过程中我有跟你的教官们都听说过你,你成长得速度真的很快.如今你已经拥有最后一次转职的机会.请你好好把握珍惜.当然你想转职,你必须先完成我交给你的任务,来证明你的实力.\r\n\r\n#r#L0#我想成为黑骑士#l\r\n#b#L1#让我再想一下#l");
		}else if(cm.getJob() == 2111){
		    cm.sendSimple("恭喜你有资格4转. \r\n请问你想4转吗??\r\n#b#L0#我想变强！！#l\r\n#b#L1#像我想一下...#l");    
		} else {
		cm.sendOk("#e#k那好吧，等你考虑好进行四转再来找我。");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("#e#k那好吧，等你考虑好进行四转再来找我。");
	    cm.dispose();
	    return;
	}
	/*if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
	    cm.sendOk("你的技能点数还没点完..");
	    cm.dispose();
	    return;
	}*/ else if (!cm.haveItem(4031348, 1)){
		cm.sendOk("#d#e想进行第四次转职你必须先给我#v4031348##r#z4031348##d,至于要怎么获取,这个需要你自己去发现.");
		cm.dispose();
		return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainItem(2280003, 1);
		if (cm.getJob() == 111) {
		    cm.changeJob(112);
		    cm.teachSkill(1121001, 0, 10); 
		    cm.teachSkill(1120004, 0, 10);
		    cm.teachSkill(1121008, 0, 10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#e祝贺你转职为#b英雄#k.#r我送了你一本冒险岛勇士的技能册,冒险旅途愉快.");
			cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行四转成为英雄让我们热烈的祝福他/她吧！");
		} else if (cm.getJob() == 121) {
		    cm.changeJob(122);
		    cm.teachSkill(1221001, 0, 10);
		    cm.teachSkill(1220005, 0, 10);
		    cm.teachSkill(1221009, 0, 10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#e祝贺你转职为#b圣骑士#k.#r我送了你一本冒险岛勇士的技能册,冒险旅途愉快.");
			cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行四转成为圣骑士让我们热烈的祝福他/她吧！");
		} else if (cm.getJob() == 131) {
		    cm.changeJob(132);
		    cm.teachSkill(1321001, 0, 10);
		    cm.teachSkill(1320005, 0, 10);
		    cm.teachSkill(1321007, 0, 10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#e祝贺你转职为#b黑骑士#k.#r我送了你一本冒险岛勇士的技能册,冒险旅途愉快.");
			cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行四转成为黑骑士让我们热烈的祝福他/她吧！");
		} else if (cm.getJob() == 2111) {
            cm.gainItem(4031348, -1);
            cm.changeJob(2112);
            if (cm.canHold(1142132, 1)) {
                cm.forceCompleteQuest(29927);
                cm.gainItem(1142132, 1);
            }
		    cm.sendNext("恭喜你狂狼勇士又更上一层楼了！ 另外我送你一些神秘小礼物^^");
	    } else {
		cm.sendOk("你没有多的栏位请清空再来尝试一次!");
		cm.dispose();
		return;
	    }
	}
	}
    } else if (status == 2) {
	cm.sendNextPrev("#d#e永远不要忘记现在你得到的这一切都取决于你练了多少...");
	cm.dispose();
    }
}
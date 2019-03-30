/*  NPC : 海伦
	盗贼 4转 任务脚本
	地图代码 (240010501)
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (!(cm.getJob() == 411 || cm.getJob() == 421 || cm.getJob() == 433)) {
	    cm.sendOk("#k#e请问你找我有什么事情吗？");
	    cm.dispose();
	    return;
	} else if (cm.getPlayer().getLevel() < 120) {
	    cm.sendOk("#e#k你还不够强大...不能进行第四次转职....");
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 411){
		    cm.sendSimple("#d#e一路走来不容易,在你成长的过程中我有跟你的教官们都听说过你,你成长得速度真的很快.如今你已经拥有最后一次转职的机会.请你好好把握珍惜.当然你想转职,你必须先完成我交给你的任务,来证明你的实力.\r\n\r\n#r#L0#我想成为隐士#l\r\n#b#L1#让我再想一下#l");
		} else if (cm.getJob() == 421){
		    cm.sendSimple("#d#e一路走来不容易,在你成长的过程中我有跟你的教官们都听说过你,你成长得速度真的很快.如今你已经拥有最后一次转职的机会.请你好好把握珍惜.当然你想转职,你必须先完成我交给你的任务,来证明你的实力.\r\n\r\n#r#L0#我想成为侠盗#l\r\n#b#L1#让我再想一下#l");
	    } else {
		cm.sendOk("#e#k那好吧，等你考虑好进行四转再来找我。");
		cm.safeDispose();
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

		if (cm.getJob() == 411) {
		    cm.changeJob(412);
		    cm.teachSkill(4120002,0,10);
		    cm.teachSkill(4121006,0,10);
		    cm.teachSkill(4120005,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#e祝贺你四转为#b隐士#k#r！我送了你一本冒险岛勇士的技能册，冒险之路还很长，请你继续加油吧！");
			cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行四转成为隐士让我们热烈的祝福他/她吧！");
		} else if (cm.getJob() == 421) {
		    cm.changeJob(422);
		    cm.teachSkill(4220002,0,10);
		    cm.teachSkill(4221007,0,10);
		    cm.teachSkill(4220005,0,10);
			cm.gainItem(4031348, -1);
		    cm.sendNext("#r#e祝贺你四转为#b侠盗#k#r！我送了你一本冒险岛勇士的技能册，冒险之路还很长，请你继续加油吧！");
			cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行四转成为侠盗让我们热烈的祝福他/她吧！");
	    } else {
		cm.sendOk("你没有多的栏位请清空再来尝试一次!");
		cm.safeDispose();
		return;
	    }
	}
	}
    } else if (status == 2) {
	cm.sendNextPrev("#d#e永远不要忘记现在你得到的这一切都取决于你练了多少...");
    } else if (status == 3) {
	cm.sendNextPrev("#d#e我已经以你为荣...");
	cm.dispose();
    }
}
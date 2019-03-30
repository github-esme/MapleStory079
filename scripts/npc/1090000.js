/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

var status = 0;
var jobId;
var jobName;
var mapId


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("#d#e好的，等你考虑好了再来找我吧");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
	if (cm.getMapId() == 912010200 || cm.haveItem(4031059, 1)) {
        if (cm.getQuestStatus(6370) == 1) {
			cm.removeAll(4031059);
            cm.teachSkill(5221006, 0, 10);
            cm.forceCompleteQuest(6370);
        } else if (cm.getQuestStatus(6330) == 1) {
			cm.removeAll(4031059);
            cm.teachSkill(5121003, 0, 10);
            cm.forceCompleteQuest(6330);
        }
        cm.warp(120000101, 0);
		cm.sendOk("#d#e恭喜你完成了我的考验，现在你可以带着我给你的#r力量项链#k#d去魔法密林坐船再到长老公馆找三转教官了，他会给你第二阶段的考验。");
        cm.dispose();
	}
	if (cm.getJob() == 0) {
		if (cm.getPlayer().getLevel() >= 10) {
		 cm.sendNext("#r#e你真的要成为一位#b海盗#r吗？");
	    } else {
		cm.sendOk("#d#e很抱歉，你的等级还达不到转职的要求！");
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 500) { // 海盗
		if (cm.haveItem(4031012, 1)) {
			if (cm.haveItem(4031012, 1)) {
			status = 20;
			cm.sendNext("#d#e我已经从二转教官那边看到你完成了测试，现在你已经可以进行转职了");
		    } else {
			cm.sendOk("请去找 #r海盗转职教官#k.")
			cm.dispose();
		    }
		} else {
		    status = 10;
		    cm.sendNext("#d#e没想到你这么快已经30级了，你现在已经具备二转的资格，想进行转职吗？");
		}
	    } else if (cm.getPlayer().getLevel() >= 70 && cm.getJob() == 510 || cm.getJob() == 520) {
		if (cm.haveItem(4031059,1)) {
			cm.gainItem(4031057,1);
			cm.gainItem(4031059, -1);
			//cm.warp(211000001, 0);
			cm.sendOk("#d#e恭喜你完成了我的考验，现在你可以带着我给你的#r力量项链#k#d去魔法密林坐船再到长老公馆找三转教官了，他会给你第二阶段的考验。");
		} else {
			   if(cm.haveItem(4031057)){
						cm.sendOk("#e你还有什么事情吗？还不去找三转教官吗？");
					}
          
		     // cm.sendOk("你这么快已经到70级了，现在你必须去#r林中之城异次元之门#k打败我的分身给我黑符，听说在#r火独眼兽很多的地方#k");
			  cm.sendOk("#d#e好久不见,没想到你这么快已经到70级了,我知道你想完成第三次转职.但是你依然需要来证明自己.想完成第三次转职必须收集#r力量项链#d#e和#r智慧项链#d,想获得这两种东西,必须通过两次测试考验.现在我的第一个考验就是你必须去#b异次元之门#r(听说在火独眼兽很多的地方)#k#d打败我邪恶的分身从他身上获取黑符.拿回来给我.如果你做不到的话, 我劝你还是放弃转职的念头吧.");
		    //cm.startQuest(100101);
		}
		cm.dispose();
		} else if (cm.isQuestActive(6370)) {
			var dd = cm.getEventManager("KyrinTrainingGroundC");
            if (dd != null) {
                dd.startInstance(cm.getPlayer());
            } else {
                cm.sendOk("未知的错误请稍后在尝试。");
            }
		} else if (cm.isQuestActive(6330)) {
            var dd = cm.getEventManager("KyrinTrainingGroundV");
            if (dd != null) {
                dd.startInstance(cm.getPlayer());
            } else {
                cm.sendOk("未知的错误请稍后在尝试。");
			}				
	    } else {
		cm.sendOk("#d#e你好,我是海盗一转教官,请问你找我有什么事情？");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("#d#e一旦转职了海盗就不能反悔,如果不想转职请结束和我的对话.");
    } else if (status == 2) {
	cm.sendYesNo("#d#e最后再问你一次，你真的考虑好要成为一位#r海盗#d#e吗？");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
		cm.changeJob(500); // 海盗
		cm.resetStats(4, 4, 4, 4);
	}
	    cm.gainItem(1482014, 1);
	    cm.gainItem(1492014, 1);
	    cm.gainItem(2330000, 600);
	    cm.gainItem(2330000, 600);
	    cm.gainItem(2330000, 600);
	cm.sendOk("#d#e转职成功！你现在已经是一名海盗了");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNext("#d#e海盗的修炼之路应该很不容易吧？");
    } else if (status == 12) {
	cm.askAcceptDecline("#d#e但是前提我有一个条件，我必须先测试你,你准备好了？");
    } else if (status == 13) {
	cm.sendSimple("#d#e你想要转职成为什么职业？ \r\n#b\r\n#L0#拳手#l\r\n\r\n#L1#枪手#l#k");
	} else if (status == 14) {
	var jobName;
	if (selection == 0) {
	    jobName = "拳手";
		MapId = "108000502";
	} else if (selection == 1) {
	    jobName = "枪手";
		MapId = "108000500";
	}
	cm.sendYesNo("#d#e你真的要成为一位#r"+ jobName +"#k#d#e吗？");
	} else if (status == 15) {
	cm.warp(MapId);
	cm.sendOk("#d#e请用#r百裂拳(拳手)#d#e或者#r#e双弹射击(枪手)#d#e打章鱼收集15个#b#e结晶#k给我");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("#d#e你想要转职成为什么职业？ \r\n#b\r\n#L0#拳手#l\r\n\r\n#L1#枪手#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "拳手";
	    job = 510;
	} else if (selection == 1) {
	    jobName = "枪手";
	    job = 520;
	}
	cm.sendYesNo("#d#e你真的要成为一位#r" + jobName + "#k#d#e吗？");
    } else if (status == 23) {
	cm.changeJob(job);
    if(cm.haveItem(4031857) && cm.haveItem(4031012, 1)) {
	cm.gainItem(4031857, -15);
	cm.gainItem(4031012, -1);
	cm.sendOk("#d#e恭喜你转职成功！请开始你的冒险之旅吧！");
	cm.worldMessage("【转职信息】：玩家"+ cm.getChar().getName() +"成功二转为枪手,让我们热烈的祝福他/她吧！");
	cm.dispose();
	} else if (cm.haveItem(4031856) && cm.haveItem(4031012, 1)) {
	cm.gainItem(4031856, -15);
	cm.gainItem(4031012, -1);
	cm.sendOk("#d#e恭喜你转职成功！请开始你的冒险之旅吧！");
	cm.worldMessage("【转职信息】：玩家"+ cm.getChar().getName() +"成功二转为拳手,让我们热烈的祝福他/她吧！");
	cm.dispose();
	} else {
	cm.removeAll(4031857);
	cm.removeAll(4031856);
	cm.removeAll(4031012);
	cm.sendOk("#d#e恭喜你转职成功！请开始你的冒险之旅吧！");
	cm.worldMessage("【转职信息】：玩家"+ cm.getChar().getName() +"成功进行海盗二转,让我们热烈的祝福他/她吧！");
	cm.dispose();
    }
}
}
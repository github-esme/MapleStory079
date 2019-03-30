var status = 0;
var jobId;
var jobName;

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
        if (cm.getJob() == 0) {
            if (cm.getPlayer().getLevel() >= 8) {
                cm.sendNext("#r#e你真的要成为一位#b魔法师#r吗？");
            } else {
                cm.sendOk("#d#e很抱歉，你的等级还达不到转职的要求！");
                cm.dispose();
            }
        } else {
            if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 200) { // 法师
                if (cm.haveItem(4031012, 1)) {
                    if (cm.haveItem(4031012, 1)) {
                        status = 20;
                        cm.sendNext("#d#e我已经从二转教官那边看到你完成了测试，现在你已经可以进行转职了");
                    } else {
                        if (!cm.haveItem(4031009)) {
                            cm.gainItem(4031009, 1);
                        }
                        cm.sendOk("请去找 #r法师转职教官#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("#d#e没想到你这么快已经30级了，你现在已经具备二转的资格，想进行转职吗？");
                }
            } else if (cm.getPlayer().getLevel() >= 70 && (cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)) {
                if (cm.haveItem(4031059, 1)) {
                    cm.gainItem(4031057, 1);
                    cm.gainItem(4031059, -1);
                    //cm.warp(211000001, 0);
                    cm.sendOk("#d#e恭喜你完成了我的考验，现在你可以带着我给你的#r力量项链#k#d去魔法密林坐船再到长老公馆找三转教官了，他会给你第二阶段的考验。");
                } else {
					if(cm.haveItem(4031057)){
						cm.sendOk("#e你还有什么事情吗？还不去找三转教官吗？");
					}
                    cm.sendOk("#d#e好久不见,没想到你这么快已经到70级了,我知道你想完成第三次转职.但是你依然需要来证明自己.想完成第三次转职必须收集#r力量项链#d#e和#r智慧项链#d,想获得这两种东西,必须通过两次测试考验.现在我的第一个考验就是你必须去#b巫婆森林异次元之门#k#d打败我邪恶的分身从他身上获取黑符.拿回来给我.如果你做不到的话, 我劝你还是放弃转职的念头吧.");
                }
                cm.dispose();
            } else {
                cm.sendOk("#d#e你好,我是魔法师一转教官,请问你找我有什么事情？");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        cm.sendNextPrev("#d#e一旦转职了魔法师就不能反悔,如果不想转职请结束和我的对话.");
    } else if (status == 2) {
        cm.sendYesNo("#d#e最后再问你一次，你真的考虑好要成为一位#r魔法师#d#e吗？");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.changeJob(200); // 法师
			cm.resetStats(4, 4, 20, 4);
        }
        cm.gainItem(1372005, 1);
        cm.sendOk("#d#e转职成功！你现在已经是一名魔法师了");
        cm.dispose();
    } else if (status == 11) {
        //cm.sendNextPrev("你可以选择你要转职成为一位 #r巫师(火,毒)#k, #r巫师(冰,雷)#k 或 #r僧侣#k.");
		cm.sendNextPrev("#d#e好的，你现在可以选择要转职成为#r火毒法师#k#d,#r冰雷法师#k#d#e或者#r牧师");
    } else if (status == 12) {
        cm.askAcceptDecline("#d#e但是前提我有一个条件，我必须先测试你,你准备好了？");
    } else if (status == 13) {
        cm.gainItem(4031009, 1);
        //cm.warp(101020000);
        cm.sendOk("#d#e那请你带着我给你的推荐信先去#r西部岩山#d找#b二转转职教官，#d他会帮助你的！#r\r\n(请确保你的背包没有满,不然是拿不到我的推荐信的)");
        cm.dispose();
    } else if (status == 21) {
        //cm.sendSimple("#d#e你想要成为什么 ? #b\r\n#L0#火毒法师#l\r\n#L1#冰雷法师#l\r\n#L2#牧师#l#k");
		cm.sendSimple("#d#e你想要转职成为什么职业？ \r\n#b\r\n#L0#火毒法师#l\r\n#L1#冰雷法师#l\r\n#L2#牧师#l");
    } else if (status == 22) {
        if (selection == 0) {
            jobName = "火毒法师";
            jobId = 210; // FP
        } else if (selection == 1) {
            jobName = "冰雷法师";
            jobId = 220; // IL
        } else {
            jobName = "牧师";
            jobId = 230; // CLERIC
        }
        cm.sendYesNo("#d#e你真的要成为一位#r"+ jobName +"#k#d#e吗？");
    } else if (status == 23) {
		if(jobId == 210){
		 var jobName2 = "火毒法师";
	   }else if (jobId == 220){
		jobName2 = "冰雷法师";
	   } else{
		 jobName2 = "牧师"
	   }
        cm.changeJob(jobId);
        cm.gainItem(4031012, -1);
        cm.sendOk("#d#e恭喜你转职成功！请开始你的冒险之旅吧！");
	    cm.worldMessage("【转职信息】：玩家"+ cm.getChar().getName() +"成功二转为"+ jobName2 + ",让我们热烈的祝福他/她吧！");
        cm.dispose();
    }
}
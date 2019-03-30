var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
			text += "\t\t\t #e#d【欢迎进入在线签到】#k \r\n\r\n\t\t\t #k在线奖励分别为:#k\r\n\t\t\t #r1.特殊药水10个 \r\n \t\t\t 2.超级药水10个\r\n\t\t\t 3.喇叭5个\r\n\t\t\t 4.枫叶150个\r\n\t\t\t 5.黄金枫叶10个\r\n\t\t\t 6.点卷=1000点\r\n\t\t\t 7.点卷=2000点.\r\n"
			text += "\t\t#L1##r领取永久雇佣商人#v5030001#x1#l#k\r\n\r\n\r\n"//3
			text += "\t\t在线时长:#b" + cm.getPlayer().getGamePoints() + "分钟#k#n\t#e领取次数#k:#b" + cm.getPlayer().getGamePointsPD() + "次#n\r\n\r\n"		
	
			if(cm.getPlayer().getGamePoints() >= 15 && cm.getPlayer().getGamePointsPD() == 0){
					text += "\t\t#L2##r"+完成红+"在线时间超过15分钟！"+完成+"#v2000004#x30个\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 15 && cm.getPlayer().getGamePointsPD() > 0){
					text += "\r\n\t\t\t"+完成红+"#r在线时间超过15分钟！#l"+完成+"\r\n"//3
				} else {
					text += "\t\t\t"+正在进行中蓝+"#r在线时间超过15分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 30 && cm.getPlayer().getGamePointsPD() == 1){
					text += "\t\t#L3##r"+完成红+"在线时间超过30分钟！"+完成+"#v2000005#x30个.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 30 && cm.getPlayer().getGamePointsPD() > 1){
					text += "\r\n\t\t\t"+完成红+"#r在线时间超过30分钟！#l"+完成+"\r\n"//3
				} else {
					text += "\t\t\t"+正在进行中蓝+"#r在线时间超过30分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 45 && cm.getPlayer().getGamePointsPD() == 2){
					text += "\t\t#L4##r"+完成红+"在线时间超过45分钟！"+完成+"#v5076000#x6个.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 45 && cm.getPlayer().getGamePointsPD() > 2){
					text += "\r\n\t\t\t"+完成红+"#r在线时间超过45分钟！#l"+完成+"\r\n"//3
				} else {
					text += "\t\t\t"+正在进行中蓝+"#r在线时间超过45分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() == 3){
					text += "\t\t#L5##r"+完成红+"在线时间超过60分钟！"+完成+"#v4001126#x100个.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() > 3){
					text += "\r\n\t\t\t"+完成红+"#r在线时间超过60分钟！#l"+完成+"\r\n"//3
				} else {
					text += "\t\t\t"+正在进行中蓝+"#r在线时间超过60分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 75 && cm.getPlayer().getGamePointsPD() == 4){
					text += "\t\t#L6##r"+完成红+"在线时间超过75分钟！"+完成+"#v4000313#x20.#l\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 75 && cm.getPlayer().getGamePointsPD() > 4){
					text += "\r\n\t\t\t"+完成红+"#r在线时间超过75分钟！#l"+完成+"\r\n"//3 
				} else {
					text += "\t\t\t"+正在进行中蓝+"#r在线时间超过75分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 90 && cm.getPlayer().getGamePointsPD() == 5){
					text += "\t\t#L7##r"+完成红+"在线时间超过90分钟！"+完成+"点卷=100点#l\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 90 && cm.getPlayer().getGamePointsPD() > 5){
					text += "\r\n\t\t\t"+完成红+"#r在线时间超过90分钟！#l"+完成+"\r\n"//3
				} else {
					text += "\t\t\t"+正在进行中蓝+"#r在线时间超过90分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 6){
					text += "\t\t#L8##r"+完成红+"在线时间超过120分钟！"+完成+"点卷=200点#l\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 6){
					text += "\r\n\t\t\t"+完成红+"#r在线时间超过120分钟！#l"+完成+"\r\n"//3
				} else {
					text += "\t\t\t"+正在进行中蓝+"#r在线时间超过120分钟！#l"+正在进行中+"\r\n\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取永久雇佣商人！");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainItem(2000004, 10);//特殊药水
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了15分钟在线奖励！特殊药水10个.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(2000005, 10);//超级药水
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了30分钟在线奖励！超级药水10个.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5076000, 5);//道具喇叭
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了45分钟在线奖励！道具喇叭*5个.");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(4001126, 150);//枫叶
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了60分钟在线奖励！枫叶x150.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(4000313, 10);//棉花糖中介币
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了75分钟在线奖励！黄金枫叶10张.");
            cm.dispose();
        } else if (selection == 7) {
                cm.gainNX(+1000);
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了90分钟在线奖励！点卷=1000点.");
            cm.dispose();
        } else if (selection == 8) {
                cm.gainNX(+2000);
			cm.gainGamePointsPD(1);
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了120分钟在线奖励！点卷=2000点.");
            cm.dispose();
		}
    }
}



/*
	Red Sign - 101st Floor Eos Tower (221024500)
*/

var status = -1;    //初始状态值
var minLevel = 30;  // 设置队伍里最低等级
var maxLevel = 200; // 设置队伍里最高等级

var minPartySize = 2;  //设置最低人数
var maxPartySize = 6;   //设置最高人数

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		if (status == 0) {
			cm.dispose();
			return;
	}
		status--;
    }

    if (status == 0) {
		cm.removeAll(4001022); //回收次元通行证，玩家打开NPC对话框时执行
		cm.removeAll(4001023); //回收BOSS掉落的次元钥匙，玩家打开NPC对话框时执行
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("#e你们的队伍人数不够\r\n#r(至少2个人以上,跳箱子关点NPC默认通关)#k\r\n\r\n#d要求队伍人数" + minPartySize + "人以上,而且必须要有飞侠,每个人的等级在" + minLevel + "~" + maxLevel + "级之间 #b\r \n #L0 #我要兑换透明眼镜#k#r(全属性+20,HPMP+400)#k");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("如果你想做任务,请找你的#b队长#k跟我谈.#b\r \n #L0 #我要兑换透明眼镜#k#r(全属性+20,HPMP+400)#k");
	} else {
	    // Check if all party members are within PQ levels，对等级的验证
	    var party = cm.getParty().getMembers();  //获得队伍里的所有成员
	    var mapId = cm.getMapId();      //获得角色当前的地图ID
	    var next = true;
	    var levelValid = 0;          //校验值
	    var inMap = 0;               //是否在当前地图
	    var it = party.iterator();   //对队伍进行遍历

	    while (it.hasNext()) {        //进行循环，对队伍中每一个人进行等级和是否在当前地图的检查
			var cPlayer = it.next();   //变量放到cplayer
			if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
				levelValid += 1;    //如果在最低和最高等级之间 置为1，队伍成员校验OK
			} else {
				next = false;     //检验失败
			}
			if (cPlayer.getMapid() == mapId) {  //检查队员所在的地图是否在101
				inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
			}
	    }
		
	    if (party.size() > maxPartySize || inMap < minPartySize) {//队员是否在当前地图的校验
			next = false;  
	    }
	    if (next) { //都校验通过进入组队任务脚本
			var em = cm.getEventManager("LudiPQ"); //调用脚本 em是事件管理eventManager
			if (em == null) { //如果没LudiPQ.js
				cm.sendSimple("找不到脚本请联络GM#b\r\n#L0#我要兑换透明眼镜#k#r(全属性+20,HPMP+400)#k");
			} else {
				var prop = em.getProperty("state"); //返回组队任务是否有人的状态值
				if (prop.equals("0") || prop == null) { 
					em.startInstance(cm.getParty(), cm.getMap());  //开始进组队任务
					cm.removeAll(4001022);
					cm.removeAll(4001023);
					cm.dispose();
					return;
				} else {
					cm.sendSimple("其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。#b\r\n#L0#我要兑换透明眼镜#k#r(全属性+20,HPMP+400)#k");
				}
			}
	    } else {
			cm.sendSimple("你的队伍人数不够.\r\n\r\n#d要求队伍人数" + minPartySize + "人以上,而且必须要有飞侠,每个人的等级在" + minLevel + "~" + maxLevel + "级之间 #b\r \n #L0 #我要兑换透明眼镜#k#r(全属性+20,HPMP+400)#k" );
	    }
	}
    } else { //broken glass  //兑换眼镜
	  
		if (cm.haveItem(1022079,1)) { // 点装 透明方镜
			//cm.gainItem(1022073,,10,10,10,1000,1000,1,2,3,4,5,6,7,8);//力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔防,命中,回避,移动,跳跃
			cm.sendOk("你已经有#b透明眼镜#k了.");
		} else if (!cm.canHold(1022079,1)) {
			cm.sendOk("请空出一些装备栏空间。");
		} else if (cm.haveItem(4031854,5)) { 
			cm.removeAll(4031854);
			//cm.gainItem(4000313,200);
			cm.gainItem(1022079,20,20,20,20,400,400,0,0,0,0,0,0,0,0);
			cm.serverNotice("[" + cm.getPlayer().getName() + "]通过组队任务获得透明眼镜，恭喜他吧!");
		} else {
		   cm.sendOk("#e你的通关材料#v4031854##r某人的眼镜#k不足5个，请继续努力吧!#r");
		}
		cm.dispose();
    }
}

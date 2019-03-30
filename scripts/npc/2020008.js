/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
//BY MOOGRA
/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)
	Custom Quest 100100, 100102
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("#d#e好的，等您下定决心了再来找我吧.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    if (cm.getQuestStatus(6192) == 1) {
		if (cm.getParty() != null) {
		    var ddz = cm.getEventManager("ProtectTylus");
		    if (ddz == null) {
			cm.sendOk("未知的错误");
		    } else {
			var prop = ddz.getProperty("state");
			if (prop == null || prop.equals("0")) {
			    ddz.startInstance(cm.getParty(), cm.getMap());
			} else {
			    cm.sendOk("别人已经在努力保护Tylus，请稍后重试了一下.");
			}
		    }
		} else {
		    cm.sendOk("请队长来找我谈话！");
		}
	    } else if (cm.getQuestStatus(6192) == 2) {
		cm.sendOk("你保护了我。谢谢。我会教你的立场技巧.");
		if (cm.getJob() == 112) {
			if (cm.getPlayer().getMasterLevel(1121002) <= 0) {
				cm.teachSkill(1121002, 0, 10);
			}
		} else if (cm.getJob() == 122) {
			if (cm.getPlayer().getMasterLevel(1221002) <= 0) {
				cm.teachSkill(1221002, 0, 10);
			}
		} else if (cm.getJob() == 132) {
			if (cm.getPlayer().getMasterLevel(1321002) <= 0) {
				cm.teachSkill(1321002, 0, 10);
			}
		}
		}
		if (cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 112 || cm.getJob() == 122 || cm.getJob() == 132 || cm.getJob() == 2111) {	
	    cm.sendOk("#k#e战士修炼之路还很长,请加油！");
	    cm.dispose();
	    return;
		}
            if (!(cm.getJob()==110 || cm.getJob()==120 || cm.getJob()==130 || cm.getJob() == 2110)) {
				cm.sendOk("#d#e我不是你的转职教官，请你去找你的职业教官。");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getLevel() < 70) {
				cm.sendOk("#k#e你还没有到70级，不能进行战士第三次转职！");
				cm.dispose();
				return;		
            }	
			if (cm.haveItem(4031057, 1)){
				if(cm.haveItem(4031058, 1)){
				   cm.sendNext("#d#e没想到你能这么顺利的通过了神圣之石的考验!,好的,现在你已经具备第三次转职的资格！点击下一步完成你的三转之路吧.");	
				}else{ 
                    cm.sendNext("#d#e恭喜你通过了一转教官力量能力的考验到达我这里,但是这样子还不够,如果你想玩成第三次转职还需要进行智慧方面的考验.");	
				}				
            } else if (!(cm.haveItem(4031057,1))) {
				//cm.warp(102000003);
                cm.sendOk("#k#e请先去找一转教官#r武术教练#k完成你在金银岛的第一阶段考验再来找我。");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("你的技能点数还没点完..");
		} else {
                cm.sendOk("你还不能转职...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
				
				
                if (cm.getJob()==110) {
                    cm.changeJob(111);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("#e#r恭喜你成功转职为勇士！");
					cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行三转成为勇士让我们热烈的祝福他/她吧！");
                    cm.dispose();
                } else if (cm.getJob()==120) {
                    cm.changeJob(121);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("#e#r恭喜你成功转职为骑士！");
					cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行三转成为骑士让我们热烈的祝福他/她吧！");
                    cm.dispose();
                } else if (cm.getJob()==130) {
                    cm.changeJob(131);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("#e#r恭喜你成功转职为龙骑士！");
					cm.worldMessage("【转职快报】：恭喜玩家"+ cm.getChar().getName() +"进行三转成为龙骑士让我们热烈的祝福他/她吧！");
                    cm.dispose();
                } else if (cm.getJob()==2110) {
					cm.changeJob(2111);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("恭喜转职了!");
					cm.worldMessage("‘转职快报’：恭喜玩家."+ cm.getChar().getName() +"  成功狂狼勇士三转让我们热烈的祝福他/她吧！");
                    cm.dispose();
				}
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("#d#e你准备好接受关于智慧的测试考验了吗？");
            else
                cm.sendAcceptDecline("但是，我可以让你更加强大。虽然你必须证明不仅是你的实力，但你的知识。你准备好挑战了吗？");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.sendOk("#d#e好的,测试的内容是去雪原圣地找#r神圣的石头#d进行考验,证明你的智慧,你若通过了,它会给你智慧项链,等你拿到了你再来找我吧.");
                cm.dispose();
            }
        }
    }
}

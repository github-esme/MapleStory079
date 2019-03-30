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
            cm.sendOk("#d#e等您下定决心再来找我吧。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (cm.getJob() == 211 || cm.getJob() == 221 || cm.getJob() == 231 || cm.getJob() == 212 || cm.getJob() == 222 || cm.getJob() == 232) {	
	    cm.sendOk("#d#e你已经进行过三转，我已经没有办法再教会你什么了。");
	    cm.dispose();
	    return;
		}
            if (!(cm.getJob()==210 ||cm.getJob()==220||cm.getJob()==230)) {
		cm.sendOk("#d#e我不是你的转职教官，请你去找你的职业教官。");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getLevel() < 70) {
				cm.sendOk("#k#e你还没有到70级，不能进行魔法师第三次转职！");
				cm.dispose();
				return;		
            }	
			if (cm.haveItem(4031057, 1)){
                if(cm.haveItem(4031058, 1)){
				   cm.sendNext("#d#e没想到你竟然能通过了神圣之石的考验!,好的,现在你已经具备第三次转职的资格！点击下一步完成你的三转之路吧.");	
				}else{ 
                    cm.sendNext("#d#e恭喜你通过了一转教官的力量测试考验到达了我这里,但是这样子还不够,如果你想完成第三次转职还需要进行智慧方面的考验.");	
				}	
            } else if (!(cm.haveItem(4031057,1))) {
				cm.warp(101000003);
                cm.sendOk("#k#e请先去找一转教官#r汉斯#k完成你在金银岛的第一阶段考验再来找我。");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("你的技能点数还没点完..");
		} else {
                cm.sendOk("你还不能转职...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1)) {
                if (cm.getJob()==210) {
                    cm.changeJob(211);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("#e#r恭喜你成功三转为巫师（火,毒）！");
					cm.worldMessage("【转职信息】：恭喜玩家"+ cm.getChar().getName() +"进行三转成为巫师（火,毒）让我们热烈的祝福他/她吧！");
                    cm.dispose();
                } else if (cm.getJob()==220) {
                    cm.changeJob(221);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
                    cm.sendOk("#e#r恭喜你成功三转为巫师（雷,冰）！");
					cm.worldMessage("【转职信息】：恭喜玩家"+ cm.getChar().getName() +"进行三转成为巫师（雷,冰）让我们热烈的祝福他/她吧！");
					
                    cm.dispose();
                } else if (cm.getJob()==230) {
                    cm.changeJob(231);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
                    cm.sendOk("#e#r恭喜你成功三转为祭司！");
					cm.worldMessage("【转职信息】：恭喜玩家"+ cm.getChar().getName() +"进行三转成为祭司让我们热烈的祝福他/她吧！");
                    cm.dispose();
                }
            } else if (cm.haveItem(4031057, 1))
                cm.sendAcceptDecline("#d#e你准备好接受关于智慧的测试考验了吗？");
            else
                cm.sendAcceptDecline("但是，我可以让你更加强大。虽然你必须证明不仅是你的实力，但你的知识。你准备好挑战了吗？");
        } else if (status == 2) {
            if (cm.haveItem(4031057, 1)) {
                cm.sendOk("#d#e那好，请你现在去雪原圣地找#b神圣的石头#d#e测验，证明你的智慧，如果通过了把智慧项链交给我，如果失败了，那我无法给你进行第三次的转职。");
                cm.dispose();
            }
        }
    }
}

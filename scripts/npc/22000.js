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
/**
-- Odin JavaScript --------------------------------------------------------------------------------
	VIP Cab - Victoria Road : Lith Harbor (104000000)
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/
var status = 0;
var cost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 1 && mode == 0){
	    cm.sendNext("那你考虑好再来找我吧。");
	    cm.dispose();
	    return;	
    }
    if (mode == 1)
	    status++;
    else
	    status--;
    if (status == 0) {
	    cm.sendNext("你好！如果你觉得你勇气踏出这里我就会把你带到明珠港\n #b明珠港#k.");
    } else if (status == 1) {
		if (cm.haveItem(4031801) == true) {
			cm.sendYesNo("你带来了路卡斯的推荐信啊，我可以免费将你送到明珠港，你确定做好冒险的准备了吗？")
		} else {
			cm.sendYesNo("到了那边就要守得住磨难 #b1,50 金币#k?");
			cost = 150;
		}
    } else if (status == 2) {
		
		if (cm.haveItem(4031801) == true){
				cm.gainItem(4031801,-1);
				cm.warp(104000000, 0);
		} else {
			if (cm.getMeso() < cost) {
			    cm.sendNext("請確認你是否有足夠的楓幣!")
		    } else {
			    cm.gainMeso(-cost);
			    cm.warp(104000000, 0);
		    }
		}
		cm.dispose();
    }
}
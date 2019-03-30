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
var status = 0;
var zones = 0;
var names = Array("沉睡森林1", "沉睡森林2", "沉睡森林3");
var maps = Array(105040310, 105040312, 105040314);
var selectedMap = -1;

/*function start() {
    cm.sendNext("#d你想进入沉睡森林领取林中之城的勋章吗？");
    if (cm.getQuestStatus(2054))
        zones = 3;
    else if (cm.getQuestStatus(2053))
        zones = 2;
    else if (cm.getQuestStatus(2052))
        zones = 1;
    else
        zones = 4;  //原值是0
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("好吧，下次再见。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            if (zones == 4) //更改 4
                //cm.dispose();
				cm.warp(105040310,0);//加0是起点 ，不加0是终点
 				//cm.sendOk("#b沉睡森林一层和二层并不难.祝你好运.");
				//cm.dispose();
            else {
                var selStr = "它的动力让你自己将就深林里.#b";
                for (var i = 0; i < zones; i++)
                    selStr += "\r\n#L" + i + "#" + names[i] + "#l";
                cm.sendSimple(selStr);
            }
        } else if (status == 2) {
            cm.warp(maps[selection],0);
            cm.dispose();
        }
    }
}	*/


function start() {
    cm.sendNext("#d你想进入沉睡森林领取增加移动速度的勋章吗？");
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("好吧，下次再见。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            cm.warp(105040310,0);
			cm.sendOk("#r祝你好运,通关第二层你将会获得#v1142018##b林中之城爱心使者勋章.#r这简直没什么难度,等于白送.");
            cm.dispose();
        } else if (status == 2) {
            cm.warp(maps[selection],0);
            cm.dispose();
        }
    }
}
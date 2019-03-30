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
var qChars = new Array ("Q1: 在冒险岛中，从等级1到等级2需要多少经验值？#10#12#15#20#3",
    "Q1: 根据不同职业为了第1次转职所要求的能力，被不正确叙述的是哪一个？#战士 35 力量#飞侠 20 幸运#法师 20 智力#弓箭手 25 敏捷#2",
    "Q1: 被怪物攻击时特别的异常状态没有被正确说明的是哪一个？#虚弱 — 移动速度降低#封印 - 不能使用技能#黑暗 - 命中下降#诅咒 - 减少经验#1",
    "Q1: 根据不同职业的第1次转职必须条件 敏捷25 正确的是哪一个？#战士#弓箭手#法师#飞侠#2");
var qItems = new Array( "Q2: 下列怪物中，哪组怪物与打倒它所能得到的战利品是正确对应关系的？#大幽灵-幽灵头带#蝙蝠 — 蝙蝠翅膀#煤泥 - 粘糊糊的泡泡#猪 - 丝带#2",
    "Q2: 下列怪物中，哪组怪物与打倒它所能得到的战利品是不正确对应关系的？#漂漂猪- 蝴蝶结#煤泥 - 煤泥泡沫#绿色蜗牛 - 绿色蜗牛壳#食人花——食人花叶子#4",
    "Q2: 冒险岛中下列药品中，哪组药品与功效是正确对应关系的？#白色药水 - 回复 250 HP#超级药水 — HP400恢复#?红色药水 - 回复 100 HP#披萨 — HP400恢复#4",
    "Q2: 冒险岛中下列药品中，哪组药水可以回复HP50%MP50%？#特殊药水#超级药水#大西瓜#矿泉水#1",
    "Q2: 冒险岛中下列药品中，哪组药品与功效是不正确对应关系的？#蓝色药水 - 回复 100 MP#活力药水 - 回复 300 MP#清晨之露——3000MP恢复#红色药水 - 回复 50 HP#3");
var qMobs = new Array(  "Q3: 绿蘑菇、蓝水灵、斧木妖、三眼章鱼，哪个是等级最高的怪物？#绿蘑菇#三眼章鱼#蓝水灵#斧木妖#4",
    "Q3: 明珠港没有哪个怪物？#小石球#蜗牛#蓝蜗牛#蘑菇仔#1",
    "Q3: 去天空之城的船上会出现哪个怪物？#扎昆#蝙蝠魔#小石球#海龙王#2",
    "Q3: 在冰封雪域没有哪个怪物？#野狼#雪人#小雪球#黑鳄鱼#4",
    "Q3: 会飞的怪物是什么？#巫婆#天线宝宝#小雪球#小老鼠#1",
    "Q3: 在废弃都市见不到的NPC是谁？#休咪#陌生的女人#吉姆#鲁克#4",
    "Q3: 在天空之城看不到的NPC是谁？#斯皮罗纳#秀兹#妖精珂丽尔#莉萨#2");
var qQuests = new Array("Q4: 下面哪个职业不是三转的职业？#巫师#射手#圣骑士#龙骑士#3",
    "Q4: 能够反复执行的任务是哪一个？#妖精的玻璃鞋#上古魔书#克林的记忆#为复活做准备#1",
    "Q4: 为了进行2次转职收集好30个黑玉后转职教官会给你的物品是什么#英雄证书#黑珠#荣誉证书#力量项链#1",
    "Q4: 冒险岛最初遇见的NPC是谁?#丽娜#希娜#斯坦#克鲁斯特#2",
    "Q4: 冒险岛是哪个公司代理的#腾讯#盛大#世纪天成#任天堂#2",
    "Q4: 在冒险岛中登场的药和功效正确连线的是哪一个?#披萨-HP400#刨冰-MP1500#烤鳗鱼-HP800#特殊药水-HPMP40%#1");
var qTowns = new Array( "Q5: 射手村的玛雅为了治好自己的病让你给她的物品是哪一个#奇妙的药#圣水#凯里的胶囊#特殊药水#1",
    "Q5: 如果开外挂被发现的处理方式是??#禁止登陆7天#禁止登陆180天#永久封停#不处理#3",
    "Q5: 扎昆是在哪里被召唤#扎昆祭坛#玩具城#天空之城#2水下世界#1",
    "Q5: 童话村右边第1个地图兔子掉落的物品为？#泡米#兔子耳朵#捣米棒#麻绳#3",
    "Q5: 在金银岛的勇士部落不能看到的NPC是谁？#麦吉#酋长#索菲亚#易德#4",
    "Q5: 本服的版本为？#Ver72#Ver105#Ver69#Ver79#4");
var correctAnswer = 0;

function start() {
	if (cm.haveItem(4031058, 1)) {
		cm.sendOk("#h #,你已经有了 #t4031058# 不要让废我时间.");
		cm.dispose();
	}
    if ((cm.haveItem(4031057, 1))) {
        cm.sendNext("#d#e看来你已经走了很远到达现在这个阶段，这将会是你进行第三次转职的最后一次考验。");
    } else{
	   cm.sendOk("请问你找我有什么事吗？");
	   cm.dispose();
	}
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.sendOk("#d#e不通过我的考验你是无法进行三转的。");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1)
            cm.sendNextPrev("#d#e想通过我的智慧能力测试并不是一件很简单的事情，这需要你具备很深的关于冒险岛这个游戏的相关知识。如果你准备好了，就请继续下一步吧。但是每次一次答题你都必须给我1个#v4005004#，然后我将会让你试着回答5个问题,若5个问题都答对，我会给你#v4031058##r智慧项链#k#d作为这次测试通过的证明");
        else if (status == 2) {
            if (!cm.haveItem(4005004)) {
                cm.sendOk("#d#e你没有#k黑暗水晶#k，#d#e不能让你答题。");
                cm.dispose();
            } else {
                cm.gainItem(4005004, -1);
                cm.sendSimple("#d#e智慧测验开始请接受挑战吧！#k\r\n\r\n" + getQuestion(qChars[Math.floor(Math.random() * qChars.length)]));
                status = 2;
            }
        } else if (status == 3) {
            if (selection == correctAnswer)
                cm.sendOk("#r#e恭喜你答对了！是否继续下一题？");
            else {
                cm.sendOk("#r#e对不起！你答错了。\r\n很抱歉，你必须在给我一个#v4005004##r#e才可以继续进行挑战！");
                cm.dispose();
            }
        } else if (status == 4)
            cm.sendSimple("#d#e智慧测验开始请接受挑战吧！#k\r\n\r\n" + getQuestion(qItems[Math.floor(Math.random() * qItems.length)]));
        else if (status == 5) {
            if (selection == correctAnswer)
                cm.sendOk("#r#e恭喜你答对了！是否继续下一题？");
            else {
                cm.sendOk("#r#e对不起！你答错了。\r\n很抱歉，你必须在给我一个#v4005004##r#e才可以继续进行挑战！");
                cm.dispose();
            }
        } else if (status == 6) {
            cm.sendSimple("#d#e智慧测验开始请接受挑战吧！#k\r\n\r\n" + getQuestion(qMobs[Math.floor(Math.random() * qMobs.length)]));
            status = 6;
        } else if (status == 7) {
            if (selection == correctAnswer)
                cm.sendOk("#r#e恭喜你答对了！是否继续下一题？");
            else {
                cm.sendOk("#r#e对不起！你答错了。\r\n很抱歉，你必须在给我一个#v4005004##r#e才可以继续进行挑战！");
                cm.dispose();
            }
        } else if (status == 8)
            cm.sendSimple("#d#e智慧测验开始请接受挑战吧！#k\r\n\r\n" + getQuestion(qQuests[Math.floor(Math.random() * qQuests.length)]));
        else if (status == 9) {
            if (selection == correctAnswer) {
                cm.sendOk("#r#e恭喜你答对了！是否继续下一题？");
                status = 9;
            } else {
                cm.sendOk("#r#e对不起！你答错了。\r\n很抱歉，你必须在给我一个#v4005004##r#e才可以继续进行挑战！");
                cm.dispose();
            }
        } else if (status == 10) {
            cm.sendSimple("#d#e最后一个问题了，智慧测验开始请接受挑战吧！#k\r\n\r\n" + getQuestion(qTowns[Math.floor(Math.random() * qTowns.length)]));
            status = 10;
        } else if (status == 11) {
            if (selection == correctAnswer) {
                cm.gainItem(4031058, 1);
				//cm.warp(211000001, 0);
                cm.sendOk("#d#e恭喜你太强大了！\r\n拿着智慧项链#v4031058#赶紧去找你的转职教官完成三转吧");
                cm.dispose();
            } else {
                cm.sendOk("#r#e太可惜了，差一题就可以通过测试了！不过没事，请继续加油。还有就是你必须在给我一个#v4005004##r#e才可以继续进行挑战！");
                cm.dispose();
            }
        }
    }
}
function getQuestion(qSet){
    var q = qSet.split("#");
    var qLine = q[0] + "\r\n\r\n#L0#" + q[1] + "#l\r\n#L1#" + q[2] + "#l\r\n#L2#" + q[3] + "#l\r\n#L3#" + q[4] + "#l";
    correctAnswer = parseInt(q[5],10);
    correctAnswer--;
    return qLine;
}
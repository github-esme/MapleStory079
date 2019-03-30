var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
			text += "\t\t\t  #e【欢迎来到组队传送】\r\n   #b#e (组队任务可获得大量经验和高属性装备)#k#n\r\n#r#e (目前仅做了列表展示，具体奖励等飞熊大佬更新)    "
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            text += "#L1##e#d" + 蓝色箭头 + "废弃都市组队(3人)#r#e(21~30级)#e#d  #b#e#v1102071# #k经验4W#e#d#l\r\n\r\n#L2##d" + 蓝色箭头 + "怪物嘉年华(4人)#r#e(30~50级)#e#d  #b#e #v1122007# #v1012270##k经验25W#e#d#l\r\n\r\n"//3
            text += "#L3##d" + 蓝色箭头 + "玩具塔组队(2人)#r#e(30~50级)#e#d   #b#e#v1022073##k经验55W#e#d#l\r\n\r\n#L4##d" + 蓝色箭头 + "通天塔组队(2人)#r#e(50~60级)#e#d   #b#e#v1082232##v1072455##k经验75W#e#d#l\r\n\r\n"//3
            //text += "#L5##d" + 蓝色箭头 + "拯救老海盗(1人)#r#e(60~75级)#e#d   #b#e#v1002571##k经验60W#e#d#l\r\n\r\n#L6##d" + 蓝色箭头 + "毒雾森林组队(1人)#r#e(75~90级)#e#d #b#e#v1032061##e#d#l#k经验100W\r\n\r\n"//3
            
            //text += "#L9##d" + 蓝色箭头 + "英语学院副本#l\r\n\r\n"//3
            //text += "#L10##d" + 蓝色箭头 + "罗密欧朱丽叶(2人)#r#e(90以上)#e#d#b#e#v1050018##v1051017##k经验300W#e#d#l\r\n\r\n"//3
			text += "#L7##d" + 蓝色箭头 + "#b#e【特殊】奈特的金字塔(1人)#r#e(无限制)#e#d  #b#e#v1132012##e#d#l\r\n\r\n"//3
            //text += "#L8##d" + 蓝色箭头 + "遗址公会对抗战(家族副本)#l\r\n\r\n"//3
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += "#L11##dLv120.千年树精王遗迹Ⅱ#l\r\n\r\n"//3
            //text += "#L12##dLv130.人偶师BOSS挑战#l\r\n\r\n"//3
            //text += "" + 蓝色箭头 + "#L13##rLv120级以上.绯红副本挑战#l\r\n\r\n"//3
            //text += "" + 蓝色箭头 + "#L14##rLv140级以上.御姐副本挑战#l\r\n\r\n"//3
            //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //月妙组队副本
            cm.warp(103000000,0);
            cm.dispose();
        } else if (selection == 2) {  //废弃组队副本
            cm.warp(220000000,0);
            cm.dispose();
        } else if (selection == 3) { //玩具组队副本
            cm.warp(221024500,0);
            cm.dispose();
        } else if (selection == 4) {//天空组队副本
            cm.warp(200080101,0);
            cm.dispose();
        } else if (selection == 5) {//毒物组队副本
            cm.warp(251010404,0);
            cm.dispose();
        } else if (selection == 6) {//海盗组队副本
          
			cm.warp(300030100,0);
            cm.dispose();
        } else if (selection == 7) {//罗密欧与朱丽叶组队副本
			cm.warp(926010000,0);
            cm.dispose();
        } else if (selection == 8) {//遗址公会对抗战
			cm.warp(101030104);
            cm.dispose();
        } else if (selection == 10) {//英语学院副本
            cm.warp(261000011,0);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 11) {//千年树精王遗迹
            cm.warp(541020700);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 12) {//人偶师BOSS挑战
            cm.warp(910510001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 13) {//绯红
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("本地图限制等级120级。您的能力没有资格挑战绯红副本");
                cm.dispose();
              }else{
			cm.warp(803001200);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//御姐
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("本地图限制等级140级。您的能力没有资格挑战御姐副本");
                cm.dispose();
              }else{
			cm.warp(803000505);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 10) {//.怪物嘉年华
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        }
    }
}



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
   cm.sendSimple("#e#d您好，欢迎来到#r冒险岛的世界#k，#d我是便捷售货员#k\r\n #L1#日常用品#l #L4#职业武器#l #L6#职业防具#l\r\n #L3#戒指专卖#l #L2#卷轴商人#l #L13#枫叶系列  ");//#L5#时尚椅子#l #L11#召唤商店 #L12#召唤BOSS  \r\n #L13#枫叶系列 #L8#饰品腰带 #L9#头盔耳环#l\r\n  #L2#卷轴商人#l
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e游戏中的金币完全可以靠努力自己赚取，自由市场开放金币兑换系统，如有问题可在QQ群交流");
            cm.dispose();
    }else if  (selection == 1) {
           cm.openShop(30);
		       cm.dispose();
    }else if  (selection == 4) {
           cm.openShop(74);
		       cm.dispose();
    }else if  (selection == 6) {
           cm.openShop(63);
		       cm.dispose(); 
    }else if  (selection == 2) {
           cm.openShop(109);
		       cm.dispose(); 
    }else if  (selection == 5) {
           cm.openShop(108);
		       cm.dispose();
    }else if  (selection == 3) {
           cm.openShop(104);
		       cm.dispose();
    }else if  (selection == 7) {
           cm.openShop(110);
		       cm.dispose(); 
    }else if  (selection == 8) {
           cm.openShop(111);
		       cm.dispose();
    }else if  (selection == 9) {
           cm.openShop(93);
		       cm.dispose();
    }else if  (selection == 10) {
           cm.openShop(66);
                       cm.dispose();
    }else if  (selection == 11) {
           cm.openShop(112);cm.dispose();
    }else if  (selection == 12) {
           cm.openNpc(2071000, 0);
    }else if  (selection == 13) {
           cm.openShop(103);
		   cm.dispose();
      

}
}
}
}


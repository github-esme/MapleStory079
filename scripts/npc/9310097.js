//odinms_MS
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r��������#bϵ��#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ����:"+ cm.getMeso() + "\r\n====================================================\r\n#k�ۣ����ۣ�˭���ҳ����˰����һ������ģ�\r\n\r\n�����ƣ����������У�\r\n#k#r#e��Щ�����þ͵���Ʒ���˰ɣ�������ֵǮ��#n\r\n\r\n#L1##r#e������ʦ�����������㡣����#b#n\r\n\r\n#L2#��˵ð�յ����ֽ���ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L3#��˵ð�յ����ָ���ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L4#��˵ð�յ����ֶ�����ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L5#��˵ð�յ��̵���ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L6#��˵ð�յ����ȣ�ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L7#��˵ð�յ�ǹ��ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L8#��˵ð�յ�����ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L9#��˵ð�յ���ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L10#��˵ð�յ�ȭ�ף�ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L11#��˵ð�յ�ָ�ڣ�ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L12#��˵ð�յ���ǹ��ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L13#��˵ð�յ�˫�ֽ���ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L14#��˵ð�յ�˫�ָ���ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L15#��˵ð�յ�˫�ֶ�����ȫ����300==#r500��#k#v4000313#��#b#n\r\n\r\n#L16#��˵ð�յ�ì��ȫ����300==#r500��#k#v4000313#��");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b       ��������Ը��#n#d\r\n====================================================#k\r\nԭ���Ƿ�����ʦ�����ѣ��һ��һᣬ��ʦ����ɺã�#k#d\r\n====================================================#k\r\n����˵����������֪�����Ҵ�С����һ��Ը��������������������ɵķ��裬���������ˣ���Ҳ�ɲ����ˡ�����#d\r\n====================================================#k\r\n��������������ɵķ��裬#r������ݴ��#k�����ܰ���ʵ�����Ը����?#k#d\r\n====================================================#k\r\n�������#r�������ݵ��Ͽ�#k������ֻ��һ���ӣ��Ⱳ�Ӷ�ֵ�ˣ�#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ����ֽ�.");
                cm.gainItem(1302192,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ����ֽ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ����ָ�.");
                cm.gainItem(1312098,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ����ָ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ����ֶ���.");
                cm.gainItem(1322138,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ����ֶ�������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ��̵�.");
                cm.gainItem(1332168,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ��̵�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�����.");
                cm.gainItem(1372117,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ����ȣ���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�ǹ.");
                cm.gainItem(1432117,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�ǹ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 8){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ���.");
                cm.gainItem(1452147,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 9){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ���.");
                cm.gainItem(1462136,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ��󣡣�");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 10){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�ȭ��.");
                cm.gainItem(1472159,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�ȭ�ף���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 11){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�ָ��.");
                cm.gainItem(1482120,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�ָ�ڣ���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 12){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ���ǹ.");
                cm.gainItem(1492119,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ���ǹ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 13){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�˫�ֽ�.");
                cm.gainItem(1402129,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�˫�ֽ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 14){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�˫�ָ�.");
                cm.gainItem(1412087,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�˫�ָ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 15){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�˫�ֶ���.");
                cm.gainItem(1422089,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�˫�ֶ�������");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
                  }else if(selection == 16){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e��ϲ�����ȫ����300�Ĵ�˵ð�յ�ì.");
                cm.gainItem(1442154,300,300,300,300,300,300,300,300,150,150,150,150,0,0);
                cm.gainItem(4000313,-500);
                cm.����(3,"������word�磡����ϲ�������ȫ����300�Ĵ�˵ð�յ�ì����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ļƽ��Ҷ���й���,��Ŭ���ռ���.");
                cm.dispose();	 
                  }
             }
	}
    }
}
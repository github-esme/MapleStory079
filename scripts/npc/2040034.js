/*
	Red Sign - 101st Floor Eos Tower (221024500)
*/

var status = -1;    //��ʼ״ֵ̬
var minLevel = 30;  // ���ö�������͵ȼ�
var maxLevel = 200; // ���ö�������ߵȼ�

var minPartySize = 2;  //�����������
var maxPartySize = 6;   //�����������

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
		cm.removeAll(4001022); //���մ�Ԫͨ��֤����Ҵ�NPC�Ի���ʱִ��
		cm.removeAll(4001023); //����BOSS����Ĵ�ԪԿ�ף���Ҵ�NPC�Ի���ʱִ��
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("#e���ǵĶ�����������\r\n#r(����2��������,�����ӹص�NPCĬ��ͨ��)#k\r\n\r\n#dҪ���������" + minPartySize + "������,���ұ���Ҫ�з���,ÿ���˵ĵȼ���" + minLevel + "~" + maxLevel + "��֮�� #b\r \n #L0 #��Ҫ�һ�͸���۾�#k#r(ȫ����+20,HPMP+400)#k");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("�������������,�������#b�ӳ�#k����̸.#b\r \n #L0 #��Ҫ�һ�͸���۾�#k#r(ȫ����+20,HPMP+400)#k");
	} else {
	    // Check if all party members are within PQ levels���Եȼ�����֤
	    var party = cm.getParty().getMembers();  //��ö���������г�Ա
	    var mapId = cm.getMapId();      //��ý�ɫ��ǰ�ĵ�ͼID
	    var next = true;
	    var levelValid = 0;          //У��ֵ
	    var inMap = 0;               //�Ƿ��ڵ�ǰ��ͼ
	    var it = party.iterator();   //�Զ�����б���

	    while (it.hasNext()) {        //����ѭ�����Զ�����ÿһ���˽��еȼ����Ƿ��ڵ�ǰ��ͼ�ļ��
			var cPlayer = it.next();   //�����ŵ�cplayer
			if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
				levelValid += 1;    //�������ͺ���ߵȼ�֮�� ��Ϊ1�������ԱУ��OK
			} else {
				next = false;     //����ʧ��
			}
			if (cPlayer.getMapid() == mapId) {  //����Ա���ڵĵ�ͼ�Ƿ���101
				inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
			}
	    }
		
	    if (party.size() > maxPartySize || inMap < minPartySize) {//��Ա�Ƿ��ڵ�ǰ��ͼ��У��
			next = false;  
	    }
	    if (next) { //��У��ͨ�������������ű�
			var em = cm.getEventManager("LudiPQ"); //���ýű� em���¼�����eventManager
			if (em == null) { //���ûLudiPQ.js
				cm.sendSimple("�Ҳ����ű�������GM#b\r\n#L0#��Ҫ�һ�͸���۾�#k#r(ȫ����+20,HPMP+400)#k");
			} else {
				var prop = em.getProperty("state"); //������������Ƿ����˵�״ֵ̬
				if (prop.equals("0") || prop == null) { 
					em.startInstance(cm.getParty(), cm.getMap());  //��ʼ���������
					cm.removeAll(4001022);
					cm.removeAll(4001023);
					cm.dispose();
					return;
				} else {
					cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�#b\r\n#L0#��Ҫ�һ�͸���۾�#k#r(ȫ����+20,HPMP+400)#k");
				}
			}
	    } else {
			cm.sendSimple("��Ķ�����������.\r\n\r\n#dҪ���������" + minPartySize + "������,���ұ���Ҫ�з���,ÿ���˵ĵȼ���" + minLevel + "~" + maxLevel + "��֮�� #b\r \n #L0 #��Ҫ�һ�͸���۾�#k#r(ȫ����+20,HPMP+400)#k" );
	    }
	}
    } else { //broken glass  //�һ��۾�
	  
		if (cm.haveItem(1022079,1)) { // ��װ ͸������
			//cm.gainItem(1022073,,10,10,10,1000,1000,1,2,3,4,5,6,7,8);//����,����,����,����,HP,MP,������,ħ����,������,ħ��,����,�ر�,�ƶ�,��Ծ
			cm.sendOk("���Ѿ���#b͸���۾�#k��.");
		} else if (!cm.canHold(1022079,1)) {
			cm.sendOk("��ճ�һЩװ�����ռ䡣");
		} else if (cm.haveItem(4031854,5)) { 
			cm.removeAll(4031854);
			//cm.gainItem(4000313,200);
			cm.gainItem(1022079,20,20,20,20,400,400,0,0,0,0,0,0,0,0);
			cm.serverNotice("[" + cm.getPlayer().getName() + "]ͨ�����������͸���۾�����ϲ����!");
		} else {
		   cm.sendOk("#e���ͨ�ز���#v4031854##rĳ�˵��۾�#k����5���������Ŭ����!#r");
		}
		cm.dispose();
    }
}

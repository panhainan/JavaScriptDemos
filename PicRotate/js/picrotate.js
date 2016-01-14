/**
 * Created by phn on 2016/1/14.
 */
window.onload = init;
//������Ҫ�����ֻ���ͼƬ������
var rotateLength = 5;
//������ͼƬ�ĵ�ַ��ͼƬ������
var picArr = new Array('snow.jpg', 'sun.jpg', 'land.jpg', 'green.jpg', 'mounting.jpg');
var picTxt = new Array('�����ѩɽ', '���ߵ�Ϧ��', '�ɺԵĴ��', '���̵�����', 'ɭ�ֺ�ɽ��');
var picLink = new Array('https://baidu.com/s?wd=snow', 'https://baidu.com/s?wd=sun', 'https://baidu.com/s?wd=land',
    'https://baidu.com/s?wd=green', 'https://baidu.com/s?wd=mounting')

var picId = 0;
var turnLiId = 0;

function init() {
    initLi();
    turn();
    rotate();
}

//��ʼ��ͼƬ����ĵ�,����֮������ô������Ϊ�˺�html�ֿ��������޸��Žű���̡�
function initLi() {
    var ul = document.getElementById("rotatePoint");
    for (var i = 0; i < rotateLength; i++) {
        ul.appendChild(document.createElement("li"));
    }
}

//ͼƬ�ֻ�
function rotate() {
    setImg(picId);
    setLi(picId);
    picId++;
    if (picId >= rotateLength) {
        picId = 0;
    }
    setTimeout(rotate, 3 * 1000);
}

//����ͼƬ�ֻ��ĸı����
function setImg(picId) {
    var thisImg = document.getElementById("rotateImg");
    var thisLink = thisImg.parentNode;
    thisImg.src = "./images/" + picArr[picId];
    thisImg.alt = picTxt[picId];
    thisImg.title = picTxt[picId];
    thisLink.href = picLink[picId];
}


//����ͼƬ����ĵ�ı���ɫ�ı����
function setLi(picId) {
    var ul = document.getElementById("rotatePoint");
    var lis = ul.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = "#fff";
    }
    lis[picId].style.backgroundColor = "#A3A3A4";
}

//�������Һ�ͼƬ����ĵ�ĵ���¼�
function turn() {
    document.getElementById("turnleft").onclick = turnleft;
    document.getElementById("turnright").onclick = turnright;

    //���ͼƬ����ĵ��ֻ�ͼƬ
    var lis = document.getElementById("rotatePoint").getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        //��û�㶮���Ϊʲô��ʵ�����Ч��
        (function (x) {
            lis[x].onclick = function () {
                setImg(x);
                setLi(x);
            }
        })(i);
    }
}
//����ֻ���һ��ͼƬ
function turnleft() {
    picId--;
    if (picId < 0) {
        picId = rotateLength - 1;
    }
    setImg(picId);
    setLi(picId);
}
//����ֻ���һ��ͼƬ
function turnright() {
    picId++;
    if (picId >= rotateLength) {
        picId = 0;
    }
    setImg(picId);
    setLi(picId);
}
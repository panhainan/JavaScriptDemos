/**
 * Created by phn on 2016/1/14.
 */
window.onload = init;
//根据需要设置轮换的图片的张数
var rotateLength = 5;
//以下是图片的地址和图片的链接
var picArr = new Array('snow.jpg', 'sun.jpg', 'land.jpg', 'green.jpg', 'mounting.jpg');
var picTxt = new Array('冰冷的雪山', '海边的夕阳', '干涸的大地', '葱绿的丘陵', '森林和山脉');
var picLink = new Array('https://baidu.com/s?wd=snow', 'https://baidu.com/s?wd=sun', 'https://baidu.com/s?wd=land',
    'https://baidu.com/s?wd=green', 'https://baidu.com/s?wd=mounting')

var picId = 0;
var turnLiId = 0;

function init() {
    initLi();
    turn();
    rotate();
}

//初始化图片下面的点,这里之所以这么设置是为了和html分开，即“无干扰脚本编程”
function initLi() {
    var ul = document.getElementById("rotatePoint");
    for (var i = 0; i < rotateLength; i++) {
        ul.appendChild(document.createElement("li"));
    }
}

//图片轮换
function rotate() {
    setImg(picId);
    setLi(picId);
    picId++;
    if (picId >= rotateLength) {
        picId = 0;
    }
    setTimeout(rotate, 3 * 1000);
}

//设置图片轮换的改变情况
function setImg(picId) {
    var thisImg = document.getElementById("rotateImg");
    var thisLink = thisImg.parentNode;
    thisImg.src = "./images/" + picArr[picId];
    thisImg.alt = picTxt[picId];
    thisImg.title = picTxt[picId];
    thisLink.href = picLink[picId];
}


//设置图片下面的点的背景色改变情况
function setLi(picId) {
    var ul = document.getElementById("rotatePoint");
    var lis = ul.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = "#fff";
    }
    lis[picId].style.backgroundColor = "#A3A3A4";
}

//设置左右和图片下面的点的点击事件
function turn() {
    document.getElementById("turnleft").onclick = turnleft;
    document.getElementById("turnright").onclick = turnright;

    //点击图片下面的点轮换图片
    var lis = document.getElementById("rotatePoint").getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        //还没搞懂这个为什么会实现这个效果
        (function (x) {
            lis[x].onclick = function () {
                setImg(x);
                setLi(x);
            }
        })(i);
    }
}
//点击轮换下一张图片
function turnleft() {
    picId--;
    if (picId < 0) {
        picId = rotateLength - 1;
    }
    setImg(picId);
    setLi(picId);
}
//点击轮换上一张图片
function turnright() {
    picId++;
    if (picId >= rotateLength) {
        picId = 0;
    }
    setImg(picId);
    setLi(picId);
}
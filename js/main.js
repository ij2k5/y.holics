$(document).ready(function(){
    var currentPosition = parseInt($(".quickmenu").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop();
        $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},1000);
    });
});


let observer = new IntersectionObserver((e)=>{
    e.forEach((texts)=>{
        if (texts.isIntersecting){
            texts.target.style.opacity = 1;
            texts.target.style.padding = 0;
        } else {
            texts.target.style.opacity = 0;
            texts.target.style = "";
        }
    })
})

let b = document.querySelectorAll('b')
let a = document.querySelectorAll('a')
let div = document.querySelectorAll('div')
let ul = document.querySelectorAll('ul')
observer.observe(b[0])
observer.observe(b[1])
observer.observe(b[2])
observer.observe(b[3])
observer.observe(b[4])
observer.observe(b[5])
observer.observe(b[6])
observer.observe(b[7])
observer.observe(b[8])
observer.observe(b[9])
observer.observe(b[10])
observer.observe(b[11])
observer.observe(b[12])
observer.observe(b[13])
observer.observe(b[14])
observer.observe(b[15])
observer.observe(b[16])
observer.observe(b[17])
observer.observe(b[18])

observer.observe(ul[1])

observer.observe(div[15])
observer.observe(div[18])
observer.observe(div[21])
observer.observe(div[24])
observer.observe(div[27])
observer.observe(div[30])
observer.observe(div[33])
observer.observe(div[36])
observer.observe(div[39])
observer.observe(div[42])
observer.observe(div[45])
observer.observe(div[48])
observer.observe(div[51])
observer.observe(div[54])
observer.observe(div[57])
observer.observe(div[60])

observer.observe(a[16])
observer.observe(a[17])
observer.observe(a[18])
observer.observe(a[19])
observer.observe(a[20])
observer.observe(a[21])
observer.observe(a[22])
observer.observe(a[23])
observer.observe(a[24])
observer.observe(a[25])
observer.observe(a[26])
observer.observe(a[27])

observer.observe(a[28])
observer.observe(a[29])
observer.observe(a[30])
observer.observe(a[31])
observer.observe(a[32])
observer.observe(a[33])
observer.observe(a[34])
observer.observe(a[35])

observer.observe(a[36])
observer.observe(a[37])
observer.observe(a[38])
observer.observe(a[39])
observer.observe(a[40])
observer.observe(a[41])
observer.observe(a[42])
observer.observe(a[43])
observer.observe(a[44])
observer.observe(a[45])
observer.observe(a[46])
observer.observe(a[47])
observer.observe(a[48])
observer.observe(a[49])
observer.observe(a[50])

observer.observe(a[51])
observer.observe(a[52])
observer.observe(a[53])
observer.observe(a[54])
observer.observe(a[55])
observer.observe(a[56])
observer.observe(a[57])
observer.observe(a[58])

observer.observe(a[59])
observer.observe(a[60])
observer.observe(a[61])
observer.observe(a[62])
observer.observe(a[63])
observer.observe(a[64])
observer.observe(a[65])

observer.observe(a[66])
observer.observe(a[67])
observer.observe(a[68])
observer.observe(a[69])
observer.observe(a[70])
observer.observe(a[71])
observer.observe(a[72])
observer.observe(a[73])
observer.observe(a[74])
observer.observe(a[75])
observer.observe(a[76])
observer.observe(a[77])

observer.observe(a[78])
observer.observe(a[79])
observer.observe(a[80])
observer.observe(a[81])
observer.observe(a[82])
observer.observe(a[83])
observer.observe(a[84])
observer.observe(a[85])
observer.observe(a[86])
observer.observe(a[87])
observer.observe(a[88])

observer.observe(a[89])
observer.observe(a[90])
observer.observe(a[91])
observer.observe(a[92])
observer.observe(a[93])
observer.observe(a[94])
observer.observe(a[95])
observer.observe(a[96])
observer.observe(a[97])
observer.observe(a[98])
observer.observe(a[99])

observer.observe(a[100])
observer.observe(a[101])
observer.observe(a[102])
observer.observe(a[103])
observer.observe(a[104])
observer.observe(a[105])
observer.observe(a[106])
observer.observe(a[107])
observer.observe(a[108])
observer.observe(a[109])
observer.observe(a[110])
observer.observe(a[111])
observer.observe(a[112])
observer.observe(a[113])

observer.observe(a[114])
observer.observe(a[115])
observer.observe(a[116])
observer.observe(a[117])

observer.observe(a[118])
observer.observe(a[119])
observer.observe(a[120])
observer.observe(a[121])
observer.observe(a[122])
observer.observe(a[123])
observer.observe(a[124])

observer.observe(a[125])
observer.observe(a[126])
observer.observe(a[127])
observer.observe(a[128])
observer.observe(a[129])
observer.observe(a[130])

observer.observe(a[131])
observer.observe(a[132])
observer.observe(a[133])
observer.observe(a[134])
observer.observe(a[135])

observer.observe(a[136])
observer.observe(a[137])
observer.observe(a[138])
observer.observe(a[139])
observer.observe(a[140])

observer.observe(a[141])

observer.observe(a[142])

observer.observe(a[143])

observer.observe(a[144])
observer.observe(a[145])
observer.observe(a[146])
observer.observe(a[147])
observer.observe(a[148])
observer.observe(a[149])
observer.observe(a[150])
observer.observe(a[151])
observer.observe(a[152])
observer.observe(a[153])
observer.observe(a[154])
observer.observe(a[155])
observer.observe(a[156])
observer.observe(a[157])
observer.observe(a[158])
observer.observe(a[159])
observer.observe(a[160])
observer.observe(a[161])
observer.observe(a[162])
observer.observe(a[163])

observer.observe(a[164])
observer.observe(a[165])
observer.observe(a[166])
observer.observe(a[167])
observer.observe(a[168])
observer.observe(a[169])
observer.observe(a[170])
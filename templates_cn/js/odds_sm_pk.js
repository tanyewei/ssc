/*****************************
* 新增快捷和正常投注
*****************************/
function kuijie(){
	$('#td_input_money').css('display','inline');
	$('#td_input_money1').css('display','inline');
	if(!$('#kuijie').hasClass('on')){
		$('#kuijie').addClass('on');
		$('#yiban').removeClass('on');
		var i=0;
		$('.tt').each(function(){
			/*var w = $(this).width();
			w+=$(this).prev().width();
			$(this).prev().css('width',132 );
			$(this).prev().attr('align','center')*/
			$(this).hide(); 
			//$(this).css('display','none');  
		})
		$('.wqs').find('.t_list_caption').find('td').each(function(){
			if( $(this).attr('colspan')>=3 ){
				var n = $(this).attr('colspan')-$(this).attr('colspan')/3	
				$(this).attr('colspan',n);
			}												
		})
		//处理表格
		$('table.wqs,table.wq').each(function(){ 
			if($(this).find("colgroup").size() > 0)
			{
				var td_num = $(this).find("tr").eq(1).find("td:visible").length;
				
				$(this).find("colgroup").html("");
				//计算宽度
				var td_width = 99/td_num;
				var colgroup_str = '';
				for (var i=0;i<td_num;i++)
				{
					colgroup_str += '<col style="width:'+td_width+'%">';
				}
				$(this).find("colgroup").html(colgroup_str);
			}
		})
		
		/*添加效果*/ 
		$('.caption_1,.o').bind({'mouseenter':function(){
			if( $(this).attr('title')!='选中' ){ //未选中
				if($(this).hasClass('o') && $(this).prev().hasClass('caption_1')){
					$(this).css({'background-color':'#ffd094','cursor':'pointer'});	  
					$(this).prev().css({'background-color':'#ffd094','cursor':'pointer'});	 
				}
				if($(this).hasClass('caption_1') && $(this).next().hasClass('o')){
					$(this).next().css({'background-color':'#ffd094','cursor':'pointer'});	  
					$(this).css({'background-color':'#ffd094','cursor':'pointer'});	 
				}
			}
			 
		},'mouseleave':function(){ 
			if( $(this).attr('title')!='选中' ){ //未选中
				if($(this).hasClass('o') && $(this).prev().hasClass('caption_1')){
					$(this).css({'background-color':'#fff','cursor':'pointer'});	  
					$(this).prev().css({'background-color':'#FDF8F2','cursor':'pointer'});	 
				}
				if($(this).hasClass('caption_1') && $(this).next().hasClass('o')){
					$(this).next().css({'background-color':'#fff','cursor':'pointer'});	  
					$(this).css({'background-color':'#FDF8F2','cursor':'pointer'});	 
				}
			}
		},'click':function(){
			if($(this).hasClass('o') && $(this).prev().hasClass('caption_1')){
				if( $(this).attr('title')=='选中' ){ //已选中 取消选中
					$(this).css({'background-color':'#fff','cursor':'pointer'});	  
					$(this).prev().css({'background-color':'#FDF8F2','cursor':'pointer'});	
					$(this).attr('title','');
					$(this).prev().attr('title','');
				}else{												//选中
					$(this).css({'background-color':'#ffc214','cursor':'pointer'});	  
					$(this).prev().css({'background-color':'#ffc214','cursor':'pointer'});	 
					$(this).attr('title','选中');
					$(this).prev().attr('title','选中');
				}
			}
			if($(this).hasClass('caption_1') && $(this).next().hasClass('o')){
				if( $(this).attr('title')=='选中' ){ //已选中 取消选中
					$(this).next().css({'background-color':'#fff','cursor':'pointer'});	  
					$(this).css({'background-color':'#FDF8F2','cursor':'pointer'});	 
					$(this).attr('title','');
					$(this).next().attr('title','');
				}else{												//选中
					$(this).next().css({'background-color':'#ffc214','cursor':'pointer'});	  
					$(this).css({'background-color':'#ffc214','cursor':'pointer'});	
					$(this).attr('title','选中');
					$(this).next().attr('title','选中');
				}
			}	
		}})
	}
	 
}
function yiban(){
	if(!$('#yiban').hasClass('on')){
		$('#yiban').addClass('on');
		$('#kuijie').removeClass('on');
		$('.o').each(function(){ 
			//$(this).width( 45 );
			$(this).next().show(); 
		})
		$('.wqs').find('.t_list_caption').find('td').each(function(){
			if( $(this).attr('colspan')>=2 ){
				var n = $(this).attr('colspan')+$(this).attr('colspan')/2	
				$(this).attr('colspan',n);
			}												
		})
	}
	//处理表格
	$('table.wqs,table.wq').each(function(){ 
		if($(this).find("colgroup").size() > 0)
		{
			var td_num = $(this).find("tr").eq(1).find("td:visible").length;
			
			$(this).find("colgroup").html("");
			//计算宽度
			var td_width = 99/td_num;
			var colgroup_str = '';
			for (var i=0;i<td_num;i++)
			{
				colgroup_str += '<col style="width:'+td_width+'%">';
			}
			$(this).find("colgroup").html(colgroup_str);
		}
	})
	$('.caption_1,.o').unbind('mouseenter').unbind('mouseleave').unbind('click');
	$('.caption_1').css({'background-color':'#FDF8F2','cursor':''});
	$('.o').css({'background-color':'#fff','cursor':''});
	$('#td_input_money').hide();
	$('#td_input_money1').hide();
}
function MyReset(){
	$('.caption_1').css({'background-color':'#FDF8F2','cursor':''});
	$('.o').css({'background-color':'#fff','cursor':''});
	$('.caption_1').attr('title','');
	$('.o').attr('title','');
	$('.inp1').val('');
	$('#AllMoney').val('');
    $('#AllMoney1').val('');
}

function AllMoney(){ 
	var sel=false;
    var money = $('#AllMoney').val() != ''? $('#AllMoney').val():$('#AllMoney1').val();
	$('.tt').each(function(){
		if(  $(this).prev().attr('title')=='选中' ){ //已选中 
            $(this).find('input').val(money);
			sel=true;
		}
	}) 
	return sel;
}
function iSubmit(){
	if($('#kuijie').hasClass('on')){
		var sel = AllMoney();
		if(sel==false){
			my_alert('您未选择号码！');
			return false;
		}
	}
	return true;
}

/**************************************/

var _url = "../ajax/oddsJson_sm_pk.php";
var _endtime, _opentime, _refreshtime, _openNumber, _lock=false;
var setResults = new Array();

$(function (){
	$("#dp").attr("action","./inc/DataProcessingpk3.php?t="+encodeURI($("#tys").html()));
	loadInfo(false);
	loadTime();
	setOpnumberTirem();
	if(getCookie("soundbut")=="on"){
		$("#soundbut").attr("value","on");
		$("#soundbut").attr("src","images/soundon.png");
	}else{
		$("#soundbut").attr("value","off");
		$("#soundbut").attr("src","images/soundoff.png");
	}
	
	$('#kuijie').bind('click',function(){
		kuijie();							   
	})
	$('#yiban').bind('click',function(){
		yiban();							   
	})
    kuijie();
    if (typeof  common_action_set != undefined) {
        common_action_set(function() {
            submitforms();
        });
    }
});

/**
 * 開出號碼須加載
 */
function loadInfo(bool){
	var win = $("#sy");
	var number = $("#number"); //開獎期數
	$.post(_url, {tid : 1}, function(data){
		_Number (data.number, data.ballArr); //開獎號碼
		smlen(data);//雙面長龍
		win.html(data.winMoney); //今天輸贏
	}, "json");
	if (bool == true) {
		if($("#soundbut").attr("value")=="on"){
		$("#look").html("<embed width=\"0\" height=\"0\" src=\"js/c.swf\" type=\"application/x-shockwave-flash\" hidden=\"true\" />");
		}
	}
}
function _Number (number, ballArr) {
	var Clss = null;
	var idArr = ["#a","#b","#c","#d","#e","#f","#g","#h","#j","#k"];
	$("#number").html(number);
	for (var i = 0; i<ballArr.length; i++) {
		Clss = "No_"+ballArr[i];
		$(idArr[i]).removeClass().addClass(Clss);
	}
}
function smlen(data) { //兩面長龍
    //for debug
    if (typeof(Simplized) == undefined ) {
        alert('Simplized undefined');
    }
	if (data.num_arr != ""){
		var row_1Html = new Array();
		for (var key in data.num_arr){
            row_1Html.push("<tr bgcolor=\"#fff\" height=\"22\"><td style=\"padding-left:5px; background:#fff4eb; color:#511e02\">"+number_to_cn(Simplized(key))+"</td><td style=\"background:#ffffff; width:35px; color:red; text-align:center\">"+data.num_arr[key]+" 期</td></tr>");
		}
		var cHtml = '<tr class="t_list_caption"><th colspan="2">两面长龙排行</th></tr>';
		$("#cl").html(cHtml+row_1Html.join(""));
	}
	setResults[0] = data.row_1; //總和大小
	setResults[1] = data.row_2; //總和單雙
	setResults[2] = data.row_3; //總和尾數大小

	var row_2Html = new Array();
	for (var k in data.row_1){
			row_2Html.push(data.row_1[k]);
		}
		$("#z_cl").html(row_2Html.join(''));
		$(".z_cl:even").addClass("hhg");
}

function loadTime(){
	 _openNumber = $("#o");
	$.post(_url, {tid : 2}, function(data){
		_openNumber.html(data.Phases);
		endtimes(data.endTime);
		opentimes(data.openTime);
		refreshTimes(data.refreshTime);
		loadodds(data.oddsList, data.endTime, data.Phases);
		loadinput(data.endTime);
	}, "json");
}

/**
 * 封盤時間
 */
function endtimes(endtime){
	var endTime = $("#endTime"); //封盤時間
	_endtime = endtime;
	if (_endtime >1)
		endTime.html(settime(_endtime));
	var interval = setInterval(function(){
										
									
					if (_endtime<10&&_endtime>0){
						if($("#soundbut").attr("value")=="on"){
				$("#look").html("<embed width=\"0\" height=\"0\" src=\"js/d.swf\" type=\"application/x-shockwave-flash\" hidden=\"true\" />");		
						}
						}	
						
						
		if (_endtime <= 1) { //封盤時間結束
			clearInterval(interval);
			endTime.html("00:00");
			loadodds(null, endtime, null);		//關閉賠率
			loadinput(-1); 				//關閉輸入框
			return false;
		}
		_endtime--;
		endTime.html(settime(_endtime));
	}, 1000);
}

/**
 * 開獎時間
 */
function opentimes(opentime){
	var openTime = $("#endTimes"); //開獎時間
	_opentime = opentime;
	if (_opentime >1)
		openTime.html(settime(_opentime));
	var interval = setInterval(function(){
		if (_opentime <= 1) { //開獎時間結束
			clearInterval(interval);
			_lock = true;
			_refreshtime = 5;
			openTime.html("00:00");
            //开奖时间结束也就是要开下一期的时候：要刷新左侧的注单
            window.parent.leftFrame.$('#new_orders').html('');
            window.parent.leftFrame.$('#used_money').html('0');
			return false;
		}
		_opentime--;
		openTime.html(settime(_opentime));
	}, 1000);
}

/**
 * 90秒刷新
 */
function refreshTimes(refreshtime){
	_refreshtime = refreshtime;
	var refreshTime = $("#endTimea"); //刷新時間
	refreshTime.html(_refreshtime);
	var interval = setInterval(function(){
		if (_refreshtime <= 1) { //刷新時間結束
			clearInterval(interval);
			$.post(_url, {tid : 2}, function(data){
				if (_lock == true){
					endtimes(data.endTime);
					opentimes(data.openTime);
					loadinput(data.endTime);
					 _openNumber.html(data.Phases);
					 setOpnumberTirem();//加載開獎號碼
					_lock = false;
				}
				 _endtime =data.endTime;
				 _opentime =data.openTime;
				 _refreshtime =data.refreshTime;
				 loadodds(data.oddsList, _endtime, data.Phases);
				 refreshTimes(_refreshtime);
			}, "json");
			return false;
		}
		_refreshtime--;
		refreshTime.html(_refreshtime);
	}, 1000);
}
/**
 * 加載賠率
 */
function loadodds(oddslist, endtime, number){
	var a = ["a","b","c","d","e","f","g","h","i","j","k"];
	var odds, link, urls;
	if (oddslist == null || oddslist == "" || endtime <1) {
		$(".o").html("");
		return false;
	}
	for (var n=0; n<oddslist.length; n++){
		for (var i in oddslist[n]){
			odds = oddslist[n][i];
			if(n==10) {
				urls = "fnpk3.php?v="+number+"&n="+i+"&t=t"+(11+1);
			}else{
			urls = "fnpk3.php?v="+number+"&n="+i+"&t=t"+(n+1);
			}
			link = "<span class=\"bgh\">"+odds+"</span>";
			$("#"+a[n]+i).html(link);
			$("#"+i).html(link);
		}
	}
}

/**
 * 加載輸入框
 */
function loadinput(endtime){
	var id = $("td.tt");
	id.each(function () {
		if ($(this).attr("id") != "") {
			var tt = $(this).attr("id").split("_")[0];
			var temp=$(this).attr("id").split("_")[1];
			if (endtime >1)
				$(this).html("<input name=\""+tt+"_"+temp+"\" class=\"inp1\" onkeyup=\"digitOnly(this)\" onfocus=\"this.className='inp1m'\" onblur=\"this.className='inp1';\" type=\"text\" maxLength=\"9\"/>");
			else
				$(this).html("");
		}
	});
}

function settime(time){
	var MinutesRound = Math.floor(time / 60);
	var SecondsRound = Math.round(time - (60 * MinutesRound));
	var Minutes = MinutesRound.toString().length <= 1 ? "0"+MinutesRound : MinutesRound;
	var Seconds = SecondsRound.toString().length <= 1 ? "0"+SecondsRound : SecondsRound;
	var strtime = Minutes + ":" + Seconds;
	return strtime;
}

function digitOnly ($this) {
	var n = $($this);
	var r = /^\+?[1-9][0-9]*$/;
	if (!r.test(n.val())) {
		n.val("");
	}
}

function setOpnumberTirem(){
	var opnumber = $("#number").html();
	var nownumer = $("#o").html();
	if (opnumber != ""){
		var _nownumber = parseInt(nownumer);
		var sum = _nownumber -  parseInt(opnumber);
		if (sum == 2) {
			var interval = setInterval(function(){
				$.post(_url, {tid : 3}, function(data){
					if (_nownumber - parseInt(data) == 1){
						clearInterval(interval);
						loadInfo(true);
						return false;
					}
				}, "text");
			}, 3000);
		}
	} else {
		setTimeout(setOpnumberTirem, 1000);
	}
}


function submitforms(){
	if(iSubmit()==false)return false;
	$.post("../ajax/Default.ajax_pk3.php", { typeid : "sessionId"}, function(){});
	var mixmoney = parseInt($("#mix").val()); //最低下注金額
	var input = $("input.inp1");
	var c = true, s, n;
	var count = 0;
	var countmoney = 0;
	var upmoney = 0;
	var names = new Array();
	var sArray = "";
    var ball_array = new Array();
    var odd_array = new Array();
    var money_array = new Array();
	input.each(function(){
		var value = $(this).val();
		if (value != ""){
			value = parseInt(value);
			if (value < mixmoney) c=false;
			count++;
			countmoney += value;
			s = nameformat($(this).attr("name").split("_"));
            s[2] = $("#"+s[2]+"").text();
			if (s[0] == "總和、龍虎"){
				n = s[1]+" @ "+s[2]+" x ￥"+value;
                ball_array.push(s[1]);
            }
			else {
				n = s[0]+"["+s[1]+"] @ "+s[2]+" x ￥"+value;
                ball_array.push(s[0]+ ' ' + s[1]);
            }
            odd_array.push(s[2]);
            money_array.push(value);
			names.push(n+"\n");
			sArray += s+","+value+"|";
		}
	});
    if (count == 0){ my_alert("您输入类型不正确或没有输入实际金额");return false;}
    if (c == false){ my_alert("最低下注金额："+mixmoney+"￥");return false;}
/*	var confrims = "共 ￥"+countmoney+" / "+count+"筆，確定下註嗎？\n\n下註明細如下：\n\n";
	confrims +=names.join('');
	if (confirm(confrims)){*/
		input.val("");
		MyReset();
		var number = $("#o").html();
		var s_type = '<input type="hidden" name="sm_arr" value="'+sArray+'"><input type="hidden" name="s_number" value="'+number+'">';
		$(".actiionn").html(s_type);
	//	return setTimeout(function(){return true}, 3000);
	//}
	//return false;
    submit_confirm(ball_array,odd_array,money_array);
    return false;
}

function nameformat(array){
	var arr = new Array(), h;
	switch (array[0]){
		case "t1" : h="a"; arr[0] = "冠军"; break;
		case "t2" : h="b"; arr[0] = "亚军"; break;
		case "t3" : h="c"; arr[0] = "第三名"; break;
		case "t4" : h="d"; arr[0] = "第四名"; break;
		case "t5" : h="e"; arr[0] = "第五名"; break;
		case "t6" : h="f"; arr[0] = "第六名"; break;
		case "t7" : h="g"; arr[0] = "第七名"; break;
		case "t8" : h="h"; arr[0] = "第八名"; break;
		case "t9" : h="i"; arr[0] = "第九名"; break;
		case "t10" : h="j"; arr[0] = "第十名"; break;
		case "t12" : h="k"; arr[0] = "冠亞和"; break;
	}
	switch (array[1]) {
		case "h1": if(array[0]!="t12") {arr[1] = '1'; arr[2]=h+array[1];}else{arr[1] = '冠亞和大'; arr[2]=h+array[1];} break;
		case "h2": if(array[0]!="t12") {arr[1] = '2'; arr[2]=h+array[1];}else{arr[1] = '冠亞和小'; arr[2]=h+array[1];} break;
		case "h3": if(array[0]!="t12") {arr[1] = '3'; arr[2]=h+array[1];}else{arr[1] = '冠亞和單'; arr[2]=h+array[1];} break;
		case "h4": if(array[0]!="t12") {arr[1] = '4'; arr[2]=h+array[1];}else{arr[1] = '冠亞和雙'; arr[2]=h+array[1];} break;
		case "h5": arr[1] = '5'; arr[2]=h+array[1]; break;
		case "h6": arr[1] = '6'; arr[2]=h+array[1]; break;
		case "h7": arr[1] = '7'; arr[2]=h+array[1]; break;
		case "h8": arr[1] = '8'; arr[2]=h+array[1]; break;
		case "h9": arr[1] = '9'; arr[2]=h+array[1]; break;
		case "h10": arr[1] = '10'; arr[2]=h+array[1]; break;
		case "h11": arr[1] = '大'; arr[2]=h+array[1]; break;
		case "h12": arr[1] = '小'; arr[2]=h+array[1]; break;
		case "h13": arr[1] = '單'; arr[2]=h+array[1]; break;
		case "h14": arr[1] = '雙'; arr[2]=h+array[1]; break;
		case "h15": arr[1] = '龍'; arr[2]=h+array[1]; break;
		case "h16": arr[1] = '虎'; arr[2]=h+array[1]; break;
	}
	return arr;
}

function getResult ($this){
/*	$(".nv_a").addClass("nv").removeClass("nv_a");
	$($this).removeClass("nv").addClass("nv_a");
	$(".nv_ab").removeClass("nv_ab");*/
    $('.kon').removeClass('kon');
	$($this).addClass("kon");
	var rowHtml = new Array();
	var data = stringByInt ($($this).html());
	for (var k in data){
		rowHtml.push(data[k]);
	}
	$("#z_cl").html(rowHtml.join(''));
	$(".z_cl:even").addClass("hhg");
}

function stringByInt (str){
	switch (str){
        case "冠、亚军和" : return setResults[0];
        case "冠、亚军和 大小" : return setResults[1];
        case "冠、亚军和 单双" : return setResults[2];
	}
}







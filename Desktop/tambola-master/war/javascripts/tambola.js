$(document).ready(function(){
	
	var loadUrl =  '/getnum?ind=1'; //url to get the numbers.
	count = 0;
	strikeNum = new Array();
	var num;
	var numPos = new Array();
	var ticketNum = new Array();
	var totalArray = new Array();
	
	//code to generate the ticket
	
		function inRange(tnum){
			
			check = Math.floor(tnum/9);
		    var indx= 0;
			for(var i =0;i<10;i++){
				if(Math.floor(ticketNum[i]/9)===check)
					indx++;				
			}
			
			return indx;
				
		}
		
		
		//then find 15 numbers from 1 to 80
		//these will be the ticket numbers
		for (var i=1;i<16;){
			var tNum = Math.round(Math.random()*(90-1)+1);
			if(ticketNum.indexOf(tNum)===-1 && inRange(tNum)<3){
				ticketNum.push(tNum);
				i++;
				$('#testValue').text(ticketNum.length);
			}			
		}
				
		
		//numPos.sort();
		ticketNum.sort();
		ticketNum.reverse();
		
		//find its position
		for(var i=1;i<16;i++){
			var num = ticketNum.pop();
			var col = Math.floor(num/9);
			col = col + 1;
			num2 = num % 9;
			var loc1 = '#1_'+col;
			var loc2 = '#2_'+col;
			var loc3 = '#3_'+col;
			if(num2>=0 && num2 <4){
				if($(loc1).text()!=''){
					if($(loc2).text()!='')
						$(loc3).text(num);
					else 
						$(loc2).text(num);
				}
				else
					$(loc1).text(num);
			}
			
			if(num2>=4 && num2 <7){
				if($(loc2).text()!=''){
					if($(loc3).text()!='')
						$(loc1).text(num)
					else 
						$(loc3).text(num);
				}
				else
					$(loc2).text(num);
			}
			
			if(num2>=7 && num2 <10){
				if($(loc3).text()!=''){
					if($(loc1).text()!='')
						$(loc3).text(num);
					else 
						$(loc1).text(num);
				}
				else
					$(loc3).text(num);
			}	
		}	
	//make ajax request to know the numbers.
	$.get(
			loadUrl,
			function(responseText){
				num = responseText;
				num =  num.split(',',91);
				var temp = num[0];
				num[0] = temp.substr(1);
				temp = num[num.length-1];
				num[num.length-1] = temp.substr(0,temp.length-2);//getting all the values parsed in num
			}
	);
	
	//show the numbers to the screen
	var idx = 0;
	var iter =1;
	var interval = setInterval(function(){
		
			nextNum = num[idx];
			$('#nextNum').html(nextNum);
			idx = idx +1;
			iter++;
			if(iter>90)
				clearInterval(interval);
		
	}, 6);
	
	
	//create the numbers striked through and what numbers are striked through
	$('.num').click(function(){
		
		if($(this).text() != ''){
			if(strikeNum.indexOf($(this).text())===-1){
				$(this).css('text-decoration', 'line-through');
				count = count + 1;
				strikeNum[count-1] = $(this).text();
				$('#winner').text(strikeNum);
			}
		}
	});
	
	
	
	//functions to check the patterns.
	/*There are 5 patterns namely.
	 * 1. Top row.
	 * 2. Botton Row.
	 * 3. Middle Row.
	 * 4. Corners.
	 * 5. Full House.
	 * */
	function checkTopRow(){
		//TO check the top row check if each of the element in the figure is striked out. 
		//get all the numbers of the top row
		//
		//$('#winner').text(totalArray);
		var count =0;
		var flag = 0;
		for(var i = 1;i<=10;i++){
			loc = '#1_'+i;
			var val = $(loc).text();
			if(val !=''){
				val2 = parseInt(val);
				if((strikeNum.indexOf(val)===-1 )|| (totalArray.indexOf(val2)===-1)){
					flag = 1;
				}
			}	
		}//end of for
		return flag;
	}//end function
	

	/*-----------------------------------------------------------------*/
	function checkMiddleRow(){
		//TO check the top row check if each of the element in the figure is striked out. 
		//get all the numbers of the top row
		//
		var count =0;
		var flag = 0;
		for(var i = 1;i<=10;i++){
			loc = '#2_'+i;
			var val = $(loc).text();
			if(val !=''){
				val2 = parseInt(val);
				if(strikeNum.indexOf(val)===-1|| (totalArray.indexOf(val2)===-1)){
					flag = 1;
				}
			}	
		}//end of for
		return flag;
	}//end function
	 
	/*-----------------------------------------------------------------*/
	
	/*-----------------------------------------------------------------*/
	function checkBottomRow(){
		//TO check the top row check if each of the element in the figure is striked out. 
		//get all the numbers of the top row
		//
		var flag = 0;
		for(var i = 1;i<=10;i++){
			loc = '#3_'+i;
			var val = $(loc).text();
			if(val !=''){
				val2 = parseInt(val);
				if(strikeNum.indexOf(val)===-1|| (totalArray.indexOf(val2)===-1)){
					flag = 1;
				}
			}	
		}//end of for
		return flag;
	}//end function
	 
	/*-----------------------------------------------------------------*/
	
	//code to convert totalArray to num
	function toNum(){
		for(var i in totalArray){
			totalArray[i] = +totalArray[i];
		}
	}
	
	
	//code to check which numbers are present in the array
	$('#TopRow').click(function(){
		$('#testValue').text(ticketNum);
		totalArray = num.slice(0,idx-1);
		toNum();
		//$('#testValue').text(totalArray);
		//$('#testValue2').text(strikeNum);
		
		if(checkTopRow()===1)
			alert('you don\'t have a top row' );
		else
			alert('Congratulations you have a top row');
	});
	
	$('#MiddleRow').click(function(){
		totalArray = num.slice(0,idx-1);
		toNum();
		//$('#testValue').text(totalArray);
		//$('#testValue2').text(strikeNum);
		
		if(checkMiddleRow()===1)
			alert('you don\'t have a Middle row' );
		else
			alert('Congratulations you have a Middle row');
	});

	$('#BottomRow').click(function(){
		totalArray = num.slice(0,idx-1);
		toNum();
		//$('#testValue').text(totalArray);
		//$('#testValue2').text(strikeNum);
		
		if(checkBottomRow()===1)
			alert('you don\'t have a Bottom row' );
		else
			alert('Congratulations you have a Bottom row');
	});

	
});
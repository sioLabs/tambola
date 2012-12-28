$(document).ready(function(){
	
	var loadUrl =  '/getnum?ind=1'; //url to get the numbers.
	count = 0;
	strikeNum = new Array();
	var num;
	var numPos = new Array();
	var ticketNum = new Array();
	var totalArray = new Array();
	
	
	
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
		//then find 15 numbers from 1 to 80
		//these will be the ticket numbers
		for(var i=1;i<16;){
			var tNum = Math.round(Math.random()*(90-1)+1);			
			if(ticketNum.indexOf(tNum) < 0){
				ticketNum.push(tNum);
				i++;
			}

		}
		
		
				
		
		
		
		
		
			
		
		
		///////////////////////////////
     	//	new way to fill the positions
		
			
			//first fill the first row
			var posArray = new Array();
			for(var j=0;j<5;){
				//now find 5 random places to fill
				var pos = Math.round(Math.random()*(10-1)+1);
				if(posArray.indexOf(pos) < 0 ){
					posArray.push(pos);
					tNum = ticketNum.pop();
					var loc = '#1_' + pos;
					$(loc).text(tNum);
					
					j++;
				}				
			}
			
			//	nowt fill the second row
			
			
			var posArray = new Array();
			for(var j=0;j<5;){
				//now find 5 random places to fill
				var pos = Math.round(Math.random()*(10-1)+1);
				if(posArray.indexOf(pos) < 0 ){
					posArray.push(pos);
					tNum = ticketNum.pop();
					var loc = '#2_' + pos;
					$(loc).text(tNum);
					j++;
				}				
			}
			
			//now fill the third row
			
			
			var posArray = new Array();
			for(var j=0;j<5;){
				//now find 5 random places to fill
				var pos = Math.round(Math.random()*(10-1)+1);
				if(posArray.indexOf(pos) < 0 ){
					posArray.push(pos);
					tNum = ticketNum.pop();
					var loc = '#3_' + pos;
					$(loc).text(tNum);
					
					j++;
				}				
			}	
			
		
		
		
		//Now arrange the ticket numbers in increasing order

	
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
		
	}, 10);
	
	
	//create the numbers striked through and what numbers are striked through
	$('.num').click(function(){
		totalArray = num.slice(0,idx-1);
		toNum();
		var ch1 = $(this).text();
		ch1 = parseInt(ch1);
		//alert(ch1+10);
		if(ch1){
			//alert(totalArray.indexOf(ch1));
			if(totalArray.indexOf(ch1) > 0){
				if(strikeNum.indexOf(ch1) < 0){
					$(this).css('text-decoration', 'line-through');
					count = count + 1;
					strikeNum[count-1] = ch1;
					//$('#winner').text(strikeNum);
				}
			}
		}
		else{//code when it is blank
		
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
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
	
	alert('till her');
	
	//code to generate the ticket
	
		function inRange(tnum){
			
			check = Math.ceil(tnum/9);
			
			//alert(check +" "+tNum);
		    var indx = 0;
		    var indy = 0;
			for(var i =0;i<ticketNum.length;i++){  //why 10
				var c2 = ticketNum[i] % 9;
				if(Math.ceil(ticketNum[i]/9)===check)
					indx++;
				if((c2===0) ||( c2 >=7 ))
					indy++;
				else if((c2>1)  && (c2< 4))
					indy++;
				else if((c2>=4) && (c2<7))
					indy++;
				else 
					indy = indy;
			}	
			
			if((indx >3 ) || (indy>5))
				return 4;				
			else
				return 1;  
		}
		
		
		//then find 15 numbers from 1 to 80
		//these will be the ticket numbers
		for (var i=1;i<16;){
			var tNum = Math.round(Math.random()*(90-1)+1);
			if((ticketNum.indexOf(tNum) < 0) && (inRange(tNum)<4)){
				ticketNum.push(tNum);
				i++;
				$('#testValue').text(ticketNum.length);
			}			
		}
		
		//alert(ticketNum.length);
		function totNum(){
			g = ticketNum;
			for(var i in g){
				ticketNum[i] = parseInt(g[i]);
			}
		}
		
		//array to sort the numbers
		function bSort(arr){
			
			var temp, i,j;
			for(i=0;i<arr.length;i++){
				for(j=0;j<arr.length-i-1;j++){
					if(arr[j]<arr[j+1]){
						temp = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = temp;
					}
				}
			}
			
		}
				
		totNum();
		//numPos.sort();
		bSort(ticketNum);
		
		
		$('#testValue').text(ticketNum);
		
		//find its position
		for(var i=1;i<16;i++){
			var num = ticketNum.pop();
			alert(num);
			var col = Math.floor(num/9);
			col = col+1;
			num2 = num % 9;
			var loc1 = '#1_'+col;
			var loc2 = '#2_'+col;
			var loc3 = '#3_'+col;
			
					
			if((num2>=1) && (num2 <4)){
				if($(loc1).text()!=''){
					if($(loc2).text()!=''){
						$(loc3).text(num);
					}
					else 
						$(loc2).text(num);
				}
				else
					$(loc1).text(num);
			}
			
			if((num2>=4) && (num2 <7)){
				if($(loc2).text()!=''){
					if($(loc3).text()!='')
						$(loc1).text(num)
					else 
						$(loc3).text(num);
				}
				else
					$(loc2).text(num);
			}
			
			if((num2>=7) || (num2 ==0)){
				if($(loc3).text()!=''){
					if($(loc1).text()!='')
						$(loc2).text(num);
					else 
						$(loc1).text(num);
				}
				else
					$(loc3).text(num);
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
		
	}, 1000);
	
	
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
			alert('someproble,');
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
$(document).ready(function(){
	
	var loadUrl =  '/getnum?ind=1'; //url to get the numbers.
	count = 0;
	strikeNum = new Array();
	var num;
	var numPos = new Array();
	var ticketNum = new Array();
	
	//code to generate the ticket
	
		function inRange(tnum){
			
			check = Math.floor(tnum/9);
		    var idx= 0;
			for(var i =0;i<10;i++){
				if(Math.floor(ticketNum[i]/9)===check)
					idx++;				
			}
			
			return idx;
				
		}
		
		
		//then find 15 numbers from 1 to 80
		//these will be the ticket numbers
		for (var i=1;i<16;){
			var tNum = Math.round(Math.random()*(90-1)+1);
			if(ticketNum.indexOf(tNum)===-1 && inRange(tNum)<3){
				ticketNum.push(tNum);
				i++;
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
				num =  num.split(',',90);
			}
		
	);
	
	//show the numbers to the screen
	var idx = 0;
	setInterval(function(){
		if(idx === 0){
			var nextNum = num[0];
			nextNum = nextNum.substr(1);
			$('#nextNum').html(nextNum);
			idx = idx +1;
		}
		else{
			$('#nextNum').text(num[idx+1]);
			idx = idx+1;
		}
		
		
	}, 6000);
	
	
	//create the numbers striked through and what numbers are striked through
	$('.num').click(function(){
		$(this).css('text-decoration', 'line-through');
		count = count + 1;
		strikeNum[count-1] = $(this).text();
	});
	
	
	
	
	//code to check which numbers are present in the array
	$('#winner').click(function(){
		if(count != 15)
			alert('you don\'t have a full house' );
	});
	
	
});
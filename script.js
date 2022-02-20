		let memberarray=[];
		function members() 
		{
			/*let name=prompt("Enter the names");*/
			
			let size=prompt("how many names you want?")
			for(let i=0;i<size;i++)
			{
				memberarray[i]=prompt("Enter the names "+(i+1));
				
			}
			/*alert("List of Members :- "+"\n"+memberarray);*/
		}
		

		
		function listmember() 
		{
			alert("List of Names :- "+"\n"+memberarray+"\n");
		}
		
		
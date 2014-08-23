function rating(title){
    $.ajax({
		url:"http://www.omdbapi.com/?s=" + title + "&yg=0&r=json",
		success: function(result){
			var titleJson = JSON.parse(result);
			
			if (titleJson.Response != 'undefined' && titleJson.Response == 'False'){
				console.error('cannot find reference for title: ' + titleJson.Error);
				alert(titleJson.Error);
			}else{
				if (titleJson.Search.length > 0){
					for (i = 0; i < titleJson.Search.length; i++){
						var titleJsonObj = titleJson.Search[i];	
					
						if (titleJsonObj.Title == title){
							_getRating(titleJsonObj.imdbID)
							break;
						}
					}
				}	
			}
    	}
	});
};

function _getRating(imdbTitle){
	$.ajax({
		url: "http://www.omdbapi.com/?i=" + imdbTitle + "&r=json",
		success: function(result2){
			alert(JSON.parse(result2).imdbRating);
		}
	});
}

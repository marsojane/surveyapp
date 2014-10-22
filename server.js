var http = require("http"),fs = require("fs");

http.createServer(function(request, response){
	var path = './html' + request.url;
	
	console.log("->: request.url: "+request.url);
	if (request.url.split('.').length === 1) {
		path += (request.url[request.url.length - 1] !== '/' ? '/' : '') + 'index.html';
	}
	fs.exists(path, function (exists) {		
		var fileext = path.split('.')[path.split('.').length - 1];
		var filecontentname;
		switch(fileext){
			case "js":
				filecontentname = "javascript";
				filecontenttype = "application";
				break;			
			case "html":
			case "htm":					
				filecontentname = fileext;
				filecontenttype = "text";
				break;
			case "xml":
			case "xsl":	
				filecontentname = fileext;
				filecontenttype = "application";
				break;
			case "json":
				filecontentname = "json";
				filecontenttype = "application";
				break;
			case "css":
				filecontenttype = "text";
				filecontentname = "css";
				break;
			default:
				filecontentname = "plain";
				filecontenttype = "text";
		}
		
		fs.readFile(path, function (err, data) {		
		  if(fileext == "css"){
			response.writeHead(200, {"Content-Type":"text/"+filecontentname, "Cache-Control":"no-cache, no-store"});
		  } else {
			response.writeHead(200, {"Content-Type":""+ filecontenttype +"/"+filecontentname, "Cache-Control":"no-cache, no-store, must-revalidate"});
		  }		  
		  response.write(data + '');  
		  response.end();
		});
		
	});	
}).listen(9999);
//-----------console logger---------------
console.log("->:Server has started");
//----------------------------------------

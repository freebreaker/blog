

/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/loadmore', function(req, res) {
	var getIndex=req.query.index
	var len=req.query.length
	var data=[]
	for(var i=0;i<len;i++){
		data.push('内容'+(parseInt(getIndex)+i))
	}

	res.send(data);

});
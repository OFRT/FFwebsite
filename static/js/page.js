
// 页面模板 id: page_m 
// 页面数据 id: page_d
// 页面显示 id: view
layui.use('laytpl', function(laytpl){
  
  var view = document.getElementById('view')
  ,controller = function(){
      
      
    var data_url = 'https://ofrt.top/tools/json/tools.json';
      
    // 获取json 数据 
    var json = "";
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', data_url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            // 获取 json
            json = httpRequest.responseText;
            // 解析 显示
            try{
              var html = laytpl(page_m.value).render(JSON.parse(json));
              view.innerHTML = html;
            } catch(e){
              view.innerHTML = '<span style="color: #c00;">'+ e.toString() + '</span>';
            }
        }
    };
  };
  
  controller();
  
  layui.each(document.getElementsByTagName('textarea'), function(index, item){
    item.onkeyup = function(){
      controller();
    }
  });
  
});
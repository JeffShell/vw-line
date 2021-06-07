import Mock from 'mockjs';

Mock.mock('http://g.cn','post',function(option){
	//请求相关的参数
  let databody = option.body
	console.log("option:"+databody)
	//模拟假数据需要重新写Mock
  let data = Mock.mock({
		databody: 1
	})
  console.log(data.databody)
  return data
})
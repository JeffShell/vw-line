import Mock from 'mockjs';

Mock.mock('http://g.cn','post',function(option){
	//请求相关的参数
  let dataBody = JSON.parse(option.body)
	//模拟假数据需要重新写Mock
  let mockData = Mock.mock({
    code: 200,
    message: "sucess",
    data:[{
      "t_id": "@id()",
      "t_name": "admin1",
      "t_password": 1234561
    }, {
      "t_id": "@id()",
      "t_name": "admin2",
      "t_password": 1234562
    }, {
      "t_id": "@id()",
      "t_name": "admin3",
      "t_password": 1234563
    }, {
      "t_id": "@id()",
      "t_name": "admin4",
      "t_password": 1234564
    }, {
      "t_id": "@id()",
      "t_name": "admin5",
      "t_password": 1234565
    }]
  })
  console.log(dataBody.formdata);
  mockData.data.filter((item)=>{
    if(item.t_name === dataBody.formdata.userName) return true
  })
})
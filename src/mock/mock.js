import Mock from 'mockjs';

Mock.mock('http://g.cn','post',function(option){
  let dataBody = JSON.parse(option.body)
  let a= undefined
  let mockData = Mock.mock({
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
  mockData.data.filter((item)=>{
    if(item.t_name === dataBody.formdata.userName && item.t_password === parseInt(dataBody.formdata.password)) {
        a = true
    }
  })
  return a
})
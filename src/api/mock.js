// 模拟后台接口数据
import Mock from 'mockjs'
const { mock, Random } = Mock
console.log('Mock.Random方法',Random)
const { natural } = Random

const step = (length, [start, end]) => Array.from({length}, (item, i) => [`${i}:00-${i+1}:00`, natural(start, end)])
const point = (length, [start, end]) => Array.from({length}, (item, i) => [`${i}:00`, natural(start, end)])

mock('/index.php/device/get_select', {
  'code': 0,
  'msg': '',
  'data': [
    {
      'value': '1',
      'label': '条件1',
    },
    {
      'value': '2',
      'label': '条件2',
    }
  ]
})

mock('/index.php/device/get_list', {
  'code': 0,
  'msg': '',
  'data': {
    'list|10': [
      {
        'id|+1': 2,
        'key1': /\d{1,2}/,
        'key2': natural(0, 100),
        'key3': natural(0, 100),
        'key4': natural(0, 100),
        'key5': natural(0, 100),
        'key6': natural(0, 100),
        'key7': /\d{1}/,
        'key8': '是',
        'key9': '2018.10.19 10:12:00',
        'key10': '2018.10.20 10:12:00',
      }
    ],
    'page': 1,
    'total': natural(0, 100)
  }
})

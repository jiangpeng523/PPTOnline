const router = {

}
const getPermissionByToken = {
  'code': 200,
  'message': '操作成功',
  'rows': [
    [{
      'authCode': 'VASS_01000',
      'children': [],
      'display': 1,
      'hasChildren': false,
      'icon': 'nav1',
      'id': '010000',
      'level': 1,
      'name': '首页',
      'parentAuthCode': '0',
      'path': '/home',
      'weight': 99
    },{
      'authCode': 'VASS_02000',
      'children': [{
        'authCode': 'VASS_02100',
        'children': [],
        'display': 1,
        'hasChildren': false,
        'icon': '',
        'id': '020100',
        'level': 2,
        'name': '档案管理',
        'parentAuthCode': '020000',
        'path': '/personnelInfo/personnelVID',
        'weight': 99
      }, {
        'authCode': 'VASS_02400',
        'children': [],
        'display': 1,
        'hasChildren': false,
        'icon': '',
        'id': '020300',
        'level': 2,
        'name': '视频主题库',
        'parentAuthCode': '020000',
        'path': '/personnelInfo/videoThemeQuery',
        'weight': 96
      }, {
        'authCode': 'VASS_02500',
        'children': [{
          'authCode': 'VASS_02600',
          'children': [],
          'display': 1,
          'hasChildren': false,
          'icon': '',
          'id': '020401',
          'level': 3,
          'name': '图谱查询结果页',
          'parentAuthCode': '020400',
          'path': '/personnelInfo/atlasResult',
          'weight': 62
        }],
        'display': 1,
        'hasChildren': true,
        'icon': '',
        'id': '020400',
        'level': 2,
        'name': '图谱查询',
        'parentAuthCode': '020000',
        'path': '/personnelInfo/mapQuery',
        'weight': 95
      }],
      'display': 0,
      'hasChildren': true,
      'icon': 'nav2',
      'id': '020000',
      'level': 1,
      'name': '一人一档',
      'parentAuthCode': '0',
      'path': '/personnelInfo',
      'weight': 98
    }]
  ]
}
const getUserInfo = {
  'code': 200,
  'message': '操作成功',
  'rows': [{
    'admin': false,
    'authRolesNum': 0,
    'cardId': '370201199001011234',
    'cascadeDomainCode': '',
    'checked': 0,
    'code': 'admin',
    'count': 0,
    'createTime': '2013-09-16 16:33:57',
    'deptIndexCode': '1',
    'deptName': '市局',
    'email': 'admin@126.com',
    'expireTime': '2099-10-01 00:00:00',
    'expired': '',
    'extendDeptAuth': 0,
    'id': '1000000000000001',
    'ipAddress': '',
    'ipSegment': '',
    'lastLoginTime': '2020-01-07 13:00:43',
    'lastLoginType': 0,
    'loginStrategy': 0,
    'loginTimes': 48599,
    'loginType': 0,
    'macAddress': '',
    'name': 'admin',
    'nowLoginTime': '2020-01-07 13:01:09',
    'onlineNumber': 0,
    'orgIndexCode': '0',
    'ownerUserId': '1',
    'persist': 1,
    'phone': '18805320001',
    'priority': 50,
    'pwd': 'b24331b1a138cde62aa1f679164fc62f',
    'realName': '系统管理员',
    'remark': '',
    'resRolesNum': 0,
    'shortLetter': 'admin',
    'shortNum': '',
    'status': 1,
    'tickable': 0,
    'updateTime': '2020-01-07 13:01:09',
    'userExts': {},
    'weight': 0
  }]
}

export {getPermissionByToken, getUserInfo}

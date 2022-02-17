<template>
  <grid
    :columnOptions="columnOptions"
    :rowHeaders="rowHeaders"
    :draggable="draggable"
    :theme="theme"
    :scrollX="scrollX"
    :scrollY="scrollY"
    :data="data"
    :columns="columns"
    :pageOptions="pageOptions"
    />
</template>

<script>
import 'tui-grid/dist/tui-grid.css'
import { Grid } from '@toast-ui/vue-grid'

export default {
  components: {
    Grid
  },
  data() {
    return {
      theme: "striped",
      scrollX: false,
      scrollY: false,
      draggable: false,
      columnOptions: {
        resizable: true
      },
      pageOptions: {
      },
      rowHeaders: ['checkbox', 'rowNum'],
      columns: [
        {header: '아이디', name: 'userId', align: 'center'},
        {header: '이름', name: 'userNm', align: 'center'},
        {header: '부서', name: 'dept', align: 'center'},
        {header: '연락처', name: 'phone', align: 'center'},
        {header: '이메일', name: 'email', align: 'center'},
        {header: '권한', name: 'role', align: 'center'},
        {header: '생성일', name: 'createdAt', align: 'center'},
        {header: '접속정보', name: 'loginInfo', align: 'center'},
        {header: '상태', name: 'userState', align: 'center',
          formatter: 'listItemText',
          editor: {
            type: 'select',
            options: {
              listItems: [
                { text: '사용', value: '1' },
                { text: '미사용', value: '2' },
              ]
            }
          }
        },
        {header: '패스워드 초기화', name: 'passwordInit', align: 'center'},
      ],
      data: [ // for rowData prop
        {userId: 'admin', userNm: '관리자', dept: '시스템', phone: '010-1234-5678', email: 'admin@admin.com', userState: '1', role: '관리자', createdAt: '2022-02-17'},
        {userId: 'user1', userNm: '사용자1', dept: '운영팀', phone: '010-2456-9776', email: 'user1@user.com', userState: '1', role: '운영자', createdAt: '2022-02-17'},
        {userId: 'user2', userNm: '사용자2', dept: '운영팀', phone: '010-5391-2872', email: 'user2@user.com', userState: '2', role: '운영자', createdAt: '2022-02-17'},
        {userId: 'user3', userNm: '사용자3', dept: '운영팀', phone: '010-7543-2468', email: 'user3@user.com', userState: '1', role: '운영자', createdAt: '2022-02-17'},
        {userId: 'user4', userNm: '사용자4', dept: '운영팀', phone: '010-0835-9763', email: 'user4@user.com', userState: '2', role: '운영자', createdAt: '2022-02-17'},
      ],
    }
  }
}
</script>

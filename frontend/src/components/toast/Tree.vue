<template>
  <div id="tree" class="tui-tree-wrap"></div>
</template>

<style lang="scss">
@import '~tui-tree/dist/tui-tree.css';
@import '~tui-context-menu/dist/tui-context-menu.css';

.tui-contextmenu-button {
  box-sizing: border-box;
}

.tui-tree-input {
  box-sizing: revert;
  background: white;
}

.tui-tree-drop {
  box-sizing: revert;
}
</style>

<script>
import Tree from 'tui-tree';

export default {
  mounted() {
    var data = [
      {text: 'rootA', children: [
          {text: 'sub-A1'},
          {text: 'sub-A2'},
          {text: 'sub-A3'},
          {text: 'sub-A4'},
          {text: 'sub-A5', state: 'closed', children: [
              {text:'sub-A5A', children:[
                  {text:'sub-A5A1'}
                ]},
              {text:'sub_A5B'}
            ]},
          {text: 'sub-A6'},
          {text: 'sub-A7'},
          {text: 'sub-A8'},
          {text: 'sub-A9', state: 'closed', children: [
              {text:'sub-A9A'},
              {text:'sub-A9B'}
            ]},
          {text: 'sub-A10'},
          {text: 'sub-A11'},
          {text: 'sub-A12'}
        ]},
      {text: 'rootB', state:'closed', children: [
          {text:'sub-B1'},
          {text:'sub-B2'},
          {text:'sub-B3'}
        ]}
    ];

    var tree = new Tree('#tree', {
      data: data,
      nodeDefaultState: 'opened',
      command: {
        read: {},
        create: {},
        remove: {}
      },
    }).enableFeature('Selectable', {
      selectedClassName: 'tui-tree-selected'
    });

    tree.enableFeature('Editable', {
      dataKey: 'text'
    });

    tree.enableFeature('Draggable', {
      helperPos: {x: -50, y: -150},
      isSortable: true,
      useHelper: true,
    });

    tree.enableFeature('ContextMenu', {
      menuData: [
        {title: '추가', command: 'create'},
        {title: '수정', command: 'update'},
        {title: '삭제', command: 'remove'}
      ]
    });


    // tree.on('beforeMove', function(evt) {
    //   onpause(evt);
    //
    //   console.log('dragging node: ' + evt.nodeId);
    //   console.log('new parent node: ' + evt.newParentId);
    //   console.log('original parent node: ' + tree.getParentId(evt.nodeId));
    //
    //   return false; // Cancel "move" event
    //   // return true; // Fire "move" event
    // });
  }
}
</script>

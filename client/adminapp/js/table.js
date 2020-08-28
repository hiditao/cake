layui.use('table', function () {
    var table = layui.table;

    //第一个实例
    table.render({
        elem: '#list'
        , height: 312
        , url: 'http://localhost:8080/' //数据接口  
        , page: true //开启分页
        , cols: [[ //表头
            { field: 'gid', title: 'ID', width: 80, sort: true, fixed: 'left' }
            , { field: 'goodsname', title: '商品名称', width: 200 }
            , { field: 'goodsdesc', title: '描述', width: 300 }
            , { field: 'active', title: '活动', width: 300 }
            , { field: 'oldprice', title: '原价', width: 80 }
            , { field: 'newprice', title: '现价', width: 80, sort: true }
            , { field: 'tid', title: '分类', width: 80}
            , { field: 'operation', title: '操作', width: 150, toolbar: '#toolbarDesc', edit: 'text' }
        ]]
    });

});
;(function(){

    // var arr=[1,2]
    // store.set('user',arr[1])
    // var user=store.get('user')
    // console.log(user)
    
   var storage=window.localStorage

    var $addTask=$('.add-task')
     var localTask=[]
    init();
    
    $addTask.on('submit',function(e){
        var newTask={}
        e.preventDefault()
        
        newTask.content=$(this).find('input[name=tasktext]').val()
        if(!newTask.content) return

        if(addTask(newTask)){
            renderAppend()
        }

    })

    function addTask(newTask){
        //将newTask里面的内容推送到localstorage里面
        localTask.push(newTask)
        //更新localstorage
        store.set('localTask',localTask)
        return true
    }
    
    function init(){     
        localTask=store.get('localTask')  || []
        console.log(localTask)
        if(localTask.length){
            renderAppend()
        }

    }


    function renderAppend(){
        var $tasklist=$('.task-list').html('')
        for(var i=0;i<localTask.length;i++){
       
            var $task=appendHtml(localTask[i])
            $tasklist.append($task)
        }
    }


    function appendHtml(data){
        var html=
        '<div class="task-item">'+
        '<span><input type="checkbox">'+data.content+'</span>'+
        '<span class="task-content"></span>'+
        '<span>删除</span>'+
        '<span>详情</span>'+
        '</div>'
        return $(html)
    }

    
})()


// (function(){
//     var $addTask=$('.add-task')
//     var localTask=[]
//     // localStorage.setItem('newTask',newTask)


//     init()

//     $addTask.on('submit',function(e){
//         var newTask={}
//         e.preventDefault()
        
//         newTask.content=$(this).find('input[name=tasktext]').val()
//         if(!newTask.content) return
//         console.log(newTask.content)
//         addTask(newTask)
//         // if(addTask(newTask)){
//         //     renderAppend()
//         //     }
//     })


//     function init(){
//         var user=localStorage.getItem('localTask')
//        console.log(user)
//     }
    
//     function addTask(newTask){
//         //将newTask里面的内容推送到localstorage里面
//         localTask.push(newTask.content)
//         console.log(localTask)
//         //更新localstorage
//         localStorage.setItem('localTask',localTask)
//     }
// })()

// 请在 chrome 的 snippets 中运行以下代码
{
    let context={}
    window.setContext=(key,value)=>{
        context[key]=value
    }
    window.f1=()=>{
        f2()
    }
    function f2(){
        f3()
    }
    function f3(){
        f4()
    }
    function f4(){
        console.log(context['n'])
    }
}

{
    window.setContext('n',100)
    window.f1()
}
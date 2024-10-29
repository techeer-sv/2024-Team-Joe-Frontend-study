
function callBack () {
    setTimeout(()=>{
        console.log('첫번째 콜백');
        setTimeout(()=>{
            console.log('두번째 콜백');
            setTimeout(()=>{
                console.log('세번째 콜백');
            },1000)
        },2000)
    },3000)
}

callBack();
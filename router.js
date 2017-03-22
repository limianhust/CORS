app.get('/loadMore',function (req, res) {
    console.log(req)
    console.log('recived')
    res.header("Access-Control-Allow-Origin", "*")

    res.send(getContent(Number(req.query.start),Number(req.query.num)))
})

function getContent(start,num) {
    var data = ''
    for(var i =start;i<start+num;i++){
        data =data + '<li>'+'内容'+(i+1)+'</li>'
    }
    return data
}

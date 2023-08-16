$httpClient.get('https://timeline.google.com/', (error,response) => {
    if(error) {
        console.log(error)
    }
    if(response.statusCode === 200) {
        var result = "正常\n可以享受全部 Google 服务"
        var color = "#0F9D58"
        var logo = "location"
    }
    else if(response.statusCode === 400) {
        var result = "受限\nYoutube Premium、时间轴等服务将不可用"
        var color = "#F4B400"
        var logo = "location.viewfinder"
    }
    else {
        var result = "错误\n到 Google 服务器的连接出现问题"
        var color = "#DB4437"
        var logo = "location.slash"
    }
    $done({
        content: result,
        backgroundColor: color,
        icon: logo
    })
})

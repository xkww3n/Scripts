$httpClient.get('https://timeline.google.com/', (error,response) => {
    if(error) {
        console.log(error)
    }
    if(response.statusCode === 400) {
        var result = "受限\nYoutube Premium、时间轴等服务将不可用"
        var color = "#DB4437"
        var logo = "location.slash"
    }
    else {
        var result = "正常\n可以享受全部 Google 服务"
        var color = "#4285F4"
        var logo = "location.fill.viewfinder"
    }
    $done({
        content: result,
        backgroundColor: color,
        icon: logo
    })
})

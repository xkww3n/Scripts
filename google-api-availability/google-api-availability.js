$httpClient.get('https://timeline.google.com/', (error,response) => {
    if(error) {
        console.log(error)
    }
    if(response.statusCode === 400) {
        var result = "不可用"
        var color = "#db4437"
        var logo = "location.slash"
    }
    else {
        var result = "正常"
        var color = "#4285f4"
        var logo = "location.fill.viewfinder"
    }
    $done({
        content: result,
        backgroundColor: color,
        icon: logo
    })
})

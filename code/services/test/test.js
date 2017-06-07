function test(req, resp){
    log("running")
    resp.success('Hello from test service, '+ req.params.name +'!');
}
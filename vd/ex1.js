$(document).ready(function(){
    var item = $('div')

    // $('button').on('click'.function(){
    //     item.toggleClass('active')
        
    // })
    $('button').oClick(function(){
        item.toggleClass('active')
        
    })
    // item.addClass('active')
    // item.removeClass('active')
    // item.prepend('<a href="#">Click me</a>') them vao trong noi dung mk tro den nhung o phia trc
    // item.append('<a href="#">Click me</a>')them vao trong noi dung mk tro den nhung o phia sau
    // item.before( '<a href="#">Click me</a>')them vao trong noi dung mk tro den nhung o phia trc the div
    // item.after('<a href="#">Click me</a>')them vao trong noi dung mk tro den nhung o phia sau the div
    // item.remove() xoa toan boo
    // item.empty() xoa thanh phan con
    // item.css({
    //     color:'blue',
    //     fontSize:50,
    // })
    // item.html('<a href="#">Click me</a>')
    // item.text('Hello')
    // console.log('Width', item.innerWidth())
    // console.log('Width', item.outerWidth()) 
    // console.log('Width', item.outerWidth(true))
    // console.log('This is content', item.text())
    // console.log('This is content', item.html())
    // console.log('This is content', item.val())
});

var name = $(location).attr('pathname').substring(1);
console.log(name);
$('.nav a[href="' + name + '"]').parent().addClass('active');

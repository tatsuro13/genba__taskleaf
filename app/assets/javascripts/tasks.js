document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('td').forEach(function(td){
        td.addEventListener('mousemove', function(e){
            e.currentTarget.style.backgroundColor = "#eff";
        });

        td.addEventListener('mouseout', function(e){
            e.currentTarget.style.backgroundColor = '';
        });
    });

    // document.querySelectorAll('.delete').forEach(function(a){
    //     a.addEventListener('ajax:success', function(){
    //         var td = a.parentNode;
    //         var tr = td.parentNode;
    //         tr.style.display = 'none';
    //     });
    // });
});
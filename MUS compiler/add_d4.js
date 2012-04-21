var prelude = function(expr) {
    // Your code here
    return {tag : 'seq', left : {tag : 'note', pitch : 'd4', dur : 500}, 
            right : expr};
    
};

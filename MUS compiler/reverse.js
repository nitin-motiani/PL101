var reverse = function(expr) {
    // Your code here
    if (expr.tag ==='note')
    {
        return expr;
    }
    else 
    {
        return {tag : 'seq', left : reverse(expr.right), 
                right : reverse(expr.left) };
    }
};

var endTime = function (time, expr) {
    // your code here
    if (expr.tag === 'note')
    {
        return time+expr.dur;
    }
    else
    {
        var intermediateTime = endTime(time, expr.left);
        var finalTime = endTime(intermediateTime, expr.right);
        return finalTime;
    }
};

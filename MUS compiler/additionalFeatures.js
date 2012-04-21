// this is all you
var endTime = function (time, expr) {
    // your code here
    if (expr.tag === 'note')
    {
        return time+expr.dur;
    }
    else if(expr.tag === 'seq')
    {
        var intermediateTime = endTime(time, expr.left);
        var finalTime = endTime(intermediateTime, expr.right);
        return finalTime;
    }
    else 
    {
        var leftTime = endTime(time, expr.left);
        var rightTime = endTime(time, expr.left);
        if(leftTime > rightTime)
        {
            return leftTime;
        }
        return rightTime;
    }
};

var compile = function (musexpr) {
    // your code here
    var stack = [musexpr];
    var time = 0;
    var notes = [];
    while(stack.length !== 0)
    {
        var node = stack.pop();
        if (node.tag === 'note')
        {
            var note = {tag : 'note', pitch : node.pitch, 
                        start : time,  dur : node.dur};
            time = time + node.dur;
            notes.push(note);
        }
        else if(node.tag === 'seq')
        {
            if(node.right !== null)
            {
                stack.push(node.right);
            }
            if(node.left !== null)
            {
                stack.push(node.left);
            }
        }
        else
        {
            var leftNote = {tag : 'note', pitch : node.left.pitch, 
                            start : time, dur : node.left.dur};
            var rightNote = {tag : 'note', pitch : node.right.pitch, 
                             start : time, dur : node.right.dur};
            if(node.left.dur > node.right.dur)
            {
                time = time + node.left.dur;
            }
            else
            {
                time = time + node.right.dur;
            }
            notes.push(leftNote);
            notes.push(rightNote);
        }
    }
    return notes;
};

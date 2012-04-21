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
        else
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
    }
    return notes;
};

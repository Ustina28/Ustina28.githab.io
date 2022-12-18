export default function search(initialState, goalTest, actions, successor, print = true)
{
    const agenda = new Agenda()
    const explored = new Explored()
    const initialNode = new Node(null, initialSatet, null)
    agenda.add(initialNode
    while(agenda.notEmpty())
    {
        const parent = agenda.getNode()
        if(goalTest(parentState))
            return parent.path()
        explored.add(parent.state)
        for(const action of actions(parent.path())
        {
            const newS = succsessor(parent.state, action)
            const newN = new Node(action, newS, parent)
            if(explored.hasState(newS))
            {
                agenda.add(newN)
                if (print)
                {
                    console.log (newS, strPath())
                }
            }
        }
    }
    return null
}
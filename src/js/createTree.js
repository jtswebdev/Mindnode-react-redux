

export default function createTree() {


    let tree = {

        0: {

            id: 0,
            parent: 'none',
            children: [],
            data: {
                name: startNames[ 0 ],
                text: 'default',
                icon: startIcons[ 0 ]
            }

        }

    };


    for ( let i = 1; i < 5; i++ ) {

        let parentId = 0;

        tree[ i ] = {

            id: i,
            parent: parentId,
            children: [],
            data: {
                name: startNames[ i ],
                text: 'Text',
                icon: startIcons[ i ]
            }

        };

        tree[ parentId ].children.push( i )

    }


    return tree


}


// Default Tree - Names/Icons
    const startNames = [ 'Root', 'Schedule', 'Projects', 'Knowledge', 'Notes' ];
    const startIcons = [ 'atom', 'schedule', 'projects', 'knowledge', 'notes' ];

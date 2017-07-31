
# Mindnode - React/Redux
### Mind mapping application, currently in development.

This version provides the basic functionality required to create and navigate the mind map.  It can:
  
  #####I. Display the Map Tree
  
    - Visualized from the current _Focus_ node
    - Displays its _Parent_ and immediate _Children_ 
    - Displays the _Root_ when it is no longer the focus/parent
    
  #####II. Visually Navigate the Tree
  
    - Move _down_ the tree by selecting children
    - Move _up_ the tree by selecting the parent
    - Move to the _top_ of the tree by selecting the root
    
  #####III. View / Edit Tree Nodes
  
    - Name
    - Text
    - Icon
    
  #####IV. Add / Delete Tree Nodes
  
    - Create new node with custom details
    - New nodes are added as a child of the current focus
    - Delete existing nodes ( currently removes descendants as well )

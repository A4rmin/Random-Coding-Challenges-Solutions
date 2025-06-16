class Node:
    def __init__(self, val, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

    def __repr__(self):
        return f"Node({self.val})"

def clone_and_flatten(head: 'Node') -> 'Node':
    if not head:
        print("Input list is empty. Returning None.")
        return None

    dummy = Node(0)
    prev = dummy
    print(f"Created dummy node: {dummy}")

    def dfs(node, prev):  # Depth-first search
        current = node
        last = prev  # Tracks the last node in the flattened list

        while current:
            print(f"\nVisiting original node: {current}")
            new_node = Node(current.val)  # Clone current node
            print(f"Cloned new node: {new_node}")

            last.next = new_node  # Link to previous cloned node
            print(f"Linked {last} -> {new_node}")

            last = new_node  # Move last to the new node

            # Save next before recursing into child
            next_original = current.next
            if next_original:
                print(f"Saved next node: {next_original}")
            else:
                print(f"No next node to save")

            # Recurse on child first (depth-first)
            if current.child:
                print(f"Recursing into child list of {current}")
                child_last = dfs(current.child, last)
                last = child_last  # After child is flattened
                print(f"Returned from child list. Last is now {last}")
            else:
                print(f"No child for node {current}")

            current = next_original
            if current:
                print(f"Moving to next original node: {current}")
            else:
                print(f"End of this level reached.")

        return last  # Return the last processed node

    print("\n--- Starting DFS Flattening ---")
    dfs(head, prev)
    print("--- DFS Completed ---")

    return dummy.next

n1 = Node(1)
n2 = Node(2)
n3 = Node(3)
n7 = Node(7)
n8 = Node(8)

n1.next = n2
n2.next = n3
n3.child = n7
n7.next = n8

flattened = clone_and_flatten(n1)

# Print flattened list to verify
print("\nFlattened and Cloned List:")
curr = flattened
while curr:
    print(curr.val, end=" ")
    if curr.next :
        print("->", end=" ")
    curr = curr.next
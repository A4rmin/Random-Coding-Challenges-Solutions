🧠 Challenge: Clone and Flatten a Multilevel Linked List
🌟 Context (tell this to the candidate)

You're building a document parser. Each document section is represented as a linked list node, but subsections can be nested (a child pointer to another linked list).

Your task: Write a function that:

    Deep clones the entire multilevel linked list (no shared nodes),

    Flattens it into a single-level list (depth-first),

    Preserves the original order of sibling nodes.

🧱 Node Definition (Language-Agnostic)

Each node has:

val: int
next: Node or null
child: Node or null

✅ Example Input

Imagine this structure:

1 - 2 - 3
        |
        7 - 8 - 9
             |
             12 - 13

Output (flattened & cloned):

1 → 2 → 3 → 7 → 8 → 12 → 13 → 9

    All new nodes (no shared pointers).

    Original list untouched.

💬 Interviewer Prompts During the Session

    "How are you handling the recursion vs iteration tradeoff?"

    "Are you preserving order? Why?"

    "How do you ensure no nodes are reused in the clone?"

    "What are the space and time complexities?"

🎯 Why this is a good challenge

    It reveals understanding of:

        Recursive pointer structures

        Deep copy semantics

        Stack use or simulation

    It mimics real-world nested structures (DOMs, file trees)

    Easy to add follow-ups:

        “Now reintroduce a random pointer and handle that too.”

        “Do it in-place without extra memory (if possible).”